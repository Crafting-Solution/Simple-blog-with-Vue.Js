<template>
    <div class="content">
        <div class="content1">
            <div class="box1">
                <h3>For Developer</h3>
                <p>Browse our React jobs and start your career today</p>
                <a class='b1btn' href="#">Browse Jobs</a> 
            </div>
            <div class="box2">
                <h3>For Employers</h3>
                <p>List your job to find the perfect developer for the role</p>
                <a class='b2btn' href="#">Add Jobs</a>
            </div>
        </div>

        <!-- Content 2 -->
        <div class="content2">
            <h2>Browse Jobs</h2>
            <div class="boxes">
                <div v-for="(post, index) in posts" :key="post.id" class="srd">
                    <p class='full-time'>{{post.type}}</p>
                    <h4>{{ post.title }}</h4>
                    <p class='des'>{{ isExpanded[index] ? post.description : post.description.substring(0, 130) + '...' }}</p>
                    <p class='sal'>{{ post.salary }}</p>
                    <section>
                    <p class='loc'>{{ post.location }}</p>
                    <RouterLink :to="{name: 'jobdetails', params: {id: post.id}}">Read More</RouterLink>
                    </section>
                </div>
            </div>
            <RouterLink class="alljobs" :to="{name: 'home'}">View All Jobs</RouterLink>
        </div>
    </div>
</template>

<script setup>
  import { computed, ref } from 'vue';

  const props = defineProps(['posts'])

  // console.log(props.posts)
  const isExpanded = ref(false);
  

</script>

<style lang="scss">
/* CONTENT 1 */
.content1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    color: black;
    height: 220px;
}
.content1 h3, p, a{
    color: black;
}
.content1{
  h3{
    font-size: 22px;
  }
    
}
.content1{
  p{
    font-weight: 500;
  }

}
.content1{
  .box1{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #EDF0EF;
    width: 630px;
    height: 160px;
    padding: 12px 14px;
    border-radius: 10px;
  }
}
.content1{
 .box1 
 .b1btn{
    text-decoration: none;
    padding: 10px 14px;
    background-color: black;
    width: 125px;
    color: white;
    border-radius: 10px;
 }
}
.content1 .box2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #b7d0c2;
    width: 630px;
    height: 160px;
    padding: 12px 14px;
    border-radius: 10px;
}
.content1 .box2 .b2btn{
    text-decoration: none;
    padding: 10px 14px;
    background-color: #022110;
    width: 98px;
    color: white;
    border-radius: 10px;
}

/* CONTENT 2 */
.content2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    background-color: #E8F1FB;
    height: 500px;
    padding: 50px 14px 0px 14px;
}
.content2 h2{
    text-align: center;
    color: #022110;
    font-size: 27px;
}
.content2 .alljobs{
    background-color: #022110;
    padding: 14px 16px;
    width: 450px;
    height: 50px;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center; /* Vertically center the text */
    justify-content: center; /* Horizontally center the text */
    margin-top: 5em; /* Add some spacing above the button */
}
.content2 .boxes{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 220px;
}

.content2 .boxes .srd, .ff-rr, .rjs-dev{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    height: 330px;
    padding: 12px 14px 20px 14px;
    border-radius: 10px;
}
/* SRD */
.content2 .boxes .srd .full-time{
    color: #595C5B;
    margin-top: 13px;
}
.content2 .boxes .srd h4{
    color: black;
    font-size: 22px;
    margin-top: 13px;

}
.content2 .boxes .srd .des{
    font-size: 15px;
    margin-top: 13px;
    line-height: 1.4em;

}
.content2 .boxes .srd .des span{
    color: #368b5c;
    cursor: pointer;
}
.content2 .boxes .srd .sal{
    color: #368b5c;
    margin-top: 13px;

}
.content2 .boxes .srd section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 13px;

}
.content2 .boxes .srd section .loc{
    color: #902917;
}
.content2 .boxes .srd section a{
    text-decoration: none;
    padding: 10px 14px;
    background-color: #022110;
    width: 110px;
    color: white;
    border-radius: 10px;
}

/* FF-RR */
.content2 .boxes .ff-rr .full-time{
    color: #595C5B;
    margin-top: 13px;
}
.content2 .boxes .ff-rr h4{
    color: black;
    font-size: 22px;
    margin-top: 13px;

}
.content2 .boxes .ff-rr .des{
    font-size: 15px;
    margin-top: 13px;
    line-height: 1.4em;

}
.content2 .boxes .ff-rr .des span{
    color: #368b5c;
    cursor: pointer;
}
.content2 .boxes .ff-rr .sal{
    color: #368b5c;
    margin-top: 13px;

}
.content2 .boxes .ff-rr section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 13px;

}
.content2 .boxes .ff-rr section .loc{
    color: #902917;
}
.content2 .boxes .ff-rr section a{
    text-decoration: none;
    padding: 10px 14px;
    background-color: #022110;
    width: 110px;
    color: white;
    border-radius: 10px;
}
/* RJS-DEV */
/* RJS-DEV */
/* RJS-DEV */
.content2 .boxes .rjs-dev .full-time{
    color: #595C5B;
    margin-top: 13px;
}
.content2 .boxes .rjs-dev h4{
    color: black;
    font-size: 22px;
    margin-top: 13px;

}
.content2 .boxes .rjs-dev .des{
    font-size: 15px;
    margin-top: 13px;
    line-height: 1.4em;

}
.content2 .boxes .rjs-dev .des span{
    color: #368b5c;
    cursor: pointer;
}
.content2 .boxes .rjs-dev .sal{
    color: #368b5c;
    margin-top: 13px;

}
.content2 .boxes .rjs-dev section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}
.content2 .boxes .rjs-dev section .loc{
    color: #902917;
}
.content2 .boxes .rjs-dev section a{
    text-decoration: none;
    padding: 10px 14px;
    background-color: #022110;
    width: 110px;
    color: white;
    border-radius: 10px;
}


</style>