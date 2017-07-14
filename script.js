// ==UserScript==
// @name         Bittrex tweak
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       leathan
// @match        https://bittrex.com/*
// @grant        none
// ==/UserScript==
(function() {
 
//IF YOU ARE GOING TO PASTE THIS SCRIPT INTO THE CONSOLE START COPYING HERE.
 
var matches = false; var oldmatches; var table = {};
setInterval(function() {
$('.menu-table').children().each(function(i) {
        if (typeof table[i] === "undefined") { table[i] = {}; }
        if (typeof table[i].matches != "undefined") table[i].oldmatches = table[i].matches;
        table[i].matches = $(this).children()[0].innerHTML.match(/(\d\.\d{8})/g);
        if (typeof table[i].oldmatches === "undefined") table[i].oldmatches = table[i].matches;
        try {
            for(var j = 0; j < table[i].matches.length; j++) {
                    var k=j+1;
                    if (parseFloat(table[i].matches[j]) < parseFloat(table[i].oldmatches[j])) {
                        $(this).children().find('td:nth-child('+ k +')').css('background-color','red');
                    } else if (parseFloat(table[i].matches[j]) > parseFloat(table[i].oldmatches[j])) {
                        $(this).children().find('td:nth-child('+ k +')').css('background-color','LightGreen');
                    }
            }
        } catch(e) {}
});
}, 700);
 
//IF YOU ARE GOING TO PASTE THIS SCRIPT INTO THE CONSOLE STOP COPYING HERE.
//FOR HELP ASK LEATHAN
 
})();
