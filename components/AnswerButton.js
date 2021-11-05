import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import questions from './Questions'
const AnswerButton = () => {

    const answerText = questions.map(answer => {<Button title={answer.answers}/>})
    return (
        {answerText}
    )
}

export default AnswerButton

const styles = StyleSheet.create({})
