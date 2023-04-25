import { Component, OnInit } from '@angular/core';
import { SGestionService } from '../ServicioCursos/sgestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/_modelos/Curso';
import { Nivel } from 'src/_modelos/Nivel_enum';

@Component({
  selector: 'app-formulario-curso',
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.css']
})
export class FormularioCursoComponent implements OnInit {
  private _idCurso_e: number = -1;
  private _elimina: boolean = false;
  private _modCurso: boolean = false;
  private _tipoCaso: number = 1 | 2 | 3; // 1 añade, 2 modifica, 3 elimina
  private _curso: Curso | undefined;
  private _niveles = Nivel;

  private _opciones_niveles: string[] = Object.values(Nivel).map((v, i, arr) => v as string);

  constructor(private _routerMain : Router ,private _router: ActivatedRoute,private _sgestion: SGestionService){
  }

  ngOnInit(){
    this._routerMain.events.subscribe(() => {
      const routeParams = this._router.snapshot.paramMap;
      this._idCurso_e = Number.parseInt(routeParams.get('cursoID')!);
      this._elimina = routeParams.get('eliminar') == 'true'
      this.sgestion.lista_cursos.map((r,ind,arr) => {
        if (r.id == this._idCurso_e){
          this._curso = r;
        }
      });
      if (typeof this._curso == 'undefined' && !this._elimina){
        console.error("Curso no encontrado. Si es para añadir uno, no haga caso de esta advertencia");
        this._curso = new Curso("",0,Nivel.Iniciacion);
        this._tipoCaso = 1;
      }else if (!this._elimina){
        this._modCurso = true;
        this._tipoCaso = 2;
      }else{
        this._tipoCaso = 3;
      }
    })
  }

  public get curso(): Curso | undefined {
    return this._curso;
  }
  public set curso(value: Curso | undefined) {
    this._curso = value;
  }
  public set idCurso(value: number) {
    this._idCurso_e = value;
  }
  public get sgestion(): SGestionService {
    return this._sgestion;
  }
  public set sgestion(value: SGestionService) {
    this._sgestion = value;
  }
  public get elimina(): boolean {
    return this._elimina;
  }
  public set elimina(value: boolean) {
    this._elimina = value;
  }
  public get idCurso(): number {
    return this._idCurso_e;
  }
  public get niveles() {
    return this._niveles;
  }
  public set niveles(value) {
    this._niveles = value;
  }
  public get opciones_niveles(): string[] {
    return this._opciones_niveles;
  }
  public set opciones_niveles(value: string[]) {
    this._opciones_niveles = value;
  }
  public get modCurso(): boolean {
    return this._modCurso;
  }
  public set modCurso(value: boolean) {
    this._modCurso = value;
  }
  public get tipoCaso(): number {
    return this._tipoCaso;
  }
  public set tipoCaso(value: number) {
    this._tipoCaso = value;
  }

  modificarCurso() : void {
    this._sgestion.modificarCurso(this._curso!);
    this._routerMain.navigate(['']);
  }

  addCurso() : void {
    this._sgestion.lista_cursos.push(this._curso!);
    this._routerMain.navigate(['']);
  }

  eliminarCursoFun() : void {
    this._sgestion.lista_cursos.map((r,ind,arr) => {
      if (r.id == this._curso!.id) {
        this._sgestion.lista_cursos.splice(ind,1);
      }
    })
    this._routerMain.navigate(['']);
  }
}
