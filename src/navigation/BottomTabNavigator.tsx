
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../constants/theme/styleGuide';
import { EIconPack } from '../constants/enums/EIconPack';

import { Icon } from '../components/Icon';

import {
  TabServicesNavigator,
  TabOrdersNavigator,
  TabMyAccountNavigator,
  TabNotificationsNavigator,
  TabHelpNavigator
} from './BottomTabStacks';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colorScheme = 'light';

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: colors[colorScheme].tint,
        style: { height: 65 }
      }}
    >
      <BottomTab.Screen
        name="Services"
        component={TabServicesNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => <Icon pack={EIconPack.FONT_AWESOME_5} focused={focused} name="shopping-cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={TabOrdersNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => <Icon pack={EIconPack.FONT_AWESOME_5} focused={focused} name="clipboard-list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyAccount"
        component={TabMyAccountNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => <Icon pack={EIconPack.FONT_AWESOME} focused={focused} name="user-circle" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabNotificationsNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => <Icon pack={EIconPack.FONT_AWESOME} focused={focused} name="bell" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={TabHelpNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => <Icon pack={EIconPack.ENTYPO} focused={focused} name="help-with-circle" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export { BottomTabNavigator }; 