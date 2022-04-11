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
  <div class="sr-bot max-w-[60%] mx-auto mt-52 text-white pb-20">
    <div class="hover:translate-x-10 transition duration-300">
      <a href="https://themintpass.io" target="_blank">
        <h1 class="text-9xl font-bold">TheMintPass</h1>
        <h2 class="mt-5 text-2xl font-medium text-blue-700">Website, design, smart contract, art generation</h2>
      </a>
    </div>
    <div class="mt-40 hover:translate-x-10 transition duration-300">
      <a href="https://cryptochampionsnft.io/" target="_blank">
        <h1 class="text-9xl font-bold">CryptoChampions</h1>
        <h2 class="mt-5 text-2xl font-medium text-blue-700">Website, software</h2>
      </a>
    </div>
    <div class="mt-40 hover:translate-x-10 transition duration-300">
      <a href="https://carconnectnft.com" target="_blank">
        <h1 class="text-9xl font-bold">CarConnect</h1>
        <h2 class="mt-5 text-2xl font-medium text-blue-700">Website, design, smart contract, art generation</h2>
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
