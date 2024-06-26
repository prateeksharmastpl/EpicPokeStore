import React, {useEffect, useCallback, useMemo} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {CONSTANTS} from '../../constants/urls';
import {LocalString} from '../../constants/constantStrings';
import CartCard from '../../components/card/cartCard';
import Header from '../../components/header';
import Button from '../../components/button';
import {getCartStyles} from './cartStyle';
import {COLORS} from '../../constants/colors';
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../../redux/features/CartSlice';
import SVGCart from '../../assets/svg/ic_add_cart.svg';

function Cart() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getCartStyles(isDarkMode);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.darkPrimaryColor : COLORS.primaryColor,
  };
  const {popToTop} = useNavigation();
  const dispatch = useDispatch();
  const {cartData, totalAmount} = useSelector(state => state.cartItems);

  //handled checkout button press with useCallback hooks
  const handleCheckout = useCallback(() => {
    Alert.alert('Order Success', 'Your order placed successfully', [
      {
        text: 'OK',
        onPress: () => {
          dispatch(clearCart());
          popToTop();
        },
      },
    ]);
  }, [dispatch, popToTop]);

  //Add to cart action handled with useCallback hooks
  const handleAddCartClick = useCallback(
    Product => e => {
      dispatch(addToCart(Product));
    },
    [dispatch],
  );

  //Remove item from cart action handled with useCallback hooks
  const handleRemoveCartClick = useCallback(
    Product => e => {
      dispatch(removeFromCart(Product.id));
    },
    [dispatch],
  );

  //handled the CartCard component with useMemo to handle the unwanted rendering
  const renderItem = useMemo(() => {
    return ({item, index}) => {
      return (
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
          onRemovePress={handleRemoveCartClick(item)}
          onAddPress={handleAddCartClick(item)}
        />
      );
    };
  }, [
    handleAddCartClick,
    handleRemoveCartClick,
    styles.pikaContainer,
    styles.pikaImg,
    styles.priceStyle,
    styles.titleStyle,
  ]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Header title={LocalString.cart} showBadge={true} isBackButton={true} />
        <View>
          <View style={styles.topContainer}>
            {cartData.length == 0 ? (
              <View style={styles.emptyCartStyle}>
                <SVGCart width={34} height={34} />
                <Text style={styles.titleStyle}>{LocalString.emptyCart}</Text>
              </View>
            ) : (
              <FlatList
                data={cartData}
                keyExtractor={item => item.id + item.name}
                renderItem={renderItem}
              />
            )}
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.totalTextStyle}>{`${LocalString.total}:`}</Text>
            <Text style={styles.priceStyle}>{`$${totalAmount}.00`}</Text>
            {cartData.length !== 0 && (
              <Button
                onPress={handleCheckout}
                containerStyle={styles.buttonContainerStyle}
                title={LocalString.checkout.toUpperCase()}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Cart);
