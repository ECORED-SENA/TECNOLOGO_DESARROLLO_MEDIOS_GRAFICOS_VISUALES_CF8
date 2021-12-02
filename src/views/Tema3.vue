<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Captura fotográfica análoga y digital

    figure.mb-4
      img(src='@/assets/curso/tema3-banner.png', alt='Captura fotográfica análoga y digital')

    p.mb-4(data-aos="fade") La captura de la imagen en las cámaras fotográficas análogas y digitales es diferente. En el siguiente recurso se puede apreciar en detalle la diferencia entre las dos.
    
   
   

   

</template>

<script>
export default {
  name: 'Tema3',
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
