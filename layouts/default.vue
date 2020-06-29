<template>
  <nuxt />
</template>

<script>
import ogImage from '@/static/BLS/images/og.png';

export default {
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: '//' + location.host + ogImage },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'BADGIRLS LIFE STYLE' },
        { hid: 'og:title', property: 'og:title', content: 'BADGIRLS LIFE STYLE' },
        { hid: 'og:description', property: 'og:descriptions', content: '매력의 격이 다른 "배드걸 라이프 스타일"' }
      ]
    }
  }
}
</script>
