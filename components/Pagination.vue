<template>
  <div class="pagination">
    <div>
      {{ currentInterviewNumber }} / {{ interviewCount }}
    </div>
    <div class="progress-background">
      <div class="progress-bar" :style="progressWidth"></div>
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

<style>
  .pagination {
    padding: 0 20px;
  }

  .progress-background {
    background-color: #f7f7f7;
    border-radius: 10px;
    height: 7px;
  }

  .progress-bar {
    height: inherit;
    border-radius: 5px;
    background-color: #FF026C;
    transition: width 0.2s ease-out 0s;
  }
</style>
