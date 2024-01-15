import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Checkbox from './component/CheckBox'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const handleLogin = async () => {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          console.log('User logged in successfully!');
          // Navigate to the next screen or perform further actions
        } catch (error) {
          console.error('Error logging in:', error.message);
          // Handle the error, e.g., display an error message to the user
        }
      };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>You can reach us anytime via </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.lables}>Enter your Name</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.lables}>Enter your Password</Text>
                <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Checkbox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#4630EB" : undefined}
                />

            </View>
            <View>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree} // Disable the button if the checkbox is not checked
      >
        <Text>Login</Text>
      </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#fff",
    },
    buttonStyle: {

        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontWeight: "bold"
    },
    lables: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,

    },
    description: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: '#f0f0f0',
        color: '#333',
    },
})

export default Login
