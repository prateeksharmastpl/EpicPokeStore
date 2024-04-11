import React, { useEffect, useCallback, useMemo } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Alert
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { CONSTANTS } from "../../constants/urls"
import { LocalString } from "../../constants/constantStrings"
import CartCard from "../../components/card/cartCard"
import Header from "../../components/header"
import Button from "../../components/button"
import {getCartStyles} from "./cartStyle"
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../../redux/features/CartSlice';
import SVGCart from '../../assets/svg/ic_add_cart.svg'

function Cart() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getCartStyles(isDarkMode)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  const { popToTop } = useNavigation();
  const dispatch = useDispatch();
  const {cartData, totalAmount} = useSelector(state => state.cartItems);

  const handleCheckout = () => {
    Alert.alert('Order Success', 'Your order placed successfully', [
      {text: 'OK', onPress: () => {
        dispatch(clearCart());
        popToTop()}},
    ]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={styles.container}>
        <Header
          title={LocalString.cart}
          showBadge={true}
          isBackButton={true}/>
        <View>
          <View style={styles.topContainer}>
            {cartData.length==0 ? <View style={styles.emptyCartStyle}>
              <SVGCart width={34} height={34}/>
              <Text style={styles.titleStyle}>{LocalString.emptyCart}</Text>
            </View> :
          <FlatList
            data={cartData}
            keyExtractor={(item)=>item.id+item.name}
            renderItem={({ item, index }) =>
              <CartCard
                url={`${CONSTANTS.imgBaseUrl}${item.id}.png`}
                title={item.name}
                containerStyle={styles.pikaContainer}
                id={index}
                imageStyle={styles.pikaImg}
                quantity={item.quantity}
                price={item.weight}
                priceStyle={styles.priceStyle}
                titleStyle={styles.titleStyle}
                onRemovePress={()=>dispatch(removeFromCart(item.id))}
                onAddPress={()=>dispatch(addToCart(item))}
              />}
          />}
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.totalTextStyle}>{`${LocalString.total}:`}</Text>
            <Text style={styles.priceStyle}>{`$${totalAmount}.00`}</Text>
            {cartData.length!==0 && <Button 
            onPress={handleCheckout}
            containerStyle={styles.buttonContainerStyle}
              title={LocalString.checkout.toUpperCase()}/>}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Cart);
