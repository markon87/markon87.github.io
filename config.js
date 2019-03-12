require.config({
baseUrl: 'js',
shim: {
ember: {
    deps: ['handlebars', 'jquery'],
    exports: 'Ember'
},
ember-data: 'ember',
bootstrap: 'jquery',
handlebars: ['Handlebars']
},
paths: {
    'App': '\js\application\app',
    'models': '',
    'views': '',
    'controllers': '',
    'templates': '',

    /*LIBRARIES*/
    'jquery': '\libs\jquery\jquery',
    'handlebars': '\libs\handlebars\handebars-1.1.2',
    'ember': '\libs\ember\ember-1.2.0',
    'ember-data' : '\libs\ember\ember-data'
    'bootstrap': '\libs\bootstrap\bootstrap.min.js',

    /*REQUIRE JS PLUGINS*/
    'text': '\libs\require\require plugins\text',
    'hbs': '\libs\require\require plugins\hbs',
    'domReady': '\libs\require\require plugins\domReady'
},
hbs: {
    disableI18n: true,
    templateExtension: 'hbs'
},

'App',
'store',
'router'    
});