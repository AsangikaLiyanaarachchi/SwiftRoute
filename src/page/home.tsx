import React from 'react'
import {
    View,
    Dimensions,
    StatusBar,
    ImageBackground,
    Text
} from 'react-native'
import NavigationBar from '../component/NavigationBar';
const { width, height } = Dimensions.get("screen");
const homeImage = require("../../assets/images/HomeImage.jpg")

const Home = () => {
    return (
        <View style={{
            height: height,
            flexDirection: 'column',    
        }}>
            <StatusBar barStyle='light-content' backgroundColor={"#000000"} />
            <ImageBackground source={homeImage}
                style={{
                    width: width,
                    height: 310
                }}
            >
                <Text style={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    paddingTop: 20
                }}
                >
                    SwiftRoute
                </Text>
            </ImageBackground>
            <View style={{
                //backgroundColor:'#99958E',
                marginTop: 20,
                marginHorizontal: 20,
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: '#595D67',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',


                }}>

                </View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    Welcome!
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '200',
                }}>
                    asangikanethmini@gmail.com
                </Text>
                <View style={{
                    borderWidth: 0.5,
                    height: 0,
                    marginTop: 10,
                    //flex: 0.4,
                    width: '100%',
                    borderColor: "#595D67"
                }}
                > </View>
               
            </View>
            <NavigationBar />
        </View>
    )
}

export default Home