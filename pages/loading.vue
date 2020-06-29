<template>
  <div class="container">
    <div class="viewport">
      <div class="loading-symbol" v-html="symbol"></div>
      <div class="loading-process">남친의 성 만족도<br>분석 중</div>
    </div>
  </div>
</template>

<script>
import SEX from '@/assets/1.SEX/SEX.js'

export default {
  asyncData() {
    const responses = JSON.parse(localStorage.getItem('responses')) || null
    let count = -1;
    if (responses) {
      count = responses.filter(response => response === 'O').length
    }
    return { count }
  },
  data() {
    return {
      count: 0,
      symbol: SEX.loading.symbol,
      process: SEX.loading.process,
      moveEvent: null
    }
  },
  mounted() {
    let locationURL = '/'
    if (this.count > -1) {
      locationURL = `result/${this.count}`
    }
    this.moveEvent = setTimeout(() => this.$router.push(locationURL), 1234)
  },
  beforeDestroy() { clearTimeout(this.moveEvent) }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  max-width: 600px;
  padding: 0 30px;
  margin: auto auto;
  font-size: 1.2rem;
  --main-point-color: rgb(188, 0, 0);
}

.viewport {
  width: 100%;
  max-width: 200px;
}

.loading-process {
  margin-top: 50px;
  text-align: center;
  font-family: BMEULJIRO;
  font-size: 30px;
  line-height: 40px;
}
</style>
