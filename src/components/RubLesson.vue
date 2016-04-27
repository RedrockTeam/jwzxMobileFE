<template>
  <div class="hello">
    <h1>RubLesson</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default() {
        return 'Hello World!';
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  color: #42b983;
}
</style>
