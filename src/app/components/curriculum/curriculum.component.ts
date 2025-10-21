import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
   // Datos de educación
   courses = [
    {
      title: 'Angular: De cero a experto - Edición 2025',
      institution: 'Udemy',
      date: '2025',
    },
    {
      title: 'Diplomado en IA aplicada a la docencia',
      institution: 'Universidad de las Américas',
      date: '2025',
    },
    {
      title: 'Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy',
      institution: 'Platzi',
      date: '2024',
    },
    {
      title: 'Curso de Backend con NestJS',
      institution: 'Platzi',
      date: '2024',
    },
    {
      title: 'Introduction to Software Product Management',
      institution: 'University of Alberta',
      date: '2024',
    },
    {
      title: 'Programa Desarrollo de Apps Móviles con Flutter',
      institution: 'EELA',
      date: '2024',
    },
    {
      title: 'Curso de Fundamentos y Autenticación con Angular',
      institution: 'Platzi',
      date: '2023',
    },
  ];

  // Datos de experiencia de trabajo
  workExperience = [
    {
      title: 'Ingeniero de Software',
      company: 'Telconet S.A.',
      date: 'Abril 2022 - Hasta la actualidad',
      description: [
        'Líder de proyectos.',
        'Desarrollo de plataforma educativa con JavaScript y backend en PHP.',
        'Desarrollo con Angular y backend usando Nest.js.',
        'Consumo e integración de servicios backend IA.',
        'Integración de servicios de inteligencia artificial en backend con Nest.js.',
        'Dockerización de aplicaciones y despliegue en servidores Nginx.',
        'Integración de Seafile como gestor de archivos usando Docker.'
      ]
    },
    {
      title: 'Docente externo',
      company: 'Instituto Superior Tecnológico Argos',
      date: 'Enero 2025 - Agosto 2025',
      description: [
        'Impartir clases a nivel técnico superior en carreras tecnológicas del Instituto Argos.',
        'Participar como docente en el programa de Tecnología Superior Universitaria (TSU)',
      ]
    },
    {
      title: 'Asistente de Sistemas',
      company: 'Magicnegsa S.A.',
      date: 'Enero de 2021 - Abril de 2022',
      description: [
        'Encargado de dictar capacitaciones al departamento técnico (Sistemas).',
        'Administración de bases de datos SQL Server, garantizando integridad y seguridad.',
        'Desarrollo de plataformas usando JavaScript y React, integradas con backend en PHP y bases de datos MySQL.'
      ]
    }
  ];
}
