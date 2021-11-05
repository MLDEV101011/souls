import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import questions from './Questions';
import { Button } from 'react-native-elements';

const QuestionView = () => {
    
    
    return (
      <View>
      </View>
    )
}

export default QuestionView

const styles = StyleSheet.create({
    questionView:
    {
      padding: 10,
      justifyContent: 'center',
      borderBottomColor: '#FFF',
      borderTopColor: '#FFF',
      borderWidth: 2,
      textAlign: 'center',
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 60,
    },
    questionText:
    {
      color: '#fff',
      textAlign: 'center',
      fontSize: 35,
      fontFamily: 'EBGaramond_500Medium',
    },
})
