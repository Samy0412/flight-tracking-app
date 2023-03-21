import React, { useEffect } from "react";
import { Container, Content } from "native-base";
import { StyleSheet } from "react-native";

import { ListCards } from "../components/ListCards";
import { departure as channelData } from "../constants/RawData";

export default DepartureScreen = ({ navigation }) => {
  //TODO:

  const Departures = channelData
    ? channelData.map((item, index) => {
        return (
          <ListCards
            key={index}
            text={`${item.origin} - ${item.destination} (${item.iataId})`}
            icon="ios-airplane"
            action={() =>
              navigation.navigate("PopModal", {
                iataId: item.iataId,
                action: "arrival",
              })
            }
          />
        );
      })
    : [];

  useEffect(() => {
    console.log("Depature Mounted");
  }, []);

  return (
    <Container style={styles.container}>
      <Content>{Departures}</Content>
    </Container>
  );
};

DepartureScreen.navigationOptions = {
  title: "Departures from London",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
  },
});
