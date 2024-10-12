<template>
  <div class="relative w-full h-[500px]" id="home">
    <div class="absolute inset-0 opacity-70">
      <img src="https://cdn.discordapp.com/splashes/797403613730177034/9a5cdebbbaca79196442b509954782c8.jpg?size=2048"
        alt="Background Image" class="object-cover object-center w-full h-full" />

    </div>
    <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between text-white">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
          <ContentSlot name="title" />
        </h1>
        <p class="font-regular text-xl mb-8 mt-4">One stop solution for flour grinding services</p>
        <a href="#contactUs"
          class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
          Us</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>