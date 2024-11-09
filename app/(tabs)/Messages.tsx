import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {DummyDialog} from "@/components/DummyDialogEntry";
import ThemedTextInput from "@/components/ThemedTextInput";

export default function MessagesScreen() {
  return (
      <ParallaxScrollView
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={<Ionicons size={310} name="chatbubble-ellipses-outline" style={styles.headerImage} />}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Messages</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedTextInput placeholder="Search messages" style={styles.searchInput} />
        </ThemedView>
        <ThemedView >
          <DummyDialog title="Conversation 1" lastMessage="Hello, how are you?" />
          <DummyDialog title="Conversation 2" lastMessage="Don't forget our meeting tomorrow." />
          <DummyDialog title="Conversation 3" lastMessage="Can you review this document?" />
          <DummyDialog title="Conversation 4" lastMessage="Thanks for your help!" />
          <DummyDialog title="Conversation 5" lastMessage="Looking forward to the weekend." />
        </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  searchInput: {
    color: '#808080',
  }
});
