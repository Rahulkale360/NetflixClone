import { Component, OnInit } from '@angular/core';
import { Constants } from './helpers/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'netflixclone';
  URLs;

  ngOnInit(): void {
    this.URLs = Constants;
    }

   
}
