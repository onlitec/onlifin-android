
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao OnliFin!</Text>
      <Button title="Ver Transações" onPress={() => navigation.navigate('Transactions')} />
      <Button title="Gerenciar Contas" onPress={() => navigation.navigate('Accounts')} />
      <Button title="Configurações" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;


