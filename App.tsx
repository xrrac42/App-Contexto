import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeuComponente = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contexto</Text>
      {/* Outros componentes e conteúdos aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30, // Adicione marginTop para afastar do topo
    // Adicione estilos adicionais conforme necessário
  },
  titulo: {
    color: '#1C1C1C',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    // Outros estilos de título aqui
  },
});

export default SeuComponente;
