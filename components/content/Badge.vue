<template>
  <span class='text-white bg-blue-900  text-lg font-medium me-2 px-2.5 py-0.5 rounded h-fit flex'
    v-if="props.color == 'blue'">
    <Icon class="mr-2" size="28px" :name="props.icon" />
    <p>{{
      props.text }}</p>
  </span>
  <span class='text-white bg-green-900  text-lg font-medium me-2 px-2.5 py-0.5 rounded h-fit flex'
    v-if="props.color == 'green'">
    <Icon class="mr-2" size="28px" :name="props.icon" />
    <p>{{
      props.text }}</p>
  </span>
  <span class='text-white bg-red-900  text-lg font-medium me-2 px-2.5 py-0.5 rounded h-fit flex'
    v-if="props.color == 'red'">
    <Icon class="mr-2" size="28px" :name="props.icon" />
    <p>{{
      props.text }}</p>
  </span>
  <span class='text-white bg-[#5865F2] text-lg font-medium me-2 px-2.5 py-0.5 rounded h-fit flex'
    v-if="props.color == 'discord'">
    <Icon class="mr-2" size="28px" :name="props.icon" />
    <p>{{
      props.text }}</p>
  </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string,
  color: 'red' | 'blue' | 'green' | "discord",
  icon: string
}>()
</script>

<style></style>