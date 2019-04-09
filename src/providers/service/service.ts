import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider{

  apiUrl = 'http://localhost:8080/oportunidades';
  
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);  
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade);
  }

  deletar(oportunidade: any) {
    return this.httpClient.delete(this.apiUrl+"/"+oportunidade.id, oportunidade);
  }

  atualizar(oportunidade: any) {
    return this.httpClient.put(this.apiUrl+"/"+oportunidade.id, oportunidade);
  }
}
