<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-02
      .bg_grad-03
        .row.mb-5.position-relative
          .col-lg-4.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/introduccion/1.svg", alt="alt")
          .col-lg-7.d-flex.align-items-center
            p.mb-0 Este nivel de formación bilingüe se enfoca en pulir nuestro discurso por medio del manejo correcto de elementos como los verbos frasales (muy usados en la cotidianidad de la comunicación en inglés), los adverbios intensificadores para fortalecer o dar énfasis a los adjetivos, las expresiones más útiles para contrastar opiniones, y cómo estructurar y organizar nuestras ideas o argumentos por medio de la elaboración de mapas mentales. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se invita a explorar el video que se presenta a continuación:
          img.pst(src="@/assets/curso/introduccion/2.svg", alt="alt")
          img.pst_1(src="@/assets/curso/introduccion/3.svg", alt="alt")
     
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    .bg_grad-04
      .row.mb-5.justify-content-center
        .col-lg-7.d-flex.align-items-center
          div
            p.text-white Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
            .row
              .col-auto
                a.anexo.mb-4(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p <b>Anexo.</b> introducción
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/introduccion/4.png", alt="alt") 

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
