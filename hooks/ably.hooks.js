import { useState, useEffect } from "react";
import { ably } from "../env";

//set CHANNEL_SCOPE  channel
const CHANNEL_NAME =
  "[product:ably-flightradar24/heathrow-flights]flights:airport:LHR";
export const useAblyChannel = (channel, dependencies) => {
  const [onMessage, setOnMessage] = useState("Please wait..");

  const [isLoading, setLoading] = useState(true);
  //fetch channel data
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    //add ably connection here
  }, dependencies);

  return [isLoading, onMessage, channelData];
};
