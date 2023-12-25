import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../../core/services/extrato.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-incluir-extrato',
  templateUrl: './incluir-extrato.component.html',
  styleUrl: './incluir-extrato.component.css'
})
export class IncluirExtratoComponent  implements OnInit {
  descricao: string;
  valor: number;
  constructor(
    private _extratoService: ExtratoService,
    private _snackBar: MatSnackBar,

    )
    {
    }
  ngOnInit(): void {}

  aoIncluirExtratoContaCorrente(){
    this._extratoService.aoIncluirExtratoContaCorrente(this.valor, this.descricao).subscribe((response) =>{
      this._snackBar.open('Extrato incluido com sucesso!', 'Fechar');
    });
  }
}
