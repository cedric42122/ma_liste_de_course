import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import navigation from "../navigation/navigation";


const HomePage = () => {
    return (
        <View style={ styles.container }>
            <TouchableHighlight onPress={''}>
                <Image 
                    source={require('../assets/menu.png')}
                    style={ styles.menu}
                    >
                </Image>
                </TouchableHighlight>
            <Text style={ styles.title }> MA LISTE DE COURSE </Text>
            <Image 
                source={require('../assets/caddie.png')}
                style={ styles.logo }>  
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'rgb(92, 237, 15)',
    },

    menu : {
        //flexDirection: 'row',
        height: hp('8%'),
        width: wp('5%'),
        margin: 'auto'
    },

    title: {
        marginTop: hp('5%'),
        color: 'white',
        fontFamily: '../assets/fonts/Roboto-Black.ttf',
        fontSize: hp('10%'),
        //flexDirection: 'row',
        textAlign: 'center',
    },

    logo: {
        //flexDirection: 'row',
        alignItems: 'center',
        height: hp('32%'),
        width: wp('20%'),
        margin: 'auto',
    },

    test: {
        opacity: '0.5'
    }

});

export default HomePage;