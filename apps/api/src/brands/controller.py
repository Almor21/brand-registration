from fastapi import APIRouter, Depends, HTTPException
from typing import List

from src.db.database import get_db
from src.schemas.brand import BrandResponse, BrandCreate, BrandUpdate
from sqlalchemy.orm import Session
from src.models.brand import Brand
from src.core.models import Response
from src.brands import service

router = APIRouter(
    prefix="/brands",
    tags=["brands"]
)

@router.post("/", response_model=Response[BrandResponse])
def create_brand(request: BrandCreate, db: Session = Depends(get_db)):
    db_brand = service.create_brand(db, request)

    return {"message": "Success", "data": db_brand}

@router.get("/", response_model=Response[List[BrandResponse]])
def get_brands(db: Session = Depends(get_db)):
    brands = service.get_brands(db)
    return {"message": "Success", "data": brands}

@router.get("/{brand_id}", response_model=Response[BrandResponse])
def get_brand(brand_id: str, db: Session = Depends(get_db)):
    brand = service.get_brand(db, brand_id)
    
    if not brand:
        raise HTTPException(status_code=404, detail="Brand not found")

    return {"message": "Success", "data": brand}

@router.put("/{brand_id}", response_model=Response[BrandResponse])
async def update_brand(
    brand_id: str,
    request: BrandUpdate,
    db: Session = Depends(get_db)
):
    db_brand = service.update_brand(db, brand_id, request)

    return {"message": "Brand updated", "data": db_brand}

@router.delete("/{brand_id}", response_model=Response)
def delete_brand(brand_id: str, db: Session = Depends(get_db)):
    brand_id = service.delete_brand(db, brand_id)

    return {"message": "Brand deleted", "data": brand_id}
