from typing import Optional
from pydantic import BaseModel, Field

class BaseBrand(BaseModel):
    name: str = Field(description="The name of the brand")
    owner: str = Field(description="The owner of the brand")
    description: Optional[str] = Field(default="", description="A brief description of the brand")
    state: str = Field(description="The current state of the brand")


class BrandCreate(BaseBrand):
    pass


class BrandResponse(BaseBrand):
    id: str = Field(description="The unique identifier of the brand")


class BrandUpdate(BaseBrand):
    name: Optional[str] = Field(None, description="The name of the brand")
    owner: Optional[str] = Field(None, description="The owner of the brand")
    description: Optional[str] = Field(None, description="A brief description of the brand")
    state: Optional[str] = Field(None, description="The current state of the brand")
    
    