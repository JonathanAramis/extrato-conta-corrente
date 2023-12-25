import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../core/services/extrato.service';
import { ObterExtratoContaCorrenteRequest } from '../../core/models/obterExtratoContaCorrenteRequest.model';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Descricao', 'Data', 'Valor', 'Avulso', 'Status'];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  model: any;
  obterExtratoContaCorrenteRequest : ObterExtratoContaCorrenteRequest = new ObterExtratoContaCorrenteRequest();
  valorEditado: any;
  permitirEdicaoExtrato: boolean = false;


  constructor(
    private _extratoService: ExtratoService,
    private _snackBar: MatSnackBar,
    private router: Router
    )
    {
    }
  ngOnInit(): void {}

  aoLimparPesquisa(){
    this.model = null;
    this.permitirEdicaoExtrato = false;
    this.valorEditado = null;
  }

  obterExtratoContaCorrente(){
    this.obterExtratoContaCorrenteRequest.DataInicio = this.range.value.start?.toDateString();
    this.obterExtratoContaCorrenteRequest.DataFim = this.range.value.end?.toDateString();
    if(this.obterExtratoContaCorrenteRequest.DataInicio && this.obterExtratoContaCorrenteRequest.DataInicio){
        this._extratoService.obterExtratoContaCorrente(this.obterExtratoContaCorrenteRequest).subscribe(
          (response) => {
            this.model = response
          });
    } else{
      this.exibirMensagem('Você deve selecionar um range de datas');
    }
  }

  exibirMensagem(message: string){
    this._snackBar.open(message, 'Fechar');
  }

  aoLiberarEdicaoExtrato(){
    this.permitirEdicaoExtrato = true;
  }

  aoEditarExtrato(extrato: any){
    if(extrato.avulso && extrato.statusId == 1){
      this._extratoService.alterarValorExtrato(extrato.id, this.valorEditado).subscribe((response)=>{
        this.exibirMensagem('Extrato atualizado com sucesso!');
        this.obterExtratoContaCorrente();
      });
    } else {
      this.exibirMensagem('Extrato não avulso ou cancelado');
    }
    this.permitirEdicaoExtrato = false;
    this.valorEditado = null;
  }

  aoIncluirExtrato(){
    this.router.navigate(['/incluir-extrato']);
  }

  aoCancelarExtrato(id: number){
    this._extratoService.aoCancelarExtrato(id).subscribe((response) =>{
      this.exibirMensagem('Extrato cancelado com sucesso!');
      this.obterExtratoContaCorrente();
    })
  }

  aoCancelarEdicao(){
    this.permitirEdicaoExtrato = false;
    this.valorEditado = false;
  }
}
