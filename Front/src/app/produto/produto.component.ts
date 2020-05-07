import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  public produtos =[
    {
      descricao:"Bloco Adesivo Post-It® Rosa - 76 Mm X 76 Mm 1UN",
      preco:'R$10,00',
      img:'../../assets/produtos/post-it.jpg'
    },
    {
      descricao:"Caderno Tilibra Capa Dura 80 Folhas Neon Laranja 1UN",
      preco:'R$15,00',
      img:"../../assets/produtos/caderno.jpg"
    },
    {
      descricao:"Canetinha Hidrográfica 24 Cores Faber Castell 1UN ",
      preco:'R$13,00',
      img:"../../assets/produtos/canetinha.jpg"
    },
    {
      descricao:"Papel Sulfite Chamequinho A-4 100 Folhas Cor Azul 1UN",
      preco:'R$16,00',
      img:"../../assets/produtos/papel.jpg"
    },
   
    {
      descricao:"Caneta retrátil 1.0 BT C/2 TRION GRIP MOLIN 1200 1UN",
      preco:'R$16,00',
      img:"../../assets/produtos/caneta.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
