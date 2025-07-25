
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

export default function TelaPrincipal({ navigation, route }) {
  const { usuarioId } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Ícone de planta central no fundo */}
      <View style={styles.iconBackgroundContainer}>
        <Image
          source={require('../assets/logo-soilsense.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      {/* Botões centrais */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('TelaDispositivo', { usuarioId })}
        >
          <Text style={styles.textoBotao}>Meus dispositivos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('TelaConectar', { usuarioId })}
        >
          <Text style={styles.textoBotao}>Conectar um novo dispositivo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('TelaGraficos', { usuarioId })}
        >
          <Text style={styles.textoBotao}>Dados</Text>
        </TouchableOpacity>
      </View>

      {/* Menu inferior */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaGraficos', { usuarioId })}>
          <Image source={require('../assets/graficos.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaDispositivo', { usuarioId })}>
          <Image source={require('../assets/logo-soilsense.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal', { usuarioId })}>
          <Image source={require('../assets/casa.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPerfil', { usuarioId })}>
          <Image source={require('../assets/perfil.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaInfo', { usuarioId })}>
          <Image source={require('../assets/info.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EC36E',
    position: 'relative',
  },
  iconBackgroundContainer: {
    position: 'absolute',
    top: '35%',
    left: '25%',
    zIndex: 0,
    opacity: 0.15,
  },
  icon: {
    width: 200,
    height: 200,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  botao: {
    backgroundColor: '#4BB79E',
    paddingVertical: 16,
    width: windowWidth * 0.8,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
  },
  textoBotao: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0A2E36',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
});
