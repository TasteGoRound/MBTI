<template>
<div class="container">
  <div class="viewport">
    <h1 class="promotion-title">BADGIRL LIFE STYLE</h1>
    <h2 class="result">
      당신의 남자친구가 성적으로 만족할 확률은<br>
      <em class="result-probability">{{ result.title }}%</em> 입니다.</h2>
    <div class="result-visualization"></div>
    <p class="result-contents" v-html="result.content"></p>
    <h3 class="turning-point">[Turning Point]</h3>
    <strong class="turning-point-title">{{ result.turningPoint.title }}</strong>
    <p class="turning-point-contents" v-html="result.turningPoint.content"></p>
  </div>
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
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 600px;
  padding: 0 30px;
  margin: auto auto;
  font-size: 1.2rem;
  --main-point-color: rgb(188, 0, 0);
}

.viewport {
  padding: 30px 0;
}

.promotion-title {
  padding: 20px 0 40px 0;
  text-align: center;
}

.result {
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
}

.result-probability {
  position: relative;
  font-size: 2rem;
  &:after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 2px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  }
}

.result-visualization {
  margin-top: 20px;
}

.result-contents, .turning-point-contents {
  font-size: 15px;
  line-height: 20px;
}

.turning-point {
  text-align: center;
  padding: 20px 0;
}

.turning-point-title {
  display: block;
  text-align: center;
  padding: 10px 0 40px 0;
}
</style>
