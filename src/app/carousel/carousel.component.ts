import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animation, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('ImageChange', [
      transition('* => *', animate('500ms ease'))
    ])
  ]
})
export class CarouselComponent implements OnInit {
  randomImage = 'https://source.unsplash.com/random';
  imageArr: string[] = [];
  currentImage: any
  currentIndex: any
  expand: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.imageArr = [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver_AV1_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662060528101',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754259433',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV1_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662060528139',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754259262',
    ];
    this.currentImage = this.imageArr[0];
    this.currentIndex = this.imageArr.indexOf(this.currentImage);
  }

  handleMouseOver(image: any) {
    this.currentImage = image;
    this.currentIndex = this.imageArr.indexOf(this.currentImage);
  }
  
  scrollUp() {
    var scrollablePortion = document.querySelector('#scrollable-portion');
    scrollablePortion?.scrollBy(0, -55);
    this.currentIndex = this.imageArr.indexOf(this.currentImage);
    if(this.currentIndex > 0) {
      this.currentImage = this.imageArr[this.currentIndex - 1];
      this.currentIndex = this.imageArr.indexOf(this.currentImage);
    }
  }
  
  scrollDown() {
    var scrollablePortion = document.querySelector('#scrollable-portion');
    scrollablePortion?.scrollBy(0, 55);
    this.currentIndex = this.imageArr.indexOf(this.currentImage);
    if(this.currentIndex <= this.imageArr.length - 2) {
      this.currentImage = this.imageArr[this.currentIndex + 1];
      this.currentIndex = this.imageArr.indexOf(this.currentImage);
    }
  }
  
  handleExpand() {
    this.expand = !this.expand
  }

  goLeft() {
    this.currentIndex = this.imageArr.indexOf(this.currentImage);
    if(this.currentIndex > 0) {
      this.currentImage = this.imageArr[this.currentIndex - 1];
      this.currentIndex = this.imageArr.indexOf(this.currentImage);
    }
  }
  goRight() {
    this.currentIndex = this.imageArr.indexOf(this.currentImage);
    if(this.currentIndex <= this.imageArr.length - 2) {
      this.currentImage = this.imageArr[this.currentIndex + 1];
      this.currentIndex = this.imageArr.indexOf(this.currentImage);
    }
  }
}
