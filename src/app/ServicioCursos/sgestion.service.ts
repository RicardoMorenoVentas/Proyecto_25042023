import { Injectable } from '@angular/core';
import { Curso } from 'src/_modelos/Curso';
import { Nivel } from 'src/_modelos/Nivel_enum';

@Injectable({
  providedIn: 'root'
})
export class SGestionService {
  private _lista_cursos: Array<Curso> = [new Curso("Manualidades", 150, Nivel.Intermedio), new Curso("Bootstrap", 20, Nivel.Iniciacion), new Curso("Pinta con los dedos", 100, Nivel.Avanzado)];

  constructor() { }

  public get lista_cursos(): Array<Curso> {
    return this._lista_cursos;
  }
  public set lista_cursos(value: Array<Curso>) {
    this._lista_cursos = value;
  }

  modificarCurso(curso_e : Curso){
    this._lista_cursos.map((c,ind,arr) => {
      if (c.id == curso_e.id){
        c = curso_e;
      }
    })
  }
}
