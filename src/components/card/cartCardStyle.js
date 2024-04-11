import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const getCartCardStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: isDarkMode ? Colors.dark : Colors.white,
      borderRadius: 8,
      marginVertical: 5,
      width: wp('95%'),
      height: hp('10%'),
      padding: hp(1),
      alignItems: 'center',
    },
    quantityContainer: {
      position: 'absolute',
      right: wp(-8),
    },
  });
};
