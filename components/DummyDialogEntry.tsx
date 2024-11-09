import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet} from "react-native";

export function DummyDialog({ title, lastMessage }: { title: string; lastMessage: string }) {
    return (
        <ThemedView>
            <ThemedText type="title">{title}</ThemedText>
            <ThemedText type="default">{lastMessage}</ThemedText>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
});