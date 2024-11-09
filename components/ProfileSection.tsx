import {Collapsible} from "@/components/Collapsible";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ProfileSectionProps {
    title: string;
    content: string;
}

const ProfileSection = ({ title, content }: ProfileSectionProps) => {
    return (
        <View style={styles.container}>
            <Collapsible title={title}>
                <ThemedText>{content}</ThemedText>
            </Collapsible>
            <TouchableOpacity style={styles.editIcon}>
                <Ionicons name="pencil" size={20} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    editIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default ProfileSection;