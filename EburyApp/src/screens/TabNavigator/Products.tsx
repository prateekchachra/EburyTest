import { StyleSheet, Text, View } from "react-native";
import { BaseBackgroundScreen } from "../../components/BaseBackgroundScreen";
import { ComingSoon } from "../../components/ComingSoon";

export const Products = () => {
  return (
    <BaseBackgroundScreen>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Products</Text>
      </View>
      <ComingSoon />
    </BaseBackgroundScreen>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    paddingVertical: 48,
    marginHorizontal: 12,
  },
  headerText: {
    fontSize: 34,
    color: "#fff",
  },
  descriptionText: {
    fontSize: 17,
    color: "#fff",
  },
});
