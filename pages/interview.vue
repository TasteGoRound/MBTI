<template>
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
              :id="`Q${index + 1}_O`" :name="`Q${index + 1}`">
              <label class="answer" :for="`Q${index + 1}_O`">O</label>
            <input
              type="radio" value="X"
              v-model="responses[index]"
              :id="`Q${index + 1}_X`" :name="`Q${index + 1}`">
              <label class="answer" :for="`Q${index + 1}_X`">X</label>
          </div>
        </div>
      </li>
    </ul>
    <pagination
      :responses="responses"
      :currentInterviewNumber="responseInterviewCount"
      :interviewCount="questions.length" />
  </div>
</template>

<script>
import SEX from '@/components/SEX.json'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      responses: [],
      questions: SEX.questions,
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
  font-family: 'BMEULJIRO';
  text-align: center;
  font-size: 50px;
  color: var(--main-point-color);
}

.question-bag {
  position: relative;
  text-align: center;
  margin-top: 3vh;
  height: 30vh;
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
  font-family: 'BMEULJIRO';
  padding: 20px 30px;
  margin: 15px;
  border: 2px solid var(--main-point-color);
  color: var(--main-point-color);
  font-size: 2rem;
  border-radius: 10px;
  background-color: #fdfdfd;
  &:hover {
    background-color: var(--main-point-color);
    color: #fff;
  }
}

input[type=radio] {
  display: none;
}

input[type=radio]:checked + .answer {
  background-color: var(--main-point-color);
  color: #fff;
}
</style>
