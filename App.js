import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
const Context = React.createContext('default value');
function App() {
  const [state, setstate] = React.useState('swamynathan');
  return (
    <View style={styles.box}>
      <Context.Provider value={state}>
        <Text>hi text hello </Text>
        <Button
          title="Change value"
          onPress={() => {
            setstate('hello swamynathan');
          }}
        />
        <Child />
      </Context.Provider>
    </View>
  );
}

const Child = () => {
  return (
    <View>
      <Context.Consumer>
        {data => <Text>Data is here:{data}</Text>}
      </Context.Consumer>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 250,
  },
});
export default App;
