<template>
  <main>
    <!-- Nav -->
    <nav>
      <Nav />
      <hr>
    </nav>

    <!-- SLOT - CONTENT -->
     
    <RouterView />

    <!-- Footer -->
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

import '@/assets/main.scss'



</script>

<style lang="scss" scoped>
nav{
  hr{
    height: 0.3px;
    color: #58635d;
    background: #58635d;
    font-size: 0;
    border: 0;
  }
}

</style>