import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, useColorScheme, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { DescriptionText } from "../../DescriptionText";
import { getColor } from "../../../utils/theme.utils";

type CurrencyCardProps = {
  icon?: FunctionComponent<SvgProps>;
  currencyTitle: string;
  currencyDescription: string;
  amount: string;
  showCard?: boolean;
};

export const CurrencyCard = ({
  icon: Icon,
  currencyTitle,
  currencyDescription,
  amount,
  showCard,
}: CurrencyCardProps) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const isVisible = useRef(showCard);

  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      toValue: showCard ? 1 : 0,
      useNativeDriver: true,
      duration: 600,
    }).start();
  }, []);

  useEffect(() => {
    if (showCard !== isVisible.current) {
      Animated.timing(fadeInAnimation, {
        toValue: showCard ? 1 : 0,
        useNativeDriver: true,
        duration: 600,
      }).start(() => (isVisible.current = showCard));
    }
  }, [showCard]);

  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {
          backgroundColor: getColor(
            "cardBackground",
            useColorScheme() === "dark",
          ),
          shadowColor: getColor("text", useColorScheme() === "dark"),
          opacity: fadeInAnimation,
        },
      ]}
    >
      <View style={styles.rowStyle}>
        {Icon && <Icon height={30} width={30} style={styles.iconStyle} />}
        <View>
          <DescriptionText>{currencyTitle}</DescriptionText>
          <Text
            style={[
              styles.descriptionText,
              {
                color: getColor("descriptionText", useColorScheme() === "dark"),
              },
            ]}
          >
            {currencyDescription}
          </Text>
        </View>
      </View>
      <Text
        style={[
          styles.amountText,
          { color: getColor("text", useColorScheme() === "dark") },
        ]}
      >
        {amount}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    borderRadius: 6,
    padding: 16,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginRight: 8,
  },
  amountText: {
    fontSize: 20,
    fontWeight: "600",
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "400",
  },
});
