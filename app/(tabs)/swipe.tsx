import React, { useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, PanResponder, Animated } from 'react-native';

interface Person {
    name: string;
    url: string;
}

const data: Person[] = [
    { name: 'Alice', url: 'https://www.lightroompresets.com/cdn/shop/articles/headshot_background_1024x.jpg?v=1653077312' },
    { name: 'Bob', url: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg' },
    { name: 'Kate', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Dg5cr-GGjkZQ7Zd5Av_GXDNsd9d6pS7LQHvcPx_U8iIm74omQTGsdL51eqpUkQHk3aM&usqp=CAU' },
];

const SwipeableCards: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [position] = useState(new Animated.ValueXY());

    const handleSwipe = (direction: string) => {
        if (direction === 'Left' || direction === 'Right') {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
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
                {data.map((person, index) => (
                    index === currentIndex && (
                        <Animated.View
                            key={person.name}
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
                            <View style={styles.nameHolder}>
                                <Text style={styles.nameText}>{person.name}</Text>
                            </View>
                            <View style={styles.contactInfoContainer}>
                                <View style={styles.contactInfo}>
                                    <Text style={styles.contactText}>Google</Text>
                                </View>
                                <View style={styles.contactInfo}>
                                    <Text style={styles.contactText}>Location</Text>
                                </View>
                                <View style={styles.contactInfo}>
                                    <Text style={styles.contactText}>1 day ago</Text>
                                </View>
                            </View>
                            <View style={styles.skillsElement}>
                                <Text style={styles.skillsTitle}>Skills</Text>
                                <View style={styles.skillContainer}>
                                    <Text style={styles.skillBlock}>Figma</Text>
                                    <Text style={styles.skillBlock}>Canva</Text>
                                    <Text style={styles.skillBlock}>Kawabanga</Text>
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
        backgroundColor: '#f0f0f0',
    },
    cardElement: {
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        width: '80%',
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
    nameHolder: {
        width: '100%',
        textAlign: 'center',
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    contactInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9e9ef',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#333',
    },
    contactIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    skillsElement: {
        width: '100%',
        marginTop: 46,
        marginBottom: 20,
    },
    skillsTitle: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    skillContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    skillBlock: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
        color: '#333',
        margin: 4,
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