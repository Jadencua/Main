/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global document, Office */

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  /**
   * Insert your Outlook code here
   */
}

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
const random = document.getElementById('random')
let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    //input.value = ''
})

data.forEach((item) => {
    liMaker(item)
})

button.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

random.addEventListener('click', function () {
    var randomNumber = Math.floor(Math.random() * (itemsArray.length));
    Office.context.mailbox.item.body.setSelectedDataAsync(itemsArray[randomNumber]);

})