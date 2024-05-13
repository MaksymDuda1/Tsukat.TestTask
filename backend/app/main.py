from typing import List
from fastapi import FastAPI, HTTPException, Query
from pathlib import Path
from app.db.dummy_data import posts
from app.models.post import Post
from fastapi.staticfiles import StaticFiles

app = FastAPI()
images_dir = Path(__file__).parent / "images"
app.mount("/images", StaticFiles(directory=str(images_dir)), name="images")


@app.get('/api/posts/', response_model=List[Post])
async def fetch_posts(tags: List[str] = Query(None)):
    if tags:
        filtered_posts = [post for post in posts if set(tag for tag in post.tags) & set(t for t in tags)]
        return filtered_posts
    else:
        return posts


@app.get('/api/posts/{post_id}', response_model=Post)
async def fetch_post(post_id: str):
    for post in posts:
        if str(post.post_id) == post_id:
            return post

    raise HTTPException(
        status_code=404,
        detail=f"post with id: {post_id} does not exist"
    )
