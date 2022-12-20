<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg_grad-01
      .row.mb-5
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/sintesis/1.png", alt="alt")
        .col-lg-9
          TraduccionT.color-acento-botones.mt-lg-5(:dialogo="dialogo1")(data-aos="flip-up")

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Sintesis',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>In this component, we were able to practice topics such as phrasal verbs, which are divided into separable and non-separable ones, intensifiers, and we learnt how to contrast opinions and organize our the ideas of an argument with mind maps. The component called “Let’s argue and debate about global problem” taught you how to use this grammar to master our English skills.</em>',
        textoEsp:
          'En este componente, pudimos practicar temas como <em>phrasal verbs</em>, los cuales se dividen en separables y no separables, intensificadores, y aprendimos a contrastar opiniones y organizar nuestras ideas de un argumento con mapas mentales. El componente llamado "Discutamos y debatamos sobre un problema global" le enseñó cómo usar esta gramática para dominar nuestras habilidades en inglés.',
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
