import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: typeof (navigation.state.params) === 'undefined' ||
            typeof (navigation.state.params.title) === 'undefined' ?
            '...' : navigation.state.params.title,

        headerStyle: { backgroundColor: '#26408B' },
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: '#A6CFD5' },
    });

    state = {
        title: '',
        productInfo: {},
        docs: [],
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({
            docs: [... this.state.docs, ...docs],
            productInfo,
            page,
            title: (this.state.docs.length + docs.length) + ' React Products',
        });

        this.props.navigation.setParams({ title: this.state.title });
    }

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    renderItem = ({ item, index }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{index + 1} - {item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity
                style={styles.productButton}
                onPress={() => {
                    this.props.navigation.navigate('Product', { product: item });
                }}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
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

/*

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
        borderColor: '#000',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
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
}
*/