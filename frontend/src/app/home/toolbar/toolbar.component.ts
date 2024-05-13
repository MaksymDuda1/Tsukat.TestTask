import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { Tag } from '../../../enums/tag';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { PostDataService } from '../../../services/postData.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(private postService: PostService,
    private postDataService: PostDataService
  ) { }


  posts: Post[] = []
  tags = Object.values(Tag);
  tagsValues = this.tags.filter(item => typeof item == 'string')
  selectedTags: string[] = [];
  message = '';

  onCheckboxChange(tagValue: string, isChecked: boolean) {
    if (isChecked)
      this.selectedTags.push(tagValue);
    else
      this.selectedTags = this.selectedTags.filter(tag => tag !== tagValue);

    this.postService.getPosts(this.selectedTags).subscribe(data =>
      this.postDataService.updateSearchData(data),
      errorResponse => this.message = errorResponse.error.detail)
  }
}
