import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

   produtos;
   toggleCompra = true
   a=1;
   b:number=2;
  constructor(public router :Router) { 

     
    this.produtos =[
      {
        descricao:"Bloco Adesivo Post-It® Rosa - 76 Mm X 76 Mm 1UN",
        preco:21,
        img:'../../assets/produtos/post-it.jpg',
        estoque: 30
        
      },
      {
        descricao:"Caderno Tilibra Capa Dura 80 Folhas Neon Laranja 1UN",
        preco:19,
        img:"../../assets/produtos/caderno.jpg",
        estoque: 20
      },
      {
        descricao:" Estojo de Canetinha Hidrográfica 24 Cores Faber Castell 1UN ",
        preco:13,
        img:"../../assets/produtos/canetinha.jpg",
        estoque: 30
      },
      {
        descricao:"Papel Sulfite Chamequinho A-4 100 Folhas Cor Azul 1UN",
        preco:25,
        img:"../../assets/produtos/papel.jpg",
        estoque: 20
      },
     
      {
        descricao:"Caneta retrátil 1.0 BT C/2 TRION GRIP MOLIN 1200 1UN",
        preco:20,
        img:"../../assets/produtos/caneta.jpg",
        estoque: 30
      }
    ]
    // module.exports=this.alteraEstoque(this.produtos);
    // module.exports=this.Sum(this.a,this.b);
  }

  ngOnInit(): void {
    
  }
   
   alteraEstoque(produto){
       produto.estoque --
    }

    casaFunction (items, callback) {
      for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }
    
    Sum (a, b){
      return a + b;
    }

    toggle () {
      this.toggleCompra = !this.toggleCompra;
    }
   
  vaiParaLogin(){
    this.router.navigate(['/login'])
  }
}



// quando fazemos uma função no component.ts, precisamos mudar no html e no produto.ts e também no component.spec.ts