from typing import Generic, TypeVar, Optional
from pydantic import Field
from pydantic.generics import GenericModel

T = TypeVar("T")

class Response(GenericModel, Generic[T]):
    message: str = Field(description="A message describing the response")
    data: Optional[T] = Field(default=None, description="The data returned in the response")