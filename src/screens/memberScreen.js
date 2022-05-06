import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useNavigation } from '@react-navigation/native';

import ListIndex from "../components/listIndex"
import Colors from "../constant/color"

import data from "../data/listName.json"



const memberScreen = () => {
  const MEMBER2 = data.member;

  const navigation = useNavigation();

  const renderMember = (items) => {
    return (
      <ListIndex
        name={items.item.name}
        lastname={items.item.lastname}
        uid={items.item.uid}
        image={items.item.image}
        onSelectID={() => { navigation.navigate("Personnal", { id: items.item.id }) }}
      />
    );
  };

  return (
    <View style={styles.viewScreen}>
      <Text style={styles.headerFont}>Created by</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={MEMBER2}
        renderItem={renderMember}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewScreen: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headerFont: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.fourColor,
    padding: 5,
    margin: 5,
  },
});

export default memberScreen;