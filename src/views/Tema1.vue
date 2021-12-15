<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Imagen

    figure.mb-4
      img(src='@/assets/curso/tema1-banner.png', alt='Imagen')

    p.mb-4(data-aos="fade") La digitalización de la imagen requiere de una comprensión en su construcción y elaboración. Es importante entender que son procesos electrónicos, los cuales se deben entender cómo suceden, cómo se procesan y cómo se expresan en su interior para poder interpretarlos desde el exterior, es decir, entender la imagen que sobre el dispositivo electrónico aparece, a continuación, se detallan algunos elementos complementarios sobre el concepto de imagen. 
   
    .row.justify-content-center.tarjeta.bg-suave(data-aos="fade-down") 
      .col-md-11
        SlyderE.py-4.mb-4(indicadores="derecha" data-aos="fade-down")
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              p 
                strong La imagen 
                | es un objeto en sí mismo y como tal tiene vida propia, de igual forma, remite a otros objetos. Se trata de una representación “material” y en el instante en que es creada adquiere un dualismo, es decir, por un lado es un objeto que existe y tiene un espacio en el mundo y por otro lado, es el objeto al cual se refiere. 
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-slide1.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              p Esto permite introducirse al concepto de transparencia de una imagen cuando menos se recuerde que la imagen (fotografía, pintura,) es un objeto en sí mismo, la transparencia será mayor, pero cuando dicha imagen se oscurece podrá percibirse el aparato, en ese momento el ser humano se inclina a pensar en el objeto en sí y no en su referente.
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-slide2.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              p Por lo general, todas las imágenes que están al alcance de la vista humana contarán con un referente, es decir, un objeto referenciado al que copian, ya que será muy complejo construir o diseñar una imagen de algo que no se conoce, es importante mencionar que dicho referente no tiene porqué ser simbólico, si no se tuviese un referente figurativo no existiría una comunicación en términos de imagen.  
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-slide3.png', alt='Imagen decorativa')     
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              p En este escenario figurativo se pueden tomar como referencia los signos en función de su correlación con un objeto determinado: iconos, índices. signos. Los iconos (son los que más se utilizan en términos de imagen), ya que son símbolos que presentan algún tipo de semejanza en el aspecto con su objeto de referencia. Etimológicamente el término icono proviene del griego eikon (copia o analogía).
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-slide4.png', alt='Imagen decorativa')  
          .row.justify-content-center
            .col-md-6.mb-4.mb-md-0
              p La imagen podría ser el soporte de la comunicación visual, ya que esta materializa una fracción de un entorno óptico (del universo perceptivo) susceptible de suplir a través del tiempo y la cual constituye uno de los mecanismos principales de los medios de comunicación actual. 
            .col-md-5
              figure
                img(src='@/assets/curso/tema1-slide5.png', alt='Imagen decorativa')  

    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Definición y características de la imagen

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        .cajon2.color-primario.personalizado.px-md-5.py-md-0.p-4.mb-3
          .bloque-texto-b__texto
            h4.mb-0 La etimología del vocablo imagen proviene del latín imago, con el mismo significado. Una imagen es la figura, representación, semejanza y apariencia de algo según se registra en la Real Academia de la Lengua.
        p La imagen digital está representada por impulsos electrónicos cuyo lenguaje es binario. Cuando se habla del lenguaje binario propio de los sistemas digitales se hace referencia a que ese lenguaje se representa en números (1 y 0). El mismo lenguaje que tienen los pixeles y los <em>bits</em> que son la suma de esos píxeles y construyen una retícula de <em>bits</em>, los cuales son los encargados de darle una buena, regular o mala calidad a la imagen digital.
        p Ahora bien, este lenguaje digital de retícula de <em>bits</em> permite múltiples recursos en usos, almacenamiento y manipulación en el aspecto final en la imagen digital. Lo que hace de la misma un recurso favorable para su utilización en muchos contextos laborales, sociales, culturales y del entretenimiento.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-1-img.png', alt='Imagen decorativa')    

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .cajon.color-primario.p-4
          p.mb-0 Las características en la imagen digital son determinantes para la calidad de esta. Parámetros como profundidad de color, modos de color, tamaño de la imagen y resolución son factores que inciden directamente en calidad de la imagen digital.

    p.mb-5(data-aos="fade") Se pueden encontrar dos tipos de características de la imagen: cuantitativas y cualitativas. Conozca más sobre cada una de ellas.


    .titulo-tercero.titulo-tercero__1.mb-4(data-aos="fade-right")
      h3.mb-0 Cuantitativas
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Regidas por los siguientes elementos:

    .row.justify-content-center
      .col-lg-8.col-md-9.col-10
        .row.mb-4.mb-md-5(data-aos="fade-down")
          .col-lg-6.mb-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-1-tarj1.png')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.text-white.mb-0 Grado de figuración
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4 Grado de figuración
                  p.mb-0 Corresponde a una idea representada por una imagen de objetos o individuos conocidos intuitivamente por la vista humana, haciendo referencia a un mundo exterior y con énfasis en el concepto de verosimilitud aparencial, con relación a un objeto que es representativo.
          .col-lg-6.mb-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-1-tarj2.png')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.text-white.mb-0 Grado de iconicidad
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4 Grado de iconicidad
                  p.mb-0 Es la representación de un objeto representado, teniendo en cuenta la identidad entre estos dos.
          .col-lg-6.mb-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-1-tarj3.png')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.text-white.mb-0 Grado de complejidad
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4 Grado de complejidad
                  p.mb-0 Al momento en que una imagen presenta un mayor número de elementos hace que esta sea compleja, lo cual en ocasiones no permite que su comunicación sea clara.
          .col-lg-6.mb-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-1-tarj4.png')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.text-white.mb-0 Tamaño
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4 Tamaño
                  p.mb-0 Se centra no en el tamaño real de una imagen, sino en el porcentaje que ocupa en el campo visual; si una imagen determinada ocupa entre el 20-30 % empieza a ensombrecer, lo cual dificulta su percepción real.


    .titulo-tercero.titulo-tercero__2.mb-4(data-aos="fade-right")
      h3.mb-0 Cualitativas <span>(dan la capacidad de su existencia)</span>
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Sus características son

    .tarjeta.bg-acento-botones.p-4.mb-4(data-aos="fade-down")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Trama y grano")
          .col-md-5.mb-4.mb-md-0
            h4 Trama y grano
            p La mayoría de las imágenes están formadas por un mosaico en trama, de columnas y filas, y de acuerdo con su tamaño logran ser más o menos visibles (excepto las mentales).
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-linea2.png', alt='Trama y grano')
        .row.justify-content-center(titulo="Factor de cualidad técnica")
          .col-md-5.mb-4.mb-md-0
            h4 Factor de cualidad técnica
            p Hace referencia al contraste y tonalidad gradual, en caso de ser baja, la imagen desaparece y en caso de ser mayor, mejora la calidad.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-linea3.png', alt='Factor de cualidad técnica')
        .row.justify-content-center(titulo="Ruidos ópticos")
          .col-md-5.mb-4.mb-md-0
            h4 Ruidos ópticos
            p Son elementos distorsionantes que no permiten tener una lectura clara de una imagen.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-linea1.png', alt='Ruidos ópticos')
        .row.justify-content-center(titulo="Color")
          .col-md-5.mb-4.mb-md-0
            h4 Color
            p Cuando se percibe una imagen a blanco y negro o a color se puede decir que conforma un escenario de contrapuestos, donde cada cual comunica una lectura de forma diferente. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-linea4.png', alt='Color')
        .row.justify-content-center(titulo="Grado de pregnancia")
          .col-md-5.mb-4.mb-md-0
            h4 Grado de pregnancia
            p Es la cualidad que posee una imagen para aplicar como un todo, sin importar la capacidad expresiva o estética de esta, y dependiendo de su grado de pregnancia pueden ser imágenes ricas o imágenes pobres.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-linea5.png', alt='Grado de pregnancia')
        .row.justify-content-center(titulo="Marcas estéticas")
          .col-md-5.mb-4.mb-md-0
            h4 Marcas estéticas
            p Hacen énfasis en los elementos que hacen parte del campo de esparcimiento del sentido de la imagen, es decir, la sensación de placer que se produce en un observador y su capacidad de reflexión acerca de la misma (reflexión sobre el medio). 
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-1-linea6.png', alt='Marcas estéticas')                  

    p.mb-4(data-aos="fade") Las marcas e imágenes resultantes más comunes son:

    SlyderD(:datos="datosSlyder")

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  Tipos de imagen y formatos (extensiones de archivo)

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Una imagen 
          span.etiqueta es una representación a nivel visual de un determinado elemento,
          |  lo cual se obtiene al emplear ciertas técnicas que están relacionadas con el arte, la fotografía, el video, el diseño y demás disciplinas.
        p La digitalización de la imagen, la utilización de los diferentes dispositivos de almacenamiento y la circulación hacen que los tipos de imágenes tengan diferencias significativas en su matriz. En las imágenes fotográficas digitales su matriz es una retícula de píxeles que se asume como un mapa de <em>bits</em>; la suma de píxeles para la construcción de la imagen latente. 
        p Con el fin de hablar acerca de los dos tipos de imágenes que se tomarán como referencia en este componente formativo se precisa acerca de las imágenes de mapa de <em>bits</em> e imágenes vectorizadas.  
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-2-img.png', alt='Imagen decorativa')  


    .titulo-tercero.titulo-tercero__5.mb-4(data-aos="fade-right")
      h3.mb-0 Imágenes de mapa de <em>bits</em>
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1-2-img2.png', alt='Imagen decorativa') 
      .col-md-7.mb-4(data-aos="fade-left")
        p También conocidas como imagen 
          italic-strong bitmap, 
          | son imágenes que se componen por un conjunto que se conoce como píxeles, cada uno de ellos tiene un color y luminosidad propia, y al momento de unirse en una composición construyen una imagen determinada.
        p Este tipo de imagen cuenta con una gama mayor de colores y de tonos que las imágenes vectoriales, por tanto, su uso específico es en la fotografía. Es el tipo de imagen que se crea en los escáner, cámaras fotográficas y programas de dibujo y de edición de fotos, para referir a 
          italic Adobe Photoshop.
        
    p.mb-4(data-aos="fade") Esta categoría de imágenes que su matriz es un mapa de <em>bits</em> tiene los siguientes formatos de archivos donde cada uno tiene diferente capacidad de contener cierta cantidad de <em>bits</em> según su utilidad y circulación, es decir, visualización:

    .row.mb-5
      BotonesA


    .titulo-tercero.titulo-tercero__6.mb-4(data-aos="fade-right")
      h3.mb-0 Imágenes vectoriales
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Son imágenes que se conforman por objetos geométricos independientes, tales como curvas, líneas, polígonos, etc., dichos objetos son considerados funciones matemáticas o vectores, los cuales presentan diversas características como color, forma, posición, entre otras. Son imágenes creadas en programas de dibujo vectorial o de diseño, estos pueden ser 
          italic Corel Draw, Adobe Illustrator e Inkscape, 
          | estos <em>softwares</em> se utilizan para la composición de logotipos, dibujos y rótulos. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-2-img3.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Cuentan con una gran ventaja a diferencia de las imágenes de mapa de <em>bits</em>:

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-md-4.mb-4
        img(src='@/assets/curso/tema1-2-fig1.svg', alt='Vector')
      .col-md-2.mb-4
        h1.text-center VS.  
      .col-md-4.mb-4
        img(src='@/assets/curso/tema1-2-fig2.svg', alt='Bitmap')

    p.mb-4(data-aos="fade") Las imágenes vectorizadas pueden ampliarse a cualquier tamaño y nunca la imagen sufre el efecto de pixelado, como característica principal se puede mencionar que están determinadas por rellenos y sus contornos son bien definidos y al momento de visualizarse en cualquier dispositivo de salida no pierden sus atributos y calidad.

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-md-10  
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1-2-tarjeta.svg' alt='AvatarTop')
          .row.align-items-center.tarjeta.fondo-texto-destacado.p-4
            .col-lg-1
            .col-lg-4
              h1 ¿Por qué sucede esto?
            .col-lg-7
              p Porque su configuración es matemática, por lo que permite manipular las propiedades del objeto, ya que su redimensión se configura por líneas, puntos y curvas sin tener intervención de la resolución del monitor, de manera que nunca perderá nitidez en las pantallas digitales. 

    p.mb-4(data-aos="fade") Los formatos de archivo de imágenes vectoriales son: 

    .row.mb-5
      BotonesB

    p.mb-4(data-aos="fade") El siguiente video consolida la temática sobre imágenes de mapa de <em>bits</em> e imágenes vectoriales.

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/80dYcJEk-eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador


    // 1.3
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3  Resolución, tamaño y dimensión

    p.mb-4(data-aos="fade") El siguiente recurso integra los conceptos de soporte para la apropiación de estos tres elementos: resolución, tamaño y dimensión.

    .tarjeta.bg-secundario(data-aos="fade-down")
      SlyderA.py-5.px-md-0.px-4
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Resolución
            p Al tener en cuenta la resolución de una imagen se hace referencia al grado de detalle que tiene la imagen digital; en otras palabras, a la calidad de esta. Si se recuerda, la imagen digital se construye de la suma de píxeles, es decir; una retícula de mapa de <em>bits</em>. Pero esos píxeles deben ocupar un área determinada, un área establecida, digitalmente hablando (lo que ocupa un área determinada por los límites propios de la imagen).
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide1.png', alt='Resolución')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Lo anterior quiere decir que entre más píxeles tenga una imagen mayor será su nitidez; en palabras técnicas se asume como PPP = píxeles por pulgadas. Lo cual indica que entre más píxeles por pulgada contenga la fotografía va a tener mejor nitidez la imagen. Un ejemplo de ello es la siguiente fotografía, donde se puede apreciar dos imágenes idénticas en tamaño, pero con una diferencia significativa en el PPP, denotando que una imagen (72 PPP) tiene más píxeles que la otra (300 PPP).
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide2.png', alt='Resolución')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Tamaño de la imagen
            p La imagen digital tiene una ventaja sobre otros tipos de imagen análoga como la pintura y el dibujo y es que puede cambiar su tamaño desde su archivo y dimensión original. Pero la ampliación de la fotografía estará determinada por la resolución con que se toma la fotografía. Cabe recordar que entre más píxeles por pulgada, mejor será la calidad de la imagen, dando la posibilidad de ampliar por escala la imagen fotográfica sin perder calidad en el proceso.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-3-slide3-a.svg', alt='Fotografía digital de 1024×683 pixeles')
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide3-b.svg', alt='Fotografía digital de 256x171pixeles')    
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Dimensión
            p La amplitud o tamaño de la imagen es directamente proporcional al número de PPP (número de píxeles) por pulgada que se encuentre en ella. Al cambiar de tamaño una imagen digital los píxeles se estiran, dejando su <b>yuxtaposición</b> del uno sobre el otro para colocarse uno junto al otro; lo cual hace que la imagen en amplitud se extienda, pero por tener muchos píxeles la calidad sigue siendo buena.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-3-slide4.png', alt='Dimensión')

    Separador


    // 1.4
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4  Modos y profundidad de color

    p.mb-4(data-aos="fade") Hablar sobre la profundad de color es hacer referencia al número de <em>bits</em> que necesita una imagen para codificar y guardar la información de color de cada píxel en una imagen digital. Por esta razón, se representa que cada píxel tiene unos valores (a x b x c) donde a y b son el alto y ancho de un píxel y c su profundidad, reflejándose de la siguiente manera:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.col-lg-8
        figure.mb-4
          img(src='@/assets/curso/tema1-4-figura.svg', alt='Imagen')

    p.mb-5(data-aos="fade") Ahora bien, un <em>bit</em> es una posición de memoria que puede tener como valor 0 o 1. Por lo tanto, se utiliza 1-<em>bit</em> para imágenes en blanco/negro, sin grises (0=color negro, 1= color blanco). Cuanto mayor sea la profundidad de color en <em>bits</em>, la imagen dispondrá de una paleta de colores más amplia.

    .titulo-tercero.titulo-tercero__6.mb-4(data-aos="fade-right")
      h3.mb-0 Los modos de color
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") El color en la imagen digital se refiere a qué cantidad de datos asume un píxel para establecer su color. Se debe recordar que un píxel no solo tiene alto x ancho, también tiene una profundidad y desde ahí se puede interpretar que dentro del píxel hay un contenedor que permite llenar de color. Datos que son reinterpretados por una pantalla de computador, otorgándole color a la imagen digital. En el siguiente video se detalla el manejo de los modos de color.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/5Q3x-PxmSVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador


    // 1.5
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.5 Optimización y compresión de imágenes

    p.mb-4(data-aos="fade") Cuando se habla de la optimización de la imagen se hace referencia a disminuir el tamaño del archivo (imagen digital). Cuando su uso es online se puede descargar rápidamente y de manera efectiva, esto se hace mediante procesos electrónicos con el uso de un plugin o script. Este proceso se puede denominar “compresión de la imagen” y las principales extensiones son:

    .row.mb-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-5-flip1.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4.p-xl-4
              h4 JPEG (<em>Joint Photographis Experts Group</em>) 
              p.mb-0 Este es un formato muy flexible que permite almacenar imágenes con bajo peso y con poca pérdida de información. Utiliza una distribución de 24 <em>bits</em>/píxel, con lo cual cada imagen puede contener 16.777.216 colores. 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-5-flip2.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4.p-xl-4
              h4 GIF (<em>Graphic Interchange Format</em>) 
              p.mb-0 Su característica principal y diferencial es que permite transparencias en el fondo y puede ser animado. Su distribución es de 8 <em>bits</em>/píxel, con lo cual tiene la capacidad de tener 256 colores. 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-5-flip3.svg')})`}")
            .tarjeta-flip__contenido.text-center.p-4.p-xl-4
              h4 PNG (<em>Portable Network Graphic</em>) 
              p.mb-0 Este es el formato de mayor utilización para la Web y su mayor característica es la gran calidad y alta compresión.   

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-md-10  
        .tarjeta-avatar-b.tarjeta-b2.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1-5-tarjeta.svg' alt='AvatarTop')
          .row.align-items-center.tarjeta.fondo-texto-destacado2.p-4
            .col-lg-1
            .col-lg-4
              h1.mb-lg-0 El objetivo principal de formatear una imagen es:
            .col-lg-7
              p.mb-0 Hallar el equilibrio entre el tamaño del archivo menor y una calidad aceptable, de igual forma, los dos aspectos principales a tener en cuenta son el formato de archivo y el tipo de compresión que se utilizará.

    p.mb-4(data-aos="fade") En este aparte se realizará un ejemplo de lo que ocurre cuando se comprime demasiado una imagen. Se debe tener en cuenta que si se tiene un nivel de compresión bajo, mayor será la calidad (tamaño del archivo grande), en este caso si se utiliza un nivel de compresión alto, la calidad de la imagen será baja (tamaño de archivo pequeño). Dentro del ejemplo se utilizará una imagen original intacta que mide 2.06 MB.

    .row
      .col-lg-4.col-md-6.mb-4
        img(src='@/assets/curso/tema1-5-img1.svg' alt='AvatarTop')
        h5.bg-suave.text-center.p-3 Baja compresión (alta calidad) – 590 KB JPG
      .col-lg-4.col-md-6.mb-4
        img(src='@/assets/curso/tema1-5-img2.svg' alt='AvatarTop')
        h5.bg-suave.text-center.p-3 Alta compresión JPG (baja calidad) – 68 KB
      .col-lg-4.col-md-6.mb-4
        img(src='@/assets/curso/tema1-5-img3.svg' alt='AvatarTop')
        h5.bg-suave.text-center.p-3 Compresión media (gran calidad) JPG – 151 KB 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .cajon.color-primario.p-4
          p En la 
            strong primera imagen 
            | se observa que es de 590 KB, este tamaño es muy grande para una fotografía, no será proporcional al momento de hacer un montaje, en la 
            strong segunda imagen 
            | es de 68 KB, es aquí donde se debe encontrar un equilibrio del tamaño del archivo y de la tasa de compresión, es decir, la calidad de la imagen.
          p.mb-0 En la 
            strong última imagen 
            | la calidad mejora notablemente, ya que el archivo es de 151 KB, lo cual no es la resolución adecuada para una fotografía de alta resolución, en proporción normal es cuatro veces más pequeña que una foto original con una compresión baja. Se recomienda que para las imágenes en formato PNG (que son las sencillas) estén por debajo de los 100 KB, con el fin de tener un rendimiento óptimo.

    p.mb-4(data-aos="fade") Es importante concebir que hay dos tipos de compresión:

    .tarjeta--container.row.justify-content-center.mb-4
      .col-md-5.tarjeta.color-secundario.text-center.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/tema1-5-icono2.svg', alt='Texto que describa la imagen')
          h2 Optimización con pérdida
          p Hace referencia a un filtro que borra algunos datos de la imagen, lo cual hará que la imagen se degrade, se recomienda hacer una buena reducción proporcional de la imagen, se podrá ajustar la calidad de configuración de la imagen utilizando <em>Adobe Photoshop</em>. 
      .col-md-5.tarjeta.color-primario.text-center.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/tema1-5-icono1.svg', alt='Texto que describa la imagen')
          h2 Optimización sin pérdida
          p Hace referencia a un filtro que comprime los datos de la imagen, haciendo que no se altere la calidad de esta, es muy importante descomprimir antes de pasar a un proceso de renderizado.

    p(data-aos="fade") Se recomienda practicar con las diferentes técnicas de compresión, con el fin de evaluar cuál es la que se acomodará para cada imagen o formato.


</template>

<script>
import BotonesA from '../components/BotonesA.vue'
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesA,
    BotonesB,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'Imagen salpicada (no tiene límites)',
        texto: 'Remite a la imagen pictórica.',
        imagen: require('@/assets/curso/tema1-1-slide1.png'),
      },
      {
        titulo: 'Imagen movida',
        texto:
          'Permite tener la sensación de celeridad e inserta el concepto del tiempo en la fotografía (temporalidad).',
        imagen: require('@/assets/curso/tema1-1-slide2.png'),
      },
      {
        titulo: 'Imagen desenfocada',
        texto:
          'Es una imagen que no es transparente y que, por tanto, muestra el medio (dilución de la imagen).',
        imagen: require('@/assets/curso/tema1-1-slide3.png'),
      },
      {
        titulo: 'Texturización',
        texto:
          'Radica en imprimir la foto sobre un soporte de una explícita textura, lo que otorga a la imagen unos límites oscilantes.',
        imagen: require('@/assets/curso/tema1-1-slide4.png'),
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
