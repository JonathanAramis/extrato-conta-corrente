
export class ExtratoContaCorrenteModel {
Extrato: ExtratoContaCorrente[];
ValorTotal: GLfloat | null;
}

export class ExtratoContaCorrente{
Id: number | null;
Descricao: string | null | undefined;
Data: string | null | undefined;
Valor: GLfloat  | null | undefined;
Avulso: boolean = false;
StatusId: number | null;
}
