import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Product extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.title,
        headerStyle: { backgroundColor: '#26408B' },
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: '#A6CFD5' },
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.productContainer}>
                    <Text style={styles.productDescription}>{this.props.navigation.state.params.product.description}</Text>
                    <TouchableOpacity
                        style={styles.productButton}
                        onPress={ ()=>{} }>
                        <Text style={styles.productButtonText}>{this.props.navigation.state.params.product.url}}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({ //#C2E7D9 #A6CFD5 #26408B #0F084B #0D0221

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    list: {
        padding: 20,
    },

    productContainer: {
        backgroundColor: '#0F084B',
        borderWidth: 1,
        borderColor: '#DDD',        
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },

    productDescription: {
        padding: 20,
        color: "#FFF",
        marginTop: 5,
        lineHeight: 20,
    },

    productButton: {
        height: 50,
        backgroundColor: "#26408B",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 50,
        marginTop: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: "#FFF",
    },

    productButtonText: {
        fontSize: 12,
        color: "#FFF",
        fontWeight: "bold",
    },
});