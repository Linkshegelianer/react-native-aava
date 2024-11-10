import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedView} from '@/components/ThemedView';
import Ionicons from "@expo/vector-icons/Ionicons";
import SwipeableCardScreen from "@/components/SwipeableCardScreen";

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

const superpowerTagsGoogle = [{text: "Adobe XD"}, {text: "Figma"}, {text: "Sketch"}, {text: "Remote-teams"}];
const prioritiesTagsGoogle = [{text: "Remote"}, {text: "Hybrid"}, {text: "Flexible hours"}];

const superpowerTagsIBM = [{text: "Adobe Photoshop"}, {text: "Figma"}, {text: "Sketch"}, {text: "Project Management"}];
const prioritiesTagsIBM = [{text: "On Site"}, {text: "Comfortable Office"}, {text: "Strong Team Spirit"}];

const superpowerTagsAava = [{text: "Jiira"}, {text: "Sketch"}, {text: "Figma"}, {text: "User flow"}, {text: "Research"}, {text: "HTML/CSS"}];
const prioritiesTagsAava = [{text: "Hybrid"}, {text: "Flexible vacations"}, {text: "Strong Team Spirit"}];

const entities: Entity[] = [
    {
        legalName: 'Max Mustermann',
        url: '../assets/images/employer/dummy-user-example.png',
        vacancyName: "UI/UX Designer",
        experience: "1 year",
        location: "Remote",
        postedTime: "Today",
        superpowerTags: superpowerTagsGoogle,
        prioritiesTags: prioritiesTagsGoogle
    },
    {
        legalName: 'Matti Meikäläinen',
        url: '../assets/images/employer/dummy-user-example.png',
        vacancyName: "Product Designer",
        experience: "3 years",
        location: "California",
        postedTime: "Last Week",
        superpowerTags: superpowerTagsIBM,
        prioritiesTags: prioritiesTagsIBM
    },
    {
        legalName: 'John Doe',
        url: '../assets/images/employer/dummy-user-example.png',
        vacancyName: "Senior UX Designer",
        experience: "5 years",
        location: "Helsinki",
        postedTime: "Last Week",
        superpowerTags: superpowerTagsAava,
        prioritiesTags: prioritiesTagsAava
    },
];

export default function EmployerJobScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E4E6FF', dark: '#E4E6FF' }}
            headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage} />}>
            <ThemedView style={styles.stepContainer}>
                <SwipeableCardScreen companies={entities} showRating={false} />
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    headerImage: {
        color: '#8181F5',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});