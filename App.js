import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, StatusBar, Platform } from 'react-native';
// import Index from './app/Index';
import PokemonCard from './app/PokemonCard';

export default function App() {
  let ios = Platform.OS === 'ios';
  let statusBarHeight = StatusBar.currentHeight;
  console.log('statusBarHeight: ', statusBarHeight);
  const data = [
    {
      name:"Bulbasaur",
      hp:45,
      image:require('./assets/images/bulbasaur.png'),
      type:'Grass',
      moves:['Tackel', 'Vine', 'Whip', 'Growl', 'Leech Seed'],
      weakness:['Fire', 'Ice', 'Flying', 'Psychic']
    },
    {
      name:"Pikachu",
      hp:39,
      image:require('./assets/images/pikachu.png'),
      type:'Electric',
      moves:['Tackel', 'Vine', 'Whip', 'Growl', 'Leech Seed'],
      weakness:['Fire', 'Water', 'Flying', 'Psychic']
    },
    {
      name:"Raichu",
      hp:72,
      image:require('./assets/images/raichu.png'),
      type:'Fire',
      moves:['Tackel', 'Vine', 'Whip', 'Growl', 'Leech Seed'],
      weakness:['Electric', 'Ice', 'Flying', 'Psychic']
    }
  ]
  return (
    <SafeAreaView className="w-full h-screen flex justify-center items-center bg-neutral-700">
        <ScrollView className="w-[90%]">
            <View className="flex-row py-10 space-y-4">
                <FlatList
                    data={data}
                    renderItem={({item}) => <PokemonCard data={item}/>}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    ListHeaderComponent=""
                    ListFooterComponent=""
                  />
            </View>
        </ScrollView>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidMarginTop:{
    marginTop:20
  },
  iosMarginTop:{
    marginTop:0
  }
});