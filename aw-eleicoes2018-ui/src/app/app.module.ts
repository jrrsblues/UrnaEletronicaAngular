import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/growl';
import {RadioButtonModule} from 'primeng/radiobutton';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CandidatoCadastroComponent } from './candidato-cadastro/candidato-cadastro.component';
import { CandidatoListagemComponent } from './candidato-listagem/candidato-listagem.component';
import { CandidatoMaisVotadoComponent } from './candidato-mais-votado/candidato-mais-votado.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CandidatoCadastroComponent,
    CandidatoListagemComponent,
    CandidatoMaisVotadoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    GrowlModule,
    RadioButtonModule,
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
