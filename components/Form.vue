<template>
  <div id="form" class="min-w-screen my-12 bg-black md:my-16 lg:my-20">
    <h2
      class="m:mb-12 mb-8 text-center font-Rumble text-4xl text-nude md:text-5xl lg:mb-16 lg:text-6xl"
    >
      FORMULARIO DE APLICACIÓN
    </h2>
    <client-only
      ><iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf2CdKTZvne-6AcELbniRV-2YYDzARyGznfx7EB46HuenpbUA/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        class="max-w-screen mx-auto h-screen w-screen bg-black md:w-3/4"
        >Loading…</iframe
      ></client-only
    >
  </div>
</template>

<script>
export default {
  name: 'EmbeddedForm',
}
</script>

<style></style>
