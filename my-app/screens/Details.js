import { Text, View, Image, FlatList } from "react-native";
import {
  BackButton,
  RoundButton,
  Info,
  BidsData,
} from "../component/smallComponents";
import { NFTData } from "../constants/dummy";
import React, { useState } from "react";

export default function Details({ Navigation, route }) {
    const { data } = route.params;
  const [desc, setDesc] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  //   console.log("-------------------------");
  //   console.log(data);
  //   console.log("-------------------------");

  console.log(data);

  function handleReadMore() {
    if (!readMore) {
      setReadMore(true)
      setDesc(data.description);
      
    } else if (readMore) {
     setReadMore(false)
      setDesc(data.description.slice(0, 100));
    }
  }

  return (
    <View>
      <View
        style={{
          height: 300,
          width: "102%",
          backgroundColor: "white",
          borderRadius: "10%",
          //   position:"absolute",
          left: -2,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            height: "100%",
            width: "100%",
            borderTopRightRadius: "10%",
            borderTopLeftRadius: "10%",
          }}
        />

        <RoundButton height={50} width={50} top={25} right={10} />
        <BackButton handlePress={() => Navigation.goBack()} />
      </View>

      <View>
        <Info data={data} />
      </View>

      <View style={{ padding: 15, marginTop: 30 }}>
        <Text style={{ fontWeight: "500", marginBottom: 10, fontSize: 18 }}>
          Description
        </Text>
        <Text style={{ fontWeight: "300", fontSize: 13 }}>
          {desc}
          {!readMore && "..."}
          <Text onPress={() => handleReadMore()} style={{ fontWeight: "600" }}>
           {!readMore ? "Read More" : " Read Less"}
          </Text>
        </Text>
      </View>

      <View style={{ padding: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: "500", marginBottom: 10, fontSize: 18 }}>
          Current Bid's
        </Text>

        <FlatList
          data={data.bids}
          renderItem={({ item }) => <BidsData data={item} />}
        />
      </View>

      {/* <Text>DETAILS</Text> */}
    </View>
  );
}
