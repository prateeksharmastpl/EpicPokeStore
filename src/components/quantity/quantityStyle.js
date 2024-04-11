import {
  StyleSheet,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from "../../constants/colors"

export const getQuantityStyles = () => {

  return StyleSheet.create({
    container: {
      borderColor: COLORS.accentColor,
      alignItems: 'center',
      height: hp('5%'),
      width: wp('30%'),
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginEnd: wp(8)
    },
    titleStyle: {
      color: COLORS.primaryColor
    },
    pressableStyle: {
      padding: 5,
    },
    signStyle: {
      fontSize: hp(2),
      marginHorizontal: wp(2),
      color: COLORS.primaryTextColor
    },
    quantityTitle: {
      fontWeight: '400',
      fontSize: hp('1.8%'),
      marginEnd: wp(2),
      color: COLORS.primaryTextColor
    },
  });
} 
