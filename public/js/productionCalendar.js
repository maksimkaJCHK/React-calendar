/*! For license information please see productionCalendar.js.LICENSE.txt */
(()=>{"use strict";var e={8354:(e,t,r)=>{var n=r(7294),a=r(3935),o={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Kann","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["Janvier","Février","Mars","Avril","Peut","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],su:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Saattaa","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]};function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const c=function(e){var t=e.lang,r=e.year,a=e.month,l=e.visibleYear,c=i(o[t.toLowerCase()]),u=new Date(r,a),s=c[u.getMonth()],d=l?u.getFullYear():"";return n.createElement("div",{className:"calendar-head"},s," ",d)};r(2222),r(1249),r(7042);var u={ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],en:["Mon","Tue","Wed","Thu","May","Fri","Sat","Sun"],de:["Mon","Die","Mit","Don","Fre","Sum","Son"],fr:["Lun","Mar","Mer","Jeu","Ven","Sem","Dim"],su:["Mn","Ts","Ks","Tr","Pj","Ln","Sn"]};function s(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const f=function(e){var t=e.startDayWeek,r=e.lang,a=s(u[r]),o=0==t?[].concat(s(a.slice(6)),s(a.slice(0,6))):a;return n.createElement("div",{className:"calendar-day"},o.map((function(e,t){return n.createElement("div",{className:"calendar-day-col",key:t},e)})))};r(9600),r(7327),r(9653);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=["calendar-body-col"],g=function(e,t){var r=(new Date).setHours(0,0,0,0),n=new Date(r).getMonth(),a=new Date(r).getFullYear();return{isCurDate:n==e&&a==t,curDate:r}},x=function(e,t,r,n,a){var o=[[]],i=g(t,e),l=t-1<0?11:t-1,c=t+1>11?0:t+1;a=(a=a.filter((function(e){return e.month==t||e.month==l||e.month==c}))).map((function(e){return p(p({},e),{},{id:new Date(e.year,e.month,e.day).setHours(0,0,0,0)})}));for(var u=1;u<=r;u++){var s,d=new Date(e,t,u),f="";d.setHours(0,0,0,0),f=0==d.getDay()||6==d.getDay()?"output":"",d.getTime()==i.curDate&&(f+=" curDate");var y=[];if(1==u&&d.getDay()!=n)y=h(w(e,t,d.getDay(),n));if(0!=u&&d.getDay()==n&&o.push([]),y=[].concat(h(y),[{id:d.getTime(),day:d.getDate(),className:[].concat(v,[f]),hint:[]}]),u==r&&d.getDay()<=6){var m=k(e,t,d.getDay(),n);y=[].concat(h(y),h(m))}(s=o[o.length-1]).push.apply(s,h(y))}return o=function(e,t){var r=h(e),n=h(t);return n.map((function(e){return h(e.map((function(e){var t=r.filter((function(t){return t.id==e.id}));return t.length?p(p({},e),{},{className:[].concat(h(e.className),[t[0].class,"holiday"]),hint:[].concat(h(e.hint),h(t[0].hint))}):p({},e)})))}))}(a,o)},w=function(e,t,r,n){var a=[],o=r-n,i=g(t-1<0?11:t-1,t-1<0?e-1:e);o=o<0?7-n:o;for(var l=0;l<o;l++){var c=new Date(e,t,-l),u=0==c.getDay()||6==c.getDay()?"output":"";c.setHours(0,0,0,0),c.getTime()==i.curDate&&(u+=" curDate"),a.unshift({id:c.getTime(),day:c.getDate(),className:[].concat(v,["prev",u]),hint:[]})}return a},k=function(e,t,r,n){var a=[],o=6-r+n,i=g(t+1>11?0:t+1,t+1>11?+e+1:e);o=7==o?0:o;for(var l=0;l<o;l++){var c=new Date(e,t+1,l+1),u="";c.setHours(0,0,0,0),u=0==c.getDay()||6==c.getDay()?"output":"",i.isCurDate&&c.getTime()==i.curDate&&(u+=" curDate"),a.push({id:c.getTime(),day:c.getDate(),className:[].concat(v,["next",u]),hint:[]})}return a};const E=function(e){var t=e.year,r=e.month,a=e.startDayWeek,o=e.holiday,i=function(e,t){return new Date(e,t+1,0).getDate()}(t,r),l=x(t,r,i,a,o);return n.createElement("div",{className:"calendar-body"},l.map((function(e,t){return n.createElement("div",{key:t,className:"calendar-body-row"},e.map((function(e){return n.createElement("div",{className:e.className.join(" "),key:e.id},n.createElement("div",{className:"calendar-body-day"},e.day),e.hint.map((function(e,t){return n.createElement("div",{className:"calendar-body-hint",key:t},n.createElement("div",{className:"calendar-body-title"},e.title),n.createElement("div",{className:"calendar-body-desc"},e.desc))})))})))})))};var D=["january","february","march","april","may","june","july","august","september","october","november","december"],C=r(3379),S=r.n(C),j=r(5145),_={insert:"head",singleton:!1};S()(j.Z,_);j.Z.locals;const O=function(e){var t=e.lang,r=void 0===t?"ru":t,a=e.year,o=void 0===a?"2020":a,i=e.month,l=void 0===i?"1":i,u=e.visibleYear,s=void 0===u||u,d=e.startDayWeek,y=void 0===d?1:d,p=e.holiday,m=void 0===p?[]:p,h=l-1,b="calendar ".concat(D[h]);return n.createElement("div",{className:b},n.createElement(c,{lang:r,year:o,month:h,visibleYear:s}),n.createElement(f,{startDayWeek:y,lang:r}),n.createElement(E,{startDayWeek:y,year:o,month:h,holiday:m}))};const A=[{year:2021,month:0,day:1,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:2,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:3,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:4,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:5,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:6,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:7,class:"",hint:[{title:"Рождество Христово",desc:"Один из главных христианских праздников, отмечается всеми христианскими деноминациями."}]},{year:2021,month:0,day:8,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:1,day:20,class:"workDay",hint:[{title:"Рабочий день",desc:"Этот день будет рабочим, зато понедельник будет выходным"}]},{year:2021,month:1,day:22,class:"",hint:[{title:"Выходной день",desc:"В этом году 23 февраля выходит на вторник, и было решено сделать субботу рабочим днем, а выходной перенести на понедельник."}]},{year:2021,month:1,day:23,class:"",hint:[{title:"День защитника отечества",desc:"Тут особо и не попишешь, вобщем женщинам нужно успеть закупиться носками и пеной для бритья."}]},{year:2021,month:2,day:8,class:"",hint:[{title:"8 марта",desc:"Международный женский день. Появился как день солидарности женщин в борьбе за равные права и эмансипацию. С марта 1975 года Международный женский день отмечается в ООН. А если по честному, то кроме СНГ нигде он не отмечается."}]},{year:2021,month:4,day:1,class:"",hint:[{title:"1 мая",desc:"В современной России 1 мая отмечается как Праздник Весны и Труда. Первомай в современном виде возник в середине XIX века в рабочем движении, выдвинувшем в качестве одного из основных требований введение восьмичасового рабочего дня. Первыми с требованием восьмичасового рабочего дня выступили рабочие Австралии 21 апреля 1856 года. С тех пор этот праздник в Австралии стал ежегодным. По образцу рабочих Австралии 1 мая 1886 года анархические организации США и Канады устроили ряд митингов и демонстраций. При разгоне такой демонстрации в Чикаго 4 мая 1886 года погибли шесть демонстрантов. "}]},{year:2021,month:4,day:3,class:"",hint:[{title:"Выходной день",desc:"Так как 1 мая выходит на субботу, выходной переноситчя на понедельник."}]},{year:2021,month:4,day:9,class:"",hint:[{title:"9 мая – День Победы",desc:"Праздник победы Красной Армии и советского народа над нацистской Германией в Великой Отечественной войне 1941—1945 годов. Установлен Указом Президиума Верховного Совета СССР от 8 мая 1945 года и отмечается 9 мая каждого года. В 1945—1947 и с 1965 года День Победы — нерабочий праздничный день."}]},{year:2021,month:4,day:10,class:"",hint:[{title:"Выходной день",desc:"Так как в этом году 9 мая выпадает на воскресенье, то он соответственно переносится на понедельник."}]},{year:2021,month:5,day:12,class:"",hint:[{title:"День России",desc:"День принятия Декларации о государственном суверенитете РСФСР, в просторечии - День независимости. Наверное, это самый противоречивый праздник в современной Российской действительности.)))"}]},{year:2021,month:5,day:14,class:"",hint:[{title:"Выходной день",desc:"Так как в этом году день России выходит на субботу , выходной переносится на понедельник."}]},{year:2021,month:10,day:4,class:"",hint:[{title:"День народного единства",desc:"22 октября (1 ноября) 1612 года народное ополчение под предводительством Кузьмы Минина и Дмитрия Пожарского штурмом взяло Китай-город, гарнизон Речи Посполитой отступил в Кремль. Князь Пожарский вступил в Китай-город с Казанской иконой Божией Матери. 23 октября (2 ноября) командование гарнизона подписало капитуляцию, выпустив тогда же из Кремля московских бояр и других знатных лиц. На следующий день 24 октября (3 ноября) гарнизон сдался. "}]},{year:2021,month:10,day:5,class:"",hint:[{title:"Выходной день",desc:"Видимо с новогодних праздников что-то переносится."}]},{year:2021,month:11,day:31,class:"",hint:[{title:"Выходной день",desc:"Видимо с новогодних праздников что-то переносится."}]}];var N=r(7219),P={insert:"head",singleton:!1};S()(N.Z,P);N.Z.locals;var $=document.getElementById("app");a.render(n.createElement("div",null,n.createElement("div",{className:"exampleCalendar-group"},n.createElement("h2",null,"Календарь на 2021 год"),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"1",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"2",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"3",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"4",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"5",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"6",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"7",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"8",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"9",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"10",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"11",holiday:A})),n.createElement("div",{className:"exampleCalendar-item"},n.createElement(O,{visibleYear:!1,year:"2021",month:"12",holiday:A})))),$)},5145:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".calendar{color:#000;width:100%;text-align:center;border:1px solid #424242;font:16px/120% RobotoDraft}.calendar .calendar-body-col,.calendar .calendar-day-col{width:14.28571428571429%}.calendar .curDate .calendar-body-day{background-color:#fff176}.calendar .output{background-color:#ff5252}.calendar .holiday{background-color:#ff1744}.calendar-head{padding:20px 0;background:#e6ee9c}.calendar-day{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.calendar-day-col{padding:4% 0;background:#dce775;border:1px solid #424242;border-right:none;border-bottom:none}.calendar-day-col:first-of-type{border-left:none}.calendar-body-day{width:34px;height:34px;line-height:34px;display:inline-block;border-radius:50%}.calendar-body-row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.calendar-body-col{position:relative;padding:2% 0;border:1px solid #424242;border-right:none;border-bottom:none;background-color:#aed581}.calendar-body-col:first-of-type{border-left:none}.calendar-body-col:hover{z-index:2}.calendar-body-col:hover .calendar-body-hint{top:100%;left:50%;margin-left:-140px}.calendar-body-hint{top:-3000px;left:-3000px;position:absolute;width:280px;padding:15px;border-radius:10px;background-color:#dce775;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5)}.calendar-body-title{font:16px/120% RobotoDraft;margin:0 0 5px}.calendar-body-desc{font:14px/140% RobotoDraft}.calendar .next div,.calendar .prev div{opacity:.4}.calendar .next:hover .calendar-body-hint,.calendar .prev:hover .calendar-body-hint{top:-3000px;left:-3000px}.calendar .workDay{background-color:#7cb342}",""]);const o=a},7219:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".exampleCalendar{text-align:center;font-family:RobotoDraft}.exampleCalendar-wrap{width:100%;max-width:600px;display:block;margin:20px auto}.exampleCalendar-group{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1400px;margin:40px auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:RobotoDraft}.exampleCalendar-group h2{width:100%;text-align:center}.exampleCalendar-item{width:30%;max-width:480px;min-width:300px;margin:20px}.exampleCalendar .mdc-button{font-family:RobotoDraft,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:14px;font-size:.875rem;line-height:36px;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:5px 18px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;background-color:#fdd835}.exampleCalendar .mdc-button::-moz-focus-inner{padding:0;border:0}.exampleCalendar .mdc-button:active{outline:none}.exampleCalendar .mdc-button:hover{cursor:pointer;background-color:#fbc02d}.exampleCalendar .mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.exampleCalendar .mdc-button{height:36px}",""]);const o=a},2408:(e,t,r)=>{var n=r(7418),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,l=60110,c=60112;t.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),i=d("react.provider"),l=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),s=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var g=v.prototype=new b;g.constructor=v,n(g,h.prototype),g.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!k.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:x.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),j(i,t,r,"",(function(e){return e}))):null!=i&&(D(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+S(l=e[u],u);c+=j(l,t,r,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),u=0;!(l=e.next()).done;)c+=j(l=l.value,t,r,s=n+S(l,u++),i);else if("object"===l)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function _(e,t,r){if(null==e)return e;var n=[],a=0;return j(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function N(){var e=A.current;if(null===e)throw Error(y(321));return e}var P={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:_,forEach:function(e,t,r){_(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!D(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var o=n({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)w.call(t,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){u=Array(s);for(var d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:l,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.1"},7294:(e,t,r)=>{e.exports=r(2408)}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={783:0},t=[[8354,268]],n=e=>{},a=(a,o)=>{for(var i,l,[c,u,s,d]=o,f=0,y=[];f<c.length;f++)l=c[f],r.o(e,l)&&e[l]&&y.push(e[l][0]),e[l]=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);for(s&&s(r),a&&a(o);y.length;)y.shift()();return d&&t.push.apply(t,d),n()},o=self.webpackChunkwbp_boilerplate=self.webpackChunkwbp_boilerplate||[];function i(){for(var n,a=0;a<t.length;a++){for(var o=t[a],i=!0,l=1;l<o.length;l++){var c=o[l];0!==e[c]&&(i=!1)}i&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var l=r.x;r.x=()=>(r.x=l||(e=>{}),(n=i)())})(),r.x()})();