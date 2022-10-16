import { Button, Text, View } from 'react-native';
import { useCounterLogic } from './logic';

export function Counter() {
  const { counter, text, handleIncrement, handleDecrement } = useCounterLogic('React Native');

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