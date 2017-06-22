# Setup
ng new gfk-update --prefix=gfk --style=scss --routing=true

# vendor einbinden
npm i font-awesome --save
npm i primeng --save

-- erweiterung des cli setups um Style informationen des vendors
"styles": [
        "styles.scss",
        "../node_modules/font-awesome/scss/font-awesome.scss",
        "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/primeng/resources/themes/omega/theme.scss"
      ],

# Update Package JSON Scripts

    "start:dev": "ng serve --hmr -o - w -H 0.0.0.0",
    "start:prod": "ng serve --prod -o -w -H 0.0.0.0",
    "build": "ng build",
    "build:prod": "ng build --prod",
    "build:prod:aot": "ng build --prod --aot -op dist-aot -bh /aot-test/dist-aot/",
    "build:clean": "rm -rf dist dist-aot",
    "update:cli:local": "rm -rf node_modules dist dist-aot && npm install --save-dev @angular/cli@latest && sleep 1000 && npm install",

# first route
ng g module ngForUpdate --routing=true

# add Route in app route Module
loadChildren: './ng-for-update/ng-for-update.module#NgForUpdateModule'

# add ngFor Componenten
ng generate component ngFor

#next steps
ng g module ngIfUpdate --routing=true
cd src/app/ng-if-update/
ng g c ngIf --flat=true
loadChildren: './ng-if-update/ng-if-update.module#NgIfUpdateModule'

cd ..
ng g m ngTemplateUpdate --routing=true
cd ng-template-update
ng g c ngTemplate --flat=true
loadChildren: './ng-template-update/ng-template-update.module#NgTemplateUpdateModule'
{ path     : '',  component: NgTemplateComponent }
ng g c saban --flat=true --spec=false --inlineTemplate=true --inlineStyle=true

cd .. & ng g m ParamMapUpdate --routing=true && cd param-map-update & ng g c ParamMap --flat=true --spec=false --inlineTemplate=true --inlineStyle=true

loadChildren: './dynamic/dynamic.module#DynamicModule'
{ path     : '',  component: DynamicLoaderComponent }

DynamicLoader Component

# GfkUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
