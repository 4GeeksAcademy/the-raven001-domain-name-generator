/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function messageInjector(message) {
  const printedDomains = document.getElementById("text");

  printedDomains.innerHTML += message;
}

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  for (let i in pronoun) {
    for (let x in adj) {
      for (let z in noun) {
        for (let p in ext) {
          messageInjector(`<p>${pronoun[i]}${adj[x]}${noun[z]}${ext[p]}</p>`);
          console.log(pronoun[i] + adj[x] + noun[z] + ext[p]);
        }
      }
    }
  }
};
