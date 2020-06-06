  
import { async, ComponentFixture } from '@angular/core/testing';
import { ConfigureFn, configureTests } from 'src/test-config.helper'
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled, Component } from '@angular/core';
import { ProdutoComponent } from './produto.component';


const mockCallback = jest.fn(items => 42 + items);
const mockProduto = [
  { 
    descricao:"Bloco Adesivo Post-It® Rosa - 76 Mm X 76 Mm 1UN",
    preco: 21,
    img:'imagem.png',
    estoque: 30
  },
  { 
    descricao:"Bloco Adesivo Post-It® Rosa - 76 Mm X 76 Mm 1UN",
    preco: 21,
    img:'imagem.png',
    estoque: 33
    }
  ]



describe('<ProdutoComponent /> ', () => {
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
  
  describe('#render', () => {
    it('should create the component ProdutoComponent', async(() => {
      const produto = component;
      expect(produto).toBeTruthy();   
      }));
    it('should generate snapshot for ProdutoComponent', () => {
      expect(fixture).toMatchSnapshot();
    });
  })

  describe('#alteraEstoque', () => {

    it('function was called', () => {
      expect(component.alteraEstoque).toBeCalled
    })

    it('shoud altered stock', () => {
      expect(mockProduto[0].estoque).toBe(30)
      component.alteraEstoque(mockProduto[0])
      expect(mockProduto[0].estoque).toBe(29)
    })
  })

  describe('#function Casa', () => {
    beforeEach( () => {
      component.casaFunction([0, 1], mockCallback);
      })

    it('the mock function is called twice', () => {
      expect(mockCallback.mock.calls.length).toBe(2);
    })

    it('the firt argument of the secont call to the function was 1', () => {
      expect(mockCallback.mock.calls[1][0]).toBe(1)
    })

    it('the first argument of the first call to the function was 0', () => {
      expect(mockCallback.mock.calls[0][0]).toBe(0)
    })

    it('the return value of the first call the the function was 42', () => {
      expect(mockCallback.mock.results[0].value).toBe(42)
    })
  })

  describe('#toggle', () => {
    it('shoud change status', () => {
      expect(component.toggleCompra).toBeTruthy
      component.toggle()
      expect(component.toggleCompra).toBeFalsy
    })
  })

  describe('#soma', () => {
    it('shoud add 1 + 2 ', () => {
      expect(component.Sum(1,2)).toBe(3)
    })
  })

})

    