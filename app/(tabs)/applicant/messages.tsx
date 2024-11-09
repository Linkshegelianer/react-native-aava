import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {DummyDialog} from "@/components/DummyDialogEntry";
import ThemedTextInput from "@/components/ThemedTextInput";

const dummyData = [
  { title: "Alice", lastMessage: "Пластмассовый мир победил", sentAt: "5min ago", unreadMessages: 1 },
  { title: "Bob", lastMessage: "Макет оказался сильней", sentAt: "5min ago", unreadMessages: 2 },
  { title: "Charlie", lastMessage: "Последний кораблик остыл", sentAt: "5min ago", unreadMessages: 3 },
  { title: "Diana", lastMessage: "Последний фонарик устал", sentAt: "5min ago", unreadMessages: 4 },
  { title: "Eve", lastMessage: "А в горле сопят комья воспоминаний", sentAt: "5min ago", unreadMessages: 5 },
];

export default function MessagesScreen() {
  return (
      <ParallaxScrollView
          headerBackgroundColor={{ light: '#E4E6FF', dark: '#E4E6FF' }}
          headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage} />}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Messages</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedTextInput placeholder="Search message" style={styles.searchInput} />
        </ThemedView>
        <ThemedView >
          {dummyData.map((data, index) => (
              <DummyDialog
                  key={index}
                  name={data.title}
                  lastMessage={data.lastMessage}
                  sentAt={data.sentAt}
                  unreadMessages={data.unreadMessages}
              />
          ))}
        </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#8181F5',
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
