import { Component } from '@angular/core';
import { SGestionService } from '../ServicioCursos/sgestion.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  constructor(private _sgestion: SGestionService){}

  public get sgestion(): SGestionService {
    return this._sgestion;
  }
  public set sgestion(value: SGestionService) {
    this._sgestion = value;
  }


}
