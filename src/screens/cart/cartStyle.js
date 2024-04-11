import {
  StyleSheet,
} from "react-native";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const getCartStyles = (isDarkMode) => {
  return StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.dark : Colors.light,
      paddingBottom: Platform.OS === "ios" ? hp("5%") : hp("8%"),
      alignItems: 'center',
      width: wp('100%'),
      height:hp('100%')
    },
    pikaImg: {
      height: wp("15%"),
      width: wp("15%"),
      resizeMode: "contain",
      marginEnd: wp(3),
    },
    pikaContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 8,
      marginVertical: 5,
      width: wp("95%"),
      height: hp("10%"),
      padding: hp(1),
      alignItems: 'center',
    },
    totalTextStyle: {
      textTransform: 'capitalize',
      fontWeight: '500',
      fontSize: hp('1.6%'),
      color:COLORS.primaryTextColor
    },
    titleStyle:{
      textTransform: 'capitalize',
      fontWeight: '500',
      fontSize: hp('1.6%'),
      color:COLORS.primaryTextColor
    },
    priceStyle: {
      color: COLORS.accentColor,
      fontSize: hp('1.9%'),
      marginTop: hp(1),
    },
    buttonContainerStyle: {
      backgroundColor: COLORS.accentColor,
      alignItems: 'center',
      height: hp('5%'),
      width: wp('40%'),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: wp(3.5),
      top: hp(2)
    },
    bottomContainer: {
      height: hp("25%"),
      backgroundColor: COLORS.primaryColor,
      marginTop: hp(2),
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      padding: wp(4),
    },
    topContainer:{
      height:hp("75%"), 
      width:wp('100%'),
      alignItems:'center'
    },
    emptyCartStyle:{
      justifyContent:'center',
      alignItems:'center',
      height:'100%'
    }
  });
} 
