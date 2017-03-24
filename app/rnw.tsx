import * as React from 'react'
import {Component} from 'react'
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native'
import store from './store'

const Card = ({ children}: {children?: any}) => <View style={styles.card}>{children}</View>
const Title = ({ children }: {children?: any}) => <Text style={styles.title}>{children}</Text>

class App extends Component<{}, {}> {
  render() { return (
    <Card>
      <Title>App Card</Title>
      <Text> Teste sdfasdfasdfasdf </Text>
      <TextInput
          accessibilityLabel='Write a status update'
          multiline
          numberOfLines={2}
          placeholder={`What's happening?`}
          style={[styles.default]}
          testID="name"
          value={store.data.name}
          onChangeText={e => store.handleChangeRN({value:e, name:'name'})}
      />
      <Text> Teste sdfasdfasdfasdf </Text>
      <TextInput
          placeholder={`What's happening?`}
          value={store.data.value}
          onChangeText={e => store.handleChangeRN({value:e, name:'value'})}
      />
      <Text> {JSON.stringify(store.data)} </Text>
    </Card>
  )}
}

// Styles
const styles: any = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  },
  //TextInput
  default: {
    borderColor: 'gray',
    borderBottomWidth: 2,
    width: 400
  },
  focused: {
    borderColor: 'blue'
  }
})

// App registration and rendering
AppRegistry.registerComponent('MyApp', (): React.ComponentClass<any> => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('rnw') })
