require("colors");
const webfontsGenerator = require('@liaoyf/webfonts-generator');
const rimraf = require('rimraf');
const fs = require('fs');
const handlebars = require('handlebars');
const _ = require("lodash");
const packagejson = require("./package.json");

const distPath = 'dist/';
const srcPath = 'src/';

function templateHelpers() {
  handlebars.registerHelper('removePeriods', function (selector) {
    return selector.replace(/\./, '');
  });
  handlebars.registerHelper('getCh', function(string){
    // return string.replace(/[^\u4e00-\u9fa5]/gi,"");
    var arr = string.split('_');
    return arr[1];
  });
  handlebars.registerHelper('removeCh', function(string){
    // return string.replace(/[\u4e00-\u9fa5]+_/gi,"");
    var arr = string.split('_');
    return arr.slice(0, 1).concat(arr.slice(2)).join('_');
  });
  handlebars.registerHelper('getCodepoint', function(name, codepoints){
    return '\\' + (codepoints[name] || '');
  });
  handlebars.registerHelper('getConent', function(name, codepoints){
    if(!codepoints[name]) return '';
    return ('\&#x' + (codepoints[name]) + ';').toString();
  });
}

function removeDist(path) {
  return new Promise((resolve, reject) => {
    rimraf(path, () => {
      resolve();
    })
  });
}

function getSvgFiles(parentPath) {
  let files = fs.readdirSync(parentPath);
  return files.map(file => parentPath + file);
}

function getTypes(files){
  const result = _.groupBy(files, (value, index, collection) => {
    return value.split('_')[0];
  });
  const group = [];
  for(let prop in result){
    group.push({
      type: prop,
      list: result[prop]
    });
  }

  return group;
}

function generatorFont(files) {
  return new Promise((resolve, reject) => {
    webfontsGenerator({
      files: files || [],
      dest: distPath,
      fontName: 'shareuifont',
      cssDest: distPath + 'style.css',
      html: true,
      templateOptions: {
        classPrefix: 'si-',
        baseSelector: '.si',
        types: getTypes(fs.readdirSync(srcPath).map(file => file.split('.')[0])),
        version: packagejson.version
      },
      htmlTemplate: "templates/html.hbs",
      cssTemplate: "templates/css.hbs"
    }, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    })
  });
}


templateHelpers();
removeDist(distPath)
  .then(() => {
    console.log("√ 清除dist文件夹!".green);
    generatorFont(getSvgFiles(srcPath))
      .then(() => {
        console.log(`√ 成功生成字体图标！`.green);
      })
  })

