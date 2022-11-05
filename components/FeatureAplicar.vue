<template>
  <section class="bg-black py-12 px-4 md:py-24 md:px-8 lg:py-48 lg:px-12">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center">
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        class="text-center font-Louisa text-xl text-nude md:text-2xl lg:text-3xl"
      >
        Humo de Dios Smokers Club
      </p>
      <h2
        data-aos="fade-up"
        data-aos-delay="400"
        class="text-center font-Rumble text-5xl text-nude md:text-7xl lg:text-8xl"
      >
        área de consagración
      </h2>
      <img
        data-aos="fade-up"
        data-aos-delay="500"
        src="@/assets/img/3Gentleman.png"
        alt=""
        class="my-12 mx-8 px-12 md:my-16 md:px-0 lg:max-w-xs"
      />
      <nuxt-link
        to="/formulario"
        data-aos="flip-up"
        data-aos-delay="900"
        class="my-8 max-w-[250px] px-12 md:my-12 lg:px-0"
      >
        <img src="@/assets/img/Button.png" />
      </nuxt-link>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        class="max-w-4xl text-center font-Calisto text-xl text-nude md:text-2xl"
      >
        Humo de Dios Smokers Club existe para servir las necesidades sociales y
        profesionales de sus miembros, en toda ocasión, proveyendo reuniones
        creativa y culturalmente ricas. <br />
        <br />
        Habiendo dicho eso, el real valor de Smokers Club radica en sus
        miembros, es nuestro manifesto curar el ingreso a sólo los más capaces
        de aportar al resto en esta experiencia, sin excepciones.
      </p>
      <img
        data-aos="fade-up"
        data-aos-delay="700"
        src="@/assets/img/Frame.png"
        alt=""
        class="my-8 md:my-12 lg:my-16 lg:max-w-4xl"
      />
      <p
        data-aos="fade-up"
        data-aos-delay="800"
        class="max-w-4xl text-center font-Calisto text-xl text-nude md:text-2xl"
      >
        Tu llave de acceso es un NFT altamente limitado únicamente disponible
        para los aplicantes aprobados.<br />
        <br />
        Ser sugerido por otro elegido es lo recomendado, sin embargo no es un
        requisito. Una vez enviada la aplicación, y luego de haber sido filtrada
        por el equipo de Humo de Dios, el resto de los elegidos dispondrá el
        acceso a un nuevo miembro.
      </p>
      <nuxt-link
        to="/formulario"
        data-aos="flip-up"
        data-aos-delay="900"
        class="my-8 max-w-[250px] px-12 md:my-12 lg:px-0"
      >
        <img src="@/assets/img/Button.png" />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheFeature',
}
</script>

<style></style>
