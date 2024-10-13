<template>
  <div class="flex bg-gray-200 w-2/3 mx-auto rounded-lg overflow-hidden my-6">
    <img src="https://cdn.discordapp.com/avatars/605731050823614504/d83b2a3e2d9d1ffa48d7808f9e0a9607.png?size=512"
      class="w-5/6 h-full max-w-72" />
    <div class="mt-4">
      <div class="flex items-center">
        <h1 class="text-5xl font-semibold mr-4">{{ name }}</h1>
        <Badge :text="role_text" :color="role_color" :icon="role_icon" />
        <Badge :text="discord_name" color="discord" icon="skill-icons:discord" />
      </div>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type RoleColor = 'red' | 'blue' | 'green';
defineProps({
  name: {
    type: String,
    default: "Gabriel"
  },
  discord_name: {
    type: String,
    default: "Gabriel"
  },
  description: {
    type: String,
    default: "Servus! Ich bin Gabriel"
  },
  role_text: {
    type: String,
    default: "Technik"
  },
  role_icon: {
    type: String,
    default: "fluent-emoji:technologist-light"
  }, role_color: {
    type: String as () => RoleColor,
    default: "red",

  },
})
</script>

<style></style>