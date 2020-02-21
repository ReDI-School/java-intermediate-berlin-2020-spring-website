<template>
    <div class="box">
        <img :src="imageUrl">
        <strong>{{fullName}}</strong>
    </div>
</template>

<style type="text/css">
.box {
    display: flex;
    align-items:center;
}

.box img {
    width: 40px;
    border-radius: 50%; 
    margin-right: 10px
}
</style>

<script>
import teachers from './data';
export default {
    data: function() {
      var allTeachers = Object.assign({}, teachers.current, teachers.previous)
      return {
          fullName: allTeachers[this.name].name,
          imageUrl: allTeachers[this.name].avatar,
      }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>