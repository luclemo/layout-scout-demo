$.fn.layoutScout=function(r){var a=$.extend({color:"lightColours"},r),g="div, section, header, nav, main, article, footer, aside",o=function(r){$("*").filter(g).each(function(){var a=$(this).attr("class"),g=$(this).siblings(),o=Math.floor(Math.random()*r.length),b=r[o],t="";0===o||o<=r.length?t=o++:o===r.length&&(t=o--),g.attr("class")===a?($(this).css("background-color",b),g.css("background-color",b)):".clearfix"===a?$(this).css("background-color",r[t]):$(this).css("background-color",r[t])})},b=function(){$("*").filter(g).css("background-color","")},t=!0;$("a.btn.primary").on("click",function(r){r.preventDefault(),t?(o(c[a.color]),t=!1):(b(),t=!0)});var c={lightColours:["rgba(255,228,181,0.9)","rgba(176,224,230,0.8)","rgba(143,188,143,0.7)","rgba(255,160,122,0.6)","rgba(216,191,216,0.5)","rgba(255,222,173,0.4)","rgba(224,255,255,0.3)","rgba(102,205,170,0.8)","rgba(240,230,140,0.7)"],darkColours:["rgba(218,165,32,0.9)","rgba(70,130,180,0.8)","rgba(85,107,47,0.7)","rgba(255,99,71,0.6)","rgba(72,61,139,0.5)","rgba(160,82,45,0.8)","rgba(47,79,79,0.3)","rgba(25,25,112,0.3)","rgba(128,0,0,0.3)"],lightMono:["rgba(0,0,0,0.02)","rgba(0,0,0,0.08)","rgba(0,0,0,0.10)","rgba(0,0,0,0.13)","rgba(0,0,0,0.16)","rgba(0,0,0,0.18)","rgba(0,0,0,0.20)"],darkMono:["rgba(0,0,0,0.3)","rgba(0,0,0,0.35)","rgba(0,0,0,0.4)","rgba(0,0,0,0.45)","rgba(0,0,0,0.5)","rgba(0,0,0,0.55)","rgba(0,0,0,0.6)"]}};