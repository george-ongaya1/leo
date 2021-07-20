import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: './like.component.html',

})
export class LikeComponent {
  numberOflikes: number = 0;

  likeButtonclick() {
    this.numberOflikes++;
  }

  dislikeButtonclick() {
    this.numberOflikes--;
  }
}