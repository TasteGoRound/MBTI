<template>
  <div class="viewport">
    <h2>{{ result.title }}</h2>
    <p>{{ result.content }}</p>

    <h3>[Turning Point]</h3>
    <strong>{{ result.turningPoint.title }}</strong>
    <p>{{ result.turningPoint.content }}</p>
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

</style>
