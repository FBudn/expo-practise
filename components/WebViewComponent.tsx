import React from "react";
import WebView from "react-native-webview";

const WebViewComponent = () => {
  return (
    <WebView
      source={{
        uri: "https://joemonster.org/art/68507/Mistrzowie_Internetu_Janusz_Kowalski_bije_sie_z_myslami",
      }}
    />
  );
};

export default WebViewComponent;
