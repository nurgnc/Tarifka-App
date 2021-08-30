import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { API_CATEGORY } from '../../common'

const Home = ({ navigation }) => {
    const { loading, data, error } = useFetch(`${API_CATEGORY}`)

    const handleCategories = (strCategory) => {
        navigation.navigate("ProductsPage", { strCategory })
    };

    const renderCategories = ({ item }) => (<CategoriesCard category={item} onSelect={() => handleCategories(item.strCategory)} />);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View  style={styles.container}>
            <FlatList
                data={data.categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={renderCategories}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa000',
    }
})
