from typing import List
from app.models.post import Post
from app.enums.tag import Tag


posts: List[Post] = [
    Post(
        post_id="53da2517-be04-49a0-a27d-6b5e4d26ecb6",
        title="Introduction to FastAPI",
        summary="Learn how to build APIs with FastAPI",
        content="FastAPI is a modern, fast (high-performance), web framework for building APIs with Python...",
        image_path="asdasd.jpg",
        tags=[Tag.internet_technologies, Tag.politics],
    ),
    Post(
        post_id="bfac6384-f190-4488-92cc-7ca83a48e118",
        title="Explore different ways to deploy FastAPI apps",
        summary="There are several options for deploying FastAPI applications, such as...",
        content="Web development is constantly evolving, with new frameworks and technologies emerging...",
        image_path="asdasd.jpg",
        tags=[Tag.internet_technologies],
    ),
    Post(
        post_id="bfac6384-f190-4488-92cc-7ca83a48e112",
        title="Insights into the latest trends and technologies",
        summary="Web development is constantly evolving, with new frameworks and technologies emerging...",
        content="The Future of Web Development",
        image_path="asdasd.jpg",
        tags=[Tag.internet_technologies],
    )
]
