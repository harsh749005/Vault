import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors'
import { useAuth } from '@/lib/ContextAppWrite'


const Setting = () => {
  const {signOut} = useAuth();
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:Colors.mainBg,flex:1}}>
      <Text style={{color:Colors.textPrimary}}>Setting</Text>
      <Pressable onPress={signOut}>
        <Text style={{ color: "white" }}>SignOut</Text>
      </Pressable>
    </View>
  )
}

export default Setting