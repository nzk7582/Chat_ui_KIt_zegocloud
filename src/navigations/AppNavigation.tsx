import { createNativeStackNavigator } from '@react-navigation/native-stack';
// !mark
import { MessageListPage } from '@zegocloud/zimkit-rn';
import LoginPage from '../screens/LoginPage/LoginPage';
import HomePage from '../screens/HomePage/HomePage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="LoginPage" // Specify a page route for the login page.
        component={LoginPage} // Fill in the imported login page.
      />
      <Stack.Screen
        name="HomePage" // Specify a page route for the In-app Chat home page.
        component={HomePage} // Fill in the imported In-app Chat home page.
      />
      <Stack.Screen
        name="MessageListPage" // Specify a page route for the message list page.
        component={MessageListPage} // Fill in the imported message list component.
      />

      {/* Other page info. */}
    </Stack.Navigator>
  );
}
