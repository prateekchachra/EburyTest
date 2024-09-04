import { PropsWithChildren } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import Background from "../../assets/images/background.svg";
import BackgroundDark from "../../assets/images/background-dark.svg";

interface Props {
  centered?: boolean;
}

export const BaseBackgroundScreen: React.FunctionComponent<
  PropsWithChildren<Props>
> = ({ children, centered }) => {
  const BackgroundImage =
    useColorScheme() === "dark" ? BackgroundDark : Background;

  return (
    <View style={[styles.container, centered ? styles.centered : {}]}>
      <BackgroundImage style={StyleSheet.absoluteFill} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});
