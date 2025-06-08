import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
    return (
        <ParallaxScrollView headerBackgroundColor={{ light: "", dark: "" }} headerImage={<Image source={require("@/assets/images/Mission Branding_white.png")} style={styles.reactLogo} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">
                    Welcome to Sunstone Garden!
                    <HelloWave />
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Garden Services</ThemedText>
                <ThemedText>Your personal Green Thumb!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 2: Explore</ThemedText>
                <ThemedText>{`Tap the Explore tab to learn more about what's included in this starter app.`}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
                    <ThemedText type="defaultSemiBold">app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: "absolute",
    },
});
