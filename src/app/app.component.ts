import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/services/newsapi.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(
    private newsapiService: NewsapiService
  ) {}

  artigos: any[] = [];

  ngOnInit(): void {

    this.newsapiService.getArtigo().subscribe((data: any) => {this.artigos = data.articles; console.log(this.artigos); });
    
  }

}
