import * as React from 'react'
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native'

let val = "xx"
const change = (event: any) => console.log(event); // val = event.target.value

// Components
const Card = ({ children}: {children?: any}) => <View style={styles.card}>{children}</View>
const Title = ({ children }: {children?: any}) => <Text style={styles.title}>{children}</Text>
//const Photo = ({ uri }: {uri: string}) => <Image source={{ uri }} style={styles.image} />
const App = () => (
  <Card>
    <Title>App Card</Title>
    <Text> Teste sdfasdfasdfasdf </Text>
    <TextInput
        accessibilityLabel='Write a status update'
        multiline
        numberOfLines={2}
        placeholder={`What's happening?`}
        style={[styles.default]}
        value={val}
        onChange={change}
    />
    <Text> {val} </Text>
  </Card>
)

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
    borderBottomWidth: 2
  },
  focused: {
    borderColor: 'blue'
  }
})

// App registration and rendering
AppRegistry.registerComponent('MyApp', (): React.ComponentClass<any> => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('rnw') })
