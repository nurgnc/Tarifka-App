import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import useFetch from '../../hooks/useFetch/useFetch';
import {API_MEALS} from '../../common'
import ProductCard from '../../components/ProductCard/ProductCard'

const Products = ({navigation, route}) => {
    const {strCategory} = route.params;
    const { loading, data, error } = useFetch(`${API_MEALS}=${strCategory}`)

    const handleMeals = (idMeal) => {
        navigation.navigate("DetailPage", {idMeal})
    }
    if (loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    const renderMeals = ({item}) =><ProductCard  meals={item} onSelect={() => handleMeals(item.idMeal)} />

    return (
        <View>
            <FlatList 
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={renderMeals}
            />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({})
