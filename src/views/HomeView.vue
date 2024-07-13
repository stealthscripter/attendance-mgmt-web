<template>
  <NavBar/>
  <div class="home">      
      <div class="left-home">
          <p>Attendance Management</p>
          <h2>Efficiently Track  <br> and Manage Student Attendance</h2>
          <div>
            <p class="description">Our system provides a seamless way to record, manage, and review student attendance. Stay organized and ensure accurate attendance tracking with our easy-to-use platform.</p>
          </div>

          <div>
            <router-link :to="{name: 'classView'}"><button class="btn-start">Get Started</button></router-link>
            
          </div>
          
      </div>

      <div class="right-home">
        <div class="img-div">
          <img src="@/assets/undraw_educator_re_ju47.svg" alt="" class="svg-img">
        </div>
      </div>
  </div>

  
  <section class="sec2">
    <p>216,000+ students in over 13 Universities enhance their learning experience with our attendance system</p>
    <div class="sec2-div">
        <div class="logo-div">
          <img src="@/assets/aau.png" alt="" class="logo-img">
          <img src="@/assets/adama.png" alt="" class="logo-img">
          <img src="@/assets/unity.png" alt="" class="logo-img">
          <img src="@/assets/saintmary.png" alt="" class="logo-img">
        </div>
      </div>
  </section>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {NavBar},
  name: 'HomeView',
}
</script>


<style scoped>
.logo-img{
  max-width: 80px;  
  max-height: 80px; 
  width: auto;       
  height: auto;      
  margin: 0 10px; 
}
  .sec2-div{
    display: flex;
    /* border: 4px dotted sienna; */
  }
  .sec2 {
    padding: 1rem;
     margin-top: 1rem;
    }
    .logo-div{
        margin: 0 auto;
        
    }
    .sec2 p{
      font-family: "Open Sans";
      font-size: 1rem;
      text-align: center;
    }

  *{
     font-family: "Raleway";
  }
  .home div{
    flex: 1;
  }
  .left-home div{
    width: 80%;
  }
  p{
      font-size: small;
  }
  .right-home p{
    font-size: 1rem;
    margin: 0;
  }
  .description {
    margin-top: 1rem;
    line-height: 1.8rem;
    font-size: 1rem;
  }
  h2{
     font-size: 2.4rem;
     font-weight: bold;
     padding: 0;
     margin-top: 0;
     margin-bottom: 0;
  }
  .svg-img{
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .home{
    gap: 10px;
    display: flex;
    background: #6352;
  }
  .left-home{
    padding: 1rem;
    /* border: 1px solid black; */
    flex-grow: 1;
    width: fit-content;
  }
  .btn-start{
     border-radius: 0.4rem;
     border: 2px dashed blueviolet ;
     font-size: 0.8rem;
     padding: 10px 20px;
     cursor: pointer;
     font-weight: 600;
     background: none;
  }
  .btn-start:hover{
    background: rgb(193, 183, 183);
    transition: ease-out;
    transition-delay: 100ms;
  }
  .right-home{
    padding: 1rem;
    /* border: 1px solid black;     */
  }
  .img-div{
    /* border: 1px solid black; */
    width: 70%;
    margin: 0 auto;
  }
</style>
