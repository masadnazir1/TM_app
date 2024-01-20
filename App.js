// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ZongScreen from './screens/ZongScreen';
import JazzScreen from './screens/JazzScreen';
import KibanaScreen from './screens/KibanaScreen';
import CustomTabBar from './components/CustomTabBar';

const Tab = createMaterialTopTabNavigator();
r
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Zong"
          component={ZongScreen}
          options={{
            tabBarIcon: require('./assets/icons/zong.png'),
          }}
        />
        <Tab.Screen
          name="Jazz"
          component={JazzScreen}
          options={{
            tabBarIcon: require('./assets/icons/zong.png'),
          }}
        />
        <Tab.Screen
          name="Kibana"
          component={KibanaScreen}
          options={{
            tabBarIcon: require('./assets/icons/zong.png'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
