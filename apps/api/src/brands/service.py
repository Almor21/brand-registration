import uuid
from sqlalchemy.orm import Session
from src.models.brand import Brand
from fastapi import HTTPException

def create_brand(db: Session, brand: Brand):
    brand_id = str(uuid.uuid4())
    db_brand = Brand(
        id=brand_id,
        name=brand.name,
        description=brand.description,
        owner=brand.owner,
        state='active'
    )
    db.add(db_brand)
    db.commit()
    db.refresh(db_brand)
    
    return db_brand

def get_brand(db: Session, brand_id: str):
    return db.query(Brand).filter(Brand.id == brand_id).first()

def get_brands(db: Session):
    return db.query(Brand).all()

def update_brand(db: Session, brand_id: str, updates: Brand):
    db_brand = get_brand(db, brand_id)
    if not db_brand:
        raise HTTPException(status_code=404, detail="Brand not found")

    db_brand.name = updates.name or db_brand.name
    db_brand.description = updates.description or db_brand.description
    db_brand.owner = updates.owner or db_brand.owner
    db_brand.state = updates.state or db_brand.state

    db.commit()
    db.refresh(db_brand)
    
    return db_brand

def delete_brand(db: Session, brand_id: str):
    brand = get_brand(db, brand_id)

    if not brand:
        raise HTTPException(status_code=404, detail="Brand not found")

    db.delete(brand)
    db.commit()

    return brand.id