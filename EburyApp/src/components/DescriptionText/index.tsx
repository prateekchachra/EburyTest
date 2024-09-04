import { StyleSheet, Text, TextProps, useColorScheme } from "react-native";
import { getColor } from "../../utils/theme.utils";

type ExtraProps = {
  size?: number;
  color?: string;
};

export const DescriptionText: React.FunctionComponent<
  TextProps & ExtraProps
> = ({ children, size, color }) => (
  <Text
    style={{
      color: color ?? getColor("text", useColorScheme() === "dark"),
      fontSize: size ?? 17,
      fontWeight: "600",
    }}
  >
    {children}
  </Text>
);
