import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { App } from './src/App/native';

export default function Native() {
  return (
    <View style={styles.container}>
      <App />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
