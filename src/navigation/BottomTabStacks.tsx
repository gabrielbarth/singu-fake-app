import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Services } from '../screens/Services';
import { Orders } from '../screens/Orders';
import { MyAccount } from '../screens/MyAccount';
import { Notifications } from '../screens/Notifications';
import { Help } from '../screens/Help';

const TabServicesStack = createStackNavigator();
const TabServicesNavigator = () => {
    return (
        <TabServicesStack.Navigator>
            <TabServicesStack.Screen
                name="Services"
                component={Services}
                options={{ headerShown: false }}
            />
        </TabServicesStack.Navigator>
    );
}

const TabOrdersStack = createStackNavigator();
const TabOrdersNavigator = () => {
    return (
        <TabOrdersStack.Navigator>
            <TabOrdersStack.Screen
                name="Orders"
                component={Orders}
                options={{ headerShown: false }}
            />
        </TabOrdersStack.Navigator>
    );
}

const TabMyAccountStack = createStackNavigator();
const TabMyAccountNavigator = () => {
    return (
        <TabMyAccountStack.Navigator>
            <TabMyAccountStack.Screen
                name="MyAccount"
                component={MyAccount}
                options={{ headerShown: false }}
            />
        </TabMyAccountStack.Navigator>
    );
}

const TabNotificationsStack = createStackNavigator();
const TabNotificationsNavigator = () => {
    return (
        <TabNotificationsStack.Navigator>
            <TabNotificationsStack.Screen
                name="Notifications"
                component={Notifications}
                options={{  headerTitle: 'Notificações' }}
            />
        </TabNotificationsStack.Navigator>
    );
}

const TabHelpStack = createStackNavigator();
const TabHelpNavigator = () => {
    return (
        <TabHelpStack.Navigator>
            <TabHelpStack.Screen
                name="Help"
                component={Help}
                options={{ headerTitle: 'Ajuda' }}
            />
        </TabHelpStack.Navigator>
    );
}

export {
    TabServicesNavigator,
    TabOrdersNavigator,
    TabMyAccountNavigator,
    TabNotificationsNavigator,
    TabHelpNavigator
};