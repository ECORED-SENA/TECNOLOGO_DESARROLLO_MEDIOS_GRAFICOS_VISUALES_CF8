<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dispositivos de captura y salida

    figure.mb-4
      img(src='@/assets/curso/tema2-banner.png', alt='Dispositivos de captura y salida')

    p.mb-4(data-aos="fade") La digitalización no solo llegó con la inmediatez, lo hizo también con su lenguaje, su estructura y su funcionamiento. Los distintos dispositivos que intervienen en la construcción de la imagen digital exponen una necesidad de entender cómo es su recepción y cómo se comportan en su circulación. Los dispositivos de captura se pueden distinguir entre digitalización, captura y la señal analógica, que hace referencia a una fotografía impresa a una señal de video o a una diapositiva.
    
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj1.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 <b>Digitalizador</b> hace referencia a un escáner y a un digitalizador de video, es muy complejo diferenciarlos ya que la captura y digitalización van asociadas en los mismos dispositivos (cámaras y escáner).
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj2.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 En el tamaño de la imagen se debe tener en cuenta el ancho y alto de una imagen tomada, dependerá mucho de la cantidad de megapíxeles del fotodetector.
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj3.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 En cámaras fotográficas medidos en megapíxeles se ajusta una resolución máxima de 2048 x 1536 - 3,34 megapíxeles. En las cámaras de video por lo general es mucho menor, no se pasa de 800 x 600 - 0,48 megapíxeles.
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj4.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 El tamaño del píxel, este se determina por la densidad de los píxeles, se puede apreciar de manera fácil en un escáner. 
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj5.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 La propiedad física medida hace referencia a la luz, al infrarrojo y a la luz ultravioleta
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj6.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 La linealidad es el nivel de color gris, el cual correspondería a ser proporcional al brillo de la imagen
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-tarj7.svg' alt='AvatarTop')
          .tarjeta.bg-acento-botones
            .p-4
              p.mb-0 El nivel de ruido es medido por la relación de contraste de una imagen, se debe tener en cuenta que los píxeles de acuerdo con su escena de color no siempre son iguales.

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .cajon.color-primario.p-4
          p.mb-0 Existen diversos tipos de dispositivos de captura de acuerdo con los sensores, dispositivo de escaneado de la imagen y al tipo de iluminación requerida; los más notorios están basados en CCD: Charge-Coupled Devices, los cuales están al alcance de los usuarios tales como la fotografía digital, astronomía, cámaras de TV, video digital, microscopía, escáner, entre otros, todos manejan sensores de silicio. 

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1    Clasificación y características

    p.mb-4(data-aos="fade") De manera general, los dispositivos denominados de captura son aquellos que permiten de una u otra forma convertir la información (luz o imagen) en información digital, es decir, en números binarios. Cuando se habla de dispositivos de captura de imagen se debe mencionar que están compuestos por sensores ópticos que captan la intensidad de la luz que les llega y la convierten en números. Estos son:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/tema2-1-tarj1.png", alt="Escáner")
            .text.p-lg-2.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.mt-4.mt-lg-0.mb-3 Escáner
                p Es el dispositivo de captura de imágenes más tradicional, el cual se encarga de convertir una fotografía de un papel, imagen de revista o libro en información que se puede interpretar y manejar en un computador. En la actualidad los escáner pueden emplear 16 bits para cuantificar los niveles de cada sensor, por lo que cada píxel va codificado en 48 bits (16 bits x 3 sensores).
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/tema2-1-tarj2.png", alt="Cámaras digitales")
            .text.p-lg-2.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.mt-4.mt-lg-0.mb-3 Cámaras digitales
                p Son dispositivos que son muy versátiles y permiten capturar imágenes sin tener que pasar por películas o procesos químicos y escaneos. De igual manera, la información lumínica llega directamente al sensor por medio de su lente, por lo que no habrá ninguna interrupción, dando como resultado final una buena captura de señales lumínicas. El funcionamiento de una cámara digital es idéntico al de una cámara análoga de película.
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/tema2-1-tarj3.png", alt="Teléfonos móviles con cámara")
            .text.p-lg-2.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.mt-4.mt-lg-0.mb-3 Teléfonos móviles con cámara
                p Las cámaras fotográficas digitales incorporadas en los teléfonos móviles, por lo general no son de muy buena calidad. Su mayor limitación es la falta de resolución y el tipo de óptica que utilizan, comportándose como una cámara integrada a un dispositivo móvil. También constan de un sensor que transforma la información lumínica en señales electrónicas para la construcción de la imagen digital.
        
    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2   Funcionamiento y operación

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          strong El escáner es un dispositivo que digitaliza imágenes planas convirtiéndolas en imágenes digitales. 
          | Se debe considerar que estas imágenes pueden ser fotográficas o textos y que la digitalización se produce, en principio, por la lámpara que ilumina el papel, el cual se va a escanear, para que luego el sensor sea el encargado de capturar la luz y convertirla en impulsos eléctricos, los mismos que por las diferentes intensidades de luz son convertidos en números para ser transmitidos al computador. Estos dispositivos actualmente son completamente digitales y su operación se ejecuta desde la pulsación de botones que generan las órdenes de ejecución.
      .col-md-5.mb-4(data-aos="fade-left")
        img.mb-2(src='@/assets/curso/tema2-2-img.png', alt='Imagen decorativa')
    
    .row.mb-5
      .col-md-5.mb-4(data-aos="fade-right")
        img.mb-2(src='@/assets/curso/tema2-2-img2.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Es importante saber que las cámaras digitales fotográficas son dispositivos de captura de imagen fija, portátiles, confiables y cada día más prácticas en su manejo y utilización. Se debe considerar que el mercado es variado y tiene como consecuencia que se jerarquicen por gamas. Dentro de las posibilidades de adquisición de un dispositivo fotográfico se debe de tener en cuenta las necesidades de su labor, pues será ese el factor decisivo para determinar qué dispositivo adquirir según su utilidad.




    


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
