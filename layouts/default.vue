<template>
  <nuxt />
</template>

<script>
import ogImage from '@/static/BLS/images/og.png';

export default {
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: ogImage }
      ]
    }
  }
}
</script>
