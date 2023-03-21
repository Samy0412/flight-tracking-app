import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";

import { ListCards } from "../components/ListCards";
import LoadingScreen from "../components/LoadingScreen";
import FabButton from "../components/FabButton";

import { useAblyChannel } from "../hooks/ably.hooks";

export default ArrivalScreen = ({ navigation }) => {
  // TODO:

  const [isLoading, displayMessage, channelData] = useAblyChannel(
    "arrivals",
    []
  );

  const Arrivals = channelData
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
            rotate
          />
        );
      })
    : [];

  useEffect(() => {
    console.log("Arrival Mounted");
  }, []);

  return (
    <Container style={styles.container}>
      {isLoading ? (
        <LoadingScreen message={displayMessage} />
      ) : (
        <>
          <Content>{Arrivals}</Content>
          <FabButton navigation={navigation} channelData={channelData} />
        </>
      )}
    </Container>
  );
};

ArrivalScreen.navigationOptions = {
  title: "Arrivals to London",
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
