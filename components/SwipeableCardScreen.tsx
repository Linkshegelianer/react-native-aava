import SwipeableCard from "@/components/SwipableCard";
import {View, StyleSheet} from "react-native";

const companies = [
    { legalName: 'Google', url: '../assets/images/jobs/google-logo.png', vacancyName: "UI/UX Designer", experience: "1 year", location: "Remote", postedTime: "Today" },
    { legalName: 'IBM', url: '../assets/images/jobs/ibm-logo.png', vacancyName: "Product Designer", experience: "3 years", location: "California", postedTime: "Last Week" },
    { legalName: 'Aava', url: '../assets/images/jobs/aava-logo.png', vacancyName: "Senior UX Designer", experience: "5 years", location: "Helsinki", postedTime: "Last Week" },
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