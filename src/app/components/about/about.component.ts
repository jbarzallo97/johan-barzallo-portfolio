import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  interests: { icon: string, name: string }[] = [
    { icon: 'fa-solid fa-gamepad', name: 'JUEGOS' },
    { icon: 'fa-solid fa-headphones', name: 'MÚSICA' },
    { icon: 'fa-solid fa-plane', name: 'VIAJAR' },
    { icon: 'fa-solid fa-futbol', name: 'DEPORTE' },
    { icon: 'fa-solid fa-dumbbell', name: 'GIMNASIO' },
    { icon: 'fa-solid fa-book', name: 'LIBROS' },
    { icon: 'fa-solid fa-code', name: 'CÓDIGO' },
    { icon: 'fa-brands fa-windows', name: 'WINDOWS' },
  ];
}
