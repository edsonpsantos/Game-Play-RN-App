import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { SignIn } from '../views/SignIn';
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();
  // return <NavigationContainer>{user.id ? <AuthRoutes /> : <SignIn />}</NavigationContainer>;
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
