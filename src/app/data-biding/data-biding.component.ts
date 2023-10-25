import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})

export class DataBidingComponent implements OnInit {
  
  public nome: string = "Willian";
  public idade: number = 29;

  public checkedDisabled: boolean = true;
  public imgsrc: string = "https://cdn.arquidiocesesorocaba.org.br/wp-content/uploads/2018/08/09181145/Catedral-Metropolitana-Nossa-Senhora-da-Ponte-1024x779.jpg";
  public imgtitle: string = "Property Binding";

  public position: {x: number, y: number} = {x: 0, y: 0}

  constructor() {'//comentario' }
  
  ngOnInit(): void {
      '//comentario'
  }

  
  public AlertaInfo(){
    alert("Deu bom!!!");
  }

  public PegaValor(valor: string){
    alert(valor);
  }

  public Evento(valor: MouseEvent){
    console.log(valor)
  }

  public MouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
