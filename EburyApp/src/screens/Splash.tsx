import { StyleSheet, Animated } from "react-native";
import { BaseBackgroundScreen } from "../components/BaseBackgroundScreen";
import { useEffect, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export const Splash = ({ navigation }: Props) => {
  const splashTextFade = useRef(new Animated.Value(0)).current;
  const splashTextHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(splashTextHeight, {
        toValue: -50,
        useNativeDriver: true,
        duration: 1600,
      }),
      Animated.timing(splashTextFade, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1200,
      }),
    ]).start();
    setTimeout(() => navigation.navigate("Tabs"), 2000);
  }, []);
  return (
    <BaseBackgroundScreen centered>
      <Animated.Text
        style={[
          styles.splashText,
          {
            opacity: splashTextFade,
            transform: [{ translateY: splashTextHeight }],
          },
        ]}
      >
        App Test
      </Animated.Text>
    </BaseBackgroundScreen>
  );
};

const styles = StyleSheet.create({
  splashText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
});
