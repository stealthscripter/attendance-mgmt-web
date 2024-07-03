<template>
  <div class="home">
    <h1>Hello</h1>
    <router-link :to="{name: 'classView'}">
        <button>Class</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
