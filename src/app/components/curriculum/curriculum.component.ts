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
      title: 'Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy',
      institution: 'Platzi',
      date: '2024',
      description: 'Egresado - Validación con la Senescyt'
    },
    {
      title: 'Curso de Backend con NestJS',
      institution: 'Platzi',
      date: '2024',
      description: 'REGISTRO ACADÉMICO: 1006-2021-2285337'
    },
    {
      title: 'Introduction to Software Product Management',
      institution: 'University of Alberta',
      date: '2024',
      description: 'REGISTRO ACADÉMICO: 1006-2021-2285337'
    },
    {
      title: 'Programa Desarrollo de Apps Móviles con Flutter',
      institution: 'EELA',
      date: '2024',
      description: 'REGISTRO ACADÉMICO: 1006-2021-2285337'
    },
    {
      title: 'Curso de Fundamentos y Autenticación con Angular',
      institution: 'Platzi',
      date: '2023',
      description: 'REGISTRO ACADÉMICO: 1006-2021-2285337'
    },
  ];

  // Datos de experiencia de trabajo
  workExperience = [
    {
      title: 'Ingeniero de Software',
      company: 'Telconet S.A.',
      date: 'Abril 2022 - Hasta la actualidad',
      description: [
        'Desarrollador y diseñador de soluciones de software, especializado en aplicaciones web, móviles, gestión de servidores y control de versiones; con diversos proyectos desplegados (publicados) en un ambiente de producción.',
        'Líder en la realización de sesiones de capacitación para clientes, garantizando su competencia en el manejo de las aplicaciones y optimizando la experiencia de usuario a través de un soporte técnico contínuo y personalizado.',
        'Responsable de la creación y mantenimiento de documentación técnica. Esto incluye la realización de pruebas unitarias, levantamiento de requerimientos y análisis de diseño.'
      ]
    },
    {
      title: 'Asistente de Sistemas',
      company: 'Magicnegsa S.A.',
      date: 'Enero de 2021 - Abril de 2022',
      description: [
        'Desarrollo y mantenimiento de soluciones web a medida, contribuyendo a la presencia digital y empresarial.',
        'Administración de bases de datos SQL Server, asegurando la integridad y seguridad de la información.',
        'Encargado de dictar capacitaciones al departamento técnico (Sistemas).',
        'Gestión y optimización de inventario, asegurando la eficiencia y actualización constante de recursos.',
        'Mantenimiento preventivo y correctivo de equipos informáticos, garantizando su óptimo funcionamiento.',
        'Implementación y configuración de redes.'
      ]
    }
  ];
}
