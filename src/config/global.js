export default {
  global: {
    componenteFormativo: 'Imagen y captura',
    descripcionCurso:
      'Las nuevas tecnologías han proporcionado nuevos lenguajes y a su vez una representación del mundo que rodea a las personas. La imagen digital es una de esas herramientas que en su construcción va cambiando y reelaborándose desde lenguajes propios. Conocer los campos que intervienen en la formación de la imagen da el poder de interpretar cómo se están llevando los procesos de construcción de imagen.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Imagen',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y características de la imagen',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de imagen y formatos (extensiones de archivo)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Resolución, tamaño y dimensión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modos y profundidad de color',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Optimización y compresión de imágenes',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dispositivos de captura y salida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación y características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Funcionamiento y operación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Captura fotográfica análoga y digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción: definición e historia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Usos y aplicaciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Concepto y operación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Medición y exposición',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Adobe. (2020). Acerca de las dimensiones en píxeles y la resolución de la imagen impresa. ',
      link:
        'https://helpx.adobe.com/es/photoshop/using/image-size-resolution.html',
    },
    {
      referencia: 'Amador, P. (s.f.). La imagen fotográfica y su lectura.',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      referencia:
        'Barros, J. (2020). Fotografía: tamaño de imagen, resolución y tamaño físico.',
      link:
        'https://perio.unlp.edu.ar/catedras/iddi/wp-content/uploads/sites/125/2020/05/Fotograf%C3%ADa.-Tama%C3%B1o-de-imagen-resoluci%C3%B3n-y-tama%C3%B1o-f%C3%ADsico.pdf',
    },
    {
      referencia:
        'Berger, J. (2015). Para entender la fotografía. Editorial Gustavo Gili.',
    },
    {
      referencia: 'Definición de. (2020). Impulso. ',
      link:
        'https://definicion.de/impulso/#:~:text=Los%20impulsos%20el%C3%A9ctricos%20son%20variaciones,fisioterapia%2C%20m%C3%A1s%20precisamente%20la%20electroestimulaci%C3%B3n',
    },
    {
      referencia:
        'Díaz, M. (2019). Mirar el pasado imagen e historia en la era digital. Editorial Comares.',
    },
    {
      referencia:
        'Fernández, F. (2020). Cómo funciona el sensor de una cámara digital. ',
      link:
        'https://quecamarareflex.com/como-funciona-el-sensor-de-una-camara-digital/',
    },
    {
      referencia: 'Lexico. (2020). Oxidación. ',
      link: 'https://www.lexico.com/es/definicion/oxidacion',
    },
    {
      referencia: 'Máxima, J. (2020). Historia de la fotografía. ',
      link:
        'https://www.caracteristicas.co/historia-de-la-fotografia/#ixzz6em73BDMA',
    },
    {
      referencia: 'Real Academia Española (RAE). (2020). Sigla. ',
      link: 'https://dle.rae.es/sigla',
    },
    {
      referencia: 'Sociedad Fotográfica de Málaga. (2020). Haluros de plata. ',
      link:
        'https://www.sfm.org.es/glosario/h#:~:text=El%20revelador%20transforma%20en%20plata,la%20acci%C3%B3n%20de%20la%20luz.&text=Al%20procesar%20%C3%A9sta%20con%20una,n%C3%BAmero%20de%20part%C3%ADculas%20se%20crear%C3%A1n',
    },
    {
      referencia: 'Zerbst, C. (2008). Introducción a la fotografía digital. ',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Compresión',
      significado:
        'La compresión de las imágenes digitales se ha hecho imprescindible debido a que el tamaño de los archivos de imagen es cada vez mayor, la compresión de una fotografía es la reducción de los datos digitales que no resultan necesarios e importantes. Esta compresión permite almacenar mayor número de imágenes al conseguir que los archivos resultantes no ocupen mucho espacio.',
    },
    {
      termino: 'CMYK',
      significado:
        'El modelo CMYK (siglas de <em>Cyan</em>, Magenta, <em>Yellow</em> y <em>Key</em>) es un modelo de color sustractivo que se utiliza en la impresión en colores. Es la versión moderna y más precisa del antiguo modelo tradicional de coloración (RYB).',
    },
    {
      termino: 'Dimensión',
      significado:
        '(Como medida de tamaño o espacio). La dimensión también puede ser el área, el volumen o la longitud de una superficie, un cuerpo o una línea.',
    },
    {
      termino: 'Imagen',
      significado:
        'Significa figura o representación visual de algo o alguien.',
    },
    {
      termino: 'Lente para cámara',
      significado:
        'Se denomina objetivo al dispositivo que contiene el conjunto de lentes convergentes y divergentes y, en algunos casos, el sistema de enfoque y obturación, que forman parte de la óptica de una cámara tanto fotográfica como de vídeo.',
    },
    {
      termino: 'Mapa de <em>bits</em>',
      significado:
        'Es aquella imagen que justamente se presenta en mapa de <em>bits</em>, que consiste en una estructura de forma rectangular formada por píxeles o puntos de color, y que puede visualizarse en un monitor, en un papel o en cualquier otro dispositivo que permita la representación de imágenes.',
    },
    {
      termino: 'RBG',
      significado:
        'Es una sigla formada por los términos de la lengua inglesa <em>red</em> (rojo), <em>green</em> (verde) y <em>blue</em> (azul). El concepto suele emplearse para referirse a un modelo cromático que consiste en representar distintos colores a partir de la mezcla de estos tres colores primarios.',
    },
    {
      termino: 'Saturación',
      significado:
        'Es la intensidad de cada color de una foto, según el grado de blanco, negro o gris de su composición, cuanta más ausencia de estos sobre un color, más pureza e intensidad.',
    },
    {
      termino: 'Sensor',
      significado:
        'Dispositivo electrónico fabricado con materiales semiconductores y estructurado en forma de matriz, acumulan una carga eléctrica en cada celda de la matriz (o píxel) en proporción a la intensidad de la luz que incide sobre ella localmente.',
    },
    {
      termino: 'Vector',
      significado:
        'Es un segmento de recta en el espacio que parte de un punto hacia otro, es decir, que tiene dirección y sentido. Los vectores en física tienen por función expresar las llamadas magnitudes vectoriales.',
    },
  ],
  complementario: [
    {
      texto: 'Zerbst, C. (2008). Introducción a la fotografía digital.',
      tipo: 'Libro',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
    {
      texto:
        'Espinosa, Y. (2019). Historia de la fotografía: un recorrido por los principales referentes fotográficos y su influencia posterior. SCRIBD.',
      tipo: 'Documento',
      link:
        'https://es.scribd.com/document/448421721/Historia-de-la-Fotografia-un-recorrido-p-pdf',
    },
    {
      texto: 'Amador, P. (s.f.). La imagen fotográfica y su lectura. CORE.',
      tipo: 'Artículo PDF',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      texto:
        'Ordoñez, C (2005). Formatos de imagen digital. Revista Digital Universitaria 5(7), p. 1-10.',
      tipo: 'Revista',
      link: 'http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
