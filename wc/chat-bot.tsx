import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import Home from "../app/page";

const ChatBotElement = reactToWebComponent(Home, React, ReactDOMClient);

if (!customElements.get("chat-bot")) {
  customElements.define("chat-bot", ChatBotElement);
} 