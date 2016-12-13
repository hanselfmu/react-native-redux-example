/**
 * Created by chan on 12/12/16.
 */
import React, { Component }  from 'react';

import { Button, View, Text, StyleSheet } from 'react-native';

const defaultStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between'
};

export default class MultiSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: {}
        };

        const optionalStyle = props.style || {};
        this.combinedStyle = StyleSheet.create({
            container: {
                ...defaultStyle,
                ...optionalStyle
            }
        });
    }

    onPress(option) {
        this.setState({
            selected: option
        });
    }

    render() {
        const options = this.props.options;
        const selected = this.state.selected;

        return (
            <View style={this.combinedStyle.container}>
                {options.map(option => (
                    <Button
                        title={option.text}
                        onPress={() => {this.onPress(option)}}
                        key={option.value}
                        color={option.value === selected.value ? '#00BCD4' : '#999999'}
                    />
                ))}
            </View>
        )
    }
}