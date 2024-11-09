import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet} from "react-native";

interface DummyDialogProps {
    name: string;
    lastMessage: string;
    sentAt: string;
    unreadMessages: number;
}

export function DummyDialog({ name, lastMessage, sentAt, unreadMessages }: DummyDialogProps) {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.avatar} />
            <ThemedView style={styles.textContainer}>
                <ThemedText type="title" style={styles.name}>{name}</ThemedText>
                <ThemedText type="default" style={styles.lastMessage}>{lastMessage}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.rightContainer}>
                <ThemedText type="default" style={styles.sentAt}>{sentAt}</ThemedText>
                {unreadMessages > 0 && (
                    <ThemedView style={styles.unreadIndicator}>
                        <ThemedText type="default">{unreadMessages}</ThemedText>
                    </ThemedView>
                )}
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
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    name: {
        fontSize: 18,
    },
    lastMessage: {
        fontSize: 16,
    },
    textContainer: {
        flex: 1,
    },
    rightContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: '100%',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#8181F5',
        alignSelf: 'center',
        marginTop: 2,
        marginBottom: 2,
    },
    unreadIndicator: {
        backgroundColor: '#F58183',
        borderRadius: 10,
        width: 18,
        height: 18,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sentAt: {
        fontSize: 14,
        color: '#A0A7B1',
    },
});