<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Contrasting opinions</em> (Contrastando opiniones)

    .row.mb-5
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones.bgr_16(:dialogo="dialogo1")(data-aos="flip-up")
    
    .bg_grad-14
      .row.mb-5
        .col-lg-4
          TraduccionT.color-acento-botones.bgr_16(:dialogo="dialogo2")(data-aos="flip-up")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/2.png", alt="alt")
        .col-lg-8
          .tarjeta.bgr.p-4
            SlyderA(tipo="b").mb-3
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-acento-contenido.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .row.justify-content-center
                  .col-lg-6
                    TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo3")
                  .col-lg-4
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema3/3.png", alt="alt")
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-acento-contenido.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .row.justify-content-center
                  .col-lg-6
                    TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo4")
                  .col-lg-4
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema3/4.png", alt="alt")
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-acento-contenido.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .row.justify-content-center
                  .col-lg-6
                    TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo5")
                  .col-lg-4
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema3/5.png", alt="alt")
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-acento-contenido.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/4.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .row.justify-content-center
                  .col-lg-6
                    TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo6")
                  .col-lg-4
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema3/6.png", alt="alt")
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-acento-contenido.mb-3(
                    :audio="require('@/assets/componentes/audios/tema3/5.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .row.justify-content-center
                  .col-lg-6
                    TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo7")
                  .col-lg-4
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema3/7.png", alt="alt")
            TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo8")

      .row.justify-content-center
        .col-lg-10
          .bgr.p-4
            SlyderA(tipo="b") 
              .row
                .col-lg-5.pe-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/8.png", alt="alt")
                .col-lg-6
                    div
                      TarjetaAudio.color-acento-contenido.mb-3(
                        :audio="require('@/assets/componentes/audios/tema3/6.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo9")
              .row
                .col-lg-5.pe-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/9.png", alt="alt")
                .col-lg-6
                    div
                      TarjetaAudio.color-acento-contenido.mb-3(
                        :audio="require('@/assets/componentes/audios/tema3/7.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo10")
              .row
                .col-lg-5.pe-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/10.png", alt="alt")
                .col-lg-6
                    div
                      TarjetaAudio.color-acento-contenido.mb-3(
                        :audio="require('@/assets/componentes/audios/tema3/8.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo11")
              .row
                .col-lg-5.pe-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/11.png", alt="alt")
                .col-lg-6
                    div
                      TarjetaAudio.color-acento-contenido.mb-3(
                        :audio="require('@/assets/componentes/audios/tema3/9.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo12")
              .row
                .col-lg-5.pe-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/12.png", alt="alt")
                .col-lg-6
                    div
                      TarjetaAudio.color-acento-contenido.mb-3(
                        :audio="require('@/assets/componentes/audios/tema3/10.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      TraduccionT.color-acento-botones.bgr_17(:dialogo="dialogo13")
    
    p.colr <em>Next, the following dialogue is presented between two characters who use expressions contrasting their ideas: </em>
      span.colr_1 / A continuación, se presenta el siguiente diálogo entre dos personajes que utilizan expresiones contrastando sus ideas:
    
    Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Contrasting opinions practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
            
              



</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>When we speak to a friend, we often agree or disagree with the other person’s likes and dislikes. If we don’t want to make a fight out of this, we need to show empathy and use the right sentences without sounding aggressive. We need to express our opinions and, at the same time, show that we are listening, understanding and appreciating the other opinions. Here are different ways to do so in a conversation. <br><br><i><b>Tip:</b> it’s always a good idea to justify your opinions, it is not enough saying yes or no only.</i></em>',
        textoEsp:
          'Cuando hablamos con un amigo, a menudo estamos de acuerdo o en desacuerdo con los gustos y aversiones de la otra persona. Si no queremos hacer una pelea de esto, debemos mostrar empatía y usar la oración correcta sin sonar agresivos. Necesitamos expresar nuestras opiniones y, al mismo tiempo, mostrar que estamos escuchando, entendiendo y apreciando las otras opiniones. Aquí hay diferentes maneras de hacerlo en una conversación.<br><br><b>Consejo:</b> siempre es buena idea justificar sus opiniones, no basta con decir sí o no solamente.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The following expressions are created to give the speaker the chance to say he or she does not agree with what the other speaker is saying without sounding rude or aggressive. Here we have:</em>',
        textoEsp:
          'Las siguientes expresiones se crean para permitir que el hablante diga que no está de acuerdo con lo que dice el otro hablante sin sonar grosero o agresivo. Aquí tenemos:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em><b>Expression 1:</b> <br><br><i><b>I see, but that’s different</b></i><br><br><b>Speaker A:</b> I do not like wearing jeans to work, I feel they are quite informal.<br><br><b>Speaker B:</b> I see, but that’s different. For instance, if they are worn with a formal blouse and casual shoes, they may look formal, too.</em>',
        textoEsp:
          '<b>Expresión 1:</b><br><br><b>Interlocutor A:</b> No me gusta usar jeans para trabajar, siento que son bastante informales. <br><br><b>Interlocutor B:</b> Ya veo, pero eso es diferente. Por ejemplo, si se usan con una blusa formal y zapatos casuales, también pueden verse formales.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em><b>Expression 2:</b> <br><br><i><b>Sorry, I don’t agree with you</b></i><br><br><b>Speaker A:</b> I do not think people from the rural areas should move to cities.<br><br><b>Speaker B:</b> Sorry, I don’t agree with you. I was born in the corn fields and I had to move to the city to find a better salary. Thank God I can pay for my family’s expenses. I could not have done that if I were in the fields.</em>',
        textoEsp:
          '<b>Expresión 2:</b><br><br><b>Interlocutor A:</b> No creo que la gente de las áreas rurales deba mudarse a las ciudades.<br><br><b>Interlocutor B:</b>  Lo siento, no estoy de acuerdo contigo. Nací en los campos de maíz, tuve que mudarme a la ciudad para encontrar un mejor salario. Gracias a Dios puedo pagar los gastos de mi familia. No podría haber hecho eso si estuviera en los campos.',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em><b>Expression 3:</b> <br><br><i><b>I don’t see it that way</b></i><br><br><b>Speaker A:</b>  I do not think people should study careers where they earn low salaries.<br><br><b>Speaker B:</b> I don’t see it that way. For instance, being a teacher requires passion and it is a not well paid salary, but if you work on what you love, you can feel totally blessed.</em>',
        textoEsp:
          '<b>Expresión 3:</b><br><br><b>Interlocutor A:</b> No creo que la gente deba estudiar carreras en las que ganen salarios bajos.<br><br><b>Interlocutor B:</b> Yo no lo veo así. Por ejemplo, ser maestro requiere pasión y es un salario no bien pagado, pero si trabajas en lo que amas, puedes sentirte totalmente bendecido.',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em><b>Expression 4:</b> <br><br><i><b>That’s not entirely true</b></i><br><br><b>Speaker A:</b> I do not think people who live in the city know about farming.<br><br><b>Speaker B:</b>That’s not entirely true. There are a lot of people who were raised in the farms and they know about that type of work, and once they grew up, they moved to the cities, so they do know about farming.</em>',
        textoEsp:
          '<b>Expresión 4:</b><br><br><b>Interlocutor A:</b> No creo que la gente que vive en la ciudad sepa de agricultura.<br><br><b>Interlocutor B:</b> Eso no es del todo cierto. Hay muchas personas que se criaron en las granjas y conocen ese tipo de trabajo, y una vez que crecieron, se mudaron a las ciudades, por lo que sí conocen la agricultura.',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em><b>Expression 5:</b> <br><br><i><b>That’s partly true but...</b></i><br><br><b>Speaker A:</b> I do not think English teachers who are not from England can get a perfect accent.<br><br><b>Speaker B:</b> That’s partly true, but I have met teachers who are not English and they speak so great that you could not tell the difference.</em>',
        textoEsp:
          '<b>Expresión 5:</b><br><br><b>Interlocutor A:</b> No creo que los profesores de inglés que no sean de Inglaterra puedan tener un acento perfecto.<br><br><b>Interlocutor B:</b> Eso es en parte cierto, pero he conocido a profesores que no son ingleses y hablan tan bien que no podrías notar la diferencia.',
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em>We can demonstrate our attention by keeping consistent eye contact, refraining from creating a rebuttal or other distracting thoughts, nodding, etc., and giving a chance to say he or she does not agree.</em>',
        textoEsp:
          'Podemos demostrar nuestra atención manteniendo un contacto visual constante, absteniéndonos de crear una refutación u otros pensamientos que distraigan, asintiendo con la cabeza, etc., y dando la oportunidad de que él o ella pueda decir que no está de acuerdo.',
      },
    ],
    dialogo9: [
      {
        textoIng:
          '<em><b>Expression 1:</b> <br><br><i><b>Yes, I agree with you but...</b></i><br><br><b>Speaker A:</b> I do not think we should take classes about other stuff that is not related to our careers.<br><br><b>Speaker B:</b> Yes, I agree with you, but I have seen I need to know about so many subjects when I am performing a task.</em>',
        textoEsp:
          '<b>Expresión 1:</b><br><br><b>Interlocutor A:</b> No creo que debamos tomar clases sobre otras cosas que no estén relacionadas con nuestras carreras.<br><br><b>Interlocutor B:</b> Sí, estoy de acuerdo contigo, pero he visto que necesito saber sobre muchos temas cuando estoy realizando una tarea.',
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em><b>Expression 2:</b> <br><br><i><b>I can see your point, but...</b></i><br><br><b>Speaker A:</b> it is a great idea that the government is paying for some students to study a career.<br><br><b>Speaker B:</b> I can see your point, but not all of them are making the effort to pass the semesters, it looks like they are not giving their best because it does not have any cost for them.</em>',
        textoEsp:
          '<b>Expresión 2:</b><br><br><b>Interlocutor A:</b> es una gran idea que el gobierno esté pagando para que algunos estudiantes estudien una carrera.<br><br><b>Interlocutor B:</b> Puedo ver tu punto, pero no todos están haciendo el esfuerzo de aprobar los semestres, parece que no están dando lo mejor de sí porque no tiene ningún costo para ellos. ',
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em><b>Expression 3:</b> <br><br><i><b>That’s very true, but...</b></i><br><br><b>Speaker A:</b> It is a great idea that the government is taking the taxes to take care of the old people.<br><br><b>Speaker B:</b> That’s very true, but don’t you think their children should pay for them? I mean, they received benefits being their children back in the good days.</em>',
        textoEsp:
          '<b>Expresión 3:</b><br><br><b>Interlocutor A:</b> Es una gran idea que el gobierno esté tomando los impuestos para cuidar a las personas mayores.<br><br><b>Interlocutor B:</b> Eso es muy cierto, pero ¿no crees que sus hijos deberían pagar por ellos? Quiero decir, recibieron beneficios siendo sus hijos en los buenos días.',
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em><b>Expression 4:</b> <br><br><i><b>Of course, you’re right, but...</b></i><br><br><b>Speaker A:</b> Education is not ok, it was too strict, have you ever listened to the song “Another brick in the wall”? It has been too hard to be educated.<br><br><b>Speaker B:</b> Of course, you’re right, but now education is being so flexible that people act as they want, they do not know about limits.</em>',
        textoEsp:
          '<b>Expresión 4:</b><br><br><b>Interlocutor A:</b> La educación no está bien, era demasiado estricta, ¿alguna vez has escuchado la canción “Otro ladrillo en la pared”? Ha sido muy difícil ser educado.<br><br><b>Interlocutor B:</b>Claro que tienes razón, pero ahora la educación está siendo tan flexible que la gente actúa como quiere, no saben de límites.',
      },
    ],
    dialogo13: [
      {
        textoIng:
          '<em><b>Expression 5:</b> <br><br><i><b>I know what you mean but...</b></i><br><br><b>Speaker A:</b> Children are not well educated in schools. <br><br><b>Speaker B:</b> I know what you mean, but children should be first educated at home, that’s where values grow.</em>',
        textoEsp:
          '<b>Expresión 5:</b><br><br><b>Interlocutor A:</b> Los niños no están bien educados en las escuelas.<br><br><b>Interlocutor B:</b> Sé a lo que te refieres, pero los niños deben ser educados primero en casa, ahí es donde crecen los valores. ',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Lina',
          img: require('@/assets/curso/tema3/13.svg'),
        },
        {
          nombre: 'Tory',
          img: require('@/assets/curso/tema3/14.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Lina',
          textoIng:
            '<em>Did you see the way teachers are educating our children? It is too</em> ***.',
          textoEsp:
            '¿Viste la forma en que los maestros están educando a nuestros hijos? Es demasiado estricta.',
          audio: require('@/assets/componentes/audios/tema3/11.mp3'),
          palabra: '<em>strict</em>',
        },
        {
          personaje: 'Tory',
          textoIng:
            '<em>Of course, you’re</em> ***, <em>but being too flexible is not a good idea either.</em>',
          textoEsp:
            'Por supuesto, tienes razón, pero ser demasiado flexible tampoco es una buena idea.',
          audio: require('@/assets/componentes/audios/tema3/12.mp3'),
          palabra: '<em>right</em>',
        },
        {
          personaje: 'Lina',
          textoIng:
            '<em>Also, what is the</em> *** <em>they are doing? Are they picking up money for the old people? I think that is not fair, we do have our own expenses. </em>',
          textoEsp:
            'Además, ¿cuál es el proyecto que están haciendo? ¿Están recogiendo dinero para los ancianos? Creo que eso no es justo, tenemos nuestros propios gastos.',
          audio: require('@/assets/componentes/audios/tema3/13.mp3'),
          palabra: '<em>project</em>',
        },
        {
          personaje: 'Tory',
          textoIng:
            '<em>I know what you</em> ***, <em>but those old people are out in the street, they need shelter and food!</em>',
          textoEsp:
            'Sé a lo que te refieres, pero esos viejos están en la calle, ¡necesitan cobijo y comida!',
          audio: require('@/assets/componentes/audios/tema3/14.mp3'),
          palabra: '<em>mean</em>',
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
