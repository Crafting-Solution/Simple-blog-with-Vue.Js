<template>
    <div>
      <Slider />
      <!-- Content - Body -->
      <div v-if="posts.length">
        <HomeCards :posts="posts" />
      </div>
    </div>
</template>

<script setup>
  import defaultlayout from '@/layout/defaultlayout.vue';
  import Slider from '@/components/Slider.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import { ref } from 'vue';

  const posts = ref([])
  const error = ref(null)


  const load = async() => {
    try{
      let data = await fetch("http://localhost:3000/posts")
      if(!data.ok){
        throw Error("No data available")
      }else{
        posts.value = await data.json()
      }
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  
  load()


</script>

<style>

</style>