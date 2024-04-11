import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const getHeaderStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: hp('6%'),
      backgroundColor: isDarkMode
        ? COLORS.darkPrimaryColor
        : COLORS.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressableLeftView: {
      position: 'absolute',
      left: 15,
    },
    pressableRightView: {
      position: 'absolute',
      right: 15,
    },
    badgeView: {
      backgroundColor: 'red',
      width: 7,
      height: 7,
      position: 'absolute',
      right: 0,
      borderRadius: 50,
    },
    titleStyle: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: hp('2%'),
      fontWeight: '700',
      textTransform: 'capitalize',
    },
  });
};
