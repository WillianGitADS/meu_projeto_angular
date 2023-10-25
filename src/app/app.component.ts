import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
 
  public title:  string = 'projTeste';
  public addValue: number = 10;

  constructor() { /*comentario*/ }

  ngOnInit(): void {/*comentario*/  }

public add(){
  this.addValue += 1;
}

}