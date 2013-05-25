// ==UserScript==
// @name Dropbox Forum Mod Icons
// @namespace IdeativeSoftware.Dropbox
// @description Gives Dropbox Forum Super Users icons
// @include https://forums.dropbox.com/*
// @grant none
// ==/UserScript==

var internalVersion = 2013.1;

//Run necessary functions and checks
checkPage("threadauthor");

//Check page for posts by Super Users
function checkPage(matchClass){
  var elems = document.getElementsByTagName('*'),i;
  for (i in elems){
    if ((" " + elems[i].className + " ").indexOf(" " + matchClass + " ") > -1){
      elems[i].innerHTML = "<p><strong><img src='http://www.techgeek01.com/just-for-fun/nyancatright.gif' height='16px' width='40px' >&nbsp;" + elems[i].innerHTML.substring(26,elems[i].innerHTML.length);
    }
  }
}