import ogImage from '@/static/BLS/images/og.png';

let publish = null;

if(process.env.npm_config_publish) {
  publish = {
    router: {
      base: '/MBTI/'
    },
    generate: {
      routes: [
        '/result/0',
        '/result/1',
        '/result/2',
        '/result/3',
        '/result/4',
        '/result/5',
        '/result/6',
        '/result/7',
        '/result/8',
        '/result/9',
        '/result/10',
        '/result/11',
        '/result/12',
      ]
    }
  }
}


export default {
  mode: 'spa',
  loading: false,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:image', property: 'og:image', content: this.BASE_URL+ ogImage }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [ '@/assets/reset.css' ],
  ...publish
}
