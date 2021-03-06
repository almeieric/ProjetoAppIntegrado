import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/contato';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contato: Contato;
  key: string;

  constructor(private contatoService: ContatoService, private contaDataService: ContatoDataService) { }

  ngOnInit() {
    this.contato = new Contato();
    this.contaDataService.currentContato.subscribe(data => {
      if (data.contato && data.key) {
        this.contato = new Contato();
        this.contato.nome = data.contato.nome;
        this.contato.telefone = data.contato.telefone;
        this.key = data.key;
      }
    })

  }
  onSubmit() {
console.log(this.contato.telefone);
console.log(this.contato.nome);
    if( this.contato.nome == '' || this.contato.telefone == '')
    {
       alert("O preenchimento dos campos são obrigatórios!!!");
    }else{
    if (this.key) {
      this.contatoService.update(this.contato, this.key);
      
    } else {
      this.contatoService.insert(this.contato);
    }
    this.key = '';
    this.contato = new Contato();
  }
  }

}
