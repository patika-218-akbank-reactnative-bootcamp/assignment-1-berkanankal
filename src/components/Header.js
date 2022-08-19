import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Stories from './Stories';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logos}>
        <Image
          source={require('../assets/images/insta.png')}
          style={styles.instaLogo}
        />
        <View style={styles.rightLogos}>
          <Icon
            style={styles.iconMargin}
            name="plussquareo"
            size={25}
            color="black"
          />
          <Icon
            style={styles.iconMargin}
            name="hearto"
            size={25}
            color="black"
          />
          <Icon
            style={styles.iconMargin}
            name="message1"
            size={25}
            color="black"
          />
        </View>
      </View>
      <Stories />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f0f0f5',
    height: 150,
    width: '100%',
  },
  instaLogo: {
    width: 100,
    height: 30,
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightLogos: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 15,
  },
});
