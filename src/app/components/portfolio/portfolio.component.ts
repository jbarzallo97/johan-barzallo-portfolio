import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioItems = [
    {
      link: 'https://johanb1997.github.io/clipboard-landing-page-master-master/',
      image: 'assets/img/portfolio1.jpg',
      altText: 'Proyecto 1'
    },
    {
      link: 'https://johanb1997.github.io/Consumo-Api-Rest-Practico/',
      image: 'assets/img/portfolio2.png',
      altText: 'Proyecto 2'
    },
    {
      link: 'https://johanb1997.github.io/angular-imagen-gif/',
      image: 'assets/img/portfolio3.png',
      altText: 'Proyecto 3'
    },
    {
      link: 'https://johanb1997.github.io/country-App/',
      image: 'assets/img/portfolio4.png',
      altText: 'Proyecto 4'
    },
    {
      link: 'https://johanb1997.github.io/pipes-app/',
      image: 'assets/img/portfolio5.png',
      altText: 'Proyecto 5'
    }
  ];
}
