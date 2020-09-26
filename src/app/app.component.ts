import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString;
  values = [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'},
    {name: 'test4'},
    {name: 'test6'},
    {name: 'asdfg'},
    {name: 'qwerty'},
    {name: 'yuiop'},
    {name: 'tezxcvst1'},
    {name: 'qazxsw'}
  ]
}
