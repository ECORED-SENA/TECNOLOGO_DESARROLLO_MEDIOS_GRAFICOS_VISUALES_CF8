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
    
   
   


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
