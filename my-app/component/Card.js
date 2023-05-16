import { Text, View, Image } from "react-native";
import { RechButton, RoundButton, Info,EndDate } from "./smallComponents";

export default function Card({ data }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        margin: "5%",
        borderRadius: "10%",
        // marginTop:"10%"
      }}
    >
      <View
        style={{
          height: 250,
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10%",
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

        <RoundButton height={"20%"} width={"15%"} top={2}
            right={2}/>
          
        <EndDate/>
      </View>

      <View>
        <Info data={data} />
      </View>
    </View>
  );
}
