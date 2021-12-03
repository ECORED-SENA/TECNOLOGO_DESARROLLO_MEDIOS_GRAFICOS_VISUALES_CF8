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
            h4.mb-0 El uso del color en impresos se genera a partir del modelo de color CMYK: Cyan, Magenta, Yellow y Key, que traducido significa cian, magenta, amarillo y color clave/negro, se eligió la letra K para diferenciarse del color azul (Blue) y no generar confusiones.      
        p La imagen digital está representada por impulsos electrónicos cuyo lenguaje es binario. Cuando se habla del lenguaje binario propio de los sistemas digitales se hace referencia a que ese lenguaje se representa en números (1 y 0). El mismo lenguaje que tienen los pixeles y los bits que son la suma de esos píxeles y construyen una retícula de bits, los cuales son los encargados de darle una buena, regular o mala calidad a la imagen digital.
        p Ahora bien, este lenguaje digital de retícula de bits permite múltiples recursos en usos, almacenamiento y manipulación en el aspecto final en la imagen digital. Lo que hace de la misma un recurso favorable para su utilización en muchos contextos laborales, sociales, culturales y del entretenimiento.
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
            p Hace referencia al contraste y tonalidad gradual, en caso de ser baja, la imagen desaparece y en caso de ser mayor, mejora la calidad
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
        p La digitalización de la imagen, la utilización de los diferentes dispositivos de almacenamiento y la circulación hacen que los tipos de imágenes tengan diferencias significativas en su matriz. En las imágenes fotográficas digitales su matriz es una retícula de píxeles que se asume como un mapa de bits; la suma de píxeles para la construcción de la imagen latente. 
        p Con el fin de hablar acerca de los dos tipos de imágenes que se tomarán como referencia en este componente formativo se precisa acerca de las imágenes de mapa de bits e imágenes vectorizadas.  
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-2-img.png', alt='Imagen decorativa')  


    .titulo-tercero.titulo-tercero__3.mb-4(data-aos="fade-right")
      h3.mb-0 Imágenes de mapa de bits
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
        
    p.mb-4(data-aos="fade") Esta categoría de imágenes que su matriz es un mapa de bits tiene los siguientes formatos de archivos donde cada uno tiene diferente capacidad de contener cierta cantidad de bits según su utilidad y circulación, es decir, visualización:

    





  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
