import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  constructor(private _http: HttpClient) { }

  obterExtratoContaCorrente(model: any){
    const endpoint = `${environment.baseApiBanco}ContaCorrente/ObterExtrato?DataInicio=${model.DataInicio}&DataFim=${model.DataFim}`;
    return this._http.get(endpoint).pipe(map((response: any) => response));
  }

  alterarValorExtrato(id: number, valorEditado: number){
    const endpoint = `${environment.baseApiBanco}ContaCorrente/AtualizarExtrato?Id=${id}&Valor=${valorEditado}`;
    return this._http.put(endpoint, {}).pipe(map((response: any) => response));
  }

  aoIncluirExtratoContaCorrente(valor: number, descricao: string){
    const endpoint = `${environment.baseApiBanco}ContaCorrente/IncluirExtrato?Descricao=${descricao}&Valor=${valor}`;
    return this._http.post(endpoint, {}).pipe(map((response: any) => response));
  }

  aoCancelarExtrato(id: number){
    const endpoint = `${environment.baseApiBanco}ContaCorrente/Cancelar/Extrato/${id}`;
    return this._http.put(endpoint, {}).pipe(map((response: any) => response));
  }
}
