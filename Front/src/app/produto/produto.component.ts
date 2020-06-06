import { Component, OnInit } from '@angular/core';
import { Produto } from '../service/produto';
import { Router } from '@angular/router';
// import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
   Produtos:Produto[];
   produtos;
   toggleCompra = true;
   
  constructor(public router :Router) { 
    
  }

  ngOnInit(): void {
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
    
  }
   
  alteraEstoque(produto){
    console.log(produto.estoque)
       produto.estoque --;
       console.log(produto.estoque)
       return;
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