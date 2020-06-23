<template>
  <div class="container">
    <div class="viewport" ref="viewport">
      <ul class="interview" :style="transformQuestionItem">
        <li class="item" v-for="(interview, index) in questions" :key="index">
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
      questions: MBTI.questions,
      viewport: null
    }
  },
  computed: {
    responseInterviewCount() {
      let count = this.responses.filter(answer => answer).length + 1
      count = count > this.questions.length ? this.questions.length : count
      return count;
    },
    transformQuestionItem() {
      if (!this.viewport) { return { transform: 'translate3d(0px, 0px, 0px)' } }
      const calculatedTransform = (this.responseInterviewCount - 1) * this.viewport.width;
      return { transform: `translate3d(-${calculatedTransform}px, 0px, 0px)`}
    }
  },
  mounted() {
    this.viewport = this.$refs.viewport.getBoundingClientRect();
    window.addEventListener('resize', this.resizeEvent);
  },
  methods: {
    resizeEvent() {
      this.viewport = this.$refs.viewport.getBoundingClientRect()
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeEvent);
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;
}

.viewport {
  overflow: hidden;
}

.interview {
  display: flex;
  width: 100%;
  min-width: 100%;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0, 0, 0.25, 1);
  transition-duration: 300ms;
  transform: translate3d(0px, 0px, 0px);

  .item {
    width: 100%;
    min-width: 100%;
    flex-shrink: 0;
  }
}
</style>
