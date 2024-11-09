import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, PanResponder, Animated } from 'react-native';
import Tag from "@/components/Tag";

interface Company {
    legalName: string;
    url: any;
}

const companies: Company[] = [
    { legalName: 'Google', url: '../assets/images/jobs/google-logo.png' },
    { legalName: 'Oracle', url: '../assets/images/jobs/oracle-logo.png' },
    { legalName: 'Aava', url: '../assets/images/jobs/aava-logo.png' },
];

const dummyAssets = [
    { icon: require('../assets/images/galochka.png'), text: '3 years' },
    { icon: require('../assets/images/location.png'), text: 'California' },
    { icon: require('../assets/images/calendar.png'), text: '1 day ago' },
];

const SwipeableCards: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [position] = useState(new Animated.ValueXY());

    const handleSwipe = (direction: string) => {
        if (direction === 'Left' || direction === 'Right') {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, companies.length - 1));
        }
        Animated.spring(position, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], {
            useNativeDriver: false,
        }),
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx > 100) {
                handleSwipe('Right');
            } else if (gestureState.dx < -100) {
                handleSwipe('Left');
            } else if (gestureState.dy < -100) {
                // Скролл вверх
                Animated.spring(position, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
                // Замените на ScrollView, чтобы поддержать вертикальную прокрутку, если требуется.
            } else {
                Animated.spring(position, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
            }
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {companies.map((person, index) => (
                    index === currentIndex && (
                        <Animated.View
                            key={person.legalName}
                            style={[styles.card, {
                                transform: [
                                    { translateX: position.x },
                                    { translateY: position.y },
                                    { rotate: position.x.interpolate({ inputRange: [-200, 200], outputRange: ['-15deg', '15deg'] }) }
                                ]
                            }]}
                            {...panResponder.panHandlers}
                        >
                            <Image source={{ uri: person.url }} style={styles.userLogo} />
                            <View style={styles.infoBlock}>
                                <View style={styles.mainText}>
                                    <Text style={styles.occupation}>UX/UI Designer</Text>
                                    <Text style={styles.name}>{person.legalName}</Text>
                                </View>
                                <View style={styles.contactInfoContainer}>
                                    {dummyAssets.map((skill, index) => (
                                        <Tag key={index} text={skill.text} type="jobTag" icon={skill.icon} style={{ marginTop: -10 }}/>                                    ))}
                                </View>
                            </View>
                        </Animated.View>
                    )
                ))}
            </View>
            <View style={styles.description}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum malesuada dui...</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardElement: {
    },
    cardContainer: {
        maxWidth: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'height 1s, margin 1s', // не поддерживается в RN, но сохраняется для справки
    },
    expanded: {
        marginVertical: '5%',
        height: '90%',
    },
    card: {
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        backgroundColor: '#e4e6ff',
        color: '#333',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: [{ rotate: '0deg' }], // задаем по умолчанию для анимации
    },
    userLogo: {
        width: '80%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    infoBlock: {

    },
    occupation: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 700,
    },
    mainText: {
        marginBottom: 20,
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 400,
    },
    nameHolder: {

    },
    contactInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 48,
        gap: 3,
    },
    contactInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#f9e9ef',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 18,
        color: '#333',
    },
    contactText: {
        lineHeight: 16,
        fontSize: 16,
    },
    skillIcon: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
    contactIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    skillsElement: {
        width: '100%',
        marginBottom: 20,
    },
    skillsTitle: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 700,
        color: '#333',
        marginBottom: 16,
    },
    skillContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    skillBlock: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
        color: '#333',
        margin: 4,
        lineHeight: 16,
        fontFamily: "Roboto",
        fontSize: 16,
    },
    description: {
        width: '80%',
        color: '#333',
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 20,
        marginTop: 25,
    },
    swipeLeft: {
        transform: [{ translateX: -100 }, { rotate: '-15deg' }],
        opacity: 0.2,
    },
    swipeRight: {
        transform: [{ translateX: 100 }, { rotate: '15deg' }],
        opacity: 0.2,
    },
});

export default SwipeableCards;