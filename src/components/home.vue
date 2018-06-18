<template>
  <div class="page home lightBG">
   <nav class="nav">
      <img class="logo" src="../assets/logo.svg" alt="TiME">
      <i class="material-icons cta">settings</i>
   </nav>
   <div class="itemContainer">
       <div class="item">
       <p>1:15 --> 2:15 Ate lunch with clients</p>
       </div>
   </div>
   <div class="bottomNav">
     <div class="search"><p>SEARCH</p></div>
     <div class="buttonRow">
       <router-link to="/edit" class="primaryBG btn">NEW</router-link>
       <button class="ctaBG btn">EXPORT</button>
     </div>
   </div>
  </div>
</template>

<script>
import '../assets/home.scss'
export default {
  name: 'Home',
  data() {
    return {}
  }
}
</script>
