import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const InputPalavras = ()=>{
    return <TextInput style = {styles.input}
    placeholder='Digite a palavra'>
        

    </TextInput>
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      fontSize: 16,
      marginBottom: 10,
    },
  });
  
export default InputPalavras;