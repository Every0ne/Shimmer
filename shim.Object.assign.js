Object.assign=function(d,f){if(d==null){throw new TypeError("Cannot convert undefined or null to object")}var e=Object(d);for(var c=1;c<arguments.length;c++){var b=arguments[c];if(b!=null){for(var a in b){if(Object.prototype.hasOwnProperty.call(b,a)){e[a]=b[a]}}}}return e};