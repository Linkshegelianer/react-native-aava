import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet, View, Text, Image, } from "react-native";
import ThemedTextInput from "@/components/ThemedTextInput";
import React from "react";
import PeerBlock from "@/components/Peer";

export default function EventsScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#E4E6FF', dark: '#E4E6FF'}}
            headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage}/>}
        >
            <View>
                <View style={styles.headerBlock}>
                    <h1>My dashboard</h1>
                    <View style={styles.iconBlock}>
                        <Image
                            style={ {width: 60, height: 50}}
                            source={require('../../../assets/images/calendar2.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/images/bell.png')}
                        />
                    </View>
                </View>
                <ThemedView>
                    <ThemedTextInput placeholder="Search for something" style={styles.searchInput} />
                </ThemedView>
            </View>
            <View>
                <h2>My month shifts</h2>
                <Image
                    style={styles.calendar}
                    source={require('../../../assets/images/Calendar_big.png')}
                />
            </View>
            <View style={styles.headerBlock}>
                <h2>Contact team members</h2>
                <Text style={styles.h3}>See all</Text>
            </View>
            <PeerBlock
                name = 'Alice Cooper'
                email= 'acooper@gmail.com'
            />
            <PeerBlock
                name = 'Alex Menendez'
                email= 'amenendez@gmail.com'
            />
            <PeerBlock
                name = 'Ashley Olsen'
                email= 'aolsen@gmail.com'
            />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#8181F5',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    headerBlock: {
        width: "100%",
        margin: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    h1: {
        fontSize: 24,
        color: 'black',
        fontWeight: 700,
        display: "flex"
    },
    iconBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    icon: {
        width: 25,
        height: 30,
        aspectRatio: 1,
        marginLeft: 10
    },
    searchInput: {
        color: '#808080',
    },
    h2: {
        fontSize: 18,
        fontWeight: 600
    },
    calendar: {
        width: '100%',
        aspectRatio: 1,
        height: '80%',
        borderRadius: 10
    },
    h3: {
        fontSize: 16,
        color: '#8181F5'
    }
});
