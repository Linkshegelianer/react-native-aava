import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet} from "react-native";

export function DummyDialog({ title, lastMessage }: { title: string; lastMessage: string }) {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.avatar} />
            <ThemedView>
                <ThemedText type="title">{title}</ThemedText>
                <ThemedText type="default">{lastMessage}</ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#8181F5',
    },
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
});