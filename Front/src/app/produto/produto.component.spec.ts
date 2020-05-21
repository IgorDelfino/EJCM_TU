import { async, ComponentFixture } from '@angular/core/testing';
import { ConfigureFn, configureTests } from 'src/test-config.helper'
import {Produto} from '../service/produto';
import { ProdutoComponent } from './produto.component';
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled } from '@angular/core';
 //import * as alteraEstoque from './produto.component';



//função alteraEstoque mockada
 produto:[] ;
 

//  const somaItemsEstoque = require('./produto.component')
  // const somaItemsEstoque =jest.fn()
  
//const alteraEstoque = require('./produto.component.ts')
// jest.mock('./produto.component',() => {
//   const originalModule = jest.requireActual(somaItemsEstoque());
// })

const Produtos: Produto[] = [
  {
    descricao:"Bloco Adesivo",
    preco:22,
    img:'../../assets/produtos/post-it.jpg',
    estoque: 25
      
  },
  {
    descricao:"Fichário",
    preco:23,
    img:'../../assets/produtos/post-it.jpg',
    estoque: 25
  }

];

describe('mock simples', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;
  
  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [ProdutoComponent],
        schemas: [NO_ERRORS_SCHEMA]
      });
    };

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(ProdutoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

    it('alteraEstoque', (()=> {
      const alteraEstoque
       = jest.fn();
      const  Produto = 
        {
          descricao:"Bloco Adesivo",
          preco:22,
          img:'../../assets/produtos/post-it.jpg',
          estoque: 25
            
        };
        console.log(Produto);
        // const output=alteraEstoque(Produto);
        // const expected =Produto.estoque ;
        expect(Produto.estoque).toBe(25);   
    }));
    

    it("Sum", (()=>{
      const Sum=jest.fn();
      expect(Sum(3,6)).toBe(9);
    }))
  // it('Ivy should be enabled', () => {
  //        expect(ivyEnabled).toBeTruthy();   });
    
//     it('aaaa', async(()=> {
//       alteraEstoque=jest.fn().mockImplementationOnce(async () =>
//       await "funciona"
//     );
//       const estoque = new alteraEstoque();
//       const res =  alteraEstoque();
//       expect(res).toEqual("funciona")
//     }))
// // espera-se que ele renderize o componente do produto
  it('should create the component produto', async(() => {
         const produto = component;
        expect(produto).toBeTruthy();   
  }));
})

    
    // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ProdutoComponent ]
  //   })
  //   .compileComponents();
  // }));

// beforeEach(() => {
//     fixture = TestBed.createComponent(ProdutoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
   
  // afterEach(() => {
  //   component=null;
  // });
  
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
