<template>

  <div class="home">      
      <div class="left-home">
          <p>Attendance Management</p>
          <h2>Efficiently Track  <br> and Manage Student Attendance</h2>
          <div>
            <p class="description">Our system provides a seamless way to record, manage, and review student attendance. Stay organized and ensure accurate attendance tracking with our easy-to-use platform.</p>
          </div>

          <div>
            <button class="btn-start">Get Started</button>
          </div>
          
          <!-- <h2>Hey Welcome to attendance Management System</h2> -->
      </div>

      <div class="right-home">
        <div class="img1">
          <img src="@/assets/undraw_scrum_board_re_wk7v.svg" alt="" class="svg-img">
        </div>
        <!-- <div>
            <router-link :to="{name: 'classView'}"><button>Create Class</button></router-link>
        </div> -->
      </div>

  </div>
  
  <!-- <div class="home">
    <h1>Hello</h1>
    <router-link :to="{name: 'classView'}">
        <button>Class</button>
    </router-link>
  </div> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>


<style scoped>
  *{
     font-family: "Raleway";
  }
  .left-home div{
    width: 50%;
  }
  p{

      font-size: small;
  }
  .description {
    margin-top: 1rem;
    line-height: 1.8rem;
    font-size: 1.1rem;
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
    width: 40%;
  }
  .home{
    gap: 10px;
    margin: 1rem;
    display: flex;
  }
  .left-home{
    padding: 1rem;
    border: 1px solid black;
    /* flex-grow: 1; */
    width: fit-content;
  }
  .right-home{
    padding: 1rem;
    flex-direction: column;
    display: flex;
    border: 1px solid black;
    align-items: center;
    
  }
  .btn-start{
     border-radius: 0.4rem;
     border: none;
     font-size: 1rem;
     padding: 10px 20px;
     cursor: pointer;
     font-weight: 400;
  }
  .img1{
    width: fit-content;
    border: 1px solid black;
  }
  
  .right-home div{

  }
</style>
