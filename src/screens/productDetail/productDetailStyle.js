import {
    StyleSheet,
} from "react-native";
import { COLORS } from "../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const getProductDetailStyle = (isDarkMode) => {

    return StyleSheet.create({
      pikaImg: {
        height: '100%',
        width: '100%',
        resizeMode: "contain",
      },
      pikaContainer: {
        backgroundColor: COLORS.lightPrimaryColor,
        alignItems: 'center',
        height: hp('40%'),
        width: wp('100%')
      },
      subContainerStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      titleStyle: {
        textTransform: 'capitalize',
        fontWeight: '400',
        marginTop: hp(1),
        fontSize: hp('2.2%')
      },
      priceTextStyle: {
        textTransform: 'capitalize',
        fontWeight: '400',
        marginTop: hp(2),
        fontSize: hp('2.2%'),
        color: COLORS.accentColor
      },
      subTitleStyle: {
        textTransform: 'capitalize',
        marginTop: hp(2),
        fontWeight: '400',
        fontSize: hp('1.8%'),
        color: COLORS.secondaryTextColor
      },
      titleT2Style: {
        marginTop: hp("2%"),
        fontWeight: '400',
        fontSize: hp('1.8%'),
        color: COLORS.primaryTextColor
      },
      dividerStyle: {
        height: 1,
        backgroundColor: COLORS.dividerColor,
        width: wp('90%'),
        marginVertical: 10
      },
      bottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2)
      },
      descContainer:{ 
        height: hp('100%'), 
        padding: 20 
      }
    });
} 
