import React from 'react';
import {View, Text, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0.0}} />
      <View style={styles.header}>
        <Text style={styles.title}>
          Scheduler
          <Text style={styles.description}>
            {'\n' + '\n'}Scheduler is a cross platform mobile application built
            using React Native.
          </Text>
          <Text style={styles.description}>
            {'\n' + '\n'}It maintains its data using an SQLite database.
          </Text>
          <Text style={styles.description}>
            {'\n' + '\n'}It allows its users to add, view, update, and delete
            meeting schedules.
          </Text>
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable
          style={styles.button}
          onPress={() => console.log('Start Scheduling!')}>
          <Text style={styles.buttonText}>Start Scheduling!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;