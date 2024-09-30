<template>
  <main>
    <JobListings :posts="posts" :key="posts" />
  </main>

</template>

<script setup>
    import JobListings from './JobListings.vue';

    const props = defineProps(['posts'])
    


</script>

<style>

</style>