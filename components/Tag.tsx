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
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    text: {
        color: "#fff",
        fontSize: 14,
    },
    job: {
        backgroundColor: "#007bff",
    },
    skill: {
        backgroundColor: "#6c757d",
    },
});

export default Tag;