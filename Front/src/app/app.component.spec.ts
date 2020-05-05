import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ɵivyEnabled as ivyEnabled } from '@angular/core';


describe('Teste para UI', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, NoopAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
  }).compileComponents();
  }));
  
  beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
     it('Deve renderizar mensagem no h1', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toEqual('TU Paper');
  }));
  
  it('Deve tirar o snapshot', () => {
    expect(fixture).toMatchSnapshot();
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
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'TUPaper'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('TUPaper');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('TUPaper app is running!');
//   });
// });

//--------------------------------------------------------------------------

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { SimpleWithStylesComponent } from './simple-with-styles.component';
// import { ChildComponent } from '../medium/child.component';

// describe('SimpleWithStylesComponent', () => {
//   let component: SimpleWithStylesComponent;
//   let fixture: ComponentFixture<SimpleWithStylesComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SimpleWithStylesComponent, ChildComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SimpleWithStylesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should generate snapshot without nghost/ngcontent', () => {
//     expect(fixture).toMatchSnapshot();
//   });
// });