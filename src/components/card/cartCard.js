import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Quantity from '../quantity';
import { getCartCardStyles } from './cartCardStyle';

function CartCard({
    onPress,
    id,
    url,
    title,
    titleStyle,
    priceStyle,
    imageStyle,
    quantity,
    price,
    onAddPress,
    onRemovePress
}) {
    const styles = getCartCardStyles();

    return (
        <View
            onPress={onPress}
            style={styles.container}
            key={id}>

            <Image
                style={imageStyle}
                source={{
                    uri: url,
                }}
            />
            <View >

                <Text style={titleStyle}>{title}</Text>
                <Text style={priceStyle}>{`$${price}.00`}</Text>
            </View>
            <View style={styles.quantityContainer}>
            <Quantity 
             onAddPress={onAddPress}
            onRemovePress={onRemovePress}
            quantity={quantity}/>
            </View>
            
        </View>
    )
}
export default CartCard;