import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

const CategoriesCard = ({ category, onSelect }) => {
    console.log(category)
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: category.strCategoryThumb }}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.strCategory}</Text>
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: "center",
        backgroundColor:"white",
        marginHorizontal:15,
        marginVertical:5,
        borderBottomLeftRadius:50,
        borderTopStartRadius:45,
        borderWidth:1,
        borderColor:"#aec4c7"
    },
    image:{
        width:100,
        height:100,
        resizeMode:"contain",
    }
})
