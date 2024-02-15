import React, {useState} from 'react';
import { View, Text, TextInput,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const AddHostScreen = props => {

    const navigation = useNavigation();

    const [name,setName] =useState('');
    const [email,setEmail] =useState('');

    const onHostAdd = () => {
        if (!name){
            alert('Please enter a host name.')
            return
        }
        if (!email){
            alert('Please enter a email.')
            return
        }

        try{
            database.addList(name,email);
        } catch (error){
            console.log('Error adding list '+ error);
        }
        
        alert(name + ' Added.');
    }


  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput
                value={name}
                onChangeText={value => setName(value)}
                style={styles.name}
                placeholder={'Enter Full Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.email}
                placeholder={'Enter Email'}
                placeholderTextColor={'grey'}
            />            
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onHostAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddHostScreen;