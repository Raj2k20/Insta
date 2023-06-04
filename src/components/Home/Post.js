import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomTextInput = ({ style, ...props }) => (
    <TextInput
      {...props}
      placeholderTextColor="#fff"
      style={[styles.commentInput, style]}
    />
  );
const Post = ({ post }) => {
    const [didhelike, setDidhelike] = useState(false);
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState(post.comments);
    const handleAddComment = () => {
      if (commentInput.trim() !== '') {
        const newComment = {
          user: 'Sachin', 
          comment: commentInput,
        };
        setComments([...comments, newComment]);
        setCommentInput('');
        Keyboard.dismiss();
      }
    };  
    return (
      <View style={{ marginBottom: 30 }}>
        <Divider width={1} orientation="vertical" />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <PostFooter post={post} liker={setDidhelike} />
        </View>
        <PostLikes post={post} liker={didhelike} />
        <PostCaption post={post} />
        <PostCommentSection post={post} comments={comments} />
        <PostComment post={post} comments={comments} />
        <View style={styles.commentInputContainer}>
          <CustomTextInput
          placeholder="Add a comment..."
          value={commentInput}
          onChangeText={(text) => setCommentInput(text)}
          onSubmitEditing={handleAddComment}
          />
          <TouchableOpacity style={styles.commentButton} onPress={handleAddComment}>
            <Text style={styles.commentButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
const PostHeader = ({ post }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
    </View>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: '99%', height: 450 }}>
    <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }} />
  </View>
);
const PostFooter = ({ post , liker}) => {  
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes);
  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
      liker(false);
    } else {
      setLikesCount(likesCount + 1);
      liker(true);
    }
    setIsLiked(!isLiked);
  };
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', width: '32%', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={handleLike}>
            <Icon
              name={isLiked ? 'heart' : 'heart-outline'}
              size={25}
              color={isLiked ? '#FF0000' : '#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chatbubble-outline" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.shareicon} name="send-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity>
            <Icon name="bookmark-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
const PostLikes = ({ post ,liker }) => {
    console.log(liker);
    return(
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      <Text style={{ color: 'white', fontWeight: '600' }}>{(liker ? post.likes +1 : post.likes).toLocaleString('en')} likes</Text>
    </View>
    );
};
const PostCaption = ({ post }) => (
  <View style={{ flexDirection: 'row', marginTop: 5 }}>
    <Text style={{ color: 'white', flexWrap: 'wrap', flex: 1 }}>
      <Text style={{ fontWeight: '600' }}>{post.user}</Text>
      {` ${post.caption}`}
    </Text>
  </View>
);
const PostCommentSection = ({ post, comments }) => (
    <View style={styles.commentInputContainer}>
      {!!comments.length && (
        <Text style={{ color: 'gray', flexWrap: 'wrap', flex: 1 }}>
          View {comments.length > 1 ? 'all' : ''} {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
  
  const PostComment = ({ post, comments }) => (
    <>
      {comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ color: 'white', flexWrap: 'wrap', flex: 1 }}>
            <Text style={{ fontWeight: '600' }}>{comment.user}</Text> {comment.comment}
          </Text>
        </View>
      ))}
    </>
  );
const styles = StyleSheet.create({
    story: {
    width: 35,
    height: 35,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
    borderRadius: 35,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  shareicon: {
    transform: [{ rotate: '320deg' }],
    marginTop: -3,
  },
    commentInputContainer: {
      flexDirection: 'row',
      marginTop: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
    },
    commentInput: {
      flex: 1,
      height: 40,
      backgroundColor: '#000',
      borderRadius: 20,
      paddingHorizontal: 15,
      color: '#fff',
    },
    commentInputPlaceholder: {
        color: '#fff', 
    },
    commentButton: {
      marginLeft: 10,
    },
    commentButtonText: {
      color: '#007BFF',
      fontWeight: 'bold',
    },
  });
export default Post;
