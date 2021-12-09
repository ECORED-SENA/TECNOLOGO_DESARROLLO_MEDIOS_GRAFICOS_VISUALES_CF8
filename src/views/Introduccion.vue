<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-4
      img(src='@/assets/curso/intro-banner.png', alt='Introducción')

    p.mb-4(data-aos="fade") El ser humano cuenta con un sistema visual que reúne grandes características, porque a través de él se pueden diferenciar, detectar, analizar y almacenar imágenes con gran potencia y un sin fin de formas y colores. Es un mecanismo perfecto de cómo el cerebro procesa las imágenes y la forma como cambia la información visual para conseguir mejores resultados o para aislar una particularidad determinada de una imagen. El impacto de este método es gigantesco, tanto así que se relaciona con los campos de las telecomunicaciones, la medicina, el entrenamiento y el control de procesos industriales. A continuación, se detallan elementos complementarios de la introducción al componente.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2BDInJUj2-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
