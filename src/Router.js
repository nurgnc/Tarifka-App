import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Products from './pages/Products/Products'
import Detail from './pages/ProductDetails/Detail'
import Home from './pages/Home/Home'


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="HomePage"
                    component={Home}
                    options={{
                        title: 'Tarifka',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: '#ffa000' }
                    }}
                />
                <Stack.Screen
                    name="ProductsPage"
                    component={Products}
                    options={{
                        title: 'Dükkan',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: '#ffa000' },
                        headerTintColor: '#ffa000',
                    }}
                />
                <Stack.Screen
                    name="DetailPage"
                    component={Detail}
                    options={{
                        title: 'Detay',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: '#ffa000' },
                        headerTintColor: '#ffa000',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;