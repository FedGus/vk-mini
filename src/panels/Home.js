import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  CardGrid,
  ContentCard,
  HorizontalCell,
  HorizontalScroll,
	RichCell,
	Card
} from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>PerAspera</PanelHeader>
    <Group header={<Header mode="secondary">Ученик</Header>}>
      {fetchedUser &&
        fetchedUser.map((fetchedUser, i) => (
          <Cell
            key={i}
            before={
              fetchedUser.photo_200 ? (
                <Avatar src={fetchedUser.photo_200} />
              ) : null
            }
            description={
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ""
            }
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        ))}
    </Group>
    <Group>
      <HorizontalScroll>
        <div style={{ display: "flex" }}>
          <HorizontalCell size="l" header="+5 предметов">
            <Avatar></Avatar>
          </HorizontalCell>
          <HorizontalCell size="l" header="+10 предметов">
            <Avatar></Avatar>
          </HorizontalCell>
        </div>
      </HorizontalScroll>
    </Group>

    <Group header={<Header mode="secondary">Предметы</Header>}>
      <CardGrid size="l">
        <Card size="l" mode="shadow">
          <RichCell
            multiline
            before={<Avatar size={72}></Avatar>}
            text="Базовый"
            caption="Ср. балл 88"
            onClick={go}
            data-to="persik"
            data-name="Русский язык"
          >
            Русский язык
          </RichCell>
        </Card>
        <Card size="l" mode="shadow">
          <RichCell
            multiline
            before={<Avatar size={72}></Avatar>}
            text="Профильный"
            caption="Ср. балл 72"
            onClick={go}
            data-to="persik"
            data-name="Математика"
          >
            Математика
          </RichCell>
        </Card>
      </CardGrid>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  // fetchedUser: PropTypes.shape({
  photo_200: PropTypes.string,
  //   first_name: PropTypes.string,
  //   last_name: PropTypes.string,
  //   city: PropTypes.shape({
  //     title: PropTypes.string
  //   })
  // })
};

export default Home;
