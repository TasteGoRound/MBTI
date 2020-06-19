<template>
  <div class="container">
    <div>
      <ul>
        <li v-for="(interview, index) in questions" :key="index">
          <em>Q{{index}}</em>
          <strong>{{ interview.question }}</strong>
          <label v-for="(option, optionIndex) in interview.answerOptions" :key="optionIndex">
            <input type="radio" :name="`Q${index}`" :value="option.value" v-model="responses[index]">{{ option.answer }}
          </label>
        </li>
      </ul>
      <Pagination :currentInterviewNumber="responseInterviewCount" :interviewCount="questions.length" />
      <nuxt-link to="/loading">결과보기</nuxt-link>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

import MBTI from '@/components/MBTI.json'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      responses: [],
      questions: MBTI.questions
    }
  },
  computed: {
    responseInterviewCount() {
      let count = this.responses.filter(answer => answer).length + 1
      count = count > this.questions.length ? this.questions.length : count
      return count;
    }
  }
}
</script>

<style>
</style>
