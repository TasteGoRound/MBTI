<template>
  <nuxt />
</template>

<script>
import ogImage from '@/static/BLS/images/og.png';

export default {
  head () {
    return {
      meta: [
        { property: 'image', content: '//' + location.host + ogImage }
      ]
    }
  }
}
</script>
