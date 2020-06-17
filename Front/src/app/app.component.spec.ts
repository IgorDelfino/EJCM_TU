import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled } from '@angular/core';


describe('Teste para UI', () => {
  let component: AppComponent;
  let equipamento: ComponentFixture<AppComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
  }).compileComponents();
  }));
  
  // beforeEach(() => {
  //       equipamento = TestBed.createComponent(AppComponent);
  //       component = equipamento.componentInstance;
  //       equipamento.detectChanges();
  //     });
    
  //    it('Deve renderizar mensagem no h1', async(() => {
  //     const equipamento = TestBed.createComponent(AppComponent);
  //     const compiled = equipamento.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toEqual('TU Paper');
  // }));
  
  it('Deve tirar o snapshot', () => {
    expect(equipamento).toMatchSnapshot();
});
})
  
  

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const equipamento = TestBed.createComponent(AppComponent);
//     const app = equipamento.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'TUPaper'`, () => {
//     const equipamento = TestBed.createComponent(AppComponent);
//     const app = equipamento.componentInstance;
//     expect(app.title).toEqual('TUPaper');
//   });

//   it('should render title', () => {
//     const equipamento = TestBed.createComponent(AppComponent);
//     equipamento.detectChanges();
//     const compiled = equipamento.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('TUPaper app is running!');
//   });
// });

//--------------------------------------------------------------------------

// import { async, Componentequipamento, TestBed } from '@angular/core/testing';

// import { SimpleWithStylesComponent } from './simple-with-styles.component';
// import { ChildComponent } from '../medium/child.component';

// describe('SimpleWithStylesComponent', () => {
//   let component: SimpleWithStylesComponent;
//   let equipamento: Componentequipamento<SimpleWithStylesComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SimpleWithStylesComponent, ChildComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     equipamento = TestBed.createComponent(SimpleWithStylesComponent);
//     component = equipamento.componentInstance;
//     equipamento.detectChanges();
//   });

//   it('should generate snapshot without nghost/ngcontent', () => {
//     expect(equipamento).toMatchSnapshot();
//   });
// });