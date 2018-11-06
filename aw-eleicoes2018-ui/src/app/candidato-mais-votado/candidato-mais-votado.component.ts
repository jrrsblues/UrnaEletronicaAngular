import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../candidatos/candidatos.service';

@Component({
  selector: 'app-candidato-mais-votado',
  templateUrl: './candidato-mais-votado.component.html',
  styleUrls: ['./candidato-mais-votado.component.css']
})
export class CandidatoMaisVotadoComponent implements OnInit {

  maisvotado: any;

  constructor(private candidatoService: CandidatosService) { }


  ngOnInit() {
    this.maisvotado = {};
  }

  candidatoMaisVotado() {
     this.candidatoService.candidatomaisvotado().subscribe(response => this.maisvotado = response);
  }

}
