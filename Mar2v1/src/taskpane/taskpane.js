/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global document, Office */


var quotes = ['The only true knowledge is knowing we know nothing', 'All we are is dust in the wind dude', 'Dust, wind, dude', 'Like sands in an hour glass, so are the days of our lives', 'Adams Rulz']


Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {

      document.getElementById("run").onclick = run;

  }
});



export async function run() {
  /**
   * Insert your Outlook code here
   */
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
}
