import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {SafeAreaView} from 'react-native';
import CustomModal from './src/components/customModal';

function App() {
  return (
    <SafeAreaView style={localStyle.container}>
      <HomeScreen />
      <CustomModal />
    </SafeAreaView>
  );
}

const localStyle = {
  container: {
    flex: 1,
  },
};

export default App;
