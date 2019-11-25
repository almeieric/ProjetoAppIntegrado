import { Component, OnInit } from '@angular/core';
import { Contato } from './../shared/contato';
import { ContatoService } from '../shared/contato.service'
import { Observable } from 'rxjs'
import { ContatoDataService } from '../shared/contato-data.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchText: any;
  show: boolean = false;
  contato: Contato;
  contatos: Observable<any>;
  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) {

  }

  ngOnInit() {
    this.contatos = this.contatoService.getall();
  }
  delete(key: string) {
this.contatoService.delete(key);
   }

  edit(contato: Contato, key: string) {
    this.contatoDataService.changeContato(contato, key);
    this.contato = new Contato();

  }
  
}
