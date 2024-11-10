import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, PanResponder, Animated} from 'react-native';
import Tag from "@/components/Tag";
import TagSection from "@/components/TagSection";

interface Entity {
    legalName: string;
    url: any;
    vacancyName: string;
    experience: string; // For the "red" tag
    location: string;   // For the "green" tag
    postedTime: string; // For the "rose" tag
    superpowerTags: { text: string }[];
    prioritiesTags: { text: string }[];
}

interface SwipeableCardProps {
    entities: Entity[];
    showRating: boolean;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ entities, showRating}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [position] = useState(new Animated.ValueXY());

    const handleSwipe = (direction: string) => {
        if (direction === 'Left' || direction === 'Right') {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, entities.length - 1));
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
            } else {
                Animated.spring(position, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
            }
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {entities.map((company, index) =>
                        index === currentIndex && (
                            <Animated.View
                                key={company.legalName}
                                style={[styles.card, {
                                    transform: [
                                        { translateX: position.x },
                                        { translateY: position.y },
                                        {
                                            rotate: position.x.interpolate({
                                                inputRange: [-200, 200],
                                                outputRange: ['-15deg', '15deg']
                                            })
                                        }
                                    ]
                                }]}
                                {...panResponder.panHandlers}
                            >
                                <Image source={{ uri: company.url }} style={styles.userLogo} />
                                <View style={styles.infoBlock}>
                                    <View style={styles.mainText}>
                                        <Text style={styles.occupation}>{company.vacancyName}</Text>
                                        <Text style={styles.name}>{company.legalName}</Text>
                                        {showRating &&
                                            <Image source={require('@/assets/images/jobs/rating.png')} style={{ marginTop: 5, alignSelf: 'center', transform: [{ scale: 0.8 }] }} />
                                        }
                                    </View>
                                    <View style={styles.contactInfoContainer}>
                                        <Tag key={0} text={company.experience} type="red" icon="clock-o" style={{ marginTop: -10 }} />
                                        <Tag key={1} text={company.location} type="green" icon="map-marker" style={{ marginTop: -10 }} />
                                        <Tag key={2} text={company.postedTime} type="rose" icon="calendar" style={{ marginTop: -10 }} />
                                    </View>
                                </View>
                                <View style={{ gap: 15 }}>
                                    <TagSection text="Superpowers" tags={company.superpowerTags} />
                                    <TagSection text="Priorities" tags={company.prioritiesTags} />
                                </View>
                            </Animated.View>
                        )
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    cardContainer: {
        maxWidth: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        borderRadius: 20,
        backgroundColor: '#e4e6ff',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    userLogo: {
        width: '80%',
        height: 140,
        maxWidth: 195,
    },
    infoBlock: {},
    occupation: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
    },
    mainText: {
        marginBottom: 20,
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
    },
    contactInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 25,
        gap: 3,
    },
});

export default SwipeableCard;