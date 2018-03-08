const webfontsGenerator = require('webfonts-generator');
const rimraf = require('rimraf');
const fs = require('fs');
const handlebars = require('handlebars')
require("colors");

function templateHelpers() {
  handlebars.registerHelper('removePeriods', function (selector) {
    return selector.replace(/\./, '');
  });
  handlebars.registerHelper('getCh', function(string){
    return string.replace(/[^\u4e00-\u9fa5]/gi,"");
  });
  handlebars.registerHelper('removeCh', function(string){
    return string.replace(/[\u4e00-\u9fa5]+_/gi,"");
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

function generatorFont(files) {
  return new Promise((resolve, reject) => {
    webfontsGenerator({
      files: files || [],
      dest: 'dist/',
      fontName: 'shareuifont',
      html: true,
      templateOptions: {
        classPrefix: 'si-',
        baseSelector: '.si'
      },
      htmlTemplate: "templates/html.hbs"
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
removeDist("dist/")
  .then(() => {
    console.log("√ 清除dist文件夹!".green);
    generatorFont(getSvgFiles("src/"))
      .then(() => {
        console.log(`√ 成功生成字体图标！`.green);
      })
  })

