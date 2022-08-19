import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import Comment from 'react-native-vector-icons/EvilIcons';

const Post = ({username}) => {
  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <View style={styles.postImage} />
            <Text style={styles.postTitle}>{username}</Text>
          </View>
          <Icon name="bars" size={20} />
        </View>
        <View style={styles.postBody} />
        <View style={styles.postFooter}>
          <View style={styles.postFooterTop}>
            <Icon
              style={styles.iconMargin}
              name="hearto"
              size={17}
              color="black"
            />
            <Comment
              style={styles.iconMargin}
              name="comment"
              size={23}
              color="black"
            />
            <IconFeather
              style={styles.iconMargin}
              name="send"
              size={17}
              color="black"
            />
          </View>
          <View style={styles.postFooterBottom}>
            <Text>1.263 beğenme</Text>
            <Text>
              <Text style={styles.username}>{username}</Text> Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    height: 550,
  },
  postHeader: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  postHeaderLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
  },
  postTitle: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  postBody: {
    height: 350,
  },
  postFooter: {
    height: 115,
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  postFooterTop: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 10,
  },
  postFooterBottom: {
    padding: 5,
    marginTop: 5,
  },
  username: {
    fontWeight: 'bold',
  },
});
