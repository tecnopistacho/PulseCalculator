import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');
  const ageNum: number = Number(age);

  let lower: number = (200 - ageNum) * 0.65;
  let upper: number = (200 - ageNum) * 0.85;

  if (ageNum <= 0 || isNaN(ageNum)) {
    lower = 0;
    upper = 0;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Heart Rate Limits Calculator</Text>
        <Text style={styles.label}>Enter your age:</Text>

        <TextInput
          value={age}
          style={styles.input}
          placeholder='Type your age'
          keyboardType='numeric'
          onChangeText={(text) => setAge(text)}
          returnKeyType='done'
        />

        <Text style={styles.result}>Lower limit: {lower.toFixed(2)} bpm</Text>
        <Text style={styles.result}>Upper limit: {upper.toFixed(2)} bpm</Text>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    width: 200,
    textAlign: 'left',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: 200,
  },
  result: {
    width: 200,
    textAlign: 'left',
    marginTop: 10,
  }
});
