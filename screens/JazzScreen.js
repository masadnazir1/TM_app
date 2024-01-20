// JazzScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import LoginPopup from '../components/LoginPopup';

const JazzScreen = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLogin = (username, password) => {
    // Implement WebView automatic login logic here for Jazz
    // For demonstration purposes, close the login popup
    setShowLoginPopup(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jazz Screen</Text>
      <WebView
        source={{ uri: 'https://jazz-ccc.mmsdp.com/' }}
        onLoad={() => {
          // Add your WebView onLoad logic here
          // Show login popup if not logged in
          if (!isLoggedIn) {
            setShowLoginPopup(true);
          }
        }}
      />
      {showLoginPopup && <LoginPopup onLogin={handleLogin} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default JazzScreen;
