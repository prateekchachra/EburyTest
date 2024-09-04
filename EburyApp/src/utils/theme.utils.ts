const darkThemeMap = {
  text: "#fff",
  descriptionText: "#EBEBF599",
  mainBackground: "#000",
  cardBackground: "#1C1C1E",
  grey: "#8E8E93",
  theme: "#00BEF0",
};
const lightThemeMap = {
  text: "#000",
  descriptionText: "#3C3C4399",
  mainBackground: "#fff",
  cardBackground: "#fff",
  grey: "#8E8E93",
  theme: "#00BEF0",
};

export const getColor = (type: string, isDarkTheme?: boolean) =>
  isDarkTheme ? darkThemeMap[type] : lightThemeMap[type];
