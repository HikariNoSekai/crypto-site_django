!function e(c,n,i){function r(a,o){if(!n[a]){if(!c[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var t=n[a]={exports:{}};c[a][0].call(t.exports,function(o){var l=c[a][1][o];return r(l||o)},t,t.exports,e,c,n,i)}return n[a].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(o,l,a){"use strict";$(function(){$(".back_to_top").on("click",function(){$("body, html").animate({scrollTop:0},500)}),$(window).on("scroll",function(){var o=$(".first-section").height(),l=$(".back_to_top");$(window).scrollTop()>=o?l.addClass("back_to_top--active"):l.removeClass("back_to_top--active")})})},{}],2:[function(o,l,a){"use strict";o("../components/backToTop/scroll.js"),$(function(){$(".locale__link").on("click",function(){var o=$(this).attr("id");"en"==o?($("[data-localize]").localize("../static/locales/locale",{language:"en"}),console.log("en")):"ru"==o?($("[data-localize]").localize("../static/locales/locale",{language:"ru"}),console.log("ru")):"gb"==o?$("[data-localize]").localize("../static/locales/locale",{language:"gb"}):"fr"==o?$("[data-localize]").localize("../static/locales/locale",{language:"fr"}):"tur"==o?$("[data-localize]").localize("../static/locales/locale",{language:"tur"}):"po"==o&&$("[data-localize]").localize("../static/locales/locale",{language:"po"})})})},{"../components/backToTop/scroll.js":1}]},{},[2]);
//# sourceMappingURL=main.min.js.map
