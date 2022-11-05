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
        Los Fundadores
      </h2>

      <div
        class="mt-12 grid max-w-4xl grid-cols-1 gap-20 md:mt-8 md:grid-cols-3"
      >
        <div data-aos="fade-up" data-aos-delay="300">
          <img
            src="@/assets/img/member1.svg"
            alt=""
            class="mx-auto h-60 md:h-[450px]"
          />
          <p
            class="mt-8 text-center font-Cinzel text-2xl text-nude md:text-5xl xl:text-5xl"
          >
            mr. N
          </p>
          <p
            class="mt-1 text-center font-Calisto text-sm text-nude text-opacity-70"
          >
            Estamos frente a un auténtico Digital Jedi, sus habilidades
            creativas mezcladas con su liderazgo natural lo conducen a surfear
            las olas más altas del ecosistema digital.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <img
            src="@/assets/img/member2.svg"
            alt=""
            class="mx-auto h-60 md:h-[450px]"
          />
          <p
            class="mt-8 text-center font-Cinzel text-2xl text-nude md:text-5xl xl:text-5xl"
          >
            mr. D
          </p>
          <p
            class="mt-1 text-center font-Calisto text-sm text-nude text-opacity-70"
          >
            Es un ingeniero cuando se trata de emociones pero es un visionario
            cuando se trata de negocios. Prepara tu mente, te encontrarás con un
            mentor muy poderoso.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <img
            src="@/assets/img/member3.svg"
            alt=""
            class="mx-auto h-60 md:h-[450px]"
          />
          <p
            class="mt-8 text-center font-Cinzel text-2xl text-nude md:text-5xl xl:text-5xl"
          >
            mr. J
          </p>
          <p
            class="mt-1 text-center font-Calisto text-sm text-nude text-opacity-70"
          >
            El mundo lo conoce por portar un gran talento, es especialista en
            generar emociones mientras se divierte con el esférico. A su vez es
            un gran empresario que sabe cómo fluir en pláticas profundas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheTeam',
}
</script>

<style></style>
