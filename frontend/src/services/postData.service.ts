import { Injectable } from "@angular/core";
import { Post } from "../models/post";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:"root"})
export class PostDataService{
    private searchDataSubject = new BehaviorSubject<Post[]>([]);
  searchData$ = this.searchDataSubject.asObservable();

  updateSearchData(data: Post[]) {
    this.searchDataSubject.next(data);
  }
}