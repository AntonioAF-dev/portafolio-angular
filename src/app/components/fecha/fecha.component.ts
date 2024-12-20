import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  standalone: false,
  
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.scss'
})
export class FechaComponent {
  fechaActual: string;

  constructor() {
    // Formatear la fecha al estilo 'd/m/Y'
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const año = hoy.getFullYear();
    this.fechaActual = `${dia}/${mes}/${año}`;
  }
}
