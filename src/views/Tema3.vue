<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Captura fotográfica análoga y digital

    figure.mb-4
      img(src='@/assets/curso/tema3-banner.png', alt='Captura fotográfica análoga y digital')

    p.mb-4(data-aos="fade") La captura de la imagen en las cámaras fotográficas análogas y digitales es diferente. En el siguiente recurso se puede apreciar en detalle la diferencia entre las dos.
    
    .row.justify-content-center(data-aos="fade-down")
      .col-md-8
        SlyderF(columnas="col-12")
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema3-tarj1.png' alt='Cámara análoga')
            h2.text-center Cámara análoga
            p.text-center Utiliza un rollo fotográfico sensible a la luz, que ingresa por el lente y la imagen latente queda impresa por la oxidación de la emulsión adherida al rollo fotográfico. Esa oxidación se da por un proceso químico dado por la luz y los haluros de plata dispuestos en el rollo, que posteriormente debe ser revelada e impresa en papel para poder apreciar la imagen como resultado de la toma fotográfica.
          .tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema3-tarj2.png' alt='Cámara digital')
            h2.text-center Cámara digital
            p.text-center Utiliza un sensor digital que está formado por millones de células fotosensibles, donde se transforma la luz en impulsos electrónicos, creando digitalmente la imagen. Al tomarse una fotografía cada celda del sensor analiza la luz que le llega del exterior por el lente; de esta manera la fotografía digital es más fácil, práctica y editable.
   
    Separador


    // 3.1
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.1    Introducción: definición e historia

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10.bg-suave.p-md-4.p-3.mb-2
        figure
          img.px-md-5(src='@/assets/curso/tema3-1-img.jpg', alt='Diagrama')

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-down")
        .cajon2.color-primario.personalizado.px-md-5.py-md-0.p-4
          .bloque-texto-b__texto
            h4.mb-0 Definir la fotografía es asumirla como arte sumada con la técnica, es decir, elegir el mejor escenario para obtener imágenes duraderas debido a la acción de la luz en los diferentes formatos de captura de imágenes. Ellos pueden ser análogos o digitales. 

    p(data-aos="fade") Querer hablar de la historia de la fotografía es un tema largo y ancho en la historia de la humanidad. Por ello, es preciso mencionar que el deseo del hombre por representar la realidad no lo detuvo hasta que la simplificó con el manejo y poder de la luz sobre un dispositivo tangible como la cámara fotográfica. Al referirse a que el tema puede ser largo tanto de ancho como de largo figurativamente, hace referencia a que el proceso de captura de la imagen también fue una invención del dispositivo que permitiera esta realidad. 

    p.mb-4(data-aos="fade") A continuación, se integra una línea de tiempo de la fotografía a lo largo de la historia de la humanidad.

    .bg-suave.py-5.px-1.px-lg-4
      figure
        img(src='@/assets/curso/tema3-1-figu.svg', alt='Diagrama')

    Separador


    // 3.2
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2   Usos y aplicaciones

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p El uso de la fotografía fue creado para la representación de la realidad desde su creación y hasta hoy la fotografía ha construido una necesidad comunicativa importante en la humanidad. Por ello, se debe pensar que no solo es una herramienta que permite reflejar y eternizar diferentes momentos de la vida, también es una herramienta de comunicación directa con un lenguaje universal que es el de la imagen y, que en su práctica y utilidad es de todos.
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 La digitalización de la imagen en los avances tecnológicos ha puesto a que la fotografía sea cada vez más utilizada de manera doméstica y de entretenimiento. Pero hay otras utilidades de la misma con carácter científico completamente académico, que sirve para la construcción del conocimiento. También ha sido utilizada por la publicidad para sus proyectos publicitarios, denotando con ello, que la práctica fotográfica es amplia, alta y creciente. 
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/tema3-2-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Dentro de estos usos y aplicaciones existen diversos tipos de fotografías, cada una de ellas con su desarrollo y producción completamente particular y específico, buscan dar la mejor comunicación a su público de interés, encontrándose las siguientes:

    .row.justify-content-center.bg-color-primario2
      .col-lg-10
        SlyderB.py-5(:datos="datosSlyder")

    Separador


    // 3.3
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.3   Concepto y operación

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p El concepto fotográfico es un requerimiento que lo da la necesidad comunicativa de la fotografía y su público, es decir, qué desea comunicar el fotógrafo con la imagen. Como se vio anteriormente, cada aplicación fotográfica tiene su contexto, personajes y situaciones, y la manera en cómo se consigue esa representación de la realidad hecha fotografía será responsabilidad del fotógrafo para ubicarse en el lugar, momento y hora adecuada para cada uno de los diferentes conceptos fotográficos. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-3-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Es importante detallar de forma específica los requerimientos necesarios para el manejo de fotografía como lo son:


    .titulo-tercero.titulo-tercero__4.mb-4(data-aos="fade-right")
      h3.mb-0 Cámaras y sus componentes
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .tarjeta.bg-acento-botones.p-4.mb-4(data-aos="fade-down")
      h2.text-center.mb-5 Cámaras y sus componentes
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="El visor")
          .col-md-5.mb-4.mb-md-0
            h4 El visor
            p Es por donde la mirada observa y encuadra la toma fotográfica. En sí, se debe interpretar qué ve la cámara fotográfica.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea1.png', alt='El visor')
        .row.justify-content-center(titulo="El objetivo")
          .col-md-5.mb-4.mb-md-0
            h4 El objetivo
            p Es el lente del cuerpo de la cámara, es por donde entra la luz a la cámara para que el sensor registre de manera correcta la imagen latente dada por la luz. Lo que el lente proporciona y genera en la cámara es dar diferentes perspectivas en la imagen fotográfica. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea2.png', alt='El objetivo')
        .row.justify-content-center(titulo="El sensor")
          .col-md-5.mb-4.mb-md-0
            h4 El sensor
            p Componente principal dentro de muchos que intervienen en la buena calidad de la toma fotográfica. Es el encargado de capturar la luz y convertirla en corriente eléctrica para generar una imagen digital.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea3.png', alt='El sensor')             
        .row.justify-content-center(titulo="El diafragma")
          .col-md-5.mb-4.mb-md-0
            h4 El diafragma
            p Son las cortinillas encargadas con sus movimientos físicos de cerrar y abrir según sea la indicación realizada por el operador de la cámara, lo que permitirán mayor o menor cantidad de luz hacia el sensor según la necesidad de la toma fotográfica, como resultado de la iluminación presente de la escena. También su apertura del diafragma hará que la nitidez de la imagen se amplíe.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea4.png', alt='El diafragma') 
        .row.justify-content-center(titulo="El obturador")
          .col-md-5.mb-4.mb-md-0
            h4 El obturador
            p Son cortinillas encargadas de bloquear la luz al sensor. Su movimiento permite el ingreso de la luz del exterior por el lente, lo que hace que el sensor registre la luz para convertirla en imagen digital. Este proceso ya está antecedido por el funcionamiento del diafragma, por lo tanto, el obturador finalmente hará posible en la fotografía que ese instante de la realidad quede plasmando y pueda quedar registrado en la cámara fotográfica. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea5.png', alt='El obturador') 
        .row.justify-content-center(titulo="La pantalla")
          .col-md-5.mb-4.mb-md-0
            h4 La pantalla
            p Se le conoce como <em>display</em> y es el encargado de permitir al fotógrafo visualizar la imagen que la cámara está asumiendo por el lente. En las cámaras actuales es la que permite visualizar también el menú y los parámetros configuración de la cámara. Se debe tener en cuenta que su utilización va a agotar de manera amplia la batería del cuerpo de la cámara. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea6.png', alt='La pantalla') 
        .row.justify-content-center(titulo="Los botones y diales de control")
          .col-md-5.mb-4.mb-md-0
            h4 Los botones y diales de control
            p Son los diferentes mecanismos físicos que harán que la cámara fotográfica opere de manera específica, según sea la necesidad del fotógrafo. Cada botón tiene una función específica y haciendo referencia al dial, este es la perilla superior donde según su posición respecto al indicador da una función determinada para el manejo de la cámara. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea7.png', alt='Los botones y diales de control') 
        .row.justify-content-center(titulo="Lentes y objetivos")
          .col-md-5.mb-4.mb-md-0
            h4 Lentes y objetivos
            p Son parte fundamental para la buena calidad de las fotografías, si bien la cámara será la que opera y captura la imagen, el lente es el que recoge y dirige. La luz debe llegar al sensor, de manera que su construcción y el material de cristal con el que se está elaborado más la amplitud del diafragma incidan en el resultado final de la fotografía. 
            p Lo anterior se establece desde las cámaras DSRL, que tienen cuerpo independiente, lo cual se da porque tienen lentes intercambiables que se utilizan según la necesidad de la toma fotografía y propuesta artística. Existen cámaras compactas que tienen su lente fijo y que no habrá manera de proponer artísticamente alteraciones en la imagen final capturada, como sí es posible con lentes intercambiables.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-linea8.png', alt='Lentes y objetivos') 
        .row.justify-content-center(titulo="Los lentes fotográficos")
          .col-md-10.mb-4.mb-md-0
            h4 Los lentes fotográficos
            p Son herramientas fundamentales para la imagen final, tanto como expresión creativa como para la practicidad de la toma fotográfica. La amplia gama de lentes a disposición hace posible que todas la necesidades y exigencias fotográficas sean posibles. Es importante mencionar que los diferentes lentes tienen diversos ángulos de toma fotográfica. Todos los lentes se miden en mm (28 mm, 50 mm) y cada uno de ellos tiene su ángulo y amplitud de toma. Cada color en la siguiente imagen representa un ángulo de toma según su valor en mm.
          .col-md-8
            figure
              img(src='@/assets/curso/tema3-3-linea9.png', alt='Los lentes fotográficos')                                     

    p.mb-4(data-aos="fade") Donde los diferentes tipos de lentes son:

    .tarjeta.bg-secundario.mb-5(data-aos="fade-down")
      SlyderA.py-5.px-md-0.px-4
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Tipos de lentes
            h4 Gran angular 18 mm – 28 mm
            p Es un lente de una utilización muy específica, ya que altera la imagen y cambia la forma de los objetos de manera que los desproporciona. Igualmente, por esas condiciones mencionadas sirve para generar interés artístico y funcionalmente se puede tener buenas tomas en lugares estrechos. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-slide1.png', alt='Gran angular 18 mm – 28 mm')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Tipos de lentes
            h4 Lente angular 35 mm
            p Va desde 35 mm hasta los 45 mm. Como se puede ver en la siguiente imagen, alterar las formas de los cuerpos fotografiados tiene también una utilidad muy específica.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-slide2.png', alt='Lente angular 35 mm')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Tipos de lentes
            h4 Lente normal 50 mm
            p Es el lente de preferencia y es un ángulo de toma normal. Es importante mencionar que, para todos los lentes intercambiables, su apertura en diafragma incide en la cantidad de luz que va a llegar al sensor. Estas lentillas del diafragma existen en el lente, por lo que entre más apertura el lente será más costoso.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-slide3.png', alt='Lente normal 50 mm') 
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Tipos de lentes
            h4 Teleobjetivo 100 mm
            p Este es un tipo de lente que permite registros fotográficos a una amplia distancia. Por su extensión y construcción física deben ser de amplio diafragma, de ser así sería demasiado opaco como se le denomina fotográficamente hablando a lentes con baja apertura de diafragma.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-slide4.png', alt='Teleobjetivo 100 mm')  
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Tipos de lentes
            h4 Teleobjetivo 500 mm
            p Esta clase de objetivos son de un alto valor económico, por lo que su utilización será para fotógrafos especialistas en determinadas tomas, como avistamiento de aves, actividades deportivas, entre otras. Su construcción es de un material de color blanco para no tener inconvenientes con la dilatación de sus materiales en contacto prolongado con el sol, pues es un lente para tomar fotografías en exteriores.
          .col-md-5
            figure
              img(src='@/assets/curso/tema3-3-slide5.png', alt='Teleobjetivo 500 mm')  


    .titulo-tercero.titulo-tercero__1.mb-4(data-aos="fade-right")
      h3.mb-0 Iluminación 
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") En fotografía es la materia prima, sin ella no podrá ser posible que la cámara fotográfica registre una imagen. Se debe recordar que es el sensor de la cámara fotográfica el que recoge la luz que llega del exterior. Cuando se hace referencia a la iluminación en fotografía se debe tener en cuenta las fuentes lumínicas. Para estos asuntos fotográficos se tendrá en cuenta: 

    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right")
        .nav-holder.align-items-center.px-0
          figure
            img(src="@/assets/curso/tema3-3-tarj1.png", alt="Escáner")
          .text.p-lg-2.p-3
            .row.px-3.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
              .h5.mt-4.mt-lg-0.mb-2 La luz natural
              p Producida por los rayos de sol.
      .col-md-5.mb-4(data-aos="fade-left")
        .nav-holder.align-items-center.px-0(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          figure
            img(src="@/assets/curso/tema3-3-tarj2.png", alt="Escáner")
          .text.p-lg-2.p-3
            .row.px-3.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
              .h5.mt-4.mt-lg-0.mb-2 La luz artificial
              p Producida por fuentes lumínicas artificiales.     

    .row.mb-md-4
      .col-md-7.mb-4(data-aos="fade-right")
        p Cualquiera de las dos serán determinantes para la construcción de la imagen en la cámara fotográfica, pues sin presencia de luz no habrá información suficiente para que el sensor la convierta en imagen. El trabajar con fuente de iluminación natural es más complicado que con luz artificial, pues se debe considerar que es una luz que está presente a determinadas horas en el día, además de la existencia de nubes, las cuales cambian las condiciones lumínicas; lo que finalmente hará no controlar nunca la luz natural. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-3-img2.png', alt='Imagen decorativa')

    .row.mb-md-4
      .col-md-5.mb-4(data-aos="fade-right")
        img.mb-2(src='@/assets/curso/tema3-3-img3.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        .cajon2.color-primario.personalizado.px-md-5.py-md-0.p-4
          .bloque-texto-b__texto
            h4.mb-0 Por supuesto, es una luz que se tiene presente en el día y para la generalidad de tomas fotográficas funciona haciendo un buen uso de ella. Pero en fotografías más estrictas como la publicitaria, hace falta adicionar a las condiciones de luz natural unas luces artificiales que potencien la escena a fotografiar.

    .row.mb-md-5
      .col-md-7.mb-4(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4 
          p.mb-0 Por otra parte, la iluminación artificial es una luz que se puede controlar, poner, quitar o alterar; lo cual hace que favorezca por sus múltiples maneras de iluminar el escenario. En el universo de las luces artificiales cualquiera se puede utilizar para la fotografía; aunque hay por supuesto muchas dedicadas y especializadas para fotografía, desde una vela hasta un bombillo de poste de luz puede favorecer la toma fotográfica. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-3-img4.png', alt='Imagen decorativa')


    .titulo-tercero.titulo-tercero__4.mb-4(data-aos="fade-right")
      h3.mb-0 Sensibilidad (Norma ISO) 
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row.mb-md-4
      .col-md-7.mb-4(data-aos="fade-right")
        p La sensibilidad hace referencia a la posibilidad electrónica que tiene la cámara fotográfica de utilizar la luz que desde el exterior llega al sensor. Este es un mecanismo integrado en la cámara que se denomina ISO (International Organization for Standardization), el cual tiene valores referentes desde 100 hasta 16000 según modelos de cámaras y autonomías de esta. 
        p Los que significa que en condiciones normales de luz para la toma fotográfica sus valores pueden ser de 100 hasta 500 ISO. Pero si en la toma fotográfica su escenografía no cuenta con la suficiente iluminación tendrá que de manera autónoma darle o programarle valores mayores (700-16000 ISO) a la cámara, para que desde su sistema integrado electrónico le otorgue luz y la fotografía final tenga buen resultado.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-3-img5.png', alt='Imagen decorativa')

    .bg-suave.py-5.px-1.px-lg-4.mb-4
      h2.text-center.mb-4 Cámara iso / Guía de sensibilidad del sensor
      figure
        img(src='@/assets/curso/tema3-3-figu.svg', alt='Cámara iso / Guía de sensibilidad del sensor')

    p(data-aos="fade") Todo este proceso es electrónico y debe indicarle a la cámara desde el menú y hay que tener en cuenta que entre más valor de ISO se utilice la imagen final tendrá lo que en fotografía se llama “grano”, lo cual es una textura similar a granos perceptibles en la fotografía que no van a incidir en la nitidez de la misma, pero sí en la percepción de textura en la imagen. Esto como resultado de la utilización de un ISO alto, ya que entre más ISO más textura granulada tendrá la imagen final.

    Separador


    // 3.4
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.4   Medición y exposición

    .row.mb-5
      .col-md-7.mb-4(data-aos="fade-right")
        p Está sometida a dispositivos electrónicos en su mayoría externos y hace referencia a valores adecuados que se deben manejar en la cámara para obtener una buena toma fotográfica. Estos valores los dará un exposímetro que hará lectura de la cantidad de luz que llega al sensor. Como se ha dicho, la fotografía es el manejo y utilización de la luz y para ello, la cámara tiene unos dispositivos que sirven para detener el exceso de luz y ausencia de esta. Estos mecanismos son el diafragma y el obturador, anteriormente mencionados. 
        .cajon.color-primario.p-4
          p.mb-0 Debe haber un equilibrio en valores asignados para cada mecanismo que hará que la toma fotográfica sea adecuada, pues un ingreso de mucha luz al sensor hará que la fotografía tenga una sobreexposición y se verá negra, debido a que llega mucha luz y satura el sensor. También se puede dar lo contrario, una subexposición que será una fotografía blanca por la ausencia de luz en el sensor, dicho esto, la medición se hace desde un exposímetro externo que asumirá la cantidad de luz que le llega al sensor de la cámara, indicándole en su pantalla digital del exposímetro qué valor de diafragma y obturador debe manejar la cámara.
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/tema3-4-img.png', alt='Imagen decorativa')

    .titulo-tercero.titulo-tercero__4.mb-4(data-aos="fade-right")
      h3.mb-0 Prioridad de apertura o velocidad
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Este punto se refiere a la velocidad en que se mueve el obturador, que es un mecanismo de cortinillas ubicadas horizontalmente frente al sensor, en el siguiente recurso se detallan los elementos.

    .row.justify-content-center.bg-color-primario2.mb-5
      .col-lg-10
        SlyderB.py-5(:datos="datosSlyder2")

    


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Fotografía publicitaria',
        texto:
          'Su característica es dar importancia al producto comercial, es ahí donde focaliza toda su atención escénica, es decir, en decoración y puesta en escena en la producción técnica: nitidez, encuadre o angulación. Este uso de la fotografía es de un amplio lenguaje, con infinitas propuestas en la utilización de espacios, personajes, artículos, decorados; pero con un máximo de preocupación por una muy buena calidad de la imagen fotográfica final. ',
        imagen: require('@/assets/curso/tema3-2-slide1.jpg'),
      },
      {
        titulo: 'Fotografía documental',
        texto:
          'Busca relatar algún aspecto de la vida, procura encontrar un diálogo de significación entre los acontecimientos y el relato visual propuesto en la fotografía. Es una fotografía en sitio, es decir, necesita desarrollarse en el lugar como escenario propio de la fotografía documental.',
        imagen: require('@/assets/curso/tema3-2-slide2.jpg'),
      },
      {
        titulo: 'Fotografía paisajística',
        texto:
          'Busca exaltar la belleza natural del paisaje, la mayoría de las fotografías son tomadas en planos generales y deben ser en exterior. Como condición esencial de toda fotografía es necesario tener una muy buena iluminación. Aquí hay que decir que el trabajo fotográfico con luz natural puede dificultar el buen registro fotográfico.',
        imagen: require('@/assets/curso/tema3-2-slide3.jpg'),
      },
      {
        titulo: 'Fotografía científica',
        texto:
          'Fotográficamente es un recurso fundamental para la documentación de los procesos científicos. Sirve como documento y archivo, y es muy importante, ya que conforma una base de datos catalogable.',
        imagen: require('@/assets/curso/tema3-2-slide4.jpg'),
      },
      {
        titulo: 'Fotografía artística',
        texto:
          'Es una fotografía que permite una apreciación única de la realidad al fotógrafo. El valor artístico y expresivo son los más fuertes soportes para esta clase de fotografías, ya que una fotografía puede no tener en cuenta las reglas de composición fotográfica, debido a que su carácter artístico le proporciona esta libertad narrativa.',
        imagen: require('@/assets/curso/tema3-2-slide5.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Prioridad de apertura o velocidad',
        texto:
          'Su movimiento permite la entrada de la luz que ya ha pasado por el diagrama al sensor y, ese tiempo de duración de luz que está llegando al sensor será la que asumirá el sensor y transformará en electricidad para construir electrónicamente la imagen.',
        imagen: require('@/assets/curso/tema3-4-slide1.jpg'),
      },
      {
        texto:
          'Como se ha mencionado, el obturador y su apertura permiten la toma fotográfica, pero también tendrá valores de velocidad de apertura para buscar un control de luz y permitir tener un comportamiento específico de lo que ocurre en esta, es decir, poder a altas velocidades (500-1000) de utilización del obturador,hacer lo que en fotografía se le conoce como congelados a los elementos en movimiento.',
        imagen: require('@/assets/curso/tema3-4-slide2.jpg'),
      },
      {
        texto:
          'También, por el manejo de la velocidad lenta (1 o 2 segundos) en obturación, se pueden hacer efectos fotográficos de barrido y de movimiento de objetos, permitiendo tener efectos en la imagen creativos y vistosos. ',
        imagen: require('@/assets/curso/tema3-4-slide3.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
