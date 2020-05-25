import { async, ComponentFixture } from '@angular/core/testing';
import { ConfigureFn, configureTests } from 'src/test-config.helper'
import {Produto} from '../service/produto';
import { ProdutoComponent } from './produto.component';
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
 //import * as alteraEstoque from './produto.component';

const mockCallback = jest.fn(items => 42 + items);

describe('<ProdutoComponent/>', () =>{
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

  describe('#alteraEstoque', () =>{
    it('function was called ', () =>{
      expect(component.alteraEstoque).toBeCalled
    })
  })

  describe('#forEach', ()=>{
    beforeEach( () =>{
      component.forEach([0,1],mockCallback);
    })

    it('the mock function is called twice', () =>{
      expect(mockCallback.mock.calls.length).toBe(2);
    })

    it('the first argument of the secont call to the function was 1',() => {
      expect(mockCallback.mock.calls[1][0]).toBe(1);
    })

    it('the first argument of the first call to the function was 1', () => {
      expect(mockCallback.mock.calls[0][0]).toBe(0);
    })

    it('the return value of the first call to the function was 42', () =>{
      expect(mockCallback.mock.results[0].value).toBe(42);
    })
  })
  
})


  
 

   