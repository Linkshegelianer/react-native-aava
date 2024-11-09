import SwipeableCard from "@/components/SwipableCard";
import {View, StyleSheet} from "react-native";

const companies = [
    { legalName: 'Google', url: '../assets/images/jobs/google-logo.png' },
    { legalName: 'Oracle', url: '../assets/images/jobs/oracle-logo.png' },
    { legalName: 'Aava', url: '../assets/images/jobs/aava-logo.png' },
];

const superpowerTags = [{ text: "Adobe XD" }, { text: "Figma" }, { text: "Scetch" }, { text: "Remote-teams" }];

const prioritiesTags = [{ text: "Remote" }, { text: "Hybrid" }, { text: "Flexible hours" }];

const SwipeableCardScreen: React.FC = () => {
    return (
        <View style={styles.screenContainer}>
            <SwipeableCard companies={companies} superpowerTags={superpowerTags} prioritiesTags={prioritiesTags} />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SwipeableCardScreen;