<script setup>
import ScrollReveal from 'scrollreveal'
import AboutVue from './About.vue'
ScrollReveal({ duration: 1000, distance: '50px', opacity: 0 })
</script>
<template>
  <div @click="reveal()" class="relative h-screen px-5 md:mx-auto md:max-w-[60%]">
    <div class="absolute top-1/2 -translate-y-1/2">
      <div class="sr-bot">
        <div
          @mouseover="text1 = 'About'"
          @mouseleave="text1 = 'Hello.'"
          class="transition duration-300 hover:translate-x-10"
        >
          <router-link to="/about" class="text-7xl font-bold text-white md:text-9xl">{{
            text1
          }}</router-link>
        </div>
      </div>
      <div class="sr-bot-2">
        <div
          @mouseover="text2 = 'Work'"
          @mouseleave="text2 = 'I am'"
          class="mt-3 transition duration-300 hover:translate-x-10"
        >
          <router-link to="/work" href="" class="text-7xl font-bold text-blue-700 md:text-9xl">{{
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
          <router-link to="/contact" class="text-7xl font-bold text-blue-700 md:text-9xl">{{
            text3
          }}</router-link>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden">
      <div class="animate-bounce text-lg text-white">Tap anywhere</div>
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
  methods: {
    reveal() {
      if (window.innerWidth <= 768) {
        this.text1 = 'About'
        this.text2 = 'Work'
        this.text3 = 'Contact'
      }
    },
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
