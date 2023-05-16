import { Text, View, Image,TextInput } from "react-native";
import logoimg from "../assets/images/logo.png";
import profileimg from "../assets/images/person01.jpg";

export default function Header() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center",
          marginLeft: 7,
          marginRight: 7,
          marginTop:25,
          marginBottom:30

        }}
      >
        <Image
          source={logoimg}
          style={{
            height: 40,
            width: 150,
            color: "white",
          }}
        />
        <Image
          source={profileimg}
          style={{
            height: 60,
            width: 60,
            borderRadius:100
          }}
        />
      </View>

    <View style={{
        marginLeft: 20,
        }}>
        <Text style={{ color: "white", fontSize: 15 }}>Hello, Riya</Text>
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 20,
            marginTop: 5,
            marginBottom: 30,
          
          }}
        >
          Let's find a masterPiece
        </Text>
    </View>


     
    </View>
  );
}
