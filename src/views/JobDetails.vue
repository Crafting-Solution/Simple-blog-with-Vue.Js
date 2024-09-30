<template>
    <div>
        <div class="job-details">
            <div class="search-jobs">
                <input type="search" placeholder="Sales" name="" id="">
            </div>
            <div v-if="error">
                {{ error }}
            </div>
            <div v-if="post" class="job-info">
                <div class="job-header">
                    <p class="go-back">&#60; Go Back</p>
                    <div class="job-subheader">
                        <div class="left-subhead">
                            <div class="job-title">
                                <h3>Marriott Group</h3> 
                                <span class="location">{{ post.location }} USA</span> 
                                <div class="job-tag"> 
                                    <span class="tag tag1">Vue Js</span> 
                                    <span class="tag tag2">Laravel (php)</span>
                                </div>
                            </div>
                        </div>
                        <div class="right-subhead">
                            <span class="type">{{ post.type }} &bull; Avg</span> <br> <br>
                            <span class="salary">{{ post.salary }}</span>
                        </div>
                    </div>
                </div>
                <div class="job-info-description">
                    <div class="job-info-top">
                        <div class="left-info">
                            <h3>{{ post.title }}</h3>
                            <p>Mariott Group</p>
                            <span>Los Angeles, CA &bull; USA &bull; {{ post.type }}</span>
                        </div>
                        <div class="right-info">
                            <span>Posted 03 hours(s) ago</span>
                            <RouterLink :to="{name: 'apply', params: {id: post.id}}">Apply Now</RouterLink>
                        </div>
                    </div>
                    <div class="requirements">
                        <section class="min-req">
                            <span>Overview</span>
                            <p>
                               {{ post.company.description }}
                            </p>
                        </section>
                        <section class="responsibilities">
                            <span>Responsibilities</span>
                            <ul v-for="(responsibility, index) in post.company.responsibilities" :key="index">
                                <li>{{ responsibility }}</li>
                            </ul>
                        </section>
                        <section class="qualification">
                            <span>Qualification</span>
                            <ul v-for="(qualification, index) in post.company.qualifications" :key="index">
                                <li>{{ qualification }}</li>
                            </ul>
                        </section>
                        <!-- <p class="about-the-job">
                            <span>About the Job</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolorum, <br>
                            recusandae libero optio adipisci ipsum enim maiores, atque quaerat eligendi itaque. <br>
                            Cupiditate recusandae et aperiam unde earum provident officiis! Sunt? <br>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolorum,
                        </p> -->
                    </div>
                </div>
            </div>
            <div v-else>
                <p>Loading job details...</p> 
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';

const props = defineProps(['id'])

console.log(props.id)



const post = ref(null);
const error = ref(null);

const postId = ref(props.id)

// const getPost = async (id) => {
//   try {
//     let data = await fetch('http://localhost:3000/posts/' + id);
//     if (!data.ok) {
//       throw new Error("No Data fetched");
//     } else {
//       post.value = await data.json();
//       console.log(post.value); 
//     }
//   } catch (err) {
//     error.value = err.message;
//     console.log(error.value); 
//   }
// };
// getPost(props.id)


watchEffect(async () => {
    try {
        let data = await fetch(`http://localhost:3000/posts/${postId.value}`);
        if (!data.ok) {
        throw new Error("No Data fetched");
        } else {
        post.value = await data.json();
        console.log(post.value); 
        }
    } catch (err) {
        error.value = err.message;
        console.log(error.value); 
    }
})


</script>

<style lang="scss" scoped>
.job-details{
    
}
.job-details {
    .search-jobs{
        background-color: #368b5c;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
}
.job-details{
    .search-jobs input{
        width: 700px;
        height: 50px;
        padding: 14px 16px;
        border-radius: 30px;
        border: none;
        outline: none;
        font-size: 16px;
    }
    
}
// JOB INFO
.job-details{
    .job-info{
        margin: 3em;
    }

}
.job-details{
    .job-info{
        
    }
    .job-header{
        height: 180px;
    }
    .job-info-description{
        display: flex;
        flex-direction: column;
        background-color: #F5F6F5;
        border-radius: 10px;
    }
    .job-info-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        height: 130px;
        padding: 2em;

    }
    .left-info h4, p, span{
        margin-bottom: 0.5em;
    }
    .left-info p{
        color: #8B8E91;
        font-size: 14px;
    }
    .left-info > span{
        font-size: 14px;
        font-weight: bolder;
    }
    .right-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    span{
        font-size: 14px;
        color: #6b6b6b;
    }
    a{
        width: 170px;
        height: 50px;
        padding: 14px 16px;
        border-radius: 30px;
        border: none;
        outline: none;
        font-size: 16px;
        background-color: #368b5c;
        text-align: center;
        color: white;
        text-decoration: none;
    }
    .requirements{
        display: flex;
        flex-direction: column;
        padding: 2em;
    }
    .min-req{
        margin-bottom: 1.5em;
    }
    .min-req span{
        font-weight: bolder;
        font-size: 16px;
        color: black;
    }
    .min-req > p{
        margin-top: 0.5em;
    }
    .responsibilities{
        margin-bottom: 1.5em;

    }
    .responsibilities span{
        font-weight: bolder;
        font-size: 16px;
        color: black;
    }
    .qualification span{
        font-weight: bolder;
        font-size: 16px;
        color: black;
    }
    .go-back{
        cursor: pointer;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .job-subheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F5F6F5;
        border-radius: 10px;
        height: 130px;
        padding: 2em;
    }
    .right-subhead{
        font-size: 14px;
    }
    .type{
        color: #8B8E91;
        background: #E0E0F4;
        padding: 7px 8px;
        border-radius: 6px;
        color: #6b6b6b;
        font-size: 14px;
    }
    .salary{
        font-size: 20px;
        font-weight: bolder;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
    }
    .left-subhead{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .job-title{
        padding: 5px;
    }
    .job-tag{
        display: flex; 
        gap: 10px; 
        margin-top: 1em; 
    }
    .tag{
        background: #E0E0F4;
        padding: 7px 8px;
        border-radius: 6px;
        color: #6b6b6b;
        font-size: 14px;
    }
    .location{
        color: #ce5b31;
        font-size: 14px;
    }

}

</style>