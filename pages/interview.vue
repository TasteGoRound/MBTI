<template>
  <div class="container">
    <div class="interview">
      <div class="viewport">
        <ul>
          <li v-for="(interview, index) in questions" :key="index">
            <em class="number">Q{{index + 1}}</em>
            <strong class="question">{{ interview.question }}</strong>
            <template v-for="(option, optionIndex) in interview.answerOptions">
              <div :key="optionIndex">
                <input type="radio" :id="`Q${index + 1}_${optionIndex}`" :name="`Q${index + 1}`" :value="option.value" v-model="responses[index]">
                <label class="answer" :for="`Q${index + 1}_${optionIndex}`">{{ option.answer }}</label>
              </div>
            </template>
          </li>
        </ul>
      </div>
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

<style scoped>
.container {
  min-width: 320px;
  max-width: 600px;
  margin: 0 auto;
}

.interview {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.viewport {
  width: calc(100vw - 80px);
  overflow: hidden;
}

ul {
  width: inherit;
  margin-left: 0px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  transition: margin-left 0.35s ease-out 0s;
}

li {
  width: inherit;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
}

.number {
  display: block;
  color: red;
  font-weight: 900;
  font-size: 25px;
}

.question {
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 20px 0;
}

.answer {
  display: block;
  padding: 10px 20px;
  margin: 10px 0;
  border: 1px solid grey;
  border-radius: 10px;
}

.answer:hover {
  background-color: rebeccapurple;
}

input[type=radio] {
  display: none;
}

input[type=radio]:checked + label {
  background-color:rebeccapurple;
}
</style>
