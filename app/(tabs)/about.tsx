import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS APP IS CALLED BLOOP</Text>
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
});
