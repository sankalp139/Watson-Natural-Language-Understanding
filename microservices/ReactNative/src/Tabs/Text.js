
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Alert,
	FlatList,
	ScrollView,
	TouchableOpacity,
	ListView,
	ActivityIndicator
} from 'react-native';
import { 
	Container, 	 
	Form,
	Label,
	Item,
	Content,
	Body
} from 'native-base';
import Fetch from 'fetch-api';



export default class TextTab extends Component<{}> {
	constructor(props){
	    super(props)

	    this.state = {
	      value: '',
	      dataSource: [],
	      data: '',
	      loading: false,
	      
	    }
    }
	feedAPI(text) {
		//var url = 'https://www.chanson34.hasura-app.io/';
		
			
			var data1 = text;
			const url = 'https://www.chanson34.hasura-app.io/';// url for node-express
			// The data we are going to send in our request
			let data = {
			    value: data1
			}
			// The parameters we are gonna pass to the fetch function
			let fetchData = { 
			    method: 'POST', 
			    body: JSON.stringify(data),
			    headers: new Headers({
    				'Content-Type': 'application/json'
  				})
			}
			// call API and process response or error
			fetch(url, fetchData).catch(error => console.error('Error:', error,'END OF ERROR'))
			.then(response => response.json())
			.then(responseJSON => {
				
				
       			this.setState({
         		
         			data : "The response is as below: \n"+JSON.stringify(responseJSON),
         			loading: true
         			
				})
			}); 
			
		
	}
	
	render() {
		
    	return (// A text-input, button and a resonse from the API.
    		<Container>
    			<Content>
    			<Form>
            		<Item rounded last>
              			<View>
	       					<TextInput
	       						style={styles.textEdit}
	       						editable = {true}
	         					multiline = {true}
	         					numberOfLines = {10}
	         					placeholder = {'Put text here!'}
          						onChangeText={(text1) => this.setState({text1})}
	       					/>
     					</View>
            		</ Item>
            		<Body>
	            		<Button
        						onPress={()=>this.feedAPI(this.state.text1)}
        						title="Analyse!"
        						color="#661548"
      					/>
	            	</ Body>             		
          		</ Form>
          		</ Content>
          		
          		
          		<View ><Text style={styles.response}>{this.state.data}</Text></View>
    		</ Container>
   		);
  	}
}

const styles = StyleSheet.create(
{
	textEdit: {
    	width: 340,
    	
    },
    response: {
    	fontWeight: 'bold',
    	textDecorationStyle: 'solid',
    }
});
