<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Phrasal verbs</em> (Verbos frasales)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    .bg_grad-06
      .row.mb-5
        .col-lg-8.mb-3.mb-lg-0
          .tarjeta.bgr_1.p-4
            SlyderF
              .tarjeta.bgr.p-3
                .row
                  .col-xl-5.mb-3.mb-xl-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/3.png", alt="alt")
                  .col-xl-7
                    .tarjeta.bgr_2.p-3
                      .row.mb-3
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/1.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-8.d-flex.align-items-center
                          h4.mb-0.colr <em>Bring up </em>/ Mencionar un tema / Educar o criar a una persona
                      p.colr_2 <em>Example</em>
                      .row
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/2.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-9.d-flex.align-items-center
                          div
                            p.mb-0.colr <em>I want to bring up my children in a safe and healthy environment.</em>
                            p Quiero criar a mis hijos en un ambiente seguro y saludable.
                      .row
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/3.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-9.d-flex.align-items-center
                          div
                            p.mb-0.colr <em>Debate participants brought up new topics to be discussed.</em>
                            p.mb-0 Los participantes del debate mencionaron nuevos temas.
              .tarjeta.bgr.p-3
                .row
                  .col-xl-5.mb-3.mb-xl-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/4.png", alt="alt")
                  .col-xl-7
                    .tarjeta.bgr_2.p-3
                      .row.mb-3
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/4.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-8.d-flex.align-items-center
                          h4.mb-0.colr <em>Carry on </em>/ Continuar
                      p.colr_2 <em>Example</em>
                      .row
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/5.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-9.d-flex.align-items-center
                          div
                            p.mb-0.colr <em>This country has carried on trying despite the hard times and struggles.</em>
                            p  Este país ha seguido intentándolo a pesar de los tiempos difíciles y las luchas.
              .tarjeta.bgr.p-3
                .row
                  .col-xl-5.mb-3.mb-xl-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/5.png", alt="alt")
                  .col-xl-7
                    .tarjeta.bgr_2.p-3
                      .row.mb-3
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/6.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-8.d-flex.align-items-center
                          h4.mb-0.colr <em>Give up </em>/ Rendirse 
                      p.colr_2 <em>Example</em>
                      .row
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/7.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-9.d-flex.align-items-center
                          div
                            p.mb-0.colr <em>Colombians don’t give up in the face of any obstacle.</em>
                            p Los colombianos no se rinden ante ningún obstáculo.
              .tarjeta.bgr.p-3
                .row
                  .col-xl-5.mb-3.mb-xl-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/6.png", alt="alt")
                  .col-xl-7
                    .tarjeta.bgr_2.p-3
                      .row.mb-3
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/8.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-8.d-flex.align-items-center
                          h4.mb-0.colr <em> Work out </em>/ Solucionar o descifrar algo / Ejercitarse
                      p.colr_2 <em>Example</em>
                      .row
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/9.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-9.d-flex.align-items-center
                          div
                            p.mb-0.colr <em>We need to work this out.</em>
                            p Tenemos que resolver esto.
                      .row
                        .col-auto
                          Audio.color-acento-botones.m-auto(
                            :audio="require('@/assets/componentes/audios/tema1/10.mp3')"
                            @audio-hover="mostrarIndicadorAudio = false"
                          )
                            .indicador--click(v-if="mostrarIndicadorAudio")
                        .col-lg-9.d-flex.align-items-center
                          div
                            p.mb-0.colr <em>You have to work out and eat a healthy diet to maintain good health.</em>
                            p.mb-0 Tienes que hacer ejercicio y comer una dieta saludable para mantener una buena salud.
        .col-lg-4
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/2.svg", alt="alt")
      
      .bg_grad-05
        .row.mb-5.justify-content-center
          .col-lg-3.order-2.order-lg-1
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/7.png", alt="alt")
          .col-lg-4.d-flex.align-items-center.justify-content-center.order-1.order-lg-2.mb-3.mb-lg-0
            div
              p.colr_3.mb-0.text-bold <em>Warning</em> / Advertencia:
              p.colr_3.mb-0 <em>Sometimes the same phrasal verb can have several different meanings.</em>
              p.colr_4.mb-0 A veces, el mismo verbo frasal puede tener varios significados diferentes.
    
    p.colr <em>Phrasal verbs are very common in English, especially in more informal contexts. They are made up of a verb and a particle or, sometimes, two particles. The particle often changes the meaning of the verb. We are going to check the next video to remember them:</em>
    p.colr_1 Los verbos frasales son muy comunes en inglés, especialmente en contextos más informales. Se componen de un verbo y una partícula o, a veces, dos partículas. La partícula a menudo cambia el significado del verbo. Vamos a ver el siguiente video para recordarlos:

    .bg_grad-07
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/3koUgC7gN6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.colr <em>Let’s see how they work in a real life situation in which it is necessary to use them to express the idea:</em>
      p.colr_1 Veamos cómo funcionan en una situación de la vida real en la que es necesario utilizarlos para expresar la idea.

      .row.mb-5.bgr_3.p-4.justify-content-end
        .col-lg-7
          .tarjeta.bgr_19
            TraduccionChat.color-acento-botones(:dialogo="traduccionChat")(data-aos="flip-up")
      
      p.colr <em>Below we will see examples of a base verb and the phrasal verbs it can form, as well as their different meanings:</em>

      p.colr_1 A continuación, veremos algunos ejemplos de un verbo base y los verbos frasales que pueden formar, así como sus diferentes significados:

      .row.bgr_4.p-5.justify-content-center.mb-5
        .col-lg-10
          ImagenInfografica.d-none.d-sm-flex.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')

            .tarjeta.bgr_5.p-3(x="50%" y="0%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/15.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To search for something or someone</em>
                  p.colr <em>I'm  looking for the lawyer. Have you seen him?</em>
            .tarjeta.bgr_5.p-3(x="70%" y="15%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/16.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To be responsible or take care of someone</em>
                  p.colr <em>Children are the future and we must look after them.</em>
            .tarjeta.bgr_5.p-3(x="91%" y="29%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/17.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To stare at something or someone</em>
                  p.colr <em>Look at that impressive waterfall.</em>
            .tarjeta.bgr_5.p-3(x="91%" y="58%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/18.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To research</em>
                  p.colr <em>Authorities looked into the theft.</em>
            .tarjeta.bgr_5.p-3(x="70%" y="72%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/19.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To admire</em>
                  p.colr <em>Your followers look up to you.</em>
            .tarjeta.bgr_5.p-3(x="50%" y="86%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/20.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To be attentive, to be aware of or to take care of something or someone</em>
                  p.colr <em>We must look out for any other environmental changes.</em>
            .tarjeta.bgr_5.p-3(x="30%" y="72%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/21.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To review or browse</em>
                  p.colr <em>The journalists have already looked through the electoral report.</em>
            .tarjeta.bgr_5.p-3(x="10%" y="58%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/22.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To consult or search for something in a book or a database</em>
                  p.colr <em>He is looking up the word in the dictionary.</em>
            .tarjeta.bgr_5.p-3(x="10%" y="29%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/23.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To wait for something to happen and to be excited about it</em>
                  p.colr <em>I look forward to participating in the next cultural and sports day in the neighborhood.</em>
            .tarjeta.bgr_5.p-3(x="30%" y="15%" numero="+")
              .row
                .col-auto
                  Audio.color-acento-botones.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/24.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-9
                  p.colr.text-bold <em>To check, to review or to examine something</em>
                  p.colr <em>Let's look the document over before signing it.</em>

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/10.svg", alt="alt")
      .col-lg-6.position-relative
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span <em>Classification of phrasal verbs </em>
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/11.svg", alt="alt")
        Audio.color-acento-botones.pst_2(
          :audio="require('@/assets/componentes/audios/tema1/25.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        Audio.color-acento-botones.pst_3(
          :audio="require('@/assets/componentes/audios/tema1/26.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        Audio.color-acento-botones.pst_4(
          :audio="require('@/assets/componentes/audios/tema1/27.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")

    p.colr <em><b>Note.</b> In terms of word order, there are tree main types of phrasal verbs: intransitive, separable, and inseparable. </em> / En cuanto al orden de las palabras, hay tres tipos principales de verbos frasales: intransitivos, separables e inseparables.

    .bg_grad-08
      .bg_grad-09
        .row.mb-5.justify-content-center
          .col-lg-3.order-2.order-lg-1
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/7.png", alt="alt")
          .col-lg-4.d-flex.align-items-center.order-1.order-lg-2.mb-3.mb-lg-0
            div
              p.colr_3.mb-0.text-bold <em>Warning</em> / Advertencia:
              p.colr_3.mb-0 <em>There are phrasal verbs that can be transitive in one sentence and intransitive in another, and their meanings change.</em>
              p.colr_4.mb-0 Hay verbos frasales que pueden ser transitivos en una oración e intransitivos en otra, y sus significados cambian.
      
      .row.justify-content-center
        .col-lg-4.pe-0
          figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/12.svg", alt="alt")
        .col-lg-6.bgr.p-4
          p.colr.text-bold.text-center <em>Take off</em>
          .tarjeta.bgr_2.p-3.mb-3
            p.colr_2 <em>To remove something:</em>
            .row
              .col-auto
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema1/28.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-9.d-flex.align-items-center
                div
                  p.colr <em> Sandra took off her earrings. (Transitive)</em>
                  
            .row
              .col-auto
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema1/29.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-9.d-flex.align-items-center
                div
                  p.colr <em>Sandra took her earrings off.</em>
                  p <b>Quitar algo:</b> Sandra se quitó los aretes. (Transitivo)
          .tarjeta.bgr_2.p-3
            p.colr_2 <em>To leave the ground and begin to fly:</em>
            .row
              .col-auto
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema1/30.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-9.d-flex.align-items-center
                div
                  p.colr <em>The plane took off with a bit of turbulence. (Intransitive)</em>
                  p <b>Dejar el suelo y empezar a volar:</b> El avión despegó con un poco de turbulencia. (Intransitivo)
    
    separador

    #t_1_1.titulo-segundo.color-primario
      h2 1.1 <em>Separable</em> (Separables)

    .row
      .col-lg-5.mb-3.mb-lg-0
        p.colr <em>Now, we are going to check that only certain transitive phrasal verbs are separable:</em>
        p.colr_1 Ahora, vamos a comprobar que solo ciertos verbos frasales transitivos son separables:
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/13.png", alt="alt")
      .col-lg-7
        table
          thead.bgr_7
            tr.text-center.text-bold
              td.colr <em>Phrasal verb</em> / Verbo frasal
              td.colr <em>Meaning</em> / Significado
          tbody.bgr_6
            tr
              td 
                .row.d-flex.align-items-center
                  .col-auto
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema1/31.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-10
                    p.mb-0.colr.text-bold <em>Let (somebody) down</em>
              td Decepcionar (a alguien)
            tr
              td 
                .row.d-flex.align-items-center
                  .col-auto
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema1/32.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-10
                    p.mb-0.colr.text-bold <em>Pick (somebody or something) up</em>
              td Recoger (a alguien o algo)
            tr
              td 
                .row.d-flex.align-items-center
                  .col-auto
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema1/33.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-10
                    p.mb-0.colr.text-bold <em>Call (somebody) back</em>
              td Devolverle la llamada (a alguien)
            tr
              td 
                .row.d-flex.align-items-center
                  .col-auto
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema1/34.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-10
                    p.mb-0.colr.text-bold <em>Take (somebody or something) back</em>
              td
                p Llevar (a alguien) de vuelta
                p Tomar (algo) de vuelta
            tr
              td 
                .row.d-flex.align-items-center
                  .col-auto
                    Audio.color-acento-botones.m-auto(
                      :audio="require('@/assets/componentes/audios/tema1/35.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                  .col-lg-10
                    p.mb-0.colr.text-bold <em>Fill (something) out</em>
              td Llenar (algo)
    
    separador

    #t_1_2.titulo-segundo.color-primario
      h2 1.2 <em>Inseparable</em> (No separable)
                      
    p.colr <em>We can conclude that intransitive phrasal verbs are always inseparable and that certain transitive phrasal verbs are inseparable.</em>
    p.mb-5.colr_1 Podemos concluir que los verbos frasales intransitivos siempre son inseparables y que ciertos verbos frasales transitivos son inseparables.

    .row.mb-5
      .col-lg-6
        .bgr_8.p-5
          SlyderF
            div
              .bgr_9.p-3
                h4.text-center <em>Intransitive</em> / Intransitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/14.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/36.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Break down</em>
                        p.mb-0 Descomponerse o dañarse
            div
              .bgr_9.p-3
                h4.text-center <em>Intransitive</em> / Intransitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/15.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0   
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/37.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Grow up</em>
                        p.mb-0 Crecer
            div
              .bgr_9.p-3
                h4.text-center <em>Intransitive</em> / Intransitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/16.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0   
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/38.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Step aside</em>
                        p.mb-0  Hacerse a un lado
            div
              .bgr_9.p-3
                h4.text-center <em>Intransitive</em> / Intransitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/17.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0   
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/39.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Sit down</em>
                        p.mb-0  Sentarse
            div
              .bgr_9.p-3
                h4.text-center <em>Intransitive</em> / Intransitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0 
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/18.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0  
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/40.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Get up</em>
                        p.mb-0  Levantarse
      .col-lg-6
        .bgr_1.h-100.p-5
          SlyderF
            div
              .bgr_11.p-3
                h4.text-center <em>Transitive</em> / Transitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0 
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/19.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0    
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/41.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em> Look after</em>
                        p.mb-0  Cuidar de
            div
              .bgr_11.p-3
                h4.text-center <em>Transitive</em> / Transitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0  
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/20.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0  
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/42.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Run out of</em>
                        p.mb-0 Quedarse sin
            div
              .bgr_11.p-3
                h4.text-center <em>Transitive</em> / Transitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/21.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0    
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/43.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Roll up</em>
                        p.mb-0  Enrollar
            div
              .bgr_11.p-3
                h4.text-center <em>Transitive</em> / Transitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0 
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/22.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0   
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/44.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Carry out</em>
                        p.mb-0 Llevar a cabo
            div
              .bgr_11.p-3
                h4.text-center <em>Transitive</em> / Transitivo
                p.mb-0.text-bold.text-center <em>Phrasal verb</em> / Verbo frasal
              .bgr_10
                .row.p-3
                  .col-lg-auto.mb-3.mb-lg-0 
                    figure.d-flex.justify-content-center
                      img.w-auto(src="@/assets/curso/tema1/23.svg", alt="alt")
                  .col-lg-8
                    .row
                      .col-lg-auto.mb-3.mb-lg-0    
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/45.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                      .col-lg-8.text-center
                        p.colr <em>Find out</em>
                        p.mb-0 Descubrir
                      
    p.colr <em>Now it's your turn to use the phrasal verbs. Complete the following dialogue. </em>
      span.colr_1 / Ahora es su turno de usar los verbos frasales. Complete el siguiente diálogo:
    
    Dialogo.color-acento-contenido.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Use the phrasal verbs</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

      
</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionT,
    TraduccionChat,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Phrasal verbs (so called because they are a "small phrase" of 2 or 3 words) are verbal structures composed by two particles: verb + adverb or preposition, which speak of a specific action or state, and often their meanings are different from those of their parts separately. Thanks to this, from the same verb, for example, "let", very different phrasal verbs can be created: let in (to permit someone or something to get inside somewhere), let down (to disappoint), let go (to permit someone or something to leave), let yourself go (to relax). Their use among native English speakers is widespread, therefore they are an essential subject for students of the language. We will initially review some verbs and their meanings. Listen and repeat:</em>',
        textoEsp:
          'Los verbos frasales (llamados así porque son una "pequeña frase" de 2 o 3 palabras) son estructuras verbales compuestas por dos partículas: verbo + adverbio o preposición, que hablan de una acción o estado específico, y muchas veces, su significado es diferente al de sus partes por separado. Gracias a esto, de un mismo verbo, por ejemplo, "<em>let</em>", se pueden crear verbos compuestos muy distintos entre sí: <em>let in</em> (dejar entrar), <em>let down</em> (decepcionar), <em>let go</em> (dejar ir), <em>let yourself go</em> (relajarse, "dejarse llevar"). Su uso entre hablantes nativos de inglés es muy extendido, por ende, es un tema indispensable para los estudiantes del idioma. Revisemos inicialmente algunos verbos y su significado. Escuche y repita: ',
      },
    ],
    traduccionChat: {
      personajes: [
        {
          nombre: 'Nina',
        },
        {
          nombre: 'Lucila',
        },
      ],
      dialogo: [
        {
          personaje: 'Nina',
          textoIng: '<em>Look at the sky. It’s so gray and gloomy.</em>',
          textoEsp: 'Mira el cielo. Es tan gris y sombrío.',
          audio: require('@/assets/componentes/audios/tema1/11.mp3'),
        },
        {
          personaje: 'Lucila',
          textoIng:
            '<em>And the saddest thing is that those aren’t rain clouds. It’s smog.</em>',
          textoEsp:
            'Y lo más triste es que esas no son nubes de lluvia. Es <em>smog</em>.',
          audio: require('@/assets/componentes/audios/tema1/12.mp3'),
        },
        {
          personaje: 'Nina',
          textoIng:
            '<em>I know. The government should cut back on the use of fossil fuels.</em>',
          textoEsp:
            'Lo sé. El gobierno debería reducir el uso de combustibles fósiles.',
          audio: require('@/assets/componentes/audios/tema1/13.mp3'),
        },
        {
          personaje: 'Lucila',
          textoIng:
            '<em>They are putting off the change to clean energy, but it’s a must to take down the petroleum from the list of most used energy sources. </em>',
          textoEsp:
            'Están aplazando el cambio a energías limpias, pero hay que sacar al petróleo de la lista de fuentes de energía más utilizadas.',
          audio: require('@/assets/componentes/audios/tema1/14.mp3'),
        },
      ],
    },
    dialogo2: [
      {
        textoIng:
          '<em>Finally remember that phrasal verbs are classified depending on whether their action affects something or someone other than the subject of the sentence, or whether their particles can be written separately or must always go together. Let’s see: </em>',
        textoEsp:
          'Finalmente, recuerde que los verbos frasales se clasifican dependiendo de si su acción afecta algo o a alguien más aparte del sujeto de la oración, o si se pueden escribir sus partículas por separado o deben ir siempre juntas. Veamos:',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Nina',
          img: require('@/assets/curso/tema1/24.svg'),
        },
        {
          nombre: 'Lucila',
          img: require('@/assets/curso/tema1/25.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Nina',
          textoIng:
            '<em>Hopefully, the new environmentalist senator we voted for is not going to let us</em> ***',
          textoEsp:
            'Ojalá el nuevo senador ambientalista por el que votamos no nos decepcione.',
          audio: require('@/assets/componentes/audios/tema1/46.mp3'),
          palabra: '<em>down</em>',
        },
        {
          personaje: 'Lucila',
          textoIng:
            '<em>I also have faith he is going to help us out. The oil tycoons cannot get</em> *** <em>with this ecocide.</em>',
          textoEsp:
            'Yo también tengo fe en que nos va a ayudar. Los magnates del petróleo no pueden salirse con la suya con este ecocidio. ',
          audio: require('@/assets/componentes/audios/tema1/47.mp3'),
          palabra: '<em>away</em>',
        },
        {
          personaje: 'Nina',
          textoIng:
            '<em>Yes, what good is it for us to recycle if they take</em> *** <em>their private jets and with a single 15-minute trip they contaminate what we do in our entire lives.</em>',
          textoEsp:
            'Sí, de qué sirve que nosotros reciclemos si ellos despegan sus jets privados y con un solo viaje de 15 minutos contaminan lo que nosotros en toda nuestra vida.',
          audio: require('@/assets/componentes/audios/tema1/48.mp3'),
          palabra: '<em>off</em>',
        },
        {
          personaje: 'Lucila',
          textoIng:
            '<em>Exactly my point. That’s a pending discussion we all need to talk</em> ***!',
          textoEsp:
            'Exactamente mi punto. ¡Esa es una discusión pendiente de la que todos tenemos que hablar!',
          audio: require('@/assets/componentes/audios/tema1/49.mp3'),
          palabra: '<em>about</em>',
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
