from uuid import UUID
from typing import List
from pydantic import BaseModel
from app.enums.tag import Tag


class Post(BaseModel):
    post_id: UUID
    title: str
    summary: str
    content: str
    image_path: str
    tags: List[Tag]
