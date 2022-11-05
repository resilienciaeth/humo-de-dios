<template>
  <section class="home-hero relative flex min-h-screen flex-col">
    <UIHeader class="z-10" />
    <div class="mx-auto flex max-w-6xl flex-1 items-center justify-between">
      <img
        data-aos="fade-right"
        data-aos-delay="300"
        src="@/assets/img/Chicha.png"
        alt=""
        class="max-w-xs"
      />
      <div class="ml-10 flex flex-col justify-center">
        <p
          data-aos="fade-left"
          data-aos-delay="300"
          class="font-Louisa text-4xl font-light text-nude"
        >
          Smokers Club.
        </p>
        <h1
          data-aos="fade-left"
          data-aos-delay="400"
          class="font-Rumble text-8xl uppercase leading-none text-nude"
        >
          JAVIER HERNÁNDEZ
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="500"
          class="font-Calisto text-3xl text-nude"
        >
          Quiero ser ganador y siempre ser un buen humano, que a la larga se
          vera reflejado en la cancha.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>

<style scoped>
.home-hero {
  background-image: url(@/assets/img/Login.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
