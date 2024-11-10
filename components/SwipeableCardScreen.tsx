import SwipeableCard from "@/components/SwipableCard";
import {View, StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

interface Company {
    legalName: string;
    url: any;
    vacancyName: string;
    experience: string; // For the "red" tag
    location: string;   // For the "green" tag
    postedTime: string; // For the "rose" tag
    superpowerTags: { text: string }[];
    prioritiesTags: { text: string }[];
}

const SwipeableCardScreen: React.FC<{ companies: Company[], showRating: boolean }> = ({ companies, showRating }) => {
    return (
        <View style={styles.screenContainer}>
            <SwipeableCard entities={companies} showRating={showRating} />
            <View style={styles.buttonContainer}>
                <View style={[styles.circleButton, { backgroundColor: '#F58183' }]}>
                    <FontAwesome name="times" size={24} color="#fff" />
                </View>
                <View style={[styles.circleButton, { backgroundColor: '#8181F5' }]}>
                    <FontAwesome name="heart" size={24} color="#fff" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    circleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SwipeableCardScreen;