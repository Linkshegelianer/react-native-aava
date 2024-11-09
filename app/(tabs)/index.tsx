import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Navigation() {
    return (
        <>
            <Text style={styles.mainText}>Choose your hero</Text>
            <Image style={styles.sketchImg} source={require('../../assets/images/sketch.png')} alt="sketch"/>
            <View style={styles.buttonBlock}>

                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'rgba(129, 129, 245, 1)'}]}
                    onPress={() => {
                        window.location.href = '/applicant/home';
                    }}
                >
                    <Text style={styles.buttonText}>Applicant</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'rgba(245, 129, 191, 1)'}]}
                    onPress={() => {
                        window.location.href = '/employee/home';
                    }}
                >
                    <Text style={styles.buttonText}>Employee</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'rgba(245, 129, 129, 1)'}]}
                    onPress={() => {
                        window.location.href = '/employer/home';
                    }}
                >
                    <Text style={styles.buttonText}>Employer</Text>
                </TouchableOpacity>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    mainText: {
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 700,
        textAlign: 'left',
        marginTop: 68,
        marginLeft: 16,
        maxWidth: 250
    },
    sketchImg: {
        width: 133,
        height: 133,
        position: 'absolute',
        top: 85,
        left: 110
    },
    buttonBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 175,
        height: 40,
        borderRadius: 50,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'white',
        fontWeight: 500
    }
});