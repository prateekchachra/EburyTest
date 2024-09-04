import EUR from "../assets/icons/EUR.svg";
import NOK from "../assets/icons/NOK.svg";
import GBP from "../assets/icons/GBP.svg";
import USD from "../assets/icons/USD.svg";
import { SvgProps } from "react-native-svg";

const descriptionCurrencyMap = {
  USD: "US Dollar",
  GBP: "British Pound",
  EUR: "Euro",
  NOK: "Norwegian Krona",
};
const iconCurrencyMap = {
  USD: USD,
  GBP: GBP,
  EUR: EUR,
  NOK: NOK,
};

export const mapDescriptionToCurrency = (code: string): string =>
  descriptionCurrencyMap[code];
export const mapIconToCurrency = (
  code: string,
): React.FunctionComponent<SvgProps> => iconCurrencyMap[code];
