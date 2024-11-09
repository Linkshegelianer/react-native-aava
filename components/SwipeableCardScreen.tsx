import SwipeableCard from "@/components/SwipableCard";
import {View, StyleSheet} from "react-native";

const superpowerTagsGoogle = [{text: "Adobe XD"}, {text: "Figma"}, {text: "Sketch"}, {text: "Remote-teams"}];
const prioritiesTagsGoogle = [{text: "Remote"}, {text: "Hybrid"}, {text: "Flexible hours"}];

const superpowerTagsIBM = [{text: "Adobe Photoshop"}, {text: "Figma"}, {text: "Sketch"}, {text: "Project Management"}];
const prioritiesTagsIBM = [{text: "On Site"}, {text: "Comfortable Office"}, {text: "Strong Team Spirit"}];

const superpowerTagsAava = [{text: "Jiira"}, {text: "Sketch"}, {text: "Figma"}, {text: "User flow"}, {text: "Research"}, {text: "HTML/CSS"}];
const prioritiesTagsAava = [{text: "Hybrid"}, {text: "Flexible vacations"}, {text: "Strong Team Spirit"}];

const companies = [
    {
        legalName: 'Google',
        url: '../assets/images/jobs/google-logo.png',
        vacancyName: "UI/UX Designer",
        experience: "1 year",
        location: "Remote",
        postedTime: "Today",
        superpowerTags: superpowerTagsGoogle,
        prioritiesTags: prioritiesTagsGoogle
    },
    {
        legalName: 'IBM',
        url: '../assets/images/jobs/ibm-logo.png',
        vacancyName: "Product Designer",
        experience: "3 years",
        location: "California",
        postedTime: "Last Week",
        superpowerTags: superpowerTagsIBM,
        prioritiesTags: prioritiesTagsIBM
    },
    {
        legalName: 'Aava',
        url: '../assets/images/jobs/aava-logo.png',
        vacancyName: "Senior UX Designer",
        experience: "5 years",
        location: "Helsinki",
        postedTime: "Last Week",
        superpowerTags: superpowerTagsAava,
        prioritiesTags: prioritiesTagsAava
    },
];

const SwipeableCardScreen: React.FC = () => {
    return (
        <View style={styles.screenContainer}>
            <SwipeableCard companies={companies}/>
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