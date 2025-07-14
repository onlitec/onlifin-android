
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Transações</Text>
      {/* Aqui serão listadas as transações */}
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

export default TransactionsScreen;


