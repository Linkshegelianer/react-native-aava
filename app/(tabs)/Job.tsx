import {Image, StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedView} from '@/components/ThemedView';
import SwipeableCards from '../../components/SwipableCard';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function JobScreen() {
  return (
      <ParallaxScrollView
          headerBackgroundColor={{ light: '#E4E6FF', dark: '#E4E6FF' }}
          headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage} />}>
        <ThemedView style={styles.stepContainer}>
              <SwipeableCards />
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerImage: {
    color: '#8181F5',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
