import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./Pages/Main";
import Profile from "./Pages/Profile";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerTintColor: "#FFF",
        headerBackTitleStyle: false,
        headerStyle: { backgroundColor: "#7D40E7" },
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DevRadar" component={Main} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default Routes;
