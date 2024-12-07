import React from 'react'
import { View,Dimensions,Text } from 'react-native'

const { width, height } = Dimensions.get("screen");

const NavigationBar = () => {
  return (
    <View style={{
        backgroundColor:'red',
        height:60,
        width:width,
        borderRadius:10
    }}>
     <Text>hhdhd</Text>
    </View>
  )
}

export default NavigationBar