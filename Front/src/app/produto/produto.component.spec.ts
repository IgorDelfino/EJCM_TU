import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import {ConfigureFn, configureTests} from '@lib/testing';
import {Produto} from '../service/produto';
import {ProdutoService} from '../service/produto.service';
import {Subject} from 'rxjs';
import { ProdutoComponent } from './produto.component';




describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   
  // afterEach(() => {
  //   component=null;
  // });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

   
    
  
})