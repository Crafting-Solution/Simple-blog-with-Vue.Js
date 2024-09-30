<template>
  <div class="navbar">
    <div class="logo">
      <img :src="Logo" class="id" alt="" />
        <span>Vue Jobs</span>
    </div>
    <div class="nav-links">
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <RouterLink :to="{}">Jobs</RouterLink>
      <RouterLink :to="{name: 'contact'}">Contact</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '@/assets/images/logo.png'




</script>

<style scoped>
.navbar{
    padding: 12px 14px;
    background-color: #022110;
}
/* NAV BAR */
.navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-left: 30px;

}
.navbar .logo span{
    margin-left: 7px;
    font-size: 22px;
    color: white;
}
.navbar .logo img{
    height: 40px;
    width: 60px;
}

.navbar .nav-links a{
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
    color: black;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    padding: 12px 14px;
}
.navbar .nav-links a:hover{
    background-color: white;
    color: black;
    transition: 0.4s;
}


</style>