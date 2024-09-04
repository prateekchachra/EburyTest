import { PropsWithChildren, useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, useColorScheme } from "react-native";
import { getColor } from "../../utils/theme.utils";
const { height } = Dimensions.get("window");

export const DetailBackgroundScreen: React.FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  const containerHeight = useRef(new Animated.Value(height / 2)).current;
  const fadeContent = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(containerHeight, {
        toValue: 0,
        useNativeDriver: true,
        duration: 500,
      }),
      Animated.timing(fadeContent, {
        toValue: 1,
        useNativeDriver: true,
        duration: 500,
      }),
    ]).start();
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: containerHeight }],
          backgroundColor: getColor(
            "mainBackground",
            useColorScheme() === "dark",
          ),
        },
      ]}
    >
      <Animated.View style={{ opacity: fadeContent }}>{children}</Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});
