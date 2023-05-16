import { Text, View, Image, FlatList,SafeAreaView,TouchableOpacity } from "react-native";
import {
  BackButton,
  RoundButton,
  Info,
  BidsData,
  EndDate,
} from "../component/smallComponents";
import { NFTData } from "../constants/dummy";
import React, { useState } from "react";

const DetailHeader = ({ Navigation, data }) => {
  // const { data } = route.params;
  const [desc, setDesc] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    if (!readMore) {
      setReadMore(true);
      setDesc(data.description);
    } else if (readMore) {
      setReadMore(false);
      setDesc(data.description.slice(0, 100));
    }
  }
  return (
    <View >
     
      <View>
        <Info data={data} btnStatus={false} />
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
    </View>
  );
};

export default function Details({ Navigation, route }) {
  const { data } = route.params;


  return (
    <View style={{flex:1}}>
       <View
        style={{
          // height: 300,
          width: "102%",
          backgroundColor: "white",
          borderRadius: "10%",
          flex:1,
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
           
          }}
        />

        <RoundButton height={50} width={50} top={25} right={10} />
        <BackButton handlePress={() => Navigation.goBack()} />
        <EndDate marginRight={8} />
      </View>

      <View style={{ flex:2, padding: 15, marginTop: 10 }}>
        <FlatList
          data={data.bids}
          renderItem={({ item }) => <BidsData data={item} />}
          showsVerticalScrollIndicator={false}

          // eska mtlb , eke upper kounse chize aae ge
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailHeader data={data} Navigation={Navigation} />
             
              <Text
                style={{ fontWeight: "500", marginBottom: 10, fontSize: 18 }}
              >
                Current Bid's
              </Text>
            </React.Fragment>
          )}
        />
      </View>
      <View>
     
      <TouchableOpacity
      style={{
        backgroundColor: "steelblue",
        padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
        width:"45%",
        // height:"50%",
        position:"absolute",
        bottom:20,
        left:"27%"
        
      }}
   
    >
      <Text style={{ fontWeight: "500",fontSize:17 , color: "white",textAlign:"center" }}>Place A bid</Text>
    </TouchableOpacity>
      </View>

    </View>
  );
}
