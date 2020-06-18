import { async, ComponentFixture } from '@angular/core/testing';
import { ConfigureFn, configureTests } from 'src/test-config.helper'
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled, Component } from '@angular/core';
import { ProdutoComponent } from './produto.component';






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
    
    
}) 