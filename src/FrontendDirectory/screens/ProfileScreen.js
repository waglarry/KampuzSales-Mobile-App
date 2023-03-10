import React, { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import  Colors  from "../data/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeadTitle from "../components/HeadTitle";
import { auth, firestore } from "../../BackendDirectory/config";

function ProfileScreen() {

      const [userData, setuserData] = useState('');

      useEffect(() => {
        firestore.collection('users').doc(auth.currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setuserData(snapshot.data())
            }
        })
    }, [])

    return (
        <View style={styles.container}>
            <SafeAreaView>
              <HeadTitle title={"Profile"} />
            <View style={styles.profileDetails}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-white-blue-png-image_3918443.jpg"}} />
              </View>
              <View style={styles.details}>
                <Text style={styles.userName}>{userData.username}</Text>
                <Text style={styles.phoneNumber}>{userData.phoneNumber}</Text>
                <Text style={styles.dateJoined}>Member Since: June 2023</Text>
              </View>
            </View>
            <Pressable onPress={() => alert('Friend Invited!')}>
              <View style={styles.inviteFriends}>
                <Ionicons style={styles.icon} name="ios-person-add-outline" size={24} color={Colors.main} />
                <Text>Invite Friends</Text>
              </View>
            </Pressable>
            <View style={styles.options}>
              <Pressable>
                <View style={styles.optionsTab}>
                  <Ionicons style={styles.icon} name="ios-settings-outline" size={24} color={Colors.main} />
                  <Text>Settings</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.optionsTab}>
                  <MaterialCommunityIcons style={styles.icon} name="message-bookmark-outline" size={24} color={Colors.main} />
                  <Text>About KampuzSales</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.optionsTab}>
                  <Ionicons style={styles.icon} name="ios-help-circle-outline" size={24} color={Colors.main} />
                  <Text>Help & Complaint</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.optionsTab}>
                  <MaterialCommunityIcons style={styles.icon} name="head-question-outline" size={24} color={Colors.main} />
                  <Text>FAQ</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.optionsTab}>
                  <AntDesign style={styles.icon} name="deleteuser" size={24} color={Colors.main} />
                  <Text>Delete Account</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.optionsTab}>
                  <MaterialCommunityIcons style={styles.icon} name="logout" size={24} color={Colors.main} />
                  <TouchableOpacity onPress={() => {auth.signOut()}}>
                    <Text>Logout</Text>
                  </TouchableOpacity>
                </View>
              </Pressable>
            </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    profileDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Colors.borderGray,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 10,
    },
    imageContainer: {
      borderRadius: 100,
      width: 120,
      height: 120,
      maxWidth: '100%',
      maxHeight: '100%'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      width: '60%'
    },
    userName: {
      color: Colors.black,
      fontSize: 24.6822,
      fontWeight: '400',
      marginBottom: 2,
    },
    phoneNumber: {
      color: Colors.black,
      fontSize: 14.8094,
      fontWeight: '400',
      marginBottom: 2,
    },
    dateJoined: {
      color: Colors.black,
      fontSize: 14.8094,
      fontWeight: '400',
    },
    inviteFriends: {
      flexDirection: 'row',
      backgroundColor: Colors.borderGray,
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginTop: 20,
    },
    icon: {
      marginRight: 30
    },
    options: {
      flexDirection: 'column',
      backgroundColor: Colors.borderGray,
      marginTop: 20,
      paddingTop: 20,
      height: '100%',
    },
    optionsTab: {
      flexDirection: 'row',
      backgroundColor: Colors.borderGray,
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 10,
    }
  });

export default ProfileScreen;