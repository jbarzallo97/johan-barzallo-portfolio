import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioItems = [
    {
      link: 'https://jbarzallo97.github.io/spotify-jb7/',
      image: 'assets/img/portfolio6.png',
      altText: 'Proyecto 1',
      title: 'Spotify App',
      description: 'Plataforma que consume la API de Spotify y muestra top de artistas, canciones y playlists.'
    },
    {
      link: 'https://jbarzallo97.github.io/clipboard-landing-page-master-master/',
      image: 'assets/img/portfolio1.jpg',
      altText: 'Proyecto 1',
      title: 'Landing Page (HTML/CSS)',
      description: 'Maquetación de landing page con HTML y CSS, tipografías y estructura responsive.'
    },
    {
      link: 'https://jbarzallo97.github.io/Consumo-Api-Rest-Practico/',
      image: 'assets/img/portfolio2.png',
      altText: 'Proyecto 2',
      title: 'Movies App (Mobile)',
      description: 'Consumo de API de películas con detalle de cada título; orientada a versión mobile (abrir en celular).'
    },
    {
      link: 'https://jbarzallo97.github.io/angular-imagen-gif/',
      image: 'assets/img/portfolio3.png',
      altText: 'Proyecto 3',
      title: 'GifsApp',
      description: 'Buscador de GIFs en tiempo real con historial y paginación.'
    },
    {
      link: 'https://jbarzallo97.github.io/country-App/',
      image: 'assets/img/portfolio4.png',
      altText: 'Proyecto 4',
      title: 'Country App',
      description: 'Filtrado de países por capital, país y región; vista de detalle.'
    },
    {
      link: 'https://jbarzallo97.github.io/pipes-app/',
      image: 'assets/img/portfolio5.png',
      altText: 'Proyecto 5',
      title: 'Pipes App',
      description: 'Demostración de pipes personalizados y formateo de datos en Angular.'
    }
  ];

  onProjectClick(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    // Evita que el enlace quede con focus visual al volver atrás
    requestAnimationFrame(() => {
      (target as HTMLAnchorElement).blur();
    });
  }
}
