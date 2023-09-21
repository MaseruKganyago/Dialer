import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const App = () => {
const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <View style={styles.container}>
      <Text>Phone Number Input</Text>

      <PhoneInput
      defaultValue={phoneNumber}
      defaultCode='ZA'
      withShadow
      onChangeFormattedText={text => setPhoneNumber(text)}
      />

      <View style={styles.btnContainer} >
      <TouchableOpacity style={styles.acceptButton} onPress={() => Alert.alert(phoneNumber)} />

      <TouchableOpacity style={styles.rejectButton} onPress={() => Alert.alert("Why?? Araba phone!!")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 30,
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  acceptButton: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#00cc00",
    marginRight: 10
  },
  rejectButton: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#e60000"
  }
});
