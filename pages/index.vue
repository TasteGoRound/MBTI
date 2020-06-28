<template>
  <div class="container">
    <div class="viewport">
      <header>
        <h1 class="start_title" v-html="title"></h1>
      </header>
      <main>
        <strong class="start_symbol" v-html="symbol"></strong>
        <nuxt-link class="start_interview" to="/interview">연애 능력치 알아보기</nuxt-link>
      </main>
    </div>
  </div>
</template>

<script>
import SEX from '@/assets/1.SEX/SEX.js'

export default {
  data() {
    return {
      title: SEX.intro.title,
      symbol: SEX.intro.symbol,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: inherit;
  max-width: 600px;
  padding: 0 30px;
  margin: auto auto;
  --main-point-color: rgb(188, 0, 0);
}

.viewport {
  padding: 30px 0;
  margin: auto 0;
  height: max-content;
}

header {
  text-align: center;
}

main {
  margin-top: 40px;
}

.start_symbol {
  width: 50vw;
  margin: 0 auto;
}

.start_symbol {
  display: block;
}

.start_interview {
  display: block;
  font-size: 2.25vw;
  padding: 3vw 20px;
  text-align: center;
  background: red;
  color: #fff;
  text-decoration: none;
  border-radius: 60px;
  margin: 0 auto;
  margin-top: 40px;
}
</style>
