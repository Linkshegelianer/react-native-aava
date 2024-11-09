import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

interface TagProps {
    text: string;
    type: "jobTag" | "skillTag";
    icon?: React.ComponentProps<typeof FontAwesome>['name'];
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
            {icon && <FontAwesome name={icon} style={styles.skillIcon} />}
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
        marginRight: 5,
    },
});

export default Tag;