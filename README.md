# drpxBindAngular
A simple angular directive that binds an angular to be compiled text

Angular has ngBindTemplate, which binds a simple template, but it cannot be used to instance directives. This directive allows to do such thing:

```html
    <!-- in controller vm.template = '<yourDirective arg="{{n}}></yourDirective>'; -->
    <span drpx-bind-angular="vm.template"></span>
```

You can use this directive to parametrize your directives and enhance its behaviour.


Install with Npm
----------------

```bash
$ npm install --save drpx-bind-angular
```

add to your module the dependence:

```javascript
    angular.module('yourModule', [ require('drpxBindAngular') ]);
```


Install with Bower
------------------

```bash
$ bower install --save drpx-bind-angular
```

add to your module the dependence:

```javascript
    angular.module('yourModule', ['drpxBindAngular']);
```

include the javascript library in your application:

```html
<script src="bower_components/drpx-bind-angular/drpx-bind-angular.js"></script>
```



How to use
----------

Configure a scope variable with the content of the template that you want to bind and use the drpxBindAngular:

```html
    <span drpx-bind-angular="vm.template"></span>
```
