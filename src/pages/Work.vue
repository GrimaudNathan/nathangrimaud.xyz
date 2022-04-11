<script setup>
import ScrollReveal from 'scrollreveal'
ScrollReveal({ duration: 1000, distance: '50px', opacity: 0 })
</script>
<template>
  <header class="sticky top-0 text-white">
    <div class="flex justify-end">
      <div
        class="pt-10 pr-7 transition hover:-translate-x-3 md:pt-24 md:pr-48 hover:md:pr-44"
        @mouseover="text = 'nathan.home'"
        @mouseleave="text = 'nathan.'"
      >
        <router-link to="/" class="text-xl font-semibold">{{ text }}</router-link>
      </div>
    </div>
  </header>
  <div class="sr-bot mt-52 px-5 pb-20 text-white md:mx-auto md:max-w-[60%]">
    <div class="transition duration-300 hover:translate-x-10">
      <a href="https://themintpass.io" target="_blank">
        <h1 class="text-4xl font-bold md:text-9xl">TheMintPass</h1>
        <h2 class="mt-5 text-2xl font-medium text-blue-700">
          Website, design, smart contract, art generation
        </h2>
      </a>
    </div>
    <div class="mt-40 transition duration-300 hover:translate-x-10">
      <a href="https://cryptochampionsnft.io/" target="_blank">
        <h1 class="text-4xl font-bold md:text-9xl">CryptoChampions</h1>
        <h2 class="mt-5 text-2xl font-medium text-blue-700">Website, software</h2>
      </a>
    </div>
    <div class="mt-40 transition duration-300 hover:translate-x-10">
      <a href="https://carconnectnft.com" target="_blank">
        <h1 class="text-4xl font-bold md:text-9xl">CarConnect</h1>
        <h2 class="mt-5 text-2xl font-medium text-blue-700">
          Website, design, smart contract, art generation
        </h2>
      </a>
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
