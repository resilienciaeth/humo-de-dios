<template>
  <div class="min-w-screen login-background min-h-screen">
    <div
      class="flex min-h-screen w-1/2 flex-col justify-between px-20 py-8 backdrop-blur-xl"
    >
      <header class="flex w-full items-center justify-between">
        <nuxt-link to="/">
          <img
            class="h-10 w-auto lg:h-12"
            src="@/assets/img/Logo.png"
            alt="Humo De Dios"
        /></nuxt-link>
        <nav class="flex items-center space-x-12">
          <nuxt-link to="/" class="text-center font-Cinzel text-2xl text-nude"
            >Club</nuxt-link
          >
          <nuxt-link to="/" class="text-center font-Cinzel text-2xl text-nude"
            >Aplicar</nuxt-link
          >
          <nuxt-link to="/" class="text-center font-Cinzel text-2xl text-nude"
            >Elegidos</nuxt-link
          >
        </nav>
      </header>
      <div>
        <p class="font-Louisa text-3xl text-nude">Smokers Club.</p>
        <h1 class="font-Cinzel text-9xl text-nude">Log in</h1>
        <p class="mb-8 font-Calisto text-lg text-nude text-opacity-50">
          ¿No tienes una cuenta?
          <nuxt-link to="/" class="">
            <span class="text-nude text-opacity-100"
              >Regístrate</span
            ></nuxt-link
          >
        </p>
        <nuxt-link to="/memberspage" class=""
          ><img src="@/assets/img/ButtonConnect.png"
        /></nuxt-link>
      </div>
      <p class="font-Calisto text-nude text-opacity-50">
        Humo de Dios Smokers Club. Todos los derechos reservados 2022
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style scoped>
.login-background {
  background-image: url(@/assets/img/Login.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
