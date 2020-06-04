import { async, ComponentFixture } from '@angular/core/testing';
import { ConfigureFn, configureTests } from 'src/test-config.helper'
import {Produto} from '../service/produto';
import { ProdutoComponent } from './produto.component';
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled } from '@angular/core';


//função alteraEstoque mockada
const mockedAlteraEstoque = jest.fn();

const Produtos: Produto[] = [
  {
    descricao:"Bloco Adesivo",
    preco:22,
    img:'../../assets/produtos/post-it.jpg',
    estoque: 40
      
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

  // it('Ivy should be enabled', () => {
  //        expect(ivyEnabled).toBeTruthy();   });

// espera-se que ele renderize o componente do produto
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
