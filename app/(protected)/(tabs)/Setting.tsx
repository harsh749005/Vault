import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors'

type Props = {}

const Setting = (props: Props) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:Colors.mainBg,flex:1}}>
      <Text style={{color:Colors.textPrimary}}>Setting</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})