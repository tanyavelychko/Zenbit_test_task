import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


const NewsEntry = ({title, lead, image}) => {
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <Image style={styles.image} source={image}/>
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{lead}</Text>
         </View>
      </View>
   );
   
}

export default NewsEntry;

const styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       marginBottom: 5
   },
   image: {
      height: 65,
      width: 100
   },
   title: {
      fontWeight: '400',
      fontSize: 20
   },
   textContainer: {
      marginHorizontal: 3,
      maxWidth: 250,
   },
   imageContainer: {
      marginHorizontal: 2,
      marginTop: 6
   }
});
