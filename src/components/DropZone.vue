<template>
    <div @dragenter.prevent="toggleActive" 
        @dragleave.prevent="toggleActive" 
        @dragover.prevent
        @drop.prevent="toggleActive" class="dropzone" :class="{'active-dropzone': active}">
      <span>Drag or Drop File</span>
      <span>OR</span>
      <label for="dropzoneFile">Select File</label>
      <input type="file" id="dropzoneFile" class="dropzoneFile">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(false)


const toggleActive = () =>{
    active.value = !active.value
}

</script>

<style lang="scss" scoped>
.dropzone{
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #41b883;
    transition: 0.3s ease all;
    margin: 1em 0em 1em 0em;


    label{
        padding: 8px 12px;
        color: #fff;
        background-color: #41b883;
       transition: .3s ease all; 
       cursor: pointer;
    }
    input{
        display: none;
    }
}
.active-dropzone{
    color: white;
    border-color: white;
    background-color: #41b883;

    span{
        color: white;
    }
    label{
        color: #41b883;
        background-color: white;
    }
}


</style>