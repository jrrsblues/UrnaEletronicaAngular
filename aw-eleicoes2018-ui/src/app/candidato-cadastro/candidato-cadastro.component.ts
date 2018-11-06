import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { CandidatosService } from '../candidatos/candidatos.service';


@Component({
  selector: 'app-candidato-cadastro',
  templateUrl: './candidato-cadastro.component.html',
  styleUrls: ['./candidato-cadastro.component.css']
})

export class CandidatoCadastroComponent implements OnInit {

  candidato: any;
  @Output() cadastroSalva = new EventEmitter();

  constructor(private candidatoService: CandidatosService, private messageService: MessageService) { }

  ngOnInit() {
     this.novoCadastro();
  }

  novoCadastro() {
    this.candidato = {};
  }

  cadastrar(frm: FormGroup) {
    this.candidatoService.cadastrar(this.candidato).subscribe(response => {
      frm.reset();
      this.novoCadastro();
      this.messageService.add({ severity: 'success', detail: 'Candidato cadastrado com sucesso!' });
      this.cadastroSalva.emit(response);
    });
  }

}
