from sqlalchemy import Column, String
from typing import Optional
from db.database import Base

class Brand(Base):
    __tablename__ = "brands"

    id: int = Column(String, primary_key=True, index=True)
    name: str = Column(String, index=True)
    owner: str = Column(String, index=True)
    description: Optional[str] = Column(String, default=None)
    state: str = Column(String, index=True)
    
    class Config:
        orm_mode = True

    