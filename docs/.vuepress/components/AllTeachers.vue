<template>
<div>
    <div class="box" v-for="v in teachers">
        <img :src="v.avatar">
        <strong>{{v.name}}</strong>
    </div>
</div>
</template>

<style scoped>
.box {
    display: flex;
    align-items:center;
    margin: 40px 0
}

.box img {
    width: 80px;
    border-radius: 50%; 
    margin-right: 10px
}
</style>

<script>
import teachers from './data';
export default {
    data: function() {
      return {
          teachers: Object.values(teachers.current).sort(function(a,b){
            return a.name.localeCompare(b.name);
            })
      }
  }
}
</script>