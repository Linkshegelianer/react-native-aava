import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TagProps {
    text: string;
    type: "jobTab" | "skillTag" ;
}

const Tag = ({ text, type }: TagProps) => {
    const getTagStyle = () => {
        switch (type) {
            case "jobTab":
                return styles.job;
            case "skillTag":
                return styles.skill;
        }
    };

    return (
        <View style={[styles.tag, getTagStyle()]}>
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
    },
    text: {
        fontSize: 14,
    },
    job: {
        backgroundColor: "#E4E6FF",
    },
    skill: {
        backgroundColor: "#E4E6FF",
        color: "#000",
    },
});

export default Tag;