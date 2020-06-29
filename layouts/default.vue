<template>
  <nuxt />
</template>

<script>
import ogImage from '@/static/BLS/images/og.png';

export default {
  head () {
    return {
      meta: [
        { property: 'og:image', content: '//' + location.host + ogImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'BADGIRLS LIFE STYLE' },
        { property: 'og:title', content: 'BADGIRLS LIFE STYLE' },
        { property: 'og:descriptions', content: '매력의 격이 다른 "배드걸 라이프 스타일"' }
      ]
    }
  }
}
</script>
