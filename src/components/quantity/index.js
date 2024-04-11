
import React from 'react';
import {
    View,
    Text,
    Pressable,
    useColorScheme
} from 'react-native';

import SVGAdd from '../../assets/svg/ic_plus_circle.svg'
import SVGRemove from '../../assets/svg/ic_minus_circle.svg'
import {getQuantityStyles} from './quantityStyle'
import { LocalString } from '../../constants/constantStrings';

function Quantity({
    quantity,
    onAddPress,
    onRemovePress,
    showQuantityLable }) {
        const isDarkMode = useColorScheme() === 'dark';
        const styles = getQuantityStyles(isDarkMode);
    return (
        <>
            <View style={styles.container}>

                {showQuantityLable && <Text style={styles.quantityTitle}>{`${LocalString.quantity}:`}</Text>}
                <Pressable onPress={onRemovePress} style={styles.pressableStyle}>
                    <SVGRemove width={20} height={20} />
                </Pressable>
                <Text style={styles.signStyle}>{quantity}</Text>
                <Pressable onPress={onAddPress} style={styles.pressableStyle}>
                    <SVGAdd width={20} height={20} />
                </Pressable>
            </View>
        </>
    );
}

export default React.memo(Quantity);
