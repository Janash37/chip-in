import { View, Text, ScrollView, TextInput, FlatList, Pressable, StyleSheet, Image, Platform } from 'react-native';
import { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  function handleErrandsList() {
    navigation.navigate('Errands List');
  }

  return (
    <View>
      <Header />
      <View style={styles.pageContent}>
        <View style={styles.avatarFlexBox}>
          <Image style={styles.avatar} source={require('../assets/jan-profile-avatar.png')} />
        </View>
        <View style={styles.userDetailsFlexBox}>
          <Text style={{ fontSize: Platform.OS === 'android' ? 35 : 25 }}>jan_the_boatman</Text>
          <Text
            style={{
              fontSize: Platform.OS === 'android' ? 28 : 26,
              color: '#B2B2B2',
            }}
          >
            Gatwick
          </Text>
        </View>
        <View style={styles.bioContainer}>
          <Text
            style={{
              fontSize: Platform.OS === 'android' ? 16 : 14,
              color: '#333333',
            }}
          >
            Hi my name is Jan, I'm pretty good at rowing so I can easily help out with heavy lifting jobs! *Only interested in jobs where I'm allowed to spit.*
          </Text>
        </View>
        <View style={styles.buttonsFlexBox}>
          <Pressable style={styles.myErrandsButton}>
            <Text style={{ marginRight: 10 }}>My Errands</Text>
            <Ionicons name="md-list-outline" size={24} color="black" />
          </Pressable>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Pressable style={{ marginLeft: 140 }}>
              <Ionicons name="cog-outline" size={47} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContent: {
    flexDirection: 'column',
  },
  avatarFlexBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  avatar: {
    position: 'relative',
    borderRadius: 500,
    height: 175,
    width: 175,
  },
  userDetailsFlexBox: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  bioContainer: {
    borderWidth: 0.4,
    borderRadius: 30,
    backgroundColor: '#FFF',
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 10,
  },
  buttonsFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
    marginTop: 120,
  },
  myErrandsButton: {
    backgroundColor: '#47c9af',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: 170,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});
