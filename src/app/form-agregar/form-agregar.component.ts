import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-agregar.component.html',
  styleUrl: './form-agregar.component.css'
})
export class FormAgregarComponent implements OnInit{
  ngOnInit(): void {

    this.leerMaterias();
  }


  valNombre= "";
  valDocente = "";
  valIni: Date = new Date;
  valDur = "";
  valdesc= "";
  materia1 = {
    nombre:"Matematicas",
    docente:"Kevin Ribas",
    fIni: "10/10/2024",
    duracion: 120,
    desc:"Curso de matematicas nivel intermedio"
  }
  materia2 = {
    nombre: "Fisica",
    docente: "Laura Martínez",
    fIni: "15/11/2024",
    duracion: 90,
    desc: "Curso de física básica"
}

materia3 = {
    nombre: "Programacion",
    docente: "Carlos Gómez",
    fIni: "05/12/2024",
    duracion: 150,
    desc: "Curso de programación en Java"
}

materia4 = {
    nombre: "Quimica",
    docente: "Ana Torres",
    fIni: "20/01/2025",
    duracion: 100,
    desc: "Curso de química avanzada"
}

  Materias= [this.materia1,this.materia2,this.materia3,this.materia4];
  
  leerMaterias() {
    const materiasString = localStorage.getItem('materias');  // Leemos el Local Storage
    if (materiasString) {
      this.Materias = JSON.parse(materiasString);  // Si hay datos, los convertimos a un array de objetos
      console.log('Materias cargadas desde Local Storage');
    } else {
      console.log('No se encontraron materias en Local Storage');
    }
  }
  

  @Output() dataEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  sendData() {
    console.log("Envio: "+this.Materias);
    this.dataEmitter.emit(this.Materias);  // Emitimos el dato al padre
  }

  remove(mat:any){
    const index = this.Materias.indexOf(mat);
      this.Materias.splice(index, 1);
      this.guardarMaterias;
    this.guardarMaterias(this.Materias);
  }
  
  guardarMaterias(materias: any[]) {
    const materiasString = JSON.stringify(materias);  // Convertimos el array de materias a una cadena JSON
    localStorage.setItem('materias', materiasString);  // Guardamos la cadena en el Local Storage con la clave 'materias'
  }

  guardar(){
      const materia ={
        nombre:this.valNombre,
        docente:this.valDocente,
        fIni: this.valIni+"",
        duracion:parseInt(this.valDur),
        desc:this.valdesc
      }
      this.Materias.push(materia);
      this.guardarMaterias(this.Materias);
      console.log(this.Materias)
      this.valNombre= "";
      this.valDocente = "";
      this.valIni = new Date;
      this.valDur = "";
      this.valdesc= "";
  }
}
