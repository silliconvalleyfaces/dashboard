define("StyleUtils",[document],function(e){var f=function(b,a){var c="";e.defaultView&&e.defaultView.getComputedStyle?c=e.defaultView.getComputedStyle(b,"").getPropertyValue(a):b.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=b.currentStyle[a]);return c},g=function(b,a){for(var c=(a||"").split(" "),d=c.length-1;0<=d;--d)if(c[d]==b)return!0;return!1};return{getStyle:f,addClass:function(b,a){if(!a)return b;(a||"").split(" ");return g(b,a)?a:a+" "+b},removeClass:function(b,
a){var c=(a||"").split(" ");newClasses=[];for(var d=c.length-1;0<=d;--d)c[d]!==b&&newClasses.push(c[d]);return newClasses.join(" ")},existsClass:g,polyfillElementBackgroundSizeContains:function(b){var a=f(b,"background-image"),c=f(b,"background-size");"none"!=a&&"undefined"==typeof c&&(a=a.replace(/url\((['"])?(.*?)\1\)/gi,"$2").split(",")[0],c=new Image,c.onload=function(){b.style.width=this.width/this.height*b.offsetHeight},c.src=a,b.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(                 src\x3d'"+
a+"',                 sizingMethod\x3d'scale');")}}});