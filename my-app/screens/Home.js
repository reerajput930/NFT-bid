import { Text, View, SafeAreaView, FlatList, ScrollView ,TextInput } from "react-native";
import { NFTData } from "../constants/index";
import Card from "../component/Card";
import { COLORS } from "../constants";
import Header from "../component/Header";
import { useState } from "react";



export default function Home() {
   
   const [ntfData,setnftData] = useState(NFTData)
  

    // filter logic  
    let searchednftData = {}

    function filterTheList(e){
      console.log(e)
      searchednftData =  NFTData.filter((item)=>{
        
        return item.name.toUpperCase().indexOf(e.toUpperCase()) !== -1
      })
      setnftData(searchednftData)
      console.log("new searched list ", ntfData)
    }



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FocusedStatusBar backgroundColor={COLORS.primary} /> */}
      {/* there will be two view one for card and one for background */}

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0, flex: 1 }}>
          {/* This is how flatlist */}

          <Header />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <TextInput
              style={{
                height: 50,
                width: "90%",
                padding: 10,
                paddingLeft: 20,
                margin: "3%",
                backgroundColor: "white",
                borderRadius: 20,
              }}
              onChangeText={(e)=>{ filterTheList(e)}}
              placeholder="Search by NFT name..."
            />
          </View>
          <FlatList
            data={ntfData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            // showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            zIndex: "-1",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <View
            style={{ height: 350, width: "100%", backgroundColor: "black" }}
          />
          <View style={{ flex: 1, width: "100%", backgroundColor: "white" }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
