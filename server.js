var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');

var text = 'You have entered a secure zone please remove yourself in thirty seconds otherwise AK47 shots will be fired in all directions';

var url = 'http://translate.google.com/translate_tts?tl=en&q=' + encodeURIComponent(text);
request(url).pipe(new Lame.Decoder).pipe(new Speaker);
