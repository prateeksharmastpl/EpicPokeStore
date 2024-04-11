import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from "../../constants/colors"

function Button({onPress, title, containerStyle, titleStyle}) {
  return (
      <>
        <Pressable onPress={onPress} style={containerStyle ? containerStyle : styles.container}>
          <Text style={titleStyle ? titleStyle : styles.titleStyle}>{title}</Text>
        </Pressable>
      </>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: COLORS.accentColor,
    alignItems: 'center',
    height: hp('5%'),
    width: wp('40%'),
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  titleStyle:{
    color:COLORS.primaryColor
  }
  
});

export default Button;
