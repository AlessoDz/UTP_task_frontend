import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'component-groups-details-comments',
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './comments.component.html',
})
export class ComponentGroupsDetailsComments {

  nuevoComentarioTexto = '';
  comentarios: any[] = [
    {
      nombre: 'Marianela Liseth Santisteban Pisfil',
      texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit soluta obcaecati pariatur, perspiciatis doloremque aperiam nemo consequatur aliquid, placeat facilis sequi! Velit cum a illum, architecto dolore quas rem sequi.',
      foto: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
      tiempo: 'Hace 6h',
    },
    {
      nombre: 'Jose Maria Túllume Capuñay',
      texto: 'Repositorio de github frontend: https://github.com/alessodcz/utp_task_frontend',
      foto: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
      tiempo: 'Hace 2h',
    },
  ];

  agregarComentario() {
    if (this.nuevoComentarioTexto.trim().length === 0) return;

    this.comentarios.push({
      nombre: 'Marcio Alessandro De La Cruz Capuñay',
      texto: this.nuevoComentarioTexto,
      foto: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
      tiempo: 'Hace unos segundos',
    });

    this.nuevoComentarioTexto = '';
  }

}
