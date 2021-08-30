import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window');

const ProductCard = ({ meals, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={{ borderRadius: 15 }}
                        source={{ uri: meals.strMealThumb }}
                    >
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{meals.strMeal}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa000',
    },
    imageContainer: {
        flex: 1,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    image: {
        width: deviceSize.width / 1.1,
        height: deviceSize.height / 4,
        resizeMode: 'cover',
        flexDirection: "column-reverse"
    },
    titleContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 5,
    }
})
