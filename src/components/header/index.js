import React,{useCallback} from 'react';
import {
    Text,
    View,
    Pressable,
    useColorScheme
} from 'react-native';
import SVGBack from '../../assets/svg/ic_back.svg'
import SVGCart from '../../assets/svg/ic_add_cart.svg'
import {getHeaderStyles} from "./headerStyle";
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Header({
    title,
    isBackButton,
    showCart
}) {
    const { goBack, navigate } = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    const styles = getHeaderStyles(isDarkMode)
    const { cartData } = useSelector(state => state.cartItems);

    const handleCartClick = useCallback(()=> {
        navigate('Cart')
    }, []);

    const handleBackClick = useCallback(()=> {
        goBack()
    }, []);

    return (
        <View style={styles.container}>
            {isBackButton && <Pressable onPress={handleBackClick} style={styles.pressableLeftView}>
                <SVGBack width={22} height={22} fill={COLORS.accentColor}/> 
            </Pressable>}

            <Text style={styles.titleStyle}>{title}</Text>

            {showCart && <Pressable onPress={handleCartClick} style={styles.pressableRightView}>
                <SVGCart width={24} height={24} /> 
                {cartData && cartData.length>0 && <View style={styles.badgeView}></View>}
            </Pressable>}
          
        </View>
    )
}
export default React.memo(Header);