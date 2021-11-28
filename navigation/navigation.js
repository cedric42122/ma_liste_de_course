import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import toBuyList from '../screens/toBuyList'

const StackNavigator = createStackNavigator({
    toBuyList: {
        screen: toBuyList
    }
})


export default createStackNavigator(StackNavigator)