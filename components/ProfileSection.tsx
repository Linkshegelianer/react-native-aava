import {StyleSheet, TouchableOpacity, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {ReactNode} from "react";

interface ProfileSectionProps {
    title: string;
    content?: string;
    children?: ReactNode;
}

const ProfileSection = ({ title, content, children }: ProfileSectionProps) => {
    return (
        <View style={styles.container}>
            <ThemedText style={[styles.title, { marginBottom: 5 }]}>{title}</ThemedText>
            <ThemedText>{content}</ThemedText>
            {children}
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
    title: {
        fontWeight: 'bold',
    },
    editIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    separator: {
        height: 1,
        backgroundColor: '#D3D3D3',
        marginVertical: 8,
    },

});

export default ProfileSection;