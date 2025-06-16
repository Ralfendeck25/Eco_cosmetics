const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'URL_DO_SEU_REPOSITORIO.git'
}, (err) => {
  if (err) console.error(err);
  else console.log('Deploy completo!');
});