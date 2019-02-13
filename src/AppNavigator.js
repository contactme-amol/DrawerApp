import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { 
    createDrawerNavigator, 
    createAppContainer, 
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MessageScreen from './tabbarscreens/MessageScreen';
import OrderScreen from './tabbarscreens/OrderScreen';

const TabBarController = createBottomTabNavigator ({
    MessageScreen: MessageScreen,
    OrderScreen: OrderScreen,
})

const TapBarNavigation = createStackNavigator({
    TabBarController :
    TabBarController
 },{
      defaultNavigationOptions:({navigation}) => {
       return {
        headerLeft:(
         <TouchableOpacity style={{
           paddingLeft : 10,
           }} onPress={()=> navigation.openDrawer()}>
           <Text style={{
             fontSize : 20 
           }}>
             Menu
           </Text>
         </TouchableOpacity>
        )
        }
      }
    } )

const StackTapNavigation = createStackNavigator({
    TabStackNavigation :
    HomeScreen
 },{
      defaultNavigationOptions:({navigation}) => {
       return {
        headerLeft:(
         <TouchableOpacity style={{
           paddingLeft : 10,
           }} onPress={()=> navigation.openDrawer()}>
           <Text style={{
             fontSize : 20 
           }}>
             Menu
           </Text>
         </TouchableOpacity>
        )
        }
      }
    } )

    const ProfileNavigation = createStackNavigator({
        ProfileNavigation :
        ProfileScreen
     },{
        defaultNavigationOptions:({navigation}) => {
            return {
             headerLeft:(
              <TouchableOpacity style={{
                paddingLeft : 10,
                }} onPress={()=> navigation.openDrawer()}>
                <Text style={{
                  fontSize : 20 
                }}>
                  Menu
                </Text>
              </TouchableOpacity>
             )
             }
           }
    } )

const DrawerViewController = createDrawerNavigator({
    Home: {screen: StackTapNavigation},
    ProfileScreen: {screen: ProfileNavigation},
    TabBar: {screen: TapBarNavigation}
})

export default AppNavigator = createAppContainer(DrawerViewController);