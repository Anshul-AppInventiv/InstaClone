/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {UserData} from '../utils/UserData';
import {vw, vh, SCREEN_WIDTH} from '../utils/dimension';
import React, {useState} from 'react';

const Post = () => {
  const [posts, setPosts] = useState(
    UserData.map(item => ({
      id: item.id,
      liked: false,
      likeCount: item.post.like,
      isSaved: false,
    })),
  );
  const handleLikePress = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
            }
          : post,
      ),
    );
  };

  const handleSavePress = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isSaved: !post.isSaved,
            }
          : post,
      ),
    );
  };

  return (
    <View style={styles.mainContainer}>
      {UserData.map(item => {
        const currentPost = posts.find(post => post.id === item.id);

        return (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.postHeader}>
              <View style={styles.profileContainer}>
                <Image style={styles.profileImg} source={item.profile} />
                <Text style={styles.name}>{item.username}</Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../assets/icon/more.png')}
                  style={styles.moreImg}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Image style={styles.postImg} source={item.post.image} />
            </View>

            <View style={styles.iconContainer}>
              <View
                style={{
                  padding: vw(2),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => handleLikePress(item.id)}>
                  <Image
                    style={styles.likeImg}
                    source={
                      currentPost.liked
                        ? require('../assets/icon/Liked.png')
                        : require('../assets/icon/Like.png')
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.likes}>{currentPost.likeCount}</Text>

                <TouchableOpacity>
                  <Image
                    style={styles.commentImg}
                    source={require('../assets/icon/Comment.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={styles.shareImg}
                    source={require('../assets/icon/share.png')}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => handleSavePress(item.id)}>
                <Image
                  source={
                    currentPost.isSaved
                      ? require('../assets/icon/saved.png')
                      : require('../assets/icon/save.png')
                  }
                  style={styles.saveImg}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.captionContainer}>
              <Text style={styles.nameInCaption}>{item.username} </Text>
              <Text>{item.post.caption}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vh(10),
  },
  itemContainer: {
    marginBottom: vh(16),
  },
  postHeader: {
    paddingVertical:vh(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(10),
    marginBottom: vh(8),
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  profileImg: {
    width: vw(30),
    height: vw(30),
    borderRadius: 50,
    resizeMode: 'cover',
  },
  name: {
    marginLeft: vw(10),
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  moreImg: {
    width: vw(18),
    height: vw(18),
  },
  postImg: {
    height: vh(460),
    width: SCREEN_WIDTH,
    resizeMode: 'cover',
  },
  iconContainer: {
    paddingHorizontal: vw(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(10),
  },
  likeImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  likes: {
    marginLeft: vw(4),
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  commentImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    marginLeft: vw(15),
  },
  shareImg: {
    width: vw(24),
    height: vw(24),
    marginLeft: vw(15),
    resizeMode: 'contain',
  },
  captionContainer: {
    marginTop: vh(10),
    flexDirection: 'row',
    paddingHorizontal: vw(12),
    alignItems: 'center',
  },
  nameInCaption: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  saveImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});

export default Post;
