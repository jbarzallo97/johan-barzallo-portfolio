import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuVisible = false;

  // Método para mostrar/ocultar el menú en dispositivos móviles
  mostrarOcultarMenu() {
    this.menuVisible = !this.menuVisible;
    const nav = document.getElementById('nav');
    if (this.menuVisible) {
      nav?.classList.add('responsive');
    } else {
      nav?.classList.remove('responsive');
    }
  }

  // Método para ocultar el menú después de seleccionar una opción
  seleccionar() {
    const nav = document.getElementById('nav');
    nav?.classList.remove('responsive');
    this.menuVisible = false;
  }

  goTo(event: Event, targetId: string) {
    event.preventDefault();
    const nav = document.getElementById('nav');
    nav?.classList.remove('responsive');
    this.menuVisible = false;

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', location.pathname + location.search);
    }
  }
}
