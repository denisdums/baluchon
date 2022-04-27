const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-copy-watched');

mix
    .setPublicPath('./dist')
    .browserSync('localhost/baluchon');


mix
    .sass('./assets/scss/app.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });

mix
    .js('./assets/js/app.js', 'js')

mix
    .copyWatched('./assets/images/**', 'dist/images', {base: './assets/images'})
    .copyWatched('./assets/fonts/**', 'dist/fonts', {base: './assets/fonts'});

mix.options({processCssUrls: false});

mix.sourceMaps(false, 'source-map').version();
