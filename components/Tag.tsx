import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

interface TagProps {
    text: string;
    type: "jobTag" | "skillTag" | "red" | "rose" | "green";
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
            case "red":
                return styles.red;
            case "rose":
                return styles.rose;
            case "green":
                return styles.green;
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
        marginBottom: 2,
    },
    job: {
        backgroundColor: "#FFFFFF",
        color: "#0D0140",
    },
    red: {
        backgroundColor: "#F8EDD8",
        color: "#000",
    },
    green: {
        backgroundColor: "#ECFEE3",
        color: "#000",
    },
    rose: {
        backgroundColor: "#F9E9EF",
        color: "#000",
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