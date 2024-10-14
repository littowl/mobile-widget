import { Image, StyleSheet, Platform, NativeModules, ToastAndroid, SafeAreaView, View, Text, TextInput, Button } from 'react-native';
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { styles } from './index.styles'

const SharedStorage = NativeModules.SharedStorage;

export default function HomeScreen() {
  const [text, setText] = useState('');
  const widgetData = {
    text,
  };

  const handleSubmit = async () => {
    const value = `${text} days`;
    // Android
    SharedStorage.set(JSON.stringify({text: value}));
    ToastAndroid.show('Change value successfully!', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={100}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.heading}>Change Widget Value</Text>
          <View style={styles.bodyContainer}>

            <TextInput
              style={styles.input}
              onChangeText={newText => setText(newText)}
              value={text}
              placeholder="Enter the text to display..."
            />

            <Button
              title="Submit"
              onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}
