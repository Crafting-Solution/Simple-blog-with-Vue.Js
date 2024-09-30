<template>
      <div class="contact-container">
        <div class="contact-details">
          <div class="contact2">
            <div class="contact-form reveal">
              <form>
                <div class="field1">
                  <p class="git">Inquire about an <span> application</span></p>
                  <input type="text" placeholder="Full name" required />
                </div>
                <div class="field2">
                  <input type="email" placeholder="Email address" required />
                </div>
                <div class="field3">
                  <select v-model="selectedPost">
                    <option value="">-- Select Job Title --</option>
                    <option v-for="post in posts" :key="post.id" :value="post.title">
                      {{ post.title }}
                    </option>
                  </select>
                </div>
                <div class="field4">
                  <textarea id="Message" placeholder="Your message" rows="10"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            
            </div>
          </div>
        </div>
      </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  const posts = ref([])
  const error = ref(null)
  const selectedPost = ref('');


  const load = async() => {
    try{
      let data = await fetch("http://localhost:3000/posts")
      if(!data.ok){
        throw Error("No data available")
      }else{
        posts.value = await data.json()
        console.log(posts.value)
      }
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }


  load()
</script>
  
<style lang="scss" scoped>
 .contact-container .contact-form{
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
    height: 500px;
}
 .contact-container .contact-form > form{
    padding: 0em 1em 1em 1em;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
}
 .contact-container .contact-form > form .git{
    grid-column: 1/-1;
    padding: 0.5em;
    font-size: 40px;
    text-align: center;
    color: #474A49;
    margin-bottom: 0.5em;
    font-weight: bolder;
}
 .contact-container .contact-form > form .git span{
    color: #474A49;
}
/* FIELD 1 */
 .contact-container .contact-form > form .field1 > input{
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
 .contact-container .contact-form > form .field2 > input{
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
 .contact-container .contact-form > form .field3 > select{
    font-size: 14px;
    text-indent: 10px;
    padding: 11px;
    height: 40px;
    width: 100%;
    background-color: #d9e1ea;
}
/* FIELD 4 */
 .contact-container .contact-form > form .field4{
    grid-column: 1/-1;
}
 .contact-container .contact-form > form .field4 > textarea{
    outline: none;
    font-size: 14px;
    text-indent: 10px;
    padding: 11px;
    width: 100%;
    border: none;
    background-color: #d9e1ea;
}
 .contact-container .contact-form > form .field4{
    grid-column: 1/-1;
}
 .contact-container .contact-form > form  > button{
    grid-column: 1/-1;
    background-color: black;
    color: #fff;
    font-size: 18px;
    height: 50px;
    outline: none;
    border: none;
    cursor: pointer;
}
 .contact-container .contact-form > form  > button:hover{
    opacity: 0.9;
}

/* CONTACT2 */
/* CONTACT2 */
/* CONTACT2 */
 .contact-container .contact-details .contact2 .contact-form{
    margin: 3em 0em 0em 0em;
}
 .contact-container .contact-details .contact2 .contact-form form .git{
    padding-top: 0em;
}




</style>