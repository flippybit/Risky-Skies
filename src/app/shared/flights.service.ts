import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


export interface Actividad {
  $key: string;
  titulo: string;
  descripcion: string;
  lugar: string
// fecha: Date;  
  comentario: string;
}




@Injectable({
  providedIn: 'root'
})
export class FlightsService {

ListaActRef: AngularFireList<any>; // Obligatorio crear una referencia de tipo FIRE-LIST
ActividadRef: AngularFireObject<any>; // Referencia de tipo FIRE-OBJECT


constructor(private db: AngularFireDatabase) { }

// Añadir actividad de terminal
AddActividad(actividad: Actividad ){
  this.ListaActRef.push({
    titulo: actividad.titulo,
    descripcion: actividad.descripcion,
    lugar: actividad.lugar,
  //  fecha: actividad.
    comentario: actividad.comentario,
})
.catch(error => {
  this.errorMgmt(error);
})
}

getActividad(id: string){
this.ActividadRef = this.db.object('ActividadesList/'+id);
return this.ActividadRef;
}

getListActividades(){
  this.ListaActRef = this.db.list('ActividadesList');
  console.log(this.ListaActRef);
  return this.ListaActRef;
}


  private errorMgmt(error) {
    console.log(error);
  }

}
