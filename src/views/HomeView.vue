<template>

  <div class="home">      
      <div class="right-home">
          <h2>Hey Welcome to attendance Management System</h2>
      </div>

      <div class="left-home">
        <div><h3>Are you student ?</h3></div>
        <div><h3>Are you Teache ?</h3></div>

        <div>
            <router-link :to="{name: 'classView'}"><button>Create Class</button></router-link>
        </div>
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
     font-weight: 500;
     font-family: 'Open Sans';
  }
  .home{
    margin: 1rem;
    display: flex;
    border: 1px solid black;
  }
  .left-home{
    flex-grow: 1;
    border: 1px solid black;
  }
  .right-home{
    flex-grow: 1;
    border: 1px solid black;
  }
</style>
