# angularjs1-5-two-way-data-binding
AngularJS 1.5 Two way data-binding

Based on 'Two way data-binding in AngularJS' at https://www.youtube.com/watch?v=2QB1S5y5DIk&index=5&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

#Two way Data-binding in Angular

Two way data-binding keeps the model and the view in sync at all times, that is a change in the model updates the view and a change in the view updates the model.

The binding expression updates the view when the model changes:

```{{ message }}```

#The use of ng-model directive

See official documentation of 'API Reference / ng / directive components in ng / ngModel' at https://docs.angularjs.org/api/ng/directive/ngModel

ng-model directive updates the model, when the view changes.

```<input type="text" ng-model="message" />```

Note: the following works, where 'message' has been attached to the scope in the script file:

```javascript
        <input type="text" ng-model="message" />
        <br /><br />
        {{ message }}
```

But more surprisingly so, the following also works, eventhough 'greeting' has ***not*** been attached to the scope in the script file:

```javascript
        <input type="text" ng-model="greeting" />
        <br /><br />
        {{ greeting }}
```

This is because angular ***automatically*** creates the model (here 'greeting'), if it doesn't yet exist.

The ng-model directive can be used with:
- input
- select
- textarea
- custom form control

