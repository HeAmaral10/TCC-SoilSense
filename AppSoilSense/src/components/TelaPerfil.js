import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function TelaPerfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    api.get('/usuarios/1')
      .then(response => {
        setUsuario(response.data);
        setCarregando(false);
      })
      .catch(error => {
        console.error('Erro ao buscar perfil:', error);
        setCarregando(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Image source={require('../assets/logo-soilsense.png')} style={styles.logoOverlay} />
      </View>

      {carregando ? (
        <Text style={styles.carregando}>Carregando perfil...</Text>
      ) : usuario ? (
        <View style={styles.card}>
          <Text style={styles.titulo}>Perfil do Usuário</Text>
          <Text style={styles.item}>👤 Nome: {usuario.nome}</Text>
          <Text style={styles.item}>📧 Email: {usuario.email}</Text>
          <Text style={styles.item}>🆔 ID: {usuario.id}</Text>
        </View>
      ) : (
        <Text style={styles.carregando}>Usuário não encontrado.</Text>
      )}

      {/* Menu inferior */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaGraficos')}>
          <Image source={require('../assets/graficos.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaDispositivo')}>
          <Image source={require('../assets/logo-soilsense.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')}>
          <Image source={require('../assets/casa.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPerfil')}>
          <Image source={require('../assets/perfil.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaInfo')}>
          <Image source={require('../assets/info.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#5EC36E', justifyContent: 'center', alignItems: 'center' },
  overlay: { position: 'absolute', top: '40%', left: '50%', transform: [{ translateX: -100 }], opacity: 0.03 },
  logoOverlay: { width: 200, height: 200 },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 20, width: '80%', elevation: 5 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#0A2E36', textAlign: 'center' },
  item: { fontSize: 16, color: '#0A2E36', marginBottom: 10 },
  carregando: { color: '#0A2E36', fontSize: 18, textAlign: 'center' },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0A2E36',
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  menuIcon: { width: 40, height: 40 }
});
