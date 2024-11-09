import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface TagProps {
    text: string;
    type: "jobTag" | "skillTag";
    icon?: string;
    style?: object;
}

const Tag = ({ text, type, icon, style }: TagProps) => {
    const getTagStyle = () => {
        switch (type) {
            case "jobTag":
                return styles.job;
            case "skillTag":
                return styles.skill;
        }
    };

    return (
        <View style={[styles.tag, getTagStyle(), style]}>
            {icon && <Image style={styles.skillIcon} source={{ uri: icon }} />}
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 15,
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
    },
    job: {
        backgroundColor: "#FFFFFF",
        color: "#0D0140",

    },
    skill: {
        backgroundColor: "#E4E6FF",
        color: "#000",
    },
    skillIcon: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
});

export default Tag;