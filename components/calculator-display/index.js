import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const CalculatorDisplay =(props) => {
    return(
       <View style={style.container}>
           <Text syle={style.text}>{props.Numbers.length===0 ? 0 : props.Numbers}</Text>
       </View> 
    )
}

//because the style of text and view components are complex, we are creating a stylee js object for them
const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems:'flex-end',
        justifycontent: 'center',
      },
       text: {
        fontsize:36,
        color:'#FFFFFf'
        //same as above
      },
    });
    
    export default  CalculatorDisplay;