import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    console.log('Reached Header');
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/images/3.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name="add-circle-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name="heart-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name="chatbubble-ellipses-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    color: 'white',
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    left: -30,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default Header;
