import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import data from "../data/listName.json"
import Colors from "../constant/color"

const memberDetail = ({ route }) => {

  const memId = route.params;

  const member = data.member;

  const selectedMember = member.find(
    (mem) => mem.id === memId.id
  );

  return (
    <View style={styles.viewScreen}>
      <View style={styles.center}>
        <Image style={styles.imgStyle} source={{ uri: selectedMember.image }} />
      </View>
      <View style={styles.center}>
        <Text style={styles.headFont}>Nickname: {selectedMember.nickname}{"\n"}</Text>
      </View>
      <View style={styles.detailZone}>
        <Text style={styles.detailFont2}>UID: {selectedMember.uid}{"\n"}</Text>
        <Text style={styles.detailFont2}>Name: {selectedMember.name} {selectedMember.lastname}{"\n"}</Text>
        <Text style={styles.detailFont2}>E-mail: {selectedMember.email}{"\n"}</Text>
        <Text style={styles.detailFont2}>Phone: {selectedMember.phone}{"\n"}</Text>
        <Text style={styles.detailFont2}>Birth: {selectedMember.birth}{"\n"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewScreen: {
    flex: 1,
    backgroundColor: Colors.accentColor,
  },
  imgStyle: {
    width: 350,
    height: 300,
    padding: 15,
    margin: 15,
    borderRadius: 5,
    overflow: 'hidden',
  },
  headFont: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.fourColor,
    padding: 5,
    margin: 5,
  },
  detailZone: {
    marginLeft: 15,
  },
  detailFont: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.fourColor,
  },
  detailFont2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.fourColor,
  },
  background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  center: {
    alignItems: 'center',
  },
});

export default memberDetail;