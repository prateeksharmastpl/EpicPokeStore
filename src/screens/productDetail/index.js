import React, { useEffect, useCallback, useMemo, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from "../../constants/colors"
import Header from "../../components/header";
import { useRoute } from '@react-navigation/native';
import ChildCard from "../../components/card"
import Button from "../../components/button"
import Quantity from "../../components/quantity"
import Divider from "../../components/divider"
import { CONSTANTS } from "../../constants/urls"
import { LocalString } from "../../constants/constantStrings"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/features/CartSlice';
import { getProductDetailStyle } from './productDetailStyle'

function ProductDetail() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getProductDetailStyle(isDarkMode);

  const [currentItem, setCurrentItem] = useState({});
  const {
    params: { Product },
  } = useRoute();
  const dispatch = useDispatch();
  const { cartData } = useSelector(state => state.cartItems);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.darkPrimaryColor : COLORS.primaryColor,
  };

  const createTypes = (types) => {
    return types.map(typeObj => {
      return (<Text style={styles.subTitleStyle}>{`- ${typeObj.type.name}`}</Text>)
    });
  }

  useEffect(() => {
    const itemChecking = () => {
      const itemAvailable = cartData?.find(value => value.id === Product.id);
      if (itemAvailable) {
        setCurrentItem(itemAvailable);
      } else {
        setCurrentItem({});
      }
    };
    itemChecking();
  }, [cartData]);

  //Add to cart action handled with useCallback hooks
  const handleAddCartClick = useCallback((Product) => e => {
    dispatch(addToCart(Product))
  }, []);

  //Remove item from cart action handled with useCallback hooks
  const handleRemoveCartClick = useCallback((Product) => e => {
    dispatch(removeFromCart(Product.id))
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        title={Product.name}
        showBadge={true}
        isBackButton={true}
        showCart={true}/>
        
      <ScrollView>
        <>
          <ChildCard
            url={`${CONSTANTS.imgBaseUrl}${Product.id}.png`}
            containerStyle={styles.pikaContainer}
            subContainerStyle={styles.subContainerStyle}
            id={Product.id}
            imageStyle={styles.pikaImg}
          />

          <View style={styles.descContainer}>
            <Text style={styles.titleStyle}>{`${Product.name}`}</Text>
            <Divider dividerStyle={styles.dividerStyle} />
            <Text style={styles.titleT2Style}>{LocalString.pokeType}</Text>
            {createTypes(Product.types)}

            <Divider dividerStyle={styles.dividerStyle} />
            <Text style={styles.titleT2Style}>{`${LocalString.height} : ${Product.height} '`}</Text>
            <Text style={styles.priceTextStyle}>{`$${Product.weight}.00`}</Text>
            <View style={styles.bottomViewStyle}>

              {/* The below code to show quantity after adding one product in to the cart, 
              once we remove all the quantity on the Add to Cart button will show*/}
              {currentItem.quantity > 0 ? <Quantity
              showQuantityLable={true}
                onAddPress={handleAddCartClick(Product)}
                onRemovePress={handleRemoveCartClick(Product)}
                quantity={currentItem.quantity}
              />: 
              <Button 
              title={LocalString.addToCart.toUpperCase()}
              onPress={handleAddCartClick(Product)} />}

            </View>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(ProductDetail);
