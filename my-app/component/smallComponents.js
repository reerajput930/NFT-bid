import { TouchableOpacity, View, Text, Image } from "react-native";
import heartImg from "../assets/icons/heart.png";
import ethImg from "../assets/icons/eth.png";
import leftImg from "../assets/icons/left.png";
import { useNavigation } from "@react-navigation/native";

export const RoundButton = ({ height, width, top, right }) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        backgroundColor: "white",
        position: "absolute",
        top: top,
        right: right,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        margin: "1%",
      }}
    >
      <Image source={heartImg} style={{ height: "50%", width: "50%" }} />
    </TouchableOpacity>
  );
};

export const RechButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "steelblue",
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
      }}
      onPress={handlePress}
    >
      <Text style={{ fontWeight: "700", color: "white" }}>Place A bid</Text>
    </TouchableOpacity>
  );
};

export const BackButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 100,
        top: 40,
        left: 15,
        padding: 10,
      }}
      onPress={handlePress}
    >
      <Image
        source={leftImg}
        style={{
          height: 35,
          width: 35,
        }}
      />
    </TouchableOpacity>
  );
};

export const Info = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: "5%" }}>
      <View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>{data.name}</Text>
          <Text>{data.creator}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Image source={ethImg} style={{ height: 40, width: 20 }} />
          <Text style={{ marginLeft: 8 }}>{data.price}</Text>
        </View>
        {/* it is like the link in reactjs */}
        <RechButton
          handlePress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  );
};

export const BidsData = ({ data }) => {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"stretch",marginBottom:30}}>
      <Image source={data.image} style={{ height: 60, width: 60 }} />
      <View>
        <Text style={{fontWeight:"500"}}>{data.name}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <Image
            source={ethImg}
            style={{
              height: 40,
              width: 20,
            }}
          />
          <Text style={{ marginLeft: 8 }}>{data.price}</Text>
        </View>
      </View>
    </View>
  );
};
