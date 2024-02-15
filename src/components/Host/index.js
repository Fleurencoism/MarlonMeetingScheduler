import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Host = props => {

    const post =props.post;
    console.log(post);

    const navigation = useNavigation();

    


  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 3}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.email} numberOfLines={1}>{post.store}</Text>
            </View>
         </TouchableOpacity>
    </View>
  );
};

export default Host;