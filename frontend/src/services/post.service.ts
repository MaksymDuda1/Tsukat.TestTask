import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post";


@Injectable({ providedIn: "root" })
export class PostService {
    constructor(private client: HttpClient) {

    }

    private path = "/api/posts/"

    detail(id: string): Observable<Post> {
        return this.client.get<Post>(this.path + id);
    }

    getPosts(tags?: string[]): Observable<Post[]> {
        let params = new HttpParams()

        if (tags != null) {
            tags.forEach(tag => {
                params = params.append("tags", tag);
            });
        }
        
        return this.client.get<Post[]>(this.path, { params });
    }
}