<template>
  <section class="relative flex h-full min-h-screen flex-col">
    <UIHeader class="z-10" />
    <div class="absolute inset-0">
      <img
        class="h-full w-full object-cover object-center"
        src="@/assets/img/Home.png"
        alt=""
      />
    </div>
    <div class="z-10 -mt-8 flex flex-1 items-center justify-center">
      <div>
        <!-- <p
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-duration="500"
          class="text-center font-Louisa text-2xl font-thin text-nude lg:text-3xl"
        >
          Naked Meta presents:
        </p> -->
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="500"
          class="text-center font-Rumble text-6xl uppercase leading-[0.8] text-nude md:text-8xl lg:text-[160px]"
        >
          humo de dios
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="500"
          class="text-center font-Louisa text-4xl font-light leading-tight text-nude md:text-6xl lg:text-7xl"
        >
          Smokers Club.
        </h2>
      </div>
    </div>
    <!-- <img src="@/assets/img/Home.png" alt="" class="absolute inset-0" /> -->
  </section>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>

<style scoped>
.home-hero {
  background-image: url(@/assets/img/Home.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
