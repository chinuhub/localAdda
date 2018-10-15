
import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, ScrollView,Text,Image, Dimensions } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    //width: 1000,
    //height: 200,
    backgroundColor: 'steelblue'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    width:50,
    borderWidth:5
  },
  cardContainerStyle: {
   width: Dimensions.get('window').width/2,
   height: Dimensions.get('window').height/5
   // width: Dimensions.get('window').width - 100
  },
  cardContainerOverlayStyle:{
    opacity: 0
  }
});
// note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    
export default class App extends Component {
  render() {
    var tviews = [];
    for (var i = 0; i < 20; i++) {
    //tviews.push(<Text  key={i} style={styles.textContainer}>Scroll me plz</Text>);
    tviews.push(<Card style={styles.cardContainerStyle}
    key={i}
      image={{uri:'https://images.unsplash.com/photo-1414521203994-7efc0bc37d65?dpr=1&auto=compress,format&fit=crop&w=150&h=100&q=80&cs=tinysrgb&crop='}}
      overlayStyle={styles.cardContainerOverlayStyle}
      containerStyle={{width: (Dimensions.get('window').width)/2,borderRadius:10}}
      >
      <Text style={{marginBottom: 10}}>
      The Card component is a really useful and functional component that I really like.
      </Text>
      <Button
        icon={{name: 'code'}}
        backgroundColor='#03A9F4'
        //fontFamily='Lato'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card>)
  }
    var scviews = [];
    for (var i = 0; i < 10; i++) {
      scviews.push(<ScrollView key={i} contentContainerStyle={styles.contentContainer} horizontal>{tviews}</ScrollView>);
    }
    return (
      <ScrollView style={{ flexDirection: 'column'}}>
        {scviews}
       </ScrollView>
    );
  }
};


