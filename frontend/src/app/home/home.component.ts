import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { pseudoRandomBytes } from 'crypto';
import { Tag } from '../../enums/tag';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostDataService } from '../../services/postData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent,ToolbarComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit
{
  constructor(private postService: PostService,
    private postDataService: PostDataService
  ){
    this.postSubscription = this.postDataService.searchData$
    .subscribe(data => this.posts = data,
      errorReponse =>  this.message = errorReponse.error.detail
    )
  }

  posts: Post[] = [];
  message = '';
  private postSubscription: Subscription;

  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe(data => this.posts = data)
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
