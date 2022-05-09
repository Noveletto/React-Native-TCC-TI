import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Ir para as Notificações"
      />
      <Text>{'\n'}</Text>
      
      <Button
        title="Ir para o Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Notificação</Text>
      <Button onPress={() => navigation.goBack()} title="Voltar para o Home" />
    </View>
  );
}

function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configuration Screen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Ir para as Notificações"
      />
      <Text>{'\n'}</Text>
      
      <Button
        title="Ir para o Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (

    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Configuration" component={ConfigScreen} />
    </Drawer.Navigator>
  );
}


function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function Registro() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cadastro de Usuário</Text>
    </View>
  );
}

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Login</Text>
      <Button
        title="Cadastro de Usuário"
        onPress={() => navigation.navigate('Registro')}
      />
      <br/>
      <Button
        title="Home"
        onPress={() => navigation.navigate('MainDrawer')}
      />

      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="MainDrawer"
          component={MainDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

