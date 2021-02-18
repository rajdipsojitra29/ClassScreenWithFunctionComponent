// import * as React from 'react';
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import { FunctionComponentThird } from './FunctionComponentThird'


export class ClassScreenWithFunctionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNames:[],
        }
        this.state.dataNames = this.props.dataNames
    }

    onPressGoBack() {
        navigation.goBack()
      }

    render(){
		return (
			<ScrollView>
                <View style={Styles.viewMain}>
                    <Text>ClassScreen With FunctionComponent</Text>
                    <Text>{this.state.dataNames}</Text>
                    {/* <Text>{route.params.dataNames[1]}</Text> */}
                    
                    <Button 
                    title="Go back" 
                        // onPress={() => 
                        // navigation.goBack()
                        // } 
                        onPress={this.onPressGoBack}
                    />

                    <FunctionComponentThird dataObj={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Hari', '2/05/2020', '10:10 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></FunctionComponentThird>
                    <FunctionComponentThird dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></FunctionComponentThird>
                
                </View>
            </ScrollView>
            )
        }
}










const Styles = StyleSheet.create({
    viewMain: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
  });