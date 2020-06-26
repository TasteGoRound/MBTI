<template>
  <div class="viewport">
    <h1 class="promotion-title">BADGIRL LIFE STYLE</h1>
    <h2 class="result">
      당신의 남자친구가 성적으로 만족할 확률은
      <em class="result-probability">{{ result.title }}</em> 입니다.</h2>
    <div class="result-visualization"></div>
    <p class="result-contents" v-html="result.content"></p>
    <h3 class="turning-point">[Turning Point]</h3>
    <strong class="turning-point-title">{{ result.turningPoint.title }}</strong>
    <p class="turning-point-contents" v-html="result.turningPoint.content"></p>
  </div>
</template>

<script>
import SEX from '@/components/SEX.json'

export default {
  validate({ params }) {
    const isNumber = /^\d+$/.test(params.count)
    const parsedNumber = Number(params.count)
    const isOverMinus = parsedNumber > 0
    const isUnderMaxCount = parsedNumber <= SEX.questions.length
    const isValidate = isNumber && isOverMinus && isUnderMaxCount
    return isValidate
  },
  asyncData(app) {
    const { route } = app
    const { params = {} } = route
    const { count } = params
    const { results } = SEX

    return { result: results[count] }
  },
  created() {
    console.log(this);
  }
}
</script>

<style lang="scss" scoped>
.promotion-title {

}

.promotion-probability {}


</style>
