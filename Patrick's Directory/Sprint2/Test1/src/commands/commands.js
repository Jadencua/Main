/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
/* global global, Office, self, window */
Office.onReady(() => {
  // If needed, Office.js is ready to be called
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
  const message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true
  };

  // Show a notification message
  Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

  // Be sure to indicate when the add-in command function is complete
  event.completed();
}
function appendDisclaimerOnSend(event) {
  var appendText =
    '<p style = "color:blue"> <i>This is a placeholder signature</i></p>';  
  /**
    *************************************************************
     Ideal Usage - Call the getBodyType API. Use the coercionType
     it returns as the parameter value below.
    *************************************************************
  */
  Office.context.mailbox.item.body.appendOnSendAsync(
    appendText,
    {
      coercionType: Office.CoercionType.Html
    },
    function(asyncResult) {
      console.log(asyncResult);
    }
  );

  event.completed();
}

function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.action = action;
g.appendDisclaimerOnSend = appendDisclaimerOnSend;