<template>
  <div class="container">
    <nuxt-link to="/result/MBTI">로딩 끝내기</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveToPage: null
    }
  },
  mounted() {
    this.moveToPage = setTimeout(() => {
      this.$router.push('/result/MBTI');
    }, 3000);
  },
  destroyed() {
    clearTimeout(this.moveToPage);
  }
}
</script>

<style>
</style>
