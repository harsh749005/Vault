import { Animated, StyleSheet, View } from "react-native";
import data from "@/data/Data";
import RenderItem from "@/components/RenderItem";
import { useRef } from "react";
import Paginator from "@/components/Paginator";

const OnBoadringScreen = () => {
  const onScrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} total={data.length} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: onScrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <Paginator data={data} scrollX={onScrollX} />
    </View>
  );
};

export default OnBoadringScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1916",
  },
});
