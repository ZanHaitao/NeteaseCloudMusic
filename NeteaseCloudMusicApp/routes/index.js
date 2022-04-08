export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/index', component: '@/pages/index/_layout', routes: [
          { path: '/index', component: '@/pages/index/index.jsx' },
          { path: '/index/toplist', component: '@/pages/index/toplist' },
          { path: '/index/playlist', component: '@/pages/index/playlist' },
          { path: '/index/djradio', component: '@/pages/index/djradio' },
          { path: '/index/artist', component: '@/pages/index/artist' },
          { path: '/index/album', component: '@/pages/index/album' },
        ]
      },
      { path: '/attention', component: '@/pages/attention' },
      { path: '/download', component: '@/pages/download' },
      { path: '/musicPeople', component: '@/pages/musicPeople' },
      { path: '/myMusic', component: '@/pages/myMusic' },
      { path: '/shop', component: '@/pages/shop' },
    ],
  },
]