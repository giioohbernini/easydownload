(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _netcine = require('./netcine');

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.host == "netcine.us") {
  (0, _netcine.netcine)();
} else if (window.location.host == "p.netcine.us") {
  (0, _netcine.pnetcine)();
} else if (window.location.host == "www.micetop.us" || window.location.host == "micetop.us") {

  console.log("Don't inspect any more! - p.netcine");

  fetch(document.URL).then(function (res) {
    res.text().then(function (data) {
      document.querySelector("#demo").style.display = "none";

      var re = /file: "(.*)"/g;
      var result = re[Symbol.match](data);
      var high = void 0;
      var low = void 0;

      result.forEach(function (item, index) {
        index == 0 ? low = item.slice(7, -1) : high = item.slice(7, -1);
      });

      (0, _form2.default)(high, low);
    });
  });
}

},{"./form":2,"./netcine":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var form = function form(high, low) {
  var box = document.createElement("div");
  box.classList = "box";

  var closebtn = document.createElement("div");
  closebtn.classList = "closebtn";

  var cbtn = document.createElement("button");
  cbtn.textContent = "x";
  cbtn.addEventListener('click', function () {
    box.remove();
    document.querySelector("#demo").style.display = "block";
  });

  var boxcontent = document.createElement("div");
  boxcontent.classList = "boxcontent";

  var img = document.createElement("img");
  img.width = "250";
  img.src = "https://i.imgur.com/Jl9XAFI.png";

  var buttons = document.createElement("div");
  buttons.classList = "buttons";

  var highbtn = document.createElement("a");
  highbtn.textContent = "Alta qualidade";
  highbtn.href = high;
  highbtn.download = "";

  var lowbtn = document.createElement("a");
  lowbtn.textContent = "Baixa qualidade";
  lowbtn.href = low;
  lowbtn.download = "";

  buttons.appendChild(highbtn);
  buttons.appendChild(lowbtn);

  boxcontent.appendChild(img);
  boxcontent.appendChild(buttons);

  closebtn.appendChild(cbtn);

  box.appendChild(closebtn);
  box.appendChild(boxcontent);

  document.body.appendChild(box);
};

exports.default = form;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var netcine = exports.netcine = function netcine() {

  console.log("Don't inspect any more! - Netcine");

  var playermenu = document.querySelector(".player-menu");
  var playercontent = document.querySelectorAll(".player-content");

  playercontent.forEach(function (item, index) {
    var uri = item.querySelector('iframe').src;

    var download = document.createElement("li");
    var downloadLink = document.createElement("a");

    downloadLink.href = uri;
    downloadLink.textContent = "Download #" + (index + 1) + " - " + uri.slice(-3);
    download.appendChild(downloadLink);
    playermenu.appendChild(download);
  });
};

var pnetcine = exports.pnetcine = function pnetcine() {

  var iframe = document.querySelector("iframe");
  window.location = iframe.src;
};

},{}]},{},[1]);
