<template>
  <div class="pagination">
    <div class="pagination-numbering">{{ currentInterviewNumber }} / {{ interviewCount }}</div>
    <div class="pagination-progress-background">
      <div class="pagination-progress-bar" :style="progressWidth"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentInterviewNumber: { type: Number, default: 1 },
    interviewCount: { type: Number, default: 10 }
  },
  computed: {
    progressWidth() {
      return { width: `${this.currentInterviewNumber / this.interviewCount * 100}%` }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    padding: 0 20px;
  }

  .pagination-numbering {
    font-family: BMEULJIRO;
    text-align: right;
    color: rgba(0, 0, 0, .5);
  }

  .pagination-progress-background {
    margin-top: 10px;
    background-color: #f7f7f7;
    border-radius: 10px;
    height: 7px;
  }
  .pagination-progress-bar {
    height: inherit;
    border-radius: 5px;
    background-color: #f00;
    transition: width 0.2s ease-out 0s;
  }
</style>
