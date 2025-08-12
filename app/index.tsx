import { Animated, StyleSheet, Text, View } from "react-native";
import data from "@/data/Data";
import RenderItem from "@/components/RenderItem";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Animated.FlatList data={data} renderItem={({item,index})=>{
        return <RenderItem item={item} index={index}/>;
      }}
      keyExtractor={item => item.id}
      scrollEventThrottle={16}
      horizontal={true}
      bounces={false}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      />
    </View> 
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1d1916"
  }
})