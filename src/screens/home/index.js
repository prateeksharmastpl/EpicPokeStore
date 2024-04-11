import React, { useEffect, useCallback, useMemo } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/features/ProductsSlice';
import { CONSTANTS } from "../../constants/urls"
import { LocalString } from '../../constants/constantStrings'
import ChildCard from "../../components/card"
import Header from "../../components/header"
import { getHomeStyles } from "./homeStyle";
import { COLORS } from "../../constants/colors"

function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getHomeStyles(isDarkMode)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.darkPrimaryColor : COLORS.primaryColor,
  };
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts(30));
  }, [])

  /* useCallback to handle the callback from the ChildCard component
  ** it helps to handle the unwanted rerending 
  */
  const handleCardClick = useCallback((item) => e => {
    navigate('ProductDetail', { Product: item })
  }, []);

  //handled the child card component with useMemo to handle the unwanted rendering
  const renderItem = useMemo(() => {
    return ({ item }) => {
      return (
        <ChildCard
          onPress={handleCardClick(item)}
          url={`${CONSTANTS.imgBaseUrl}${item.id}.png`}
          title={item.name}
          containerStyle={styles.pikaContainer}
          subContainerStyle={styles.subContainerStyle}
          id={item.id + item.name}
          titleStyle={styles.titleStyle}
          imageStyle={styles.pikaImg}
          showTitle={true}
        />
      );
    };
  }, []);

  const handleHeader = useMemo(() => {
      return (
        <Header
        title={LocalString.appName}
        showBadge={true}
        showCart={true} />
      );
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={styles.constainer}>
        {handleHeader}
        <FlatList
          data={products}
          numColumns={3}
          keyExtractor={(item) => item.id + item.name}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Home);
