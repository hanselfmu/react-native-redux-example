/**
 * Created by chan on 12/12/16.
 */
import React, { Component }  from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        paddingBottom: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#666'
    },

    title: {
        fontSize: 20,
        color: '#222'
    }
});

export default Header = function({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}