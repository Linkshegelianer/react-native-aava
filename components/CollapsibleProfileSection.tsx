import {Collapsible} from "@/components/Collapsible";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import React, {ReactNode} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ProfileSectionProps {
    title: string;
    content: string;
    children?: ReactNode;
}

const CollapsibleProfileSection = ({ title, content, children }: ProfileSectionProps) => {    return (
        <View style={styles.container}>
            <Collapsible title={title}>
                <ThemedText>{content}</ThemedText>
                {children}
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
    separator: {
        height: 1,
        backgroundColor: '#D3D3D3',
        marginVertical: 8,
        },

});

export default CollapsibleProfileSection;