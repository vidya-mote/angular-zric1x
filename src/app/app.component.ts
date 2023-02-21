import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  language: string = 'Marathi';
  listOfLanguages: string[] = ['english', 'Marathi', 'hindi'];

  addLanguage() {
    this.listOfLanguages.push(this.language);
    console.log('this.listOfLanguages', this.listOfLanguages);
  }
  deleteFirst() {
    this.listOfLanguages.splice(0, 1);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
