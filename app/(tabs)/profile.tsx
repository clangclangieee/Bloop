import { Image, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CARMEL ANNE LABANDERO</Text>
      <Image source={require('../../assets/images/huh.gif')} style={styles.gif} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B284BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
     fontSize: 20,
    color: '#fff',
  },
  gif: {
  width: 200,
  height: 200,
  marginTop: 20,
},
});
