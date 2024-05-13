import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {
  constructor(private postService: PostService,
    private router: ActivatedRoute) {
    this.router.paramMap.subscribe((params) => {
      let id = params.get('id');

      if (id != null) {
        this.postService.detail(id).subscribe(data => {
          this.post = data;
          this.marked = {
            title: `# **${this.post.title}**`,
            content: `# *${this.post.content}*`,
            tags: `${this.post.tags.join(', ')}`,
            image: `![Post image](/images/${this.post.image_path})`
          }
        },
          errorResponse => {
            this.message = errorResponse.error.detail;
          })
      }
    })
  }

  post = new Post();
  message = '';

  marked: { title: string; content: string, tags: string, image: string } = {
    title: '',
    content: '',
    tags: '',
    image: ''
  };
}
