var hasNavigator = typeof navigator !== 'undefined';
var agent = navigator.userAgent;
var computed = false;

const ua = navigator.userAgent.toLowerCase();
const isWx = (/MicroMessenger/i).test(ua);
const isQQ = (/mqqbrowser|qzone|qqbrowser/i).test(ua);
if (isWx || isQQ) {
	computed = true;
}

var word = 'not share';
if (computed) word = 'should share'

document.getElementsByClassName('navigator')[0].innerHTML = hasNavigator;
document.getElementsByClassName('user-agent')[0].innerHTML = agent;
document.getElementsByClassName('result')[0].innerHTML = word;
