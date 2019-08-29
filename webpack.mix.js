let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js(['resources/assets/js/app.js'], 'public/js/app.js');

mix.styles(['public/css/custom.css',
            'resources/assets/css/app.css'], 'public/css/app.css');
