import {TouchableOpacity, View,Text,Image} from "react-native"
import heartImg from "../assets/icons/heart.png"
import ethImg from "../assets/icons/eth.png"




export const RoundButton = ()=>{
    
    return(
        
        <TouchableOpacity
         style={{
            width:"15%",
            height:"20%",
            backgroundColor:"white",
            position:"absolute",
            top:2,
            right:2,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:60 ,
            margin:"1%"        

         }}
         
        >
            <Image
            
            source={heartImg}
            style={{height:"50%",
                    width:"50%"
                }}
            />

        </TouchableOpacity>
        
    )
}

export const RechButton = ()=>{
    return(
        <TouchableOpacity style={{backgroundColor:"steelblue",padding:7, paddingLeft:20 ,paddingRight:20, borderRadius:15}}>
            <Text style={{fontWeight:"700",color:"white"}}>Place A bid</Text>
        </TouchableOpacity>
    )
}

export const Info = ({data}) =>{
     return(
       <View style={{padding:"5%"}}>

        <View>
         <View>
            <Text style={{fontSize:20,fontWeight:"600"}}>{data.name}</Text>
            <Text>{data.creator}</Text>
         </View>
        
        </View>


        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

        <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Image
            source={ethImg}
            style={{height:40 , width:20}}
            

            />
            <Text style={{marginLeft:8}}>{data.price}</Text>
         </View>

            <RechButton/>
        </View>

       </View>
     )
}
