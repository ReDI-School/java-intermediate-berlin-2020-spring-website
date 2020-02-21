<template>
    <div class="resp-container">
        <iframe class="resp-iframe" :src="src" :frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
</template>

<style type="text/css">
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 66%;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>

<script>

export default {
  props: {
    src: {
      type: String,
      required: true
    }
}
}
</script>