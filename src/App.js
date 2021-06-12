import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot
} from "@vkontakte/vkui";

import Home from "./panels/Home";
import Persik from "./panels/Persik";

import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:6600");

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [name, setName] = useState("Name");
  const [fetchedUser, setUser] = useState(null);
  const [fetchedVisitors, setVisitors] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
      socket.emit("new_visitor", user);

      socket.on("visitors", visitors => {
        setVisitors(visitors)
      });
    }
    fetchData();
  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
    setName(e.currentTarget.dataset.name);
  };

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel} popout={popout}>
          <Home id="home" fetchedUser={fetchedUser} go={go} />
          <Persik id="persik" go={go} name={name} />
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
