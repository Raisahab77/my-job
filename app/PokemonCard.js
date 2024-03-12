import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const PokemonCard = (props) => {
  let { borderColor,emoji } = getTypeDetails(props.data.type);

  return (
    // <Text>Hello world</Text>
    // <Text className="text-4xl text-red-200">Home1234</Text>
    <View className="w-full min-h-[400px] p-4 bg-black border-2 border-gray-300 rounded-lg">
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-gray-300">{props.data.name}</Text>
        <Text className="text-gray-300 font-bold text-xl">❤️ HP:{props.data.hp}</Text>
      </View>

      <View className="flex-row justify-center w-full mt-3">
        <View className="w-[75%]">
            <Image source={props.data.image} className="w-full h-[200]" resizeMode='contain' />
        </View>
      </View>

    <View className="flex items-center mt-5">
        <View className="flex justify-center py-2 px-6 rounded-md border-4" style={{borderColor:borderColor}}>
            <Text className="text-gray-300 font-bold text-xl">{emoji} {props.data.type}</Text>
        </View>
    </View>

      <Text className="mt-2 text-lg text-gray-300"> <Text className="font-bold">Moves : </Text> {props.data.moves.join(', ')}</Text>
      <Text className="mt-2 text-lg text-gray-300"> <Text className="font-bold">Weakness : </Text> {props.data.weakness.join(', ')}</Text>
    </View>
  )
}


const getTypeDetails = (type) =>{
  switch (type.toLowerCase()) {
    case "electric":
      return {borderColor:"#ffd700", emoji:"⚡"};

    case "water":
      return {borderColor:"#6493ea", emoji:"💧"};

    case "fire":
      return {borderColor:"#ff5733", emoji:"🔥"};

    case "grass":
      return {borderColor:"#66cc66", emoji:"🌿"};
  
    default:
      return {borderColor:"#a0a0a0", emoji:"❓"}
  }
}


export default PokemonCard;
