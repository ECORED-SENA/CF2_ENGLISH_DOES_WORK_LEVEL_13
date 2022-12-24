export default {
  global: {
    componenteFormativo:
      '<em>Let’s argue and debate about global problems</em><br>Vamos a  argumentar y debatir sobre las problemáticas del mundo',
    descripcionCurso:
      'Este componente se enfocará en elementos como el correcto uso de los verbos frasales, cómo mostrar énfasis fortaleciendo adjetivos por medio del uso de intensificadores, el uso de expresiones útiles para contrastar opiniones y cómo organizar las ideas de nuestros argumentos con mapas mentales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Phrasal verbs</em> (Verbos frasales)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Separable</em> (Separables)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Inseparable</em> (No separables)',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Intensifiers</em> (Intensificadores)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Contrasting opinions</em> (Contrastando opiniones)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Organizing the ideas of an argument with mind maps</em> (Organizando las ideas de un argumento con mapas mentales)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Phrasal verbs</em> (Verbos frasales)',
      referencia:
        '<em>BBC Learning English. (2016). BBC English Class: How to learn and use phrasal verbs</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Q7HBdzgvmIs ',
    },
    {
      tema: '<em>Phrasal verbs</em> (Verbos frasales)',
      referencia:
        '<em>BBC Learning English. (2016). Tim explains phrasal verbs: informal, formal or neutral? - Stop Saying!</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KMoepo9Uxv4 ',
    },
    {
      tema: '<em>Intensifiers</em> (Intensificadores)',
      referencia:
        '<em>BBC Learning English.  (2019). Very vs Really vs Absolutely - English In A Minute</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KMoepo9Uxv4 ',
    },
    {
      tema: '<em>Contrasting opinions</em> (Contrastando opiniones)',
      referencia:
        '<em>Thorburn, R. (s. f.). ‘native’ & ‘non-native’ English teachers. Contrasting opinions. iatelf.</em>',
      tipo: 'PDF',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema:
        '<em>Organizing the ideas of an argument with mind maps</em> (Organizando las ideas de un argumento con mapas mentales)',
      referencia:
        '<em>Erden, A. (2017). Mind Maps as a Lifelong Learning Tool. Universal Journal of Educational Research, 5(12A),  p. 1-7.</em>',
      tipo: 'PDF',
      descarga: '/downloads/anexo2.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Contrasting opinions</em> / Opiniones contrastantes',
      significado:
        'son palabras que funcionan bien cuando el hablante no está de acuerdo con la afirmación que se está expresando.',
    },
    {
      termino: '<em>Intensifiers</em> / Intensificadores',
      significado:
        'adverbios que se usan para fortalecer y darles énfasis a ciertas palabras y expresiones (especialmente a adjetivos).',
    },
    {
      termino: '<em>Intransitive verbs</em> / Verbos intransitivos',
      significado:
        'verbos que no pueden tener complemento directo porque la acción no recae sobre algo o alguien.',
    },
    {
      termino: '<em>Mind maps</em> / Mapas mentales',
      significado:
        'gráficos utilizados para expresar la forma de entender un concepto desde el punto de vista del diseñador.',
    },
    {
      termino: '<em>Phrasal verbs</em> / Verbos frasales',
      significado:
        'verbos formados por un verbo base sumado a un adverbio o preposición que muchas veces cambia por completo el anterior significado, ya que habla de una acción diferente.',
    },
    {
      termino: '<em>Transitive verbs</em> / Verbos transitivos',
      significado:
        'verbos que tienen complemento directo porque la acción recae sobre algo o alguien.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Atmaca, Ç. (2016). Contrasting perceptions of students and teachers: written corrective feedback. Journal of Language and Linguistic Studies, 12(2), p. 166-182.</em>',
      link:
        'https://www.researchgate.net/publication/323285657_Contrasting_perceptions_of_students_and_teachers_written_corrective_feedback',
    },
    {
      referencia:
        '<em>British Council. (s. f.). Intensifiers. British Council LearnEnglish.</em>',
      link:
        'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/intensifiers',
    },
    {
      referencia:
        '<em>Budd, J. (2004). Mind maps as classroom exercises. The Journal of Economic Education, 35(1), p. 35-46.</em>',
      link: 'https://doi.org/10.3200/JECE.35.1.35-46',
    },
    {
      referencia:
        'Equipo académico. (2021). Conoce a profundidad los <em>phrasal verbs. British Council.</em>',
      link: 'https://www.britishcouncil.org.mx/blog/phrasal-verbs',
    },
    {
      referencia:
        '<em>Woodward English. (s. f.). Transitive and Intransitive Phrasal Verbs.</em>',
      link:
        'https://www.woodwardenglish.com/lesson/transitive-intransitive-phrasal-verbs/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta temática',
        centro:
          'CENIGRAF - Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Edith Grande Triviño',
        cargo: 'Experta temática',
        centro:
          'CENIGRAF - Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo <em>front-end</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Validación audiovisual y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
