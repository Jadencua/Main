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

function guardarNumeros() {
    boxvalue = document.getElementById('box').value;
    quotes.push(boxvalue);
    console.log(quotes);
    return false;
}

var quotes = ['The only true knowledge is knowing we know nothing', 'All we are is dust in the wind dude', 'Dust, wind, dude', 'Like sands in an hour glass, so are the days of our lives', 'Adams Rulz']

export async function run() {

    var randomNumber = Math.floor(Math.random() * (quotes.length));


    // Check if the add-in has been configured.
    Office.context.mailbox.item.body.setSelectedDataAsync("testTwo",
        { coercionType: Office.CoercionType.Html }, function (result) {
            event.completed();
        });
  /**
   * Insert your Outlook code here
   */
}
