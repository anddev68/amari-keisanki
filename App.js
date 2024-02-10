import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text, TextInput } from 'react-native-paper';

export default function App() {
  // 割る数
  const [divisor, setDivisor] = useState(23)
  // 割られるかず
  const [dividend, setDividend] = useState("0")

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>割られる数</Text>
      <TextInput
        value={dividend}
        inputMode='numeric'
        onChangeText={(text) => {
          setDividend(text)
        }}
      />

      <Text variant='titleLarge'>割る数</Text>
      <Text>23</Text>
      <RadioButton
        value={23}
        status={divisor === 23 ? "checked": "unchecked"}
        onPress={() => { setDivisor(23) }}
      />
      <Text>46</Text>
      <RadioButton
        value={46}
        status={divisor === 46 ? "checked": "unchecked"}
        onPress={() => { setDivisor(46) }}
      />
      <Text>50</Text>
      <RadioButton
        value={50}
        status={divisor === 50 ? "checked": "unchecked"}
        onPress={() => { setDivisor(50)}}
      />

      <Text variant='titleLarge'>結果</Text>
      <Text>{ Math.floor(Number(dividend) / divisor) } あまり { Number(dividend) % divisor }</Text>
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
