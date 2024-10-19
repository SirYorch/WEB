import { Component, ElementRef, NgModule, QueryList, ViewChildren } from '@angular/core';
import { FormAgregarComponent } from "../form-agregar/form-agregar.component";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormAgregarComponent,CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  materias:any[] = []
  receiveData(data: any[]) {
    console.log("recivo");
    console.log(data)
    this.materias = data;
  }


  @ViewChildren('curso') cursos!: QueryList<ElementRef>;
  
  ver(materia: any) {
    // Ahora, encontrar el curso correspondiente a la materia seleccionada y agregar la clase

    const index = this.materias.indexOf(materia);
    if (index !== -1) {
      const cursoElement = this.cursos.toArray()[index].nativeElement;
      cursoElement.classList.toggle('abierto');
    }
  }

  remove(mat:any){
    this.formulario.remove(mat);
  }


  @ViewChild('formulario') formulario!:FormAgregarComponent;
  

  ngOnInit(): void {
    
    setTimeout(()=>this.formulario.sendData(),1);
  }

}
