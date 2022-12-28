<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Organizing the ideas of an argument with mind maps</em> (Organizando las ideas de un argumento con mapas mentales)    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones.bgr_16(:dialogo="dialogo1")(data-aos="flip-up")
    
    p.mb-5.colr <em>So, let’s see that mind maps are perfect for: </em>
      span.colr_1 / Entonces, veamos que los mapas mentales son perfectos para:
    
    .bg_grad-15
      SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
        .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema4/2.png')})`}" style='height: 500px').pst_8
          .tarjeta.bgr.p-3
            Audio.color-acento-botones.m-auto.mb-3(
              :audio="require('@/assets/componentes/audios/tema4/1.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            p.colr.text-bold.text-center <em>Visualizing concepts</em>
        .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema4/3.png')})`}" style='height: 500px').pst_8
          .tarjeta.bgr.p-3
            Audio.color-acento-botones.m-auto.mb-3(
              :audio="require('@/assets/componentes/audios/tema4/2.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            p.colr.text-bold.text-center <em>Communicating ideas</em>
        .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema4/4.png')})`}" style='height: 500px').pst_8
          .tarjeta.bgr.p-3
            Audio.color-acento-botones.m-auto.mb-3(
              :audio="require('@/assets/componentes/audios/tema4/3.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            p.colr.text-bold.text-center <em>Outlining reports and documents</em>
        .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema4/5.png')})`}" style='height: 500px').pst_8
          .tarjeta.bgr.p-3
            Audio.color-acento-botones.m-auto.mb-3(
              :audio="require('@/assets/componentes/audios/tema4/4.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            p.colr.text-bold.text-center <em>Simplifying tasks and project management</em>
        .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema4/6.png')})`}" style='height: 500px').pst_8
          .tarjeta.bgr.p-3
            Audio.color-acento-botones.m-auto.mb-3(
              :audio="require('@/assets/componentes/audios/tema4/5.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            p.colr.text-bold.text-center <em> Writing essays</em>
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          TraduccionT.color-acento-botones.bgr_16(:dialogo="dialogo2")(data-aos="flip-up")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema4/7.svg", alt="alt")
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bgr_18")
            .tarjeta(titulo="<em>Benefits of the mind map for your brain</em> / Beneficios del mapa mental para tu cerebro").bgr.p-3
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema4/8.svg", alt="alt")
                .col-lg-9
                  TraduccionAudio.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
            .tarjeta(titulo="<em>The characteristics of mind map</em> / Las características del mapa mental").bgr.p-3
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema4/9.svg", alt="alt")
                .col-lg-9
                  TraduccionAudio.color-acento-botones.bgr_16(:dialogo="dialogo4")(data-aos="flip-up")
            .tarjeta(titulo="<em>Software to create mind maps</em> / <em>Software</em> para crear mapas mentales").bgr.p-3
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema4/10.svg", alt="alt")
                .col-lg-9
                  TraduccionAudio.color-acento-botones.bgr_16(:dialogo="dialogo5")(data-aos="flip-up")
                  p.colr <em>Let’s see some of them: </em>
                    span.colr_1 /  Veamos algunos de ellos:
                  .row.mb-3.justify-content-center
                    .col-md-3.col-lg-3.mb-3.mb-lg-0
                      a.boton.color-acento-botones.me-3(href="https://www.goconqr.com/" target="_blank")
                        span Goconqr
                        i.fas.fa-link
                    .col-md-4.col-lg-4.mb-3.mb-lg-0
                      a.boton.color-acento-botones.me-3(href="https://www.mindmeister.com/" target="_blank")
                        span MindMeister
                        i.fas.fa-link
                    .col-md-3.col-lg-3
                      a.boton.color-acento-botones.me-3(href="https://www.lucidchart.com/" target="_blank")
                        span Lucidchart
                        i.fas.fa-link
                  .row.justify-content-center
                    .col-md-3.col-lg-3.mb-3.mb-lg-0
                      a.boton.color-acento-botones.me-3(href="https://xmind.app/" target="_blank")
                        span XMind
                        i.fas.fa-link
                    .col-md-3.col-lg-3
                      a.boton.color-acento-botones.me-3(href="https://www.ayoa.com/mind-mapping/software/" target="_blank")
                        span iMindMap
                        i.fas.fa-link
    
    p.colr <em>Next, the following dialogue is presented between two characters who use expressions to organize ideas: </em>
      span.colr_1 / A continuación, se presenta el siguiente diálogo entre dos personajes que utilizan expresiones para organizar ideas:

    Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em> Organizing the ideas practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
                  
       
            



</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema4',
  components: {
    TraduccionT,
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>A mind map is a representation of thoughts organically without worrying about order and structure. It allows you to visually organize your ideas. <br><br>A map is arranged around a central concept or subject using a non-linear graphical. A mind map can change a whole text into a colorful, memorable, and highly organized diagram that works in line with your brain’s natural way of doing things.</em>',
        textoEsp:
          'Un mapa mental es una representación de pensamientos de forma orgánica sin preocuparse por el orden y la estructura. Le permite organizar visualmente sus ideas.<br><br>Un mapa se organiza en torno a un concepto o tema central mediante un gráfico no lineal. Un mapa mental puede convertir un texto completo en un diagrama colorido, memorable y altamente organizado que funciona de acuerdo con la forma natural de hacer las cosas de su cerebro.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Though mind mapping techniques were previously done mostly on physical medium like pen and paper, with advent of technology, various tools and software now exist in market which allow users to create and share mind maps digitally. Let’s see some details:</em>',
        textoEsp:
          'Aunque las técnicas de mapas mentales se realizaban anteriormente con medios físicos como lápiz y papel, con el advenimiento de la tecnología, ahora existen en el mercado varias herramientas y software que permiten a los usuarios crear y compartir mapas mentales digitalmente. Veamos algunos detalles:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>The mind map is a tool used to stimulate you. One simple way to understand a mind map is by comparing it to a map of a city. Downtown represents the main idea; the main streets leading from the center represent the key thoughts; the secondary roads or branches represent your secondary thoughts, and so on. Special images or shapes can represent landmarks of interest or particularly relevant ideas.</em>',
        textoEsp:
          'El mapa mental es una herramienta que se utiliza para estimularte. Una forma sencilla de entender un mapa mental es comparándolo con el mapa de una ciudad. El centro representa la idea principal; las calles principales que parten del centro representan los pensamientos clave; los caminos secundarios o ramas representan tus pensamientos secundarios, y así sucesivamente. Las imágenes o formas especiales pueden representar hitos de interés o ideas particularmente relevantes. ',
        audio: require('@/assets/componentes/audios/tema4/6.mp3'),
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em><b>></b> The main idea must be written in the center.<br><br> <b>></b> The main themes can surround the central topic as "branches".<br><br> <b>></b>	The branches can have key words connected with lines.<br><br> <b>></b> Topics of lesser importance are represented as "twigs" of the relevant branch.<br><br> <b>></b> The branches form a connected nodal structure.</em>',
        textoEsp:
          '> La idea principal debe estar escrita en el centro.<br><br> > Los temas principales pueden rodear al tema central como "ramas".<br><br> >Las ramas pueden tener palabras clave conectadas con líneas.<br><br> > Los temas de menor importancia se representan como "ramitas" de la rama correspondiente.<br><br> >Las ramas forman una estructura nodal conectada.',
        audio: require('@/assets/componentes/audios/tema4/7.mp3'),
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>With the advancement of technology, multiple organizations started the development of software that allow users to create digital mind maps. Such tools make it easier to visualize and work through an idea or strategy and allow a user to map his thoughts in an organized structure. There are several tools available which facilitate the creation of digital mind maps.</em>',
        textoEsp:
          'Con el avance de la tecnología, varias organizaciones comenzaron a desarrollar software que permite a los usuarios crear mapas mentales digitales. Tales herramientas hacen más fácil visualizar y trabajar a través de una idea o estrategia y permitir que un usuario mapee sus pensamientos en una estructura organizada. Hay varias herramientas disponibles que facilitan la creación de mapas mentales digitales.',
        audio: require('@/assets/componentes/audios/tema4/8.mp3'),
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Tory',
          img: require('@/assets/curso/tema4/12.svg'),
        },
        {
          nombre: 'Gio',
          img: require('@/assets/curso/tema4/11.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Tory',
          textoIng:
            '<em>Did you see the homework we have for next Friday? We need to present a</em> *** <em>map.</em>',
          textoEsp:
            '¿Viste la tarea que tenemos para el próximo viernes? Necesitamos presentar un mapa mental.',
          audio: require('@/assets/componentes/audios/tema4/9.mp3'),
          palabra: '<em>mind</em>',
        },
        {
          personaje: 'Gio',
          textoIng:
            '<em>Oh, that’s easy, we just need to</em> *** <em>our ideas.</em>',
          textoEsp:
            'Oh, eso es fácil, solo tenemos que hacer una lluvia de ideas.',
          audio: require('@/assets/componentes/audios/tema4/10.mp3'),
          palabra: '<em>brainstorm</em>',
        },
        {
          personaje: 'Tory',
          textoIng:
            '<em>Also, we need to be</em> *** <em>and add images, don’t we? </em>',
          textoEsp: 'Además, tenemos que ser creativos y añadir imágenes, ¿no?',
          audio: require('@/assets/componentes/audios/tema4/11.mp3'),
          palabra: '<em>creative</em>',
        },
        {
          personaje: 'Gio',
          textoIng:
            '<em>Yeap, we cannot forget to connect the ideas as</em> ***, <em>I mean organize them next to the principal idea. </em>',
          textoEsp:
            'Sí, no podemos olvidar conectar las ideas como ramas, es decir, organizarlas junto a la idea principal.',
          audio: require('@/assets/componentes/audios/tema4/12.mp3'),
          palabra: '<em>branches</em>',
        },
      ],
    },
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
