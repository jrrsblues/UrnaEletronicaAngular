import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CandidatosService } from '../candidatos/candidatos.service';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-candidato-listagem',
  templateUrl: './candidato-listagem.component.html',
  styleUrls: ['./candidato-listagem.component.css']
})

export class CandidatoListagemComponent implements OnInit {

  candidatos: Array<any>;
  candidato: any;
  mensagem: any;
  voto: any;
  @Output() enviaMensagem = new EventEmitter();

  constructor(private candidatoService: CandidatosService, private messageService: MessageService) { }

  ngOnInit() {
    this.listar();
    this.novaVotacao();
    this.mensagem = {};
  }

  novaVotacao() {
    this.candidato = {};
    this.voto = {};
  }

  listar() {
    this.candidatoService.listar().subscribe(response => this.candidatos = response);
  }

  receberMensagem() {
     this.candidatoService.mensagemEnviarReceber().subscribe(response => this.mensagem = response);
  }

  votar(frm: FormGroup) {
      this.candidatoService.votar(this.voto).subscribe(response => {
          this.receberMensagem();
          this.novaVotacao();
          frm.reset();
          this.messageService.add({ severity: 'success', detail: this.mensagem.msg});
          this.enviaMensagem.emit(response);
      });
  }

}
