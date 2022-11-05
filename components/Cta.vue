<template>
  <section
    class="flex flex-col items-center justify-center bg-black py-16 px-4 md:px-8 lg:min-h-screen lg:py-32 lg:px-12"
  >
    <div class="relative flex flex-col items-center justify-center">
      <Ornament />
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        class="text-center font-Rumble text-4xl text-nude md:text-5xl lg:text-6xl"
      >
        comunidad altamente curada
      </h2>
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="@/assets/img/Sigar2.png"
        alt=""
        class="w-40 md:my-0 md:w-72"
      />
      <nuxt-link
        to="/aplicar"
        data-aos="flip-up"
        data-aos-delay="300"
        class="my-8 max-w-[200px] px-12 md:my-12 md:max-w-[250px] lg:px-0"
      >
        <img src="@/assets/img/Button.png" />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheCTA',
}
</script>

<style></style>
