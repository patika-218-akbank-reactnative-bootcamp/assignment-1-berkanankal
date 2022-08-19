import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <View style={styles.story} />
      <View style={styles.story} />
      <View style={styles.story} />
      <View style={styles.story} />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  story: {
    width: 70,
    height: 70,
    marginLeft: 25,
    borderRadius: 70,
    borderWidth: 2,
  },
});
