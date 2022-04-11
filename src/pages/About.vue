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
      <h1 class="text-8xl font-bold">I develop & build web3 projects</h1>
    </div>
  </div>
  <div class="mx-auto max-w-[50%] pb-20 text-white">
    <h1 class="text-5xl font-semibold">About</h1>
    <p class="mt-8 text-xl leading-8">
      Hi, I'm Nathan. A freelance web3 developer interested in contributing expertise in web and
      blockchain development to the web3 world. I got knowledge in blockchain security, blockchain
      architecture patterns, different blockchain standards and I'm specialized in NFTs. I also have
      a background as a front-end web developer and that's why I consider myself as a fullstack web3
      developer who can develop your DApp from scratch, through the website, the smart contract and
      the art generation for the NFTs projects.
    </p>
    <h1 class="mt-16 text-5xl font-semibold">Skills</h1>
    <h2 class="mt-8 text-2xl font-medium">Web</h2>
    <ul class="mt-2">
      <li>• HTML</li>
      <li>• CSS</li>
      <li>• JavaScript</li>
      <li>• VueJS</li>
      <li>• Ethers</li>
      <li>• Metamask</li>
    </ul>
    <h2 class="mt-4 text-2xl font-medium">Blockchain</h2>
    <ul class="mt-2">
      <li>• Solidity</li>
      <li>• Hardhat</li>
      <li>• Alchemy</li>
      <li>• Infura</li>
    </ul>
    <h2 class="mt-4 text-2xl font-medium">Others</h2>
    <ul class="mt-2">
      <li>• Git</li>
      <li>• Cloud Computing</li>
      <li>• DevOps</li>
    </ul>
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
