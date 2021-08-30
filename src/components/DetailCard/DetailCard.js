import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Button, Linking } from 'react-native'

const deviceSize = Dimensions.get('window');

const DetailCard = ({ details }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: details.strMealThumb}}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{details.strMeal}</Text>
                <Text style={styles.area}>{details.strArea}</Text>
            </View>
            <View style={styles.desc}>
                <Text style={styles.text}>{details.strInstructions}</Text>
            </View>
            <View style={styles.link}>
                <Button style={styles.button} title="Watch on Youtube" color="red" onPress={() => {Linking.openURL(details.strYoutube)}} />
            </View>
        </View>
    )
}

export default DetailCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 4,
        resizeMode: 'cover',
    },
    titleContainer: { 
        
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    title: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: '#86112E',
        fontSize: 30,
        fontWeight: 'bold',
    },
    area: {
        marginBottom: 10,
        marginHorizontal: 10,
        color: '#86112E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    desc: {
        margin: 10,
    },
    text: {
        fontSize: 17,
    },
    link: {
        margin: 15,
        borderRadius: 25,
    },
})
