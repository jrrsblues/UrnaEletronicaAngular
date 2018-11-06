import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  cadastrar(candidato: any): Observable<any> {
    return this.http.post<any>(`${this.api}/candidatos`, candidato);
  }

  votar(voto: any): Observable<any> {
    return this.http.post<any>(`${this.api}/voto`, voto);
  }

  listar(): Observable<any> {
     return this.http.get<any>(`${this.api}/candidatos`);
  }

  mensagemEnviarReceber(): Observable<any> {
    return this.http.get<any>(`${this.api}/voto`);
  }

  candidatomaisvotado() {
    return this.http.get<any>(`${this.api}/maisvotado`);
  }

}
