<template>
<div class="container">
  <div class="viewport" ref="viewport">
    <ul class="interview" :style="transformQuestionItem">
      <li class="item" v-for="(question, index) in questions" :key="index">
        <div class="item-bag">
          <em class="number">Q{{index + 1}}</em>
          <div class="question-bag">
            <strong class="question">{{ question }}</strong>
          </div>
          <div class="answer-bag">
            <input
              type="radio" value="O"
              v-model="responses[index]"
              :id="`Q${index + 1}_O`" :name="`Q${index + 1}`"
              :disabled="isReadonly(index)">
              <label
                class="answer"
                :class="fadeIn(index)"
                :for="`Q${index + 1}_O`">O</label>
            <input
              type="radio" value="X"
              v-model="responses[index]"
              :id="`Q${index + 1}_X`" :name="`Q${index + 1}`"
              :disabled="isReadonly(index)">
              <label
                class="answer"
                :class="fadeIn(index)"
                :for="`Q${index + 1}_X`">X</label>
          </div>
        </div>
      </li>
    </ul>
    <Pagination
      class="pagination"
      :responses="responses"
      :currentInterviewNumber="responseInterviewCount"
      :interviewCount="questions.length" />
  </div>
</div>
</template>

<script>
import SEX from '@/assets/1.SEX/SEX.js'
import Pagination from '@/components/Pagination/Circle.vue'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      responses: [],
      questions: SEX.questions,
      viewport: null,
      moveEvent: null
    }
  },
  methods: {
    onResize() { this.viewport = this.$refs.viewport.getBoundingClientRect() },
    process() {
      localStorage.setItem('responses', JSON.stringify(this.responses))
      if (this.responses.length >= this.questions.length) {
        this.moveEvent = setTimeout(() => this.$router.push('loading'), 500)
      }
    }
  },
  computed: {
    responseInterviewCount() { return this.responses.filter(answer => answer).length },
    transformQuestionItem() {
      if (!this.viewport) { return { transform: 'translate3d(0px, 0px, 0px)' } }
      const responseCount = this.responseInterviewCount < this.questions.length ? this.responseInterviewCount : this.questions.length - 1;
      const calculatedTransform = responseCount * this.viewport.width

      return { transform: `translate3d(-${calculatedTransform}px, 0px, 0px)`}
    },
    isReadonly() { return (currentNumber) => currentNumber < this.responses.length },
    fadeIn() { return (currentNumber) => this.isReadonly(currentNumber) ? 'fade-in' : '' }
  },
  beforeCreate() { localStorage.clear() },
  mounted() {
    this.viewport = this.$refs.viewport.getBoundingClientRect()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    clearTimeout(this.moveEvent)
  },
  watch: { responses: 'process' }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: inherit;
  max-width: 600px;
  padding: 0 30px;
  margin: auto auto;
  font-size: 1.2rem;
  --main-point-color: rgb(188, 0, 0);
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
  transition-delay: 0.5s;
  transform: translate3d(0px, 0px, 0px);
}

.item {
  width: 100%;
  min-width: 100%;
  flex-shrink: 0;
  .item-bag {
    padding: 0 20px;
  }
}

.number {
  display: block;
  font-family: BMEULJIRO;
  text-align: center;
  font-size: 50px;
  color: var(--main-point-color);
}

.question-bag {
  position: relative;
  text-align: center;
  margin-top: 3vh;
  height: 25vh;
  max-height: 220px;
}

.question {
  padding-bottom: 3px;
  border-bottom: 2px solid #efefef;
  line-height: 35px;
}

.answer-bag {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  transition: all 1s ease-out;
}

.answer {
  display: block;
  font-family: BMEULJIRO;
  padding: 20px 30px;
  margin: 15px;
  border: 2px solid var(--main-point-color);
  color: var(--main-point-color);
  font-size: 2rem;
  border-radius: 10px;
  background-color: #fdfdfd;

  @media (hover: hover) {
    &:hover {
      background-color: var(--main-point-color);
      color: #fff;
    }
  }
}

input[type=radio] {
  display: none;

  &:checked + .answer {
    background-color: var(--main-point-color);
    color: #fff;
  }

  &:not(:checked) + .fade-in {
    opacity: 0;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.25s;
  }
}

.pagination {
  margin-top: 1vh;
}
</style>
