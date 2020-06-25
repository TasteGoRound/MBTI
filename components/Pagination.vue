<template>
  <div class="pagination">
    <div class="progress-select-ox">
      <div
        v-for="(response, index) in new Array(interviewCount)"
        :key="index"
        class="light"
        :class="light(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentInterviewNumber: { type: Number, default: 1 },
    interviewCount: { type: Number, default: 10 },
    responses: { type: Array, default: [] }
  },
  computed: {
    progressWidth() {
      return { width: `${this.currentInterviewNumber / this.interviewCount * 100}%` }
    },
    light() {
      return (index) => {
        if (this.responses[index]) {
          return this.responses[index] === 'O' ? 'green' : 'red'
        }
        return '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    margin-top: 3vh;
    height: 20px;
    padding: 0 20px;
    --color-red-light: #f00;
  }

  .progress-select-ox {
    display: flex;
    justify-content: space-around;

    .light{
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: #f7f7f7;
      border-radius: 50%;
      transition: 0.5s;
      opacity: 1;
      animation: flash 1s ease-out alternate infinite;

      &.green {
        background: green;
        box-shadow: 0 0 0 1px green,
            0 0 2px green,
            0 0 4px green,
            0 0 8px green,
            0 0 16px green;
      }

      &.red {
        z-index: 20;
        background: var(--color-red-light);
        box-shadow: 0 0 0 1px rgba(255, 0, 0, .2),
            0 0 2px rgba(255, 0, 0, 1),
            0 0 4px rgba(255, 0, 0, 1),
            0 0 8px rgba(255, 0, 0, 1),
            0 0 16px rgba(255, 0, 0, 1);
      }
    }
  }

@keyframes flash{
  to {
    opacity: 1;
  }
}
</style>
