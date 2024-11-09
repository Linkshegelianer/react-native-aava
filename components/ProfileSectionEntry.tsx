import {StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";

interface ProfileSectionProps {
    header: string;
    content: string;
    timePeriod: string;
}

const ProfileSectionEntry = ({ header, content, timePeriod }: ProfileSectionProps) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <ThemedText style={styles.header} type="title">{header}</ThemedText>
                <ThemedText style={styles.timePeriod}>{timePeriod}</ThemedText>
            </View>
            <View style={styles.separator} />
            <ThemedText style={styles.text}>{content}</ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#D3D3D3',
        marginVertical: 8,
    },
    header: {
        fontSize: 16,
    },
    timePeriod: {
        fontSize: 16,
        color: '#808080',
    },
    text: {
        fontSize: 16,
    }
});

export default ProfileSectionEntry;