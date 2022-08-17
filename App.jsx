import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import SplashScreen from "./components/SplashScreen";
import AddErrandScreen from "./components/AddErrandScreen";
import MyErrandsScreen from "./components/MyErrandsScreen";
import MyChipInsScreen from "./components/MyChipInsScreen";
import ProfileScreen from "./components/ProfileScreen";
import MapScreen from "./components/MapScreen";
import ProfileSettingsScreen from "./components/ProfileSettingsScreen";
import SingleErrandScreen from "./components/SingleErrandScreen";
import NotificationsScreen from "./components/NotficationsScreen";
import MessageBoard from "./components/MessageBoard";
import MessageSingle from "./components/MessageSingle";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Errand"
          component={AddErrandScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile Settings"
          component={ProfileSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Errands List"
          component={MyErrandsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chip Ins List"
          component={MyChipInsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Single Errand"
          component={SingleErrandScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageBoard"
          component={MessageBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageSingle"
          component={MessageSingle}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
