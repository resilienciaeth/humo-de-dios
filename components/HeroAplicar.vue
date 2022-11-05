<template>
  <section class="home-hero relative flex flex-col">
    <UIHeader class="z-10" />
    <div class="z-10 mt-40 mb-72 flex items-center justify-center">
      <div>
        <!-- <p
          data-aos="fade-up"
          data-aos-delay="300"
          class="text-center font-Louisa text-3xl font-light text-nude lg:text-4xl"
        >
          Naked Meta presents:
        </p> -->
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          class="text-center font-Rumble text-6xl uppercase leading-[0.8] text-nude md:text-8xl lg:text-[150px]"
        >
          ÚNETE A HUMO DE DIOS
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          class="text-center font-Louisa text-4xl font-light leading-tight text-nude md:text-6xl lg:text-[100px]"
        >
          Smokers Club.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHeroAplicar',
}
</script>

<style scoped>
.home-hero {
  background-image: url(@/assets/img/HeroAplicar.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
