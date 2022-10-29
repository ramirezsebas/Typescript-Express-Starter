export class Caja {
  codigo: number;
  descripcion: string;
  estado: number;
  fechaHora: Date;

  constructor(
    codigo: number,
    descripcion: string,
    estado: number,
    fechaHora: Date
  ) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fechaHora = fechaHora;
  }
}
