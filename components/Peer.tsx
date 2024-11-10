import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface PeerBlockProps {
    name: string;
    email: string;
}

export default function PeerBlock({ name, email  } : PeerBlockProps) {
    return (
        <View style={styles.peerBlock}>
            <Image
                style={styles.userIcon}
                source={require('../assets/images/Avatar.png')}
            />
            <View>
                <Text style={[styles.h3, {color: 'black', fontWeight: 700}]}>{name}</Text>
                <Text>{email}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>Employee</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    h3: {
        fontSize: 16,
        color: '#8181F5'
    },
    peerBlock: {
        width: 380,
        height: 80,
        display: "flex",
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 18,
        backgroundColor: '#F5F7FA',
        borderRadius: 12
    },
    userIcon: {
        width: 40,
        height: 40,
        marginRight: 16
    },
    button: {
        width: 125,
        height: 40,
        borderRadius: 50,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E6FF',
        marginRight: 0,
        marginLeft: "auto"
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 500
    }
});
