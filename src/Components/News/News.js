import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import NewsEntry from '../NewsEntry/NewsEntry';

const News = () => {
    const newsContentList = [
        {
            id: '1',
            mainTitle: 'We did great last month',
            leadTitle: 'Our team really pushed hard. Check out those graphs!',
            mainImage: 'https://elearningindustry.com/wp-content/uploads/2019/12/serious-games-and-corporate-training-roi.jpg'
        },
        {
            id: '2',
            mainTitle: 'Main event of the year is coming',
            leadTitle: 'Every department will present some brightest ideas on the main corporate gig of the year',
            mainImage: 'https://www.ionos.com/startupguide/fileadmin/StartupGuide/Teaser/corporate-identity-t.jpg'
        }
    ];

    const renderItem = ({ item }) => (
        <NewsEntry
            title={item.mainTitle}
            lead={item.leadTitle}
            image={{
                uri: item.mainImage
            }}
            />     
    )   
                 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Our Latest News</Text>
            <FlatList
                data={newsContentList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 45
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 10
    }
});
