<template>
  <div>
     <p>{{pageTitle}}</p>
     <img src="../assets/java-green.png" alt="java green logo">
       <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
         <a href="#">Search</a>
       </nav>
  </div>
</template>

<script>
export default {
   name: 'the-header',
   data() {
       return {
          pageTitle: 'Java Green Real Estate Empire For Evil Landlords'
       }
   }
}
</script>

<style scoped>

img {
    width:15%;
    height: auto;
}

nav {
    display: flex;
    justify-content: center;
}

nav a {
    padding: 15px 25px;
    background-color: #76fd41;
    color: black;
    margin: 3px;
}
nav a:hover {
    background-color:#288603;
    color: white;
}

</style>