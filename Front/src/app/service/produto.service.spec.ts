import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProdutoService, produtoUrl } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let backend: HttpTestingController;

  const expectedData = { id:1, descricao: "Produto"  };

  const expectedDataAll = [
    { id:1,descricao:'Produto1'  },
    {id:2, descricao:'produto2' },
    {id:3, descricao:'Produto3' },
    {id:4, descricao: 'Produto4'},
    {id:5, descricao:'Produto5' }
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProdutoService]
    });

    backend = TestBed.get(HttpTestingController);
    service = TestBed.get(ProdutoService);

    jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });


  afterEach(inject([HttpTestingController], (_backend: HttpTestingController) => {
    _backend.verify();
  }));

  it('should call the GET produtos api and return all results', () => {
    let actualDataAll = {};

    service.getProdutos().subscribe(data => (actualDataAll = data));

    backend
      .expectOne((req: HttpRequest<any>) => {
        return req.url === `${produtoUrl}` && req.method === 'GET';
      }, `GET all produto data from ${produtoUrl}`)
      .flush(expectedDataAll);

    expect(actualDataAll).toEqual(expectedDataAll);
  });

  it('should call the GET produto api with id and return the result', () => {
    let actualData = {};

    service.getProdutos().subscribe(data => (actualData = data));

    backend
      .expectOne((req: HttpRequest<any>) => {
        return req.url === `${produtoUrl}` && req.method === 'GET' && req.params.get('id') === '1';
      }, `GET produto data from ${produtoUrl}?id=1`)
      .flush(expectedData);

    expect(actualData).toEqual(expectedData);
  });

  test.each([
    [1, {descricao:'Produto1', preco: 'R$10,00' }],
    [2, { descricao:'produto2', preco: 'R$10,00'  }],
    [3, { descricao:'Produto3', preco: 'R$10,00' }],
    [4, { descricao:'Produto4', preco: 'R$10,00'}],
    [5,{ descricao:'Produto3', preco: 'R$10,00'}]
  ])('should call the GET produto api and return the result', (id: number, testData: any) => {
    let actualData = {};

    service.getProdutos().subscribe(data => (actualData = data));

    backend
      .expectOne((req: HttpRequest<any>) => {
        return req.url === `${produtoUrl}` && req.method === 'GET';
      }, `GET produto data from ${produtoUrl}?id=${id}`)
      .flush(testData);

    expect(actualData).toEqual(testData);
  });

  it('should send an expected GET request and throw error to console when an error occurs', () => {
    service.getProdutos().subscribe();

    const getprodutoRequest = backend.expectOne((req: HttpRequest<any>) => {
      return req.url === `${produtoUrl}` && req.method === 'GET' && req.params.get('id') === '1';
    }, `GET produto data from ${produtoUrl}?id=1`);

    // Stimulate an error happens from the backend
    getprodutoRequest.error(new ErrorEvent('ERROR_GET_produto_DATA'));

    expect(console.error).toHaveBeenCalled();
  });

  it('should return an observable of undefined and print error to console', () => {
    const result = service.handleError(
      new HttpErrorResponse({ error: 'Error occurs' }),
      'test method'
    );

    expect(console.error).toHaveBeenCalled();
    result.subscribe(value => expect(value).toBeUndefined());
  });
});

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

