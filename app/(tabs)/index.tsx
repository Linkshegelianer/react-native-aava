import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Collapsible} from "@/components/Collapsible";
import {ExternalLink} from "@/components/ExternalLink";
import {Image, Platform, StyleSheet} from "react-native";
import ProfileSection from "@/components/ProfileSection";

export default function ProfileScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E4E6FF', dark: '#E4E6FF' }}
            headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Hello, Orlando!</ThemedText>
            </ThemedView>
            <ProfileSection title="About me" content="I’m a UI/UX designer passionate about creating meaningful, user-centered experiences that seamlessly blend functionality with aesthetics. My approach to design is rooted in empathy, aiming to understand and anticipate users' needs to make digital interactions as intuitive and enjoyable as possible." />
            <ProfileSection title="Work experience" content="You can open this project on Android, iOS, and the web. To open the web version, press{' '}<ThemedText type='defaultSemiBold'>w</ThemedText> in the terminal running this project." />
            <Collapsible title="Work experience ">
                <ThemedText>
                    You can open this project on Android, iOS, and the web. To open the web version, press{' '}
                    <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
                </ThemedText>
            </Collapsible>
            <ThemedText type="title">Superpowers</ThemedText>
            <ThemedText type="title">Resume</ThemedText>
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
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
