import {
  ActivityIndicator,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CurrencyCard } from "./CurrencyCard";
import {
  mapDescriptionToCurrency,
  mapIconToCurrency,
} from "../../utils/currency.utils";
import { DetailBackgroundScreen } from "../DetailBackgroundScreen";
import { useCallback, useEffect, useRef, useState } from "react";
import { getColor } from "../../utils/theme.utils";
import { DescriptionText } from "../DescriptionText";
import { CurrencyItem } from "../../types";

type CurrencyCardListProps = {
  currencyData: CurrencyItem[];
  loading?: boolean;
};
export const CurrencyCardList = ({ currencyData, loading }: CurrencyCardListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const viewAllAnimation = useRef(new Animated.Value(0)).current;
  const onViewAllPress = useCallback(() => {
    Animated.timing(viewAllAnimation, {
      toValue: isExpanded ? 0 : -12,
      useNativeDriver: true,
      duration: 800,
    }).start();

    setIsExpanded((prevStata) => !prevStata);
  }, [isExpanded, setIsExpanded, viewAllAnimation]);



  if(loading) 
    return (<ActivityIndicator size="large" style={styles.loaderStyle}/>)
  return (
    <DetailBackgroundScreen>
      <View style={styles.headerRow}>
        <DescriptionText>Your Currencies</DescriptionText>
        <TouchableOpacity onPress={onViewAllPress}>
          <Animated.Text
            style={[
              styles.linkStyle,
              { transform: [{ translateY: viewAllAnimation }] },
            ]}
          >
            View {isExpanded ? "Less" : "All"}
          </Animated.Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {currencyData.map((item, index) => (
          <CurrencyCard
            key={item.account_id}
            amount={item?.amount?.amount}
            currencyTitle={item?.amount?.currency}
            currencyDescription={mapDescriptionToCurrency(
              item?.amount?.currency,
            )}
            icon={mapIconToCurrency(item?.amount?.currency)}
            showCard={!isExpanded && index > 2 ? false : true}
          />
        ))}
      </ScrollView>
    </DetailBackgroundScreen>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  linkStyle: {
    color: getColor("theme"),
    fontSize: 17,
  },
  loaderStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
