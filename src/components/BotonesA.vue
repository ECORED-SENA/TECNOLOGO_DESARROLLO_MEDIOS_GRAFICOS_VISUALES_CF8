<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/tema1-2-fondo-botones.svg', alt='Las fases del proyecto')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-4(v-if="index === hover")  
      h4 {{boton.titulo}}
        italic {{boton.italic}}
      p {{boton.texto1}}
        


</template>

<script>
export default {
  name: 'BotonesA',
  data: () => ({
    indicador: true,
    hover: null,
    size: '18%',
    botones: [
      {
        img: require('@/assets/curso/tema1-2-boton1_1.svg'),
        img_h: require('@/assets/curso/tema1-2-boton1_2.svg'),
        pos_x: '15.4%',
        pos_y: '2%',
        titulo: 'JPG ',
        italic: '(Joint Photographic Experts Group)',
        texto1:
          'Es el formato de imagen más extendido, ya que permite comprimirse fácilmente en diversas aplicaciones, con el fin de tener un archivo de menor tamaño; al momento de hacer esta acción se puede perder la calidad de la imagen, la cual podrá ser ajustada por un usuario.',
      },
      {
        img: require('@/assets/curso/tema1-2-boton2_1.svg'),
        img_h: require('@/assets/curso/tema1-2-boton2_2.svg'),
        pos_x: '28.3%',
        pos_y: '2%',
        titulo: 'PNG ',
        italic: '(Portable Graphics Network)',
        texto1:
          'Este formato fue diseñado para dar solución a las dificultades que ofrece el formato GIF, como referencia tiene una paleta de colores base, la cual puede manipularse fácilmente, mientras que en PNG su paleta de colores es bastante amplia y permite incluir algunas características de transparencias, de igual forma, este formato comprime de una forma adecuada y práctica.',
      },
      {
        img: require('@/assets/curso/tema1-2-boton3_1.svg'),
        img_h: require('@/assets/curso/tema1-2-boton3_2.svg'),
        pos_x: '41.1%',
        pos_y: '2%',
        titulo: 'TIFF ',
        italic: '(Tagged Image File Format)',
        texto1:
          'Este formato es perfecto para la industria gráfica, cuenta con la capacidad de almacenar una muy buena cantidad de datos (imágenes de buena calidad, lo que permitirá ser utilizadas en cualquier pieza de trabajo gráfico), cuando una imagen es comprimida en el formato TIFF esta no pierde la calidad, este formato es muy recomendado para trabajar en el contexto de la fotografía.',
      },
      {
        img: require('@/assets/curso/tema1-2-boton4_1.svg'),
        img_h: require('@/assets/curso/tema1-2-boton4_2.svg'),
        pos_x: '53.9%',
        pos_y: '2%',
        titulo: 'BMP ',
        italic: '(Bits Maps Protocole)',
        texto1:
          'Dicho formato hoy por hoy presenta una utilización limitada, hace unos años presentaba un formato gráfico para los ambientes de Windows.',
      },
      {
        img: require('@/assets/curso/tema1-2-boton5_1.svg'),
        img_h: require('@/assets/curso/tema1-2-boton5_2.svg'),
        pos_x: '66.8%',
        pos_y: '2%',
        titulo: 'RAW ',
        italic: '(Read After Write)',
        texto1:
          'Este tipo de imagen cuenta con todos los datos que posee el sensor de una cámara fotográfica digital, procesando y almacenando la imagen sin alteración alguna al momento de ser expuesta (conserva todas las características originales de la imagen en alta calidad).',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>


.btns
  position: relative
  height: 450px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 20px
    position: absolute
    top: 110%
    left: 50%
    background-color: #B1F9FF
    width: 500px
    z-index: 100
    line-height: 1.2em
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 13% !important
    padding: 13%

  .btns_item--0
    top: 0.5% !important
    left: 2.1% !important
  .btns_item--1
    top: 0.5% !important
    left: 25.3% !important
  .btns_item--2
    top: 0.5% !important
    left: 48.3% !important
  .btns_item--3
    top: 0.5% !important
    left: 71.5% !important


  .btns__text
    width: 330px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
  .btns_item--3 .btns__text
    left: -80%
</style>
