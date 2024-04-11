import React from 'react';
import {
    Image,
    Text,
    View,
    Pressable
} from 'react-native';


function Card({
    onPress,
    containerStyle,
    subContainerStyle,
    id,
    url,
    title,
    titleStyle,
    imageStyle,
    showTitle
}) {

    return (
        <Pressable
            onPress={onPress}
            style={containerStyle}
            key={id}>
            <View style={subContainerStyle}>
                <Image
                    style={imageStyle}
                    source={{
                        uri: url,
                    }}
                />
                {showTitle && <Text style={titleStyle}>{title}</Text>}
            </View>
        </Pressable>
    )
}
export default React.memo(Card);