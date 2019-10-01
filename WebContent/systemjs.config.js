/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    meta: {
      'node_modules/tinymce/plugins/advlist/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/autoresize/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/code/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/link/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/lists/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/paste/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/table/plugin.js': { format: 'global' },
      'node_modules/tinymce/themes/modern/theme.js': { format: 'global' },
      'node_modules/tinymce/plugins/image/plugin.js': { format: 'global' },
      'node_modules/tinymce/plugins/imagetools/plugin.js': { format: 'global' }
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'dist/app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'ng2-datetime': 'npm:ng2-datetime',
      'angular2-tinymce': 'node_modules/angular2-tinymce/dist',
      'tinymce': 'node_modules/tinymce'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'ng2-datetime': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-tinymce': { main: 'index.js', defaultExtension: 'js' },
      'tinymce': { defaultExtension: 'js' },
    }
  });
})(this);
