import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../components/Home/Header';
import Post from '../../components/Home/Post';
import { POSTS } from '../../data/post';
const Home = () => {
    console.log('Reached Home'); 
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default Home;
