<template>
    <div class="apply">
      <div class="contact-container">
        <div class="contact-details">
          <div class="contact2">
            <div class="contact-form reveal">
              <form v-if="jobPost" @submit.prevent="applicationSubmitted">
                <div class="field1">
                  <p class="git">Application <span> Form</span></p>
                  <input type="text" v-model="fullName" placeholder="Full name" required />
                </div>
                <div class="field2">
                  <input type="email" v-model="emailAddress" placeholder="Email address" required />
                </div>
                <div class="field3">
                  <select>
                    <option :value="jobPost.title">{{ jobPost.title }}</option>
                  </select>
                  <!-- For Drag and drop - we are making use of HTML drag and drop API (Mozilla) -->
                  <DropZone @drop.prevent="drop" @change="selectedFile" />
                  <span class="file-info">File: {{ dropzoneFile.name }}</span>
                </div>
                <div class="field4">
                  <textarea id="Message" v-model="message" placeholder="Your message" rows="10"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div v-else>
                Loading data...
            </div>
            <div class="error-message">
                {{ formError }}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  

<script setup>
    import { ref, watchEffect } from 'vue';
    import DropZone from '@/components/DropZone.vue';

    const props = defineProps(['id'])

    const jobsPostID = ref(props.id)
    const jobPost = ref(null)
    const error = ref(null)

    watchEffect(async () => {
    try {
        let response = await fetch(`http://localhost:3000/posts/${jobsPostID.value}`);
        if (!response.ok) {
        throw new Error('No data fetched');
        } else {
        jobPost.value = await response.json();
        console.log(jobPost.value);
        }
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }
    });

    // Dropzone 
    const dropzoneFile = ref([])

    const drop =(e) =>{
        dropzoneFile.value = e.dataTransfer.files[0]
    }

    const selectedFile = () =>{
        dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
    }

    const fullName = ref(null)
    const emailAddress = ref(null)
    const jobTitle = ref(null)
    const message = ref(null)
    const formError = ref('')

    // Form Validation
    const applicationSubmitted = () =>{
        formError.value = message.value.length ? '' : 'Field cannot be empty'
        if(!formError.value){
            console.log('Full Name: ', fullName.value)
            console.log('Email Address: ', emailAddress.value)
            console.log('Job Title: ', jobTitle.value)
            console.log('Message: ', message.value)

            alert('Application Submitted!')

            // Clear all fields
            fullName.value = ''
            emailAddress.value = ''
            jobTitle.value = ''
            message.value = ''
        }



    }

</script>

<style scoped lang="scss">
/* CONTACT */
.apply .contact-container .contact-form{
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
    height: 750px;
}
.apply .contact-container .contact-form > form{
    padding: 0em 1em 1em 1em;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
}
.apply .contact-container .contact-form > form .git{
    grid-column: 1/-1;
    padding: 0.5em;
    font-size: 40px;
    text-align: center;
    color: #474A49;
    margin-bottom: 0.5em;
    font-weight: bolder;
}
.apply .contact-container .contact-form > form .git span{
    color: #474A49;
}
/* FIELD 1 */
.apply .contact-container .contact-form > form .field1 > input{
    outline: none;
    font-size: 14px;
    text-indent: 10px;
    padding: 11px;
    height: 40px;
    width: 100%;
    border: none;
    background-color: #d9e1ea;
}
/* FIELD 2 */
.apply .contact-container .contact-form > form .field2 > input{
    outline: none;
    font-size: 14px;
    text-indent: 10px;
    padding: 11px;
    height: 40px;
    width: 100%;
    border: none;
    background-color: #d9e1ea;
}
/* FIELD 3 */
.apply .contact-container .contact-form > form .field3 > select{
    font-size: 14px;
    text-indent: 10px;
    padding: 11px;
    height: 40px;
    width: 100%;
    background-color: #d9e1ea;
}
/* FIELD 4 */
.apply .contact-container .contact-form > form .field4{
    grid-column: 1/-1;
}
.apply .contact-container .contact-form > form .field4 > textarea{
    outline: none;
    font-size: 14px;
    text-indent: 10px;
    padding: 11px;
    width: 100%;
    border: none;
    background-color: #d9e1ea;
}
.apply .contact-container .contact-form > form .field4{
    grid-column: 1/-1;
}
.apply .contact-container .contact-form > form  > button{
    grid-column: 1/-1;
    background-color: black;
    color: #fff;
    font-size: 18px;
    height: 50px;
    outline: none;
    border: none;
    cursor: pointer;
}
.apply .contact-container .contact-form > form  > button:hover{
    opacity: 0.9;
}

/* CONTACT2 */
/* CONTACT2 */
/* CONTACT2 */
.apply .contact-container .contact-details .contact2 .contact-form{
    margin: 3em 0em 0em 0em;
}
.apply .contact-container .contact-details .contact2 .contact-form form .git{
    padding-top: 0em;
}


</style>