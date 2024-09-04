import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { DetailBackgroundScreen } from "../DetailBackgroundScreen";
import ComingSoonImage from "../../assets/images/ComingSoon.svg";
import { DescriptionText } from "../DescriptionText";
import { getColor } from "../../utils/theme.utils";

export const ComingSoon = () => (
  <DetailBackgroundScreen>
    <View style={styles.container}>
      <ComingSoonImage height={200} width={250} />
      <Text
        style={[
          styles.headerText,
          { color: getColor("text", useColorScheme() === "dark") },
        ]}
      >
        Coming soon
      </Text>
      <DescriptionText
        color={getColor("descriptionText", useColorScheme() === "dark")}
        style={styles.detailText}
      >
        We are currently working in more features to offer the best experience
      </DescriptionText>
    </View>
  </DetailBackgroundScreen>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 64,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "400",
    marginVertical: 6,
  },
  detailText: {
    textAlign: "center",
    fontWeight: "400",
  },
});
