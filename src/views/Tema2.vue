<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Intensifiers</em> (Intensificadores)
    
    .row.mb-5
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/1.png", alt="alt")
      .col-lg-5
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
      .col-lg-3.position-relative
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/2.svg", alt="alt")
        Audio.color-acento-botones.pst_5(
          :audio="require('@/assets/componentes/audios/tema2/1.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")

    .bgr_12.p-5.mb-5
      .row.justify-content-center
        .col-lg-7.position-relative
          p.mb-5.colr.text-center <em>Next, a dialogue between people that use relative clauses is presented.</em>
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/3.svg", alt="alt")
          .bgr_13.px-5.pb-5
            .bgr_14.p-4
              TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up") 
          img.pst_6(src="@/assets/curso/tema2/5.svg", alt="alt")
          img.pst_7(src="@/assets/curso/tema2/4.svg", alt="alt")

    .bg_grad-11
      span.colr.text-bold <em>Most common intensifiers</em>
      span.text-bold / Los intensificadores más comunes
      .row.mt-5
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/6.svg", alt="alt")
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bgr_2")
            .tarjeta(titulo="<em>More intense, more powerful</em>").bgr.p-3
              .row
                .col-lg-5
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema2/7.svg", alt="alt")
                .col-lg-7
                  .tarjeta.bgr_2.p-3
                    p.colr_2.text-bold <em>Extremely - Very - Really </em>
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/6.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>The current levels of inflation areextremely dangerous.</em>
                    hr
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/7.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>The conservation of endangered species is very important.</em>
                    hr
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/8.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>I am really proud of my culture and ancestry.</em>
            .tarjeta(titulo="<em>Strong</em>").bgr.p-3
              .row
                .col-lg-5
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema2/8.svg", alt="alt")
                .col-lg-7
                  .tarjeta.bgr_2.p-3
                    p.colr_2.text-bold <em>Rather - Quite</em>
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/9.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>Violence against minorities is rather high for this civilized era.</em>
                    hr
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/10.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>The fight against corruption has been quite difficult.</em>
            .tarjeta(titulo="<em>To a limited extent</em>").bgr.p-3
              .row
                .col-lg-5
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema2/9.svg", alt="alt")
                .col-lg-7
                  .tarjeta.bgr_2.p-3
                    p.colr_2.text-bold <em>Fairly - Pretty - Somewhat</em>
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/11.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>The recovery of the markets has been fairly recent.</em>
                    hr
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/12.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>Vegan products are pretty good.</em>
                    hr
                    .row
                      .col-auto
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema2/13.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-9.d-flex.align-items-center
                        div
                          p.mb-0.colr <em>People is somewhat excited about the football championship.</em>
    
      .bg_grad-12
        .row.mb-5.justify-content-center
          .col-lg-3
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/10.png", alt="alt")
          .col-lg-6.d-flex.align-items-center
            div
              p.colr_3.mb-0.text-bold <em>Warning</em> / Advertencia:
              p.colr_3.mb-0 <em>Although in Spanish several of them can be interpreted in a similar way, in their original language they have certain nuances from the strongest to the least intense.</em>
              p.colr_4.mb-0 Si bien en español varios de ellos se pueden interpretar de forma similar, en su idioma original tienen ciertos matices, de los más fuertes a los menos intensos.

    span.colr.text-bold <em>Intensifiers and strong adjectives</em>
    span.text-bold / Intensificadores y adjetivos fuertes

    .row.mt-5.mb-5
      .col-lg-5
        p.colr <em>Sometimes, instead of using an intensifier and an adjective, we can use a strong adjective. For example:</em>
        p A veces, en vez de usar un intensificador y un adjetivo, podemos usar un adjetivo fuerte. Como, por ejemplo:
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/11.svg", alt="alt")
      .col-lg-7
        .tarjeta.bgr_8.p-5
          SlyderF(columnas="col-lg-6  ")
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/14.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very big</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/15.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Enormous, huge, gigantic</em> 
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/16.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very small</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/17.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Tiny</em> 
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/18.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very clever</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/19.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Brilliant</em> 
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/20.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very bad</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/21.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Awful, terrible, disgusting, dreadful</em> 
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/22.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very sure</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/23.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Certain</em>
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/24.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very good</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/25.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Excellent, perfect, ideal, wonderful, splendid</em>
            div
              .bgr_9.p-3
                h4.mb-0.text-center <em>Intensifier + Adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/26.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Very tasty</em>
            div
              .bgr_11.p-3
                h4.mb-0.text-center <em>Strong adjective</em>
              .bgr_10.h-100
                .row.p-3
                  .col-auto   
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/27.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-8
                    p.colr.mb-0 <em>Delicious</em>
    .bg_grad-13
      .row.mb-5.justify-content-center
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/10.png", alt="alt")
        .col-lg-6.d-flex.align-items-center
          div
            p.colr_3.mb-0.text-bold <em>Warning</em> / Advertencia:
            p.colr_3.mb-0 <em>In many standardized tests for the certification of the level of proficiency in English, it is good to handle a wide vocabulary level, especially with adjectives, to avoid an exaggerated use of "very".</em>
            p.colr_4.mb-0 En muchos exámenes estandarizados para la certificación del nivel de dominio lingüístico del inglés, es bueno manejar un nivel de vocabulario amplio, especialmente con los adjetivos, para evitar un uso exagerado de "<em>very</em>".
    
    .row.mb-5
      .col-lg-5
        TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/12.png", alt="alt")
      .col-lg-7
        .tarjeta.bgr_6.p-4
          .row.justify-content-center
            .col-8
              .row.tarjeta.bgr_15.p-4.justify-content-center
                .col-lg-6
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/28.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Absolutely</em>
                      p.mb-0 Absolutamente
                  hr
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/29.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Completely</em>
                      p.mb-0 Completamente
                  hr
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/30.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Exceptionally</em>
                      p.mb-0 Excepcionalmente
                  hr
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/31.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Particularly</em>
                      p.mb-0 Particularmente
                .col-lg-6
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/32.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Really</em>
                      p.mb-0 Realmente
                  hr
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/33.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Quite</em>
                      p.mb-0 Bastante
                  hr
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/34.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Totally</em>
                      p.mb-0 Totalmente
                  hr
                  .row
                    .col-auto
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema2/35.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
                    .col-lg-8
                      p.mb-0.colr_2.text-bold <em>Utterly</em>
                      p.mb-0 Absolutamente
    
    p.colr <em>Let’s review the use of intensifiers. Complete the following dialogue. </em>
      span.colr_1 / Repasemos el uso de intensificadores. Complete el siguiente diálogo.
    
    Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Intensifier practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionT,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Intensifiers are adverbs or adverbial phrases that strengthen the meaning of other expressions (especially, adjectives) and help us show emphasis. Let’s see some of them, listen and repeat:</em>',
        textoEsp:
          'Los intensificadores son adverbios o frases adverbiales que fortalecen el significado de otras expresiones (sobre todo, de adjetivos) y nos ayudan a mostrar énfasis. Veamos algunos de ellos, escuche y repita:',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Isabela',
        },
        {
          nombre: 'Javier',
        },
      ],
      dialogo: [
        {
          personaje: 'Isabela',
          textoIng:
            '<em>Have you heard of Julia Hartz? She’s a highly successful businesswoman who has shown that it is possible for women to break glass ceilings in innovative companies.</em>',
          textoEsp:
            '¿Has oído hablar de Julia Hartz? Es una empresaria de gran éxito que ha demostrado que es posible que las mujeres rompan los techos de cristal en empresas innovadoras.',
          audio: require('@/assets/componentes/audios/tema2/2.mp3'),
        },
        {
          personaje: 'Javier',
          textoIng:
            '<em>No, to be honest, I am quite illiterate in terms of business and gender topics. Tell me more about her.</em>',
          textoEsp:
            'No, la verdad, soy bastante analfabeto en cuanto a temas empresariales y de género. Cuéntame más sobre ella.',
          audio: require('@/assets/componentes/audios/tema2/3.mp3'),
        },
        {
          personaje: 'Isabela',
          textoIng:
            '<em>She is the co-founder of Eventbrite, which is easily the best place to work in the U.S., according to The San Francisco Business Times newspaper.</em>',
          textoEsp:
            'Ella es la cofundadora de Eventbrite, que es fácilmente el mejor lugar para trabajar en los EE. UU., según el periódico The San Francisco Business Times.',
          audio: require('@/assets/componentes/audios/tema2/4.mp3'),
        },
        {
          personaje: 'Javier',
          textoIng: '<em>Really? That is very impressive.</em>',
          textoEsp: '¿En serio? Eso es muy impresionante.',
          audio: require('@/assets/componentes/audios/tema2/5.mp3'),
        },
      ],
    },
    dialogo2: [
      {
        textoIng:
          '<em>We use this type of adverbs to make adjectives stronger, and these are some of the most common:</em>',
        textoEsp:
          'Usamos este tipo de adverbios para dar más fuerza a los adjetivos, estos son algunos de los más comunes:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>It is not common to use "very" with these strong adjectives. You do not say something is very huge or very excellent. With strong adjectives, it is normally use intensifiers like:</em>',
        textoEsp:
          'No es común usar "muy" con estos adjetivos fuertes. No se dice que algo es muy inmenso o muy excelente. Con adjetivos fuertes, normalmente se usan intensificadores como:',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Isabela',
          img: require('@/assets/curso/tema2/13.svg'),
        },
        {
          nombre: 'Javier',
          img: require('@/assets/curso/tema2/14.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Isabela',
          textoIng:
            '<em>This business even made Fortune’s “100 Best Workplaces” list for its groundbreaking company culture. And she has had an</em> *** <em>important role in that.</em> ***',
          textoEsp:
            'Esta empresa incluso llegó a la lista de los “100 Mejores lugares para trabajar” de Fortune por su cultura empresarial innovadora. Y ella ha tenido un papel importantísimo en eso.',
          audio: require('@/assets/componentes/audios/tema2/36.mp3'),
          palabra: '<em>extremely</em>',
        },
        {
          personaje: 'Javier',
          textoIng:
            '<em>Well, it’s</em> *** <em>impressive to see a woman succeeding like that. Especially in a culture as macho as the one we live in today.</em>',
          textoEsp:
            'Bueno, es realmente impresionante ver a una mujer triunfar así. Sobre todo en una cultura tan machista como en la que vivimos hoy.',
          audio: require('@/assets/componentes/audios/tema2/37.mp3'),
          palabra: '<em>really</em>',
        },
        {
          personaje: 'Isabela',
          textoIng:
            '<em>Yes, and the pay gap between men and women is a</em> *** <em>complex problem.</em>',
          textoEsp:
            'Sí, y es que la brecha salarial entre hombres y mujeres es un problema particularmente complejo.',
          audio: require('@/assets/componentes/audios/tema2/38.mp3'),
          palabra: '<em>particularly</em>',
        },
        {
          personaje: 'Javier',
          textoIng:
            '<em>And it is also a topic</em> *** <em>disregarded and little debated.</em>',
          textoEsp: 'Y es también un tema algo desatendido y poco debatido.',
          audio: require('@/assets/componentes/audios/tema2/39.mp3'),
          palabra: '<em>somewhat</em>',
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
