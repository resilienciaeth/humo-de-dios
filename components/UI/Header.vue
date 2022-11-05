<template>
  <header class="pt-4">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- lg+ -->
      <nav class="flex h-16 items-center justify-between lg:h-20">
        <div class="flex-shrink-0">
          <nuxt-link to="/" class="flex">
            <img
              class="h-10 w-auto lg:h-12"
              src="@/assets/img/Logo.png"
              alt="Humo De Dios"
            />
          </nuxt-link>
        </div>

        <!-- <button
          type="button"
          class="inline-flex rounded-md p-2 text-white transition-all duration-200 hover:bg-gray-800 focus:bg-gray-800 md:hidden"
          @click="toggleNavigation"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button> -->

        <div class="flex md:items-center md:space-x-10">
          <!-- <nuxt-link
            to="/"
            class="font-Cinzel text-sm text-nude transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-lg"
          >
            Club
          </nuxt-link> -->
          <nuxt-link
            to="/aplicar"
            class="font-Cinzel text-sm text-nude transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-lg"
          >
            Aplicar
          </nuxt-link>
          <!-- <nuxt-link
            to="/elegidos"
            class="font-Cinzel text-sm text-nude transition-all duration-200 hover:text-opacity-70 focus:text-opacity-70 lg:text-lg"
          >
            Elegidos
          </nuxt-link> -->
        </div>
      </nav>

      <!-- xs to lg -->
      <!-- <nav
        class="min-h-screen bg-black px-4 py-10 text-center md:hidden"
        :class="{ hidden: !navigation }"
      >
        <button
          type="button"
          class="inline-flex rounded-md p-2 text-white transition-all duration-200 hover:bg-gray-800 focus:bg-gray-800"
          @click="toggleNavigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav class="mt-10 flex flex-col items-center space-y-2">
          <nuxt-link
            to="/"
            class="py-2 font-Cinzel text-nude transition-all duration-200 focus:text-opacity-70"
          >
            Club
          </nuxt-link>
          <nuxt-link
            to="/aplicar"
            class="py-2 font-Cinzel text-nude transition-all duration-200 focus:text-opacity-70"
          >
            Aplicar
          </nuxt-link>
          <nuxt-link
            to="/elegidos"
            class="py-2 font-Cinzel text-nude transition-all duration-200 focus:text-opacity-70"
          >
            Elegidos
          </nuxt-link>
        </nav>
      </nav> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      navigation: false,
    }
  },

  methods: {
    toggleNavigation() {
      this.navigation = !this.navigation
    },
  },
}
</script>
