import React from "react";
import PropTypes from "prop-types";

import { Line } from "react-chartjs-2";

import { Card, CardGrid, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

import persik from "../img/persik.png";
import "./Persik.css";

const Persik = props => (
  <Panel id={props.id}>
    <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>
      {props.name}
    </PanelHeader>
    <CardGrid size="m">
      <Card size="m" mode="outline">
        <Line
          data={{
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
              {
                label: "Number",
                data: [12, 3, 4, 8, 6],
                fill: false,
                borderColor: "#5c9ce670",
                backgroundColor: "#5c9ce670"
              }
            ]
          }}
          // width={30}
          // height={10}
          //options={{ maintainAspectRatio: false }}
        ></Line>
      </Card>
    </CardGrid>
    <img className="Persik" src={persik} alt="Persik The Cat" />
  </Panel>
);

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Persik;
