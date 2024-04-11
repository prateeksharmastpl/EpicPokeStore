import {
    StyleSheet,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const getCartCardStyles = () => {

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: COLORS.primaryColor,
            borderRadius: 8,
            marginVertical: 5,
            width: wp("95%"),
            height: hp("10%"),
            padding: hp(1),
            alignItems: 'center'
        },
        quantityContainer: {
            position: 'absolute',
            right: wp(-8)
        },
    });
} 
