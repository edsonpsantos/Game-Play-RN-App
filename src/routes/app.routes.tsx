import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../views/Home';
// import { SignIn } from '../views/SignIn';
import { AppointmentDetails } from '../views/AppointmentDetails';
import { AppointmentCreate } from '../views/AppointmentCreate';

const { Screen, Navigator } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      {/* Por padrao a primeira screen será aberta primeiro */}
      {/* <Screen name='SignIn' component={SignIn} /> */}
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentCreate' component={AppointmentCreate} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
    </Navigator>
  );
}
