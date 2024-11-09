import Tag from "@/components/Tag";
import { View, Text, StyleSheet } from "react-native";

interface TagSectionProps {
    text: string;
    tags: { text: string }[];
}

const TagSection = ({ text, tags }: TagSectionProps) => {
    return (
        <View>
            <Text style={styles.boldText}>{text}</Text>
            <View style={styles.tagsContainer}>
                {tags.map((entry, index) => (
                    <Tag key={index} text={entry.text} type="jobTag" />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
    tagsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
});

export default TagSection;