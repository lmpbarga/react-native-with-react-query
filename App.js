import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text, View
} from 'react-native';



const App = () => {
  const [list, setList] = useState()

  const getTestAxios = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setList(response.data)
  }

  useEffect(() => { getTestAxios() }, [])

  console.log(list)

  return (
    <View style={{ marginTop: 40 }}>
      <Text>Hello World!</Text>
      {
        !list && <Text>loading...</Text>
      }
      {
        list && list.map(item => <Text style={{ marginVertical: 8, fontWeight: "bold" }}>{item.title}</Text>)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
