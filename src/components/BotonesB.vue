<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/tema1-fondo-botones.svg', alt='Las fases del proyecto')
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
      p.mb-0 {{boton.texto1}}
        


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '20%',
    botones: [
      {
        img: require('@/assets/curso/tema1-boton1_1.svg'),
        img_h: require('@/assets/curso/tema1-boton1_2.svg'),
        pos_x: '15.9%',
        pos_y: '3.1%',
        titulo: 'EPS ',
        italic: '(Encapsulated PostScript)',
        texto1:
          'Es un formato gráfico, el cual ya se encuentra determinado para realizar una impresión, de igual forma, se puede incluir en otros escenarios gráficos compatibles con este tipo de formato (Photoshop, Illustrator o CorelDraw).',
      },
      {
        img: require('@/assets/curso/tema1-boton2_1.svg'),
        img_h: require('@/assets/curso/tema1-boton2_2.svg'),
        pos_x: '31.9%',
        pos_y: '3.1%',
        titulo: 'SVG ',
        italic: '(Scalable Vector Graphics)',
        texto1:
          'Es un formato de utilización libre puesto que no requiere de alguna aplicación en especifico para su manipulación, tiene características iguales a otros formatos de su mismo tipo como, por ejemplo, Adobe Illustrator, cuenta con la cualidad de ser leído y editado por diversas aplicaciones de diseño gráfico.',
      },
      {
        img: require('@/assets/curso/tema1-boton3_1.svg'),
        img_h: require('@/assets/curso/tema1-boton3_2.svg'),
        pos_x: '47.9%',
        pos_y: '3.1%',
        titulo: 'PDF ',
        italic: '(Portable Document Format)',
        texto1:
          'Este formato de archivos gráficos sin duda es el más utilizado, puesto que no tiene restricción alguna para que un usuario determinado pueda tener una lectura de este, cuenta con un alto grado de calidad, dependiendo de qué tan bueno sea el contenido almacenado, hoy en día es el formato predilecto de transporte en las imprentas de todo el mundo.',
      },
      {
        img: require('@/assets/curso/tema1-boton4_1.svg'),
        img_h: require('@/assets/curso/tema1-boton4_2.svg'),
        pos_x: '64%',
        pos_y: '3.1%',
        titulo: 'DXF ',
        italic: '(Drawing Exchange Format)',
        texto1:
          'Este formato es nativo de CAD del programa Autodesk AutoCAD, hace referencia a la representación de datos de archivos de dibujo AutoCAD, se soportan en objetos dimensionales y dimensionamiento asociativo de curvas y texto, se considera que este formato es fácil.',
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
    top: 1.8% !important
    left: 1.8% !important
  .btns_item--1
    top: 1.8% !important
    left: 25.3% !important
  .btns_item--2
    top: 1.8% !important
    left: 48.9% !important
  .btns_item--3
    top: 1.8% !important
    left: 72.5% !important


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
