import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { getJsonPlaceHolderPosts } from './api';

const List = () => {
    const { isLoading, error, data: list } = useQuery('jsonPlaceHolderPostsData', getJsonPlaceHolderPosts)

    return (

        <View style={{ marginTop: 40 }}>
            <Text>Hello World!</Text>
            {
                isLoading && <Text>loading...</Text>
            }
            {
                error && <Text>!error!</Text>
            }
            {
                list && list.map(item => <Text key={item.id} style={{ marginVertical: 8, fontWeight: "bold" }}>{item.title}</Text>)
            }
        </View>

    );
};

export default List;
