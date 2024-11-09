import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet, View} from "react-native";
import CollapsibleProfileSection from "@/components/CollapsibleProfileSection";
import ProfileSectionEntry from "@/components/ProfileSectionEntry";
import ProfileSection from "@/components/ProfileSection";
import Tag from "@/components/Tag";

const workExperienceData = [
    {
        header: "UX/UI Designer",
        content: "Led end-to-end design for a B2B platform, enhancing user flows and interface consistency at Pipapo.",
        timePeriod: "Jan 2020 - Dec 2021"
    },
    {
        header: "Product Designer",
        content: "Created wireframes and prototypes for new features, collaborating with developers to ensure a smooth user experience at Company B.",
        timePeriod: "Feb 2018 - Dec 2019"
    },
    {
        header: "Junior Designer",
        content: "Designed branding and website visuals, improving the digital presence and user engagement at Company C.",
        timePeriod: "Mar 2016 - Jan 2018"
    },
];

const educationData = [
    {
        header: "Master of Science in Human-Computer Interaction",
        content: "Advanced studies in usability testing, interaction design, and cognitive psychology at Tech University.",
        timePeriod: "Sep 2019 - Jun 2021"
    },
    {
        header: "Bachelor of Arts in Graphic Design",
        content: "Studied visual communication and user experience design at University of Design.",
        timePeriod: "Sep 2014 - Jun 2018"
    },
    {
        header: "Certification in UX Design",
        content: "Completed an intensive course focusing on user research and prototyping at UX Academy.",
        timePeriod: "Jan 2019 - Apr 2019"
    },
];

const skills = ["Adobe XD", "Figma", "Sketch", "Remote-teams", "Problem-solving"];

export default function ProfileScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#E4E6FF', dark: '#E4E6FF'}}
            headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage}/>}>
            <ThemedView>
                <ThemedText style={styles.title} type="title">Hello, Orlando!</ThemedText>
            </ThemedView>
            <ProfileSection title="About me"
                            content="I’m a UI/UX designer passionate about creating meaningful, user-centered experiences that seamlessly blend functionality with aesthetics. My approach to design is rooted in empathy, aiming to understand and anticipate users' needs to make digital interactions as intuitive and enjoyable as possible."/>
            <CollapsibleProfileSection title="Work experience" content="">
                {workExperienceData.map((entry, index) => (
                    <View key={index} style={{marginBottom: 5}}>
                        <ProfileSectionEntry header={entry.header} content={entry.content}
                                             timePeriod={entry.timePeriod}/>
                    </View>
                ))}
            </CollapsibleProfileSection>
            <ProfileSection title="Superpowers">
                <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 5}}>
                    {skills.map((skill, index) => (
                        <Tag key={index} text={skill} type="skillTag"/>
                    ))}
                </View>
            </ProfileSection>
            <CollapsibleProfileSection title="Education" content="">
                {educationData.map((entry, index) => (
                    <View key={index} style={{marginBottom: 5}}>
                        <ProfileSectionEntry header={entry.header} content={entry.content}
                                             timePeriod={entry.timePeriod}/>
                    </View>
                ))}
            </CollapsibleProfileSection>


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
