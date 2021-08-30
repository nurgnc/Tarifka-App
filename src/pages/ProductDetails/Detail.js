import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { API_DETAIL } from '../../common'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import DetailCard from '../../components/DetailCard/DetailCard'

const ProductsDetail = ({ route }) => {
    const { idMeal } = route.params;
    const { loading, data, error } = useFetch(`${API_DETAIL}=${idMeal}`)


    const renderDetail = ({item}) => <DetailCard details={item}/>

    console.log(data)
    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={renderDetail}
            />
        </View>
    )
}

export default ProductsDetail

const styles = StyleSheet.create({})
