<script setup>
import ScrollReveal from 'scrollreveal'
ScrollReveal({ duration: 1000, distance: '50px', opacity: 0 })
</script>
<template>
  <header class="sticky top-0 text-white">
    <div class="flex justify-end">
      <div
        class="pt-24 pr-48 transition hover:-translate-x-3 hover:pr-44"
        @mouseover="text = 'nathan.home'"
        @mouseleave="text = 'nathan.'"
      >
        <router-link to="/" class="text-xl font-semibold">{{ text }}</router-link>
      </div>
    </div>
  </header>
  <div class="sr-bot relative mx-auto h-screen max-w-[60%] text-white">
    <div class="absolute top-1/2 -translate-y-[100%]">
      <h1 class="text-9xl font-bold">Let's make somethinng great!</h1>
    </div>
  </div>
  <div class="mx-auto max-w-[50%] pb-20 text-white">
    <h1 class="text-5xl font-semibold">Contact</h1>
    <p class="mt-8 text-xl leading-8">
      I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just
      work for them. I want to bring my experience to the table where were we can work together.
      If that sounds about right, then lets for sure chat about how we can work together.
    </p>
    <div class="mt-4 text-xl text-blue-700">
      <p>natgrimaud22@gmail.com</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'nathan.',
    }
  },
  mounted() {
    ScrollReveal().reveal('.sr-bot', {
      delay: 100,
      origin: 'bottom',
    })
  },
}
</script>
