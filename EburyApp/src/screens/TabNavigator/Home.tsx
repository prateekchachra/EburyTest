import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BaseBackgroundScreen } from "../../components/BaseBackgroundScreen";
import { CurrencyCardList } from "../../components/CurrencyCardList";
import Account from "../../assets/icons/Account.svg";
import { useEffect, useRef, useState } from "react";
import { CurrencyItem } from "../../types";
import Config from "react-native-config";

export const Home = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyItem[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/getWallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Config.API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCurrencyData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <BaseBackgroundScreen>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Account height={34} width={34} style={styles.profileIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.descriptionText}>Company Name</Text>
      </View>
      <CurrencyCardList currencyData={currencyData} loading={loading}/>
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
  profileIcon: {
    marginTop: 6,
    marginBottom: 24,
  },
});
