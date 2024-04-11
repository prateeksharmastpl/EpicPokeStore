import {StyleSheet, Platform} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/colors';

export const getHomeStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      backgroundColor: isDarkMode
        ? COLORS.darkPrimaryColor
        : COLORS.lightPrimaryColor,
      paddingBottom: Platform.OS === 'ios' ? hp('5%') : hp('8%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    pikaImg: {
      height: '60%',
      width: '100%',
      resizeMode: 'contain',
    },
    pikaContainer: {
      backgroundColor: isDarkMode ? Colors.dark : Colors.white,
      alignItems: 'center',
      margin: 5,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      height: hp('40%') / 2,
      width: wp('60%') / 2,
    },
    subContainerStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleStyle: {
      textTransform: 'capitalize',
      marginTop: hp(3),
      fontWeight: '600',
      fontSize: hp('1.4%'),
      color: isDarkMode ? Colors.white : Colors.black,
    },
  });
};
