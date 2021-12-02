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
   
   

  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
