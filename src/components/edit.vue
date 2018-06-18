<template>
  <div class="page edit darkBG">
    <label >Date</label>
    <input type="date" class="lightBG date">
    <div class="buttonRow">
       <router-link to="/edit" class="ctaBG btn">SAVE</router-link>
       <router-link to="/" class=" primaryBG btn">CANCEL</router-link>
     </div>
  </div>
</template>

<script>
import '../assets/edit.scss'
export default {
  name: 'Edit',
  data() {
    return {}
  }
}
</script>
