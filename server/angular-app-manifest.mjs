
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/priyanka-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/priyanka-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 520, hash: '44dd2b95f02e45c99f38b62857d1c1151976c775a8358cc94915cf2bbfd05cc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: 'b607e0538a7cedbe8e97a5c795c76a8cc760247cb72f8dbdd2701263b2f33f7f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2472, hash: '822dec5f1a041df1200d46a97ce2dc4e3e4e8f2e910b4184b7b0207ccca8a643', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
