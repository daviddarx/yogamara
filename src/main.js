import browserDetection from './browser-detect.js';
import * as content from '../content/content.json';

if (browserDetection.isSafari) {
  document.body.classList.add('no-blend-mode');
}

delete content.default;
const contentArray = Object.values(content);




//object
const Thumb = function () {
  this.id = 0;

  this.settings = {
    x: 0,
    y: 0,
  };

  this.refs = {
  };

  this.isLoaded = false;

  this.init = (id) => {
    this.id = id;
  };

  this.method = (param) => {
  };
};





//app
const App = function () {
  this.settings = {

  };

  this.refs = {
  };

  this.init = () => {
  }

  this.resize = () => {
  };
};

let app;





//general
let windowW = 0;
let windowH = 0;

const resizeListener = () => {
  windowW = (window.innerWidth || screen.width);
  windowH = (window.innerHeight || screen.height);

  if(app) {
    app.resize();
  }
};



//init
const init = () => {
  resizeListener();

  app = new App();
  app.init();

  window.addEventListener('resize', resizeListener);
  resizeListener();

  document.body.classList.add('is-computed');
};




//utils
Image.prototype.load = function(url){
  var thisImg = this;
  var xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open('GET', url,true);
  xmlHTTP.responseType = 'arraybuffer';
  xmlHTTP.onload = function(e) {
    var blob = new Blob([this.response]);
    thisImg.src = window.URL.createObjectURL(blob);
  };
  xmlHTTP.onprogress = function(e) {
    thisImg.completedPercentage = parseInt((e.loaded / e.total) * 100);
  };
  xmlHTTP.onloadstart = function() {
    thisImg.completedPercentage = 0;
  };
  xmlHTTP.send();
};

Image.prototype.completedPercentage = 0;



init();
