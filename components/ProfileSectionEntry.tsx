import {StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";

interface ProfileSectionProps {
    header: string;
    content: string;
}

const ProfileSectionEntry = ({ header, content }: ProfileSectionProps) => {
    return (
        <View>
            <ThemedText style={styles.header} type="title">{header}</ThemedText>
            <View style={styles.separator} />
            <ThemedText style={styles.text}>{content}</ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#D3D3D3',
        marginVertical: 8,
    },
    header: {
        fontSize: 16,
    },
    text: {
        fontSize: 16,
    }

});

export default ProfileSectionEntry;