Package.describe({
  name: 'buo:purecss',
  version: '0.6.0_1',
  summary: 'A set of small, responsive CSS modules that you can use in every web project.',
  git: 'https://github.com/buo/meteor-purecss.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  var path = Npm.require('path').join('css', 'pure-min.css')
  api.addFiles(path, 'client');
});
