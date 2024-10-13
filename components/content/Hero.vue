<template>
  <div class="relative w-full h-[700px]" id="home">
    <div class="absolute inset-0 ">
      <img src="https://cdn.discordapp.com/splashes/797403613730177034/9a5cdebbbaca79196442b509954782c8.jpg?size=2048"
        alt="Background Image" class="object-cover object-center w-full h-full" />

    </div>
    <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between text-white ">
      <div class="md:w-1/4 mb-4 md:mb-0 px-4 bg-blue-700 py-10 rounded-lg bg-opacity-90 mx-auto text-center">
        <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
          {{ title }}
        </h1>
        <p class="font-regular text-xl mb-8 mt-4">{{ description }}</p>
        <div class="flex flex-wrap justify-center">
          <NuxtLink to="https://www.youtube.com/c/JayDeeGaming"
            class="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-white hover:text-black  transition duration-200 md:mr-4 ">
            <Icon name="logos:youtube-icon" class="mr-2" size="15px" />YouTube
          </NuxtLink>
          <NuxtLink to="https://discord.gg/jaydee"
            class="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-700 hover:text-white transition duration-200 md:mx-4">
            <Icon name="logos:discord-icon" class="mr-2" size="15px" />Discord
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "JayDee Community"
  },
  description: {
    type: String,
    default: " HighQuality PC Gameplays & Guides auf Deutsch in 21:9 (1440p)."
  }
})
</script>

<style></style>