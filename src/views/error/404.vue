<template>
  <div class="four0four">
    <div class="four0four-container">
        <h1 class="error-code">4<span>0</span>4</h1>
        <p class="error-message">The page you requested could not be found</p>
        <p>Return to <RouterLink :to="{name: 'home'}">HomePage</RouterLink></p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.four0four {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: #333;
}
.four0four .four0four-container {
    text-align: center;
}
.four0four .four0four-container a{
  color: #04aacd;
}
.four0four .four0four-container .error-code {
    font-size: 10rem;
    font-weight: bold;
    color: #333;
    letter-spacing: 5px;
}

.four0four .four0four-container .error-code span {
    color: #368b5c; 
}

.four0four .four0four-container .error-message {
    font-size: 1.5rem;
    color: #666;
    margin: 20px 0;
}

</style>
