import { View, Text, useWindowDimensions, StyleSheet, Button, Pressable } from 'react-native';
import React from 'react';
import { OnboardingData } from '@/data/Data';
import LottieView from 'lottie-react-native';

type Props = {
  item: OnboardingData;
  index: number;
};

const RenderItem = ({ item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const SvgImage = item.SvgImage; // Get SVG component if available

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      {/* Image / Animation Section */}
      <View style={styles.imageContainer}>
        {SvgImage ? (
          <SvgImage width={SCREEN_WIDTH * 0.8} height={SCREEN_WIDTH * 1.4} />
        ) : item.animation ? (
          <LottieView
            source={item.animation}
            style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }}
            autoPlay
            loop
          />
        ) : null}
      </View>

      {/* Text Section */}
      <View style={styles.textWrapper}>
        <Text style={[styles.itemText]}>{item.text}</Text>
        {item.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>
      <View style={{gap:10,marginTop:60}}>

      <Pressable style={{backgroundColor:"white",paddingHorizontal:120,borderRadius:10,paddingVertical:14}}>
        <Text style={{fontWeight:700,fontSize:18}}>Login</Text>
      </Pressable>
      <Pressable style={{backgroundColor:"black",paddingHorizontal:110,borderRadius:10,paddingVertical:14}}>
        <Text style={{fontWeight:700,fontSize:18,color:"white"}}>Sigin Up</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 120,
  },
  textWrapper: {
    marginTop:60,
    // marginBottom: 20, // lifts text upwards
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#fefefe"

  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  imageContainer:{
    backgroundColor:"#0b0a08",
    // width:"auto",
    alignItems:"center",
    height:250,
    width:250,
    justifyContent:"center",
    marginTop:80,
    borderRadius:"50%"
  }
});
