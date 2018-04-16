import { Component } from '@angular/core';
import { DateTime } from 'ionic-angular';

/**
 * Generated class for the CaptaincardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'captaincard',
  templateUrl: 'captaincard.html'
})
export class CaptaincardComponent {

  CAPTAINS = [
    { name: 'Nicki', url: '../../assets/imgs/nlm.jpg', lastCaptain: Date.now() },
    { name: 'Johs', url: '../../assets/imgs/jbe.jpg', lastCaptain: Date.now() },
    { name: 'Ulrikke', url: '../../assets/imgs/ubi.jpg', lastCaptain: Date.now() },
    { name: 'Munter', url: '../../assets/imgs/mun.jpg', lastCaptain: Date.now() }
    //{ name: 'Frost', url: '../../assets/imgs/fro', lastCaptain: Date.now() }
  ];

  currentCaptain;
  title: string;
  url: string;

  constructor() {

    this.title = 'Whos your captain';
    this.url = '../../assets/imgs/logo.png'
  }

  imgClick(): void {

    let newCaptain = this.CAPTAINS[this.getRan(4)];

    while (newCaptain === this.currentCaptain) {
      newCaptain = this.CAPTAINS[this.getRan(4)];
    }

    this.currentCaptain = newCaptain;
    this.title = this.currentCaptain.name;
    this.url = this.currentCaptain.url;

    console.log(this.title);
    console.log(this, this.url);
  }

  getRan(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
