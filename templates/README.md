## <%= name %>

<%= description %>

[![NPM version][npm-image]][npm-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/<%= name %>.svg?style=flat-square
[npm-url]: http://npmjs.org/package/<%= name %>
[dep-image]: http://img.shields.io/david/uxcore/<%= name %>.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/<%= name %>
[devdep-image]: http://img.shields.io/david/dev/uxcore/<%= name %>.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/<%= name %>#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/<%= name %>.svg


### 本地开发

#### 初次开发

```sh
git clone https://github.com/quark-ui/<%= name %>
cd <%= name %>
npm install
npm start
```

#### 发布提交

```sh
npm run pack
git add .
git commit -m 'publish ready'
npm version patch/minor/major
npm run publish
```

## Demo

http://quark-ui.github.io/components/<%= name %>

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
