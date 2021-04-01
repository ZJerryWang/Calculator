import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

const FunctionButton =(props) => {
    return(
       <TouchableOpacity style={{...style.container, width:props.Buttonwidth}} onPress={() => props.ButtonAction(props.ThisFunction)}>
           <Text style={style.text}>{props.ThisFunction}</Text>
       </TouchableOpacity> 
    )
}

//because the style of text and view components are complex, we are creating a stylee js object for them
const styles = StyleSheet.create({
      container: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:25,
        backgroundColor:'#202020',
        borderWidth:1,
        borderColor:'#000000',
        paddingTo:'25%',
        position:'relative',
      },
       text: {
        fontsize:24,
        color:'#000000',
        position:'absolute',
        textTransform:'uppercase',
        //same as above
      },
    });
    
    export default FunctionButton;
;