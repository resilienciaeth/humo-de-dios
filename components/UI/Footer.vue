<template>
  <section
    class="flex flex-col items-center justify-center bg-black px-4 pt-48 pb-36 md:px-8 lg:px-12"
  >
    <div
      class="flex cursor-pointer flex-col items-center justify-center space-y-10"
      @click="scrollToTop()"
    >
      <p class="text-center font-Cinzel text-2xl text-nude">To the top</p>
      <img
        src="@/assets/img/Eye.png"
        alt=""
        class="max-w-[180px] cursor-pointer"
      />
    </div>
    <div
      class="mt-12 flex flex-col items-center gap-4 md:mt-24 md:flex-row md:gap-16"
    >
      <nuxt-link
        to="/"
        class="order-2 text-center font-Cinzel text-nude md:order-1"
        >home</nuxt-link
      >
      <!-- <nuxt-link
        to="/aplicar"
        class="text-center font-Cinzel text-2xl text-nude"
        >aplicar</nuxt-link
      > -->
      <nuxt-link
        to="/"
        class="order-1 text-center font-Rumble text-6xl text-nude md:order-2"
        >HUMO DE DIOS</nuxt-link
      >
      <!-- <nuxt-link to="" class="text-center font-Cinzel text-2xl text-nude">club</nuxt-link> -->
      <!-- <nuxt-link
        to="/elegidos"
        class="text-center font-Cinzel text-2xl text-nude"
        >elegidos</nuxt-link
      > -->
      <nuxt-link
        to="/aplicar"
        class="order-3 text-center font-Cinzel text-nude md:order-3"
        >aplicar</nuxt-link
      >
    </div>
    <p class="mt-2 text-center text-xs text-nude text-opacity-80">
      All rights Reserved. Design by Naked Meta
    </p>
  </section>
</template>

<script>
export default {
  name: 'TheFooter',
  methods: {
    scrollToTop() {
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
  },
}
</script>

<style></style>
