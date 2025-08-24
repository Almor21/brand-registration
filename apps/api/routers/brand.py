from fastapi import APIRouter, Depends, HTTPException
import uuid
from typing import List

from db.database import get_db
from schemas.brand import BrandResponse, BrandCreate, BrandUpdate
from sqlalchemy.orm import Session
from models.brand import Brand
from core.models import Response

router = APIRouter(
    prefix="/brands",
    tags=["brands"]
)

@router.post("/", response_model=Response[BrandResponse])
def create_brand(request: BrandCreate, db: Session = Depends(get_db)):
    brand_id = str(uuid.uuid4())
    db_brand = Brand(
        id=brand_id,
        name=request.name,
        description=request.description,
        owner=request.owner,
        state=request.state
    )
    db.add(db_brand)
    db.commit()
    db.refresh(db_brand)

    return {"message": "Success", "data": db_brand}

@router.get("/", response_model=Response[List[BrandResponse]])
def get_brands(db: Session = Depends(get_db)):
    brands = db.query(Brand).all()
    return {"message": "Success", "data": brands}

@router.get("/{brand_id}", response_model=Response[BrandResponse])
def get_brand(brand_id: str, db: Session = Depends(get_db)):
    brand = db.query(Brand).filter(Brand.id == brand_id).first()
    
    if not brand:
        raise HTTPException(status_code=404, detail="Brand not found")

    return {"message": "Success", "data": brand}

@router.put("/{brand_id}", response_model=Response[BrandResponse])
async def update_brand(
    brand_id: str,
    request: BrandUpdate,
    db: Session = Depends(get_db)
):
    db_brand = db.query(Brand).filter(Brand.id == brand_id).first()
    if not db_brand:
        raise HTTPException(status_code=404, detail="Brand not found")

    db_brand.name = request.name or db_brand.name
    db_brand.description = request.description or db_brand.description
    db_brand.owner = request.owner or db_brand.owner
    db_brand.state = request.state or db_brand.state

    db.commit()
    db.refresh(db_brand)

    return {"message": "Brand updated", "data": db_brand}

@router.delete("/{brand_id}", response_model=Response)
def delete_brand(brand_id: str, db: Session = Depends(get_db)):
    brand = db.query(Brand).filter(Brand.id == brand_id).first()

    if not brand:
        raise HTTPException(status_code=404, detail="Brand not found")

    db.delete(brand)
    db.commit()

    return {"message": "Brand deleted", "data": brand.id}
