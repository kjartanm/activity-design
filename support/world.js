const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./scope');

const World = function() {
  scope.driver = puppeteer;
};

setWorldConstructor(World);