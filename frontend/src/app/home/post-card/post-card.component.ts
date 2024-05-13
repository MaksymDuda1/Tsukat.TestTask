import { Component, Input, Sanitizer } from '@angular/core';
import { Post } from '../../../models/post';
import { MatCardModule } from '@angular/material/card'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  constructor(private sanitizer: DomSanitizer) { }


  @Input() post!: Post

  sanitizeImg(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(img);
  }
}
