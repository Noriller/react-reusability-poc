import { Button, Text, View } from 'react-native';
import { useAppLogic } from './logic';

export function App() {
  const { counter, text, handleIncrement, handleDecrement } = useAppLogic('React Native');

  return (
    <View>
      <Text>{text}</Text>
      <View>
        <Button title="-1" onPress={handleDecrement} />
        <Text>{counter}</Text>
        <Button title="+1" onPress={handleIncrement} />
      </View>
    </View>
  );
}