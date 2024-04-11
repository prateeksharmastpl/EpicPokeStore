import React from 'react';
import {Image, Text, View, useColorScheme} from 'react-native';
import Quantity from '../quantity';
import {getCartCardStyles} from './cartCardStyle';

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
  onRemovePress,
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getCartCardStyles(isDarkMode);

  return (
    <View onPress={onPress} style={styles.container} key={id}>
      <Image
        style={imageStyle}
        source={{
          uri: url,
        }}
      />
      <View>
        <Text style={titleStyle}>{title}</Text>
        <Text style={priceStyle}>{`$${price}.00`}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Quantity
          onAddPress={onAddPress}
          onRemovePress={onRemovePress}
          quantity={quantity}
        />
      </View>
    </View>
  );
}
export default CartCard;
