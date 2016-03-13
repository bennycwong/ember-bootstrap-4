# ember-bootstrap-4
This addon is based off [ember-sass-bootstrap](https://github.com/ef4/ember-sass-bootstrap) by ef4.

This is an Ember addon that makes
[Bootstrap 4 alpha](https://github.com/twbs/bootstrap) available in
your Ember app. Instead of just importing in the whole library, it
provides as much or as little as you need, and it lets you easily
customize Bootstrap's variables.

It is also bower-dependency-free, by loading bootstrap-sass via npm instead. This avoids the need for it to reach out and mess with your own bower.json file.

## Installation

Bootstrap 4 switched from less to sass, so it
expects that you also have ember-cli-sass installed.

Bootstrap 4 also depends on tether.js. Please install it using bower.

    bower install tether
    ember install ember-cli-sass
    ember install ember-bootstrap-4

## Usage: Stylesheets

If you want all of Bootstraps style, just say:

    @import 'bootstrap';

in your `app.scss` file. You can customize Bootstrap's variables by
setting them before importing:

    $brand-primary: #ff0000;
    @import 'bootstrap';

You can also choose to import only the specific pieces that you need. For example:

    @import 'bootstrap/buttons';

## Usage: Javascript Plugins

By default, we will include all of Bootstrap's Javascript in your
application. But you can control this from your ember-cli-build.js file:

```js
  new EmberApp(defaults, {
    bootstrap: {
      plugins: ['collapse']
    }
  });

```
