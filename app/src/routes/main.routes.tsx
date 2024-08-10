import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home';
import { BegginScreen } from '../core/beggin';
import { LoginScreen } from '../core/login';
import { useAuthContext } from '../shared/context/auth-context';


interface AppStackNavigatorProps {
	link?: boolean;
}

const Stack = createStackNavigator();

const AppStackNavigator = ({ link }: AppStackNavigatorProps) => {
	const { authState } = useAuthContext();
	return (
		<Stack.Navigator
			detachInactiveScreens
			initialRouteName={authState?.value.authenticated ? 'Home' : 'Beggin'}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Beggin"
				component={BegginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppStackNavigator;
