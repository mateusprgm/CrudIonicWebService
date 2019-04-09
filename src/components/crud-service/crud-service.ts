import { Component } from '@angular/core';
import { ServiceProvider } from '../../providers/service/service';


/**
 * Generated class for the CrudServiceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  providers: [ServiceProvider],
  selector: 'crud-service',
  templateUrl: 'crud-service.html'
})
export class CrudServiceComponent {

  oportunidades = [];
  oportunidadeAtualizar = {};
  oportunidadeCadastrar = {};

  constructor(private service: ServiceProvider) {
    this.consultar();
  }

  consultar() {
    this.service.listar()
      .subscribe(res=>{
        this.oportunidades = <any> res;console.log(this.oportunidades);
        
      });
  }

  deletar(oportunidade) {
    this.service.deletar(oportunidade)
      .subscribe(()=>{
        console.log(oportunidade, "foi excluido");
        this.consultar();
      })
  }

  cadastrar(oportunidade) {
    
    this.service.adicionar(oportunidade)
      .subscribe(res=>{
        console.log(oportunidade, "foi cadastrado");
        this.limpar();
        this.consultar();
      })
      
  }

  atualizar(oportunidade) {
      this.service.atualizar(oportunidade)
        .subscribe(()=>{
          this.limpar();
          console.log(oportunidade, "foi atualizado");
          this.consultar();
        });
  }

  preparar(oportunidade) {
    this.limpar();
    this.oportunidadeAtualizar = oportunidade;
  }

  limpar() {
    this.oportunidadeAtualizar 
      = {
          nomeProspecto:"",
          valor:"",
          descricao:""
        };
    this.oportunidadeCadastrar 
    = {
      nomeProspecto:"",
      valor:"",
      descricao:""
    };
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.consultar();   
      refresher.complete();
    }, 2000);
  }

  
}
