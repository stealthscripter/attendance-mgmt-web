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
        <!-- <div>
            <router-link :to="{name: 'classView'}"><button>Create Class</button></router-link>
        </div> -->
      </div>
  </div>
  >
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
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .home{
    gap: 10px;
    margin: 1rem;
    display: flex;
  }
  .left-home{
    padding: 1rem;
    border: 1px solid black;
    flex-grow: 1;
    width: fit-content;
  }
  .btn-start{
     border-radius: 0.4rem;
     border: none;
     font-size: 1rem;
     padding: 10px 20px;
     cursor: pointer;
     font-weight: 400;
  }
  .right-home{
    padding: 1rem;
    border: 1px solid black;    
  }
  .img1 , .img2 , .img3{
    /* border: 1px solid blue; */
    text-align: center;
  }
  .img-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .img1{
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .img2{
    grid-column-start: 3;
    grid-column-end: 4;
  }
  .img3{
    margin-left: 2rem;
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .right-home div{

  }
</style>
