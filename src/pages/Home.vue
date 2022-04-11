<script setup>
import ScrollReveal from 'scrollreveal'
ScrollReveal({ duration: 1000, distance: '50px', opacity: 0 })
</script>
<template>
  <div class="relative mx-auto h-screen max-w-[60%]">
    <div class="absolute top-1/2 -translate-y-1/2">
      <div class="sr-bot">
        <div
          @mouseover="text1 = 'About'"
          @mouseleave="text1 = 'Hello.'"
          class="transition duration-300 hover:translate-x-10"
        >
          <router-link to="/about" class="text-9xl font-bold text-white">{{ text1 }}</router-link>
        </div>
      </div>
      <div class="sr-bot-2">
        <div
          @mouseover="text2 = 'Work'"
          @mouseleave="text2 = 'I am'"
          class="mt-3 transition duration-300 hover:translate-x-10"
        >
          <router-link to="/work" href="" class="text-9xl font-bold text-blue-700">{{
            text2
          }}</router-link>
        </div>
      </div>
      <div class="sr-bot-3">
        <div
          @mouseover="text3 = 'Contact'"
          @mouseleave="text3 = 'Nathan'"
          class="mt-3 transition duration-300 hover:translate-x-10"
        >
          <router-link to="/contact" class="text-9xl font-bold text-blue-700">{{
            text3
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text1: 'Hello.',
      text2: 'I am',
      text3: 'Nathan',
    }
  },
  mounted() {
    ScrollReveal().reveal('.sr-bot', {
      delay: 100,
      origin: 'bottom',
    })
    ScrollReveal().reveal('.sr-bot-2', {
      delay: 300,
      origin: 'bottom',
    })
    ScrollReveal().reveal('.sr-bot-3', {
      delay: 500,
      origin: 'bottom',
    })
  },
}
</script>
