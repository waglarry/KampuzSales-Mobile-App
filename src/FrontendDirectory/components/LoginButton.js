import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import  Colors  from "../data/colors";

function LoginButton({onPress}) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.main,
        backgroundColor: Colors.main,
        paddingHorizontal: 10,
        paddingVertical: 14,
        gap: 8,
        marginVertical: 12,
        width: '85%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    }
  });

export default LoginButton;