<template>
  <div className='slider'>
        <h1>{{title}}</h1>
        <p>{{subtitle}}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Become a Vue Dev')
const subtitle = ref('Find the React Job that fits your skills and needs')


</script>

<style lang="scss" scoped>

.slider{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #022110;
    height: 250px;
}
.slider{
    h1{
        font-size: 50px;
        color: white;
    }
}
.slider{
    p{
    font-weight: 500;
    margin-top: 20px;
    color: white;
    }
}

</style>