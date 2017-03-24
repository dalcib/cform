import * as React from 'react'
import {Component} from 'react'
import {StyleSheet, Text, View, TextInput } from 'react-native'
import {observer} from 'mobx-react';
import Store from './store'

const store = new Store()

const Card = ({ children}: {children?: any}) => <View style={styles.card}>{children}</View>
const Title = ({ children }: {children?: any}) => <Text style={styles.title}>{children}</Text>

@observer
class Rnw extends Component<{}, {}> {
  render() { return (
    <Card>
      <Title>App Card</Title>
      <Text>Name </Text>
      <TextInput
          accessibilityLabel='Write a status update'
          placeholder={`What's happening?`}
          style={[styles.default]}
          testID="name"
          value={store.data.name}
          onChangeText={e => store.handleChangeRN({value:e, name:'name'})}
      />
      <Text>E-mail</Text>
      <TextInput
          placeholder={`What's happening?`}
          value={store.data.email}
          onChangeText={e => store.handleChangeRN({value:e, name:'email'})}
      />
      <Text>Value</Text>
      <TextInput
          keyboardType="numeric"
          value={store.data.value.toString()}
          onChangeText={e => store.handleChangeRN({value:e, name:'value'})}
      />
      <Text>Date</Text>
      <TextInput
          placeholder={`What's happening?`}
          value={store.data.date}
          onChangeText={e => store.handleChangeRN({value:e, name:'date'})}
      /> <br /><br />
    {JSON.stringify(store.data)} <br />
    {store.errorsText} <br />
    {store.valid}
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

export default Rnw
