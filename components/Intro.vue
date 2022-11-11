<template>
  <section
    class="flex min-h-screen flex-col items-center justify-center bg-black py-16 px-4 md:px-8 lg:py-32 lg:px-12"
  >
    <div class="relative flex flex-col items-center justify-center">
      <Ornament />
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        class="text-center font-Rumble text-4xl text-nude md:text-5xl lg:text-6xl"
      >
        ¿QUE ES EL SMOKERS CLUB?
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        class="my-4 max-w-4xl text-center font-Calisto text-base leading-tight text-nude text-opacity-60 lg:my-10 lg:px-10"
      >
        Se trata de un espacio exclusivo donde hallarás la atmósfera ideal para
        vincularte con seres especiales y generar conexiones de crecimiento
        valiosas.<br /><br />
        Es una comunidad selecta de pensadores, creadores, atletas, artistas y
        seres que han profundizado divinamente en su arte. <br /><br />Smokers
        Club brinda una experiencia plena de creatividad y conocimiento, por
        supuesto abrazada por los más profundos finos tabacos. Es la reunión en
        donde los elegidos consagran con sus iguales.
      </p>
      <img
        data-aos="fade-up"
        data-aos-delay="500"
        src="@/assets/img/smoke.png"
        class="absolute -bottom-40 md:top-32 lg:top-40"
      />
    </div>

    <div
      class="relative z-10 mt-4 w-full max-w-4xl cursor-pointer border-2 border-nude"
    >
      <img
        v-show="paused"
        src="@/assets/img/play.png"
        alt=""
        class="invisible absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform md:visible"
        @click="play"
      />
      <video
        ref="video"
        :poster="require('@/assets/img/placeholder.png')"
        controls
        preload="auto"
        playsIn
        muted
        @canplay="updatePaused"
        @playing="updatePaused"
        @pause="updatePaused"
      >
        <source src="@/assets/video/videonew.webm" />
        >
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheIntro',
  data() {
    return {
      videoIsPlaying: false,
      videoElement: null,
      paused: null,
    }
  },
  computed: {
    playing() {
      return !this.paused
    },
  },
  methods: {
    playVideo() {
      if (!process.client) return
      const video = this.$refs.video
      if (video.paused) {
        this.videoIsPlaying = true
        video.play()
      } else {
        this.videoIsPlaying = false
        video.pause()
      }
    },
    updatePaused(event) {
      this.videoElement = event.target
      this.paused = event.target.paused
    },
    play() {
      this.videoElement.play()
    },
    pause() {
      this.videoElement.pause()
    },
  },
}
</script>

<style></style>
