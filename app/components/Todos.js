import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Todos extends React.Component {
   render() {
      return (
         <View style={styles.container}>
         <Text>This is the Todos Screen </Text>
         </View>
      );
   }
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
   }
})
