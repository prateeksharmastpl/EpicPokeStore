import {
  StyleSheet,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from "../../constants/colors"

export const getQuantityStyles = (isDarkMode) => {

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
      color: isDarkMode ? COLORS.primaryColor : COLORS.darkPrimaryColor,
    },
    pressableStyle: {
      padding: 5,
    },
    signStyle: {
      fontSize: hp(2),
      marginHorizontal: wp(2),
      color: isDarkMode ? COLORS.primaryColor : COLORS.darkPrimaryColor,
    },
    quantityTitle: {
      fontWeight: '400',
      fontSize: hp('1.8%'),
      marginEnd: wp(2),
      color:  isDarkMode ? COLORS.primaryColor : COLORS.darkPrimaryColor,
    },
  });
} 
