import { Nivel } from "./Nivel_enum";

export class Curso {
  public static id_clase = 0;
  private _id: number;
  private _nombre: string;
  private _duracion: number;
  private _nivel: Nivel;

  constructor(nomb_e : string, dur_e : number, niv_e : Nivel){
    Curso.id_clase++;
    this._id = Curso.id_clase;
    this._nombre = nomb_e;
    this._duracion = dur_e;
    this._nivel = niv_e;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get duracion(): number {
    return this._duracion;
  }
  public set duracion(value: number) {
    this._duracion = value;
  }
  public get nivel(): Nivel {
    return this._nivel;
  }
  public set nivel(value: Nivel) {
    this._nivel = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }


}
