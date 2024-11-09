import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet, View} from "react-native";
import ProfileSection from "@/components/ProfileSection";
import ProfileSectionEntry from "@/components/ProfileSectionEntry";

const workExperienceData = [
    { header: "UX/UI Designer", content: "Led end-to-end design for a B2B platform, enhancing user flows and interface consistency at Pipapo." },
    { header: "Product Designer", content: "Created wireframes and prototypes for new features, collaborating with developers to ensure a smooth user experience at Company B." },
    { header: "Junior Designer", content: "Designed branding and website visuals, improving the digital presence and" +
            " user engagement at Company C." },
];

export default function ProfileScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E4E6FF', dark: '#E4E6FF' }}
            headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage} />}>
            <ThemedView>
                <ThemedText style={styles.title} type="title">Hello, Orlando!</ThemedText>
            </ThemedView>
            <ProfileSection title="About me" content="I’m a UI/UX designer passionate about creating meaningful, user-centered experiences that seamlessly blend functionality with aesthetics. My approach to design is rooted in empathy, aiming to understand and anticipate users' needs to make digital interactions as intuitive and enjoyable as possible." />
            <ProfileSection title="Work experience" content="">
                {workExperienceData.map((entry, index) => (
                    <View key={index} style={{ marginBottom: 5 }}>
                        <ProfileSectionEntry header={entry.header} content={entry.content} />
                    </View>
                ))}
            </ProfileSection>
            <ThemedText style={styles.titleContainer} type="title">Superpowers</ThemedText>
            <ThemedText style={styles.titleContainer} type="title">Resume</ThemedText>
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
    title: {
        fontSize: 24,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        fontSize: 18,
    },
});
