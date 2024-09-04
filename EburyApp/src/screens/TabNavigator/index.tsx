import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Home } from "./Home";
import { Products } from "./Products";
import HomeIcon from "../../assets/icons/tabs/HomeIcon.svg";
import StarIcon from "../../assets/icons/tabs/StarIcon.svg";
import { getColor } from "../../utils/theme.utils";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tabContainer}>
                {route.name === "Home" ? (
                  <HomeIcon color={color} />
                ) : (
                  <StarIcon color={color} />
                )}
                <Text style={{ color, fontSize: 11, fontWeight: 600 }}>
                  {route.name}
                </Text>
              </View>
            );
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: getColor("theme", isDarkMode),
          tabBarInactiveTintColor: getColor("grey", isDarkMode),
          tabBarActiveBackgroundColor: getColor("cardBackground", isDarkMode),
          tabBarInactiveBackgroundColor: getColor("cardBackground", isDarkMode),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Products} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    alignItems: "center",
  },
});
