import React from "react";
import { StyleSheet ,Text, TextInput, View } from "react-native";
import { CustomButton } from "../components/buttons";
import  Colors  from "../data/colors";

function ResetPasswordScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reset Password</Text>
            <View style={styles.inputBox}>
                <Text style={styles.label}>New Passwrod</Text>
                <TextInput 
                    style={styles.textInputBox} 
                    secureTextEntry={true}
                    placeholderTextColor={Colors.secondary}
                    placeholder="*************" 
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.label}>Confirm New Password</Text>
                <TextInput 
                    style={styles.textInputBox} 
                    secureTextEntry={true}
                    placeholderTextColor={Colors.secondary}
                    placeholder="*************" 
                />
            </View>
            <View style={styles.customButton}>
                <CustomButton onPress={() => {
                    alert("Password Saved!")
                    navigation.navigate("Login")
                }} buttonText={"Save new password"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 20,
        letterSpacing: 2,
    },
    inputBox: {
        width: '85%',
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        color: Colors.labelGray,
        fontWeight: '500',
        marginBottom: 6,
    },
    textInputBox: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderGray,
        paddingHorizontal: 10,
        paddingVertical: 14,
        color: Colors.secondary,
        gap: 8,
    },
    customButton: {
        width: '100%',
        paddingHorizontal: 30,
    },
    switchLoginScreenText: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.secondary,
        marginVertical: 12,
    },
    switchLoginScreenLinkText: {
        color: Colors.main,
    },
  });

export default ResetPasswordScreen;