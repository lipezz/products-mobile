import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const TabNavigator = createStackNavigator({
        Main,
        Product,    
});

export default createAppContainer(TabNavigator);