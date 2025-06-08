import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '', dark: '' }}
      headerImage={<Image source={require("@/assets/images/AppIcon.png")} style={{ width: "100%", height: "auto" }} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Sunstone Garden
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );

  function headerColor() {
        const theme = useColorScheme() ?? "dark";
        return `Colors.${theme}.background`;
  }
}


const styles = StyleSheet.create({
  headerImage: {
    // color: headerColor(),
    color: "#000",
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
