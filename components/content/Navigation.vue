<template>


  <nav class="bg-white border-gray-200 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_moBsxaAqqGsg3WI5-dl4FHYNOByipJCca7oADTsQBsCu0=s160-c-k-c0x00ffffff-no-rj"
          class="h-8 rounded-full" alt="JayDee Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">JayDee Gaming</span>
      </NuxtLink>
      <button type="button" @click="isOpen = !isOpen"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class=" w-full  md:w-auto" v-if="isOpen">


        <ContentNavigation v-slot="{ navigation }">

          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path" class="block py-2 px-3 text-black  rounded md:bg-transparent md:p-0 "
                activeClass="text-blue-500" aria-current="page">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
const isOpen = ref(true)
</script>