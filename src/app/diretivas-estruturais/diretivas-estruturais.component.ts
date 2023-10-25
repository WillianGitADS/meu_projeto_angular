import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})

export class DiretivasEstruturaisComponent implements OnInit {

  public condicao: boolean = true;
  public condicaoClick: boolean = true;
  
  public list: Array<{ nome: string, idade: number }>= [
    { nome: "Willian Soares", idade: 40 },
    { nome: "José Pedro", idade: 4},
    { nome: "Pietra Borges", idade: 2},
    { nome: "Graziane Borges", idade: 41}
  ];
  
  public nome: string = 'willian';
  constructor() { '/'} 

  ngOnInit(): void {
      setInterval( () => {
        if(this.condicao){
          this.condicao = false;
        }else{
          this.condicao = true;
        }}, 2000)
  }
  public onClick(){
      if(this.condicaoClick){
        this.condicaoClick = false;
      }else{
        this.condicaoClick = true;
      }
  }
  public onClickAddList(){
    this.list.push({ nome: "Sandra", idade: 61})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }
}
