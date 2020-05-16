import { StyleSheet, Platform, StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 16,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontFamily: "BalooTamma2-Regular",
    fontSize: 30,
    color: "#323332",
  },
  subTitle: {
    fontFamily: "BalooTamma2-Regular",
    fontSize: 25,
    color: "#323332",
    marginBottom: 15,
  },
  listText: {
    fontFamily: "BalooTamma2-Regular",
    fontSize: 20,
    color: "#323332",
  },
  link: {
    fontFamily: "BalooTamma2-Regular",
    fontSize: 20,
    color: "#0000EE",
    marginBottom: 5,
  },
  divider: {
    borderLeftWidth: 1,
    borderLeftColor: "#707070",
    height: 23,
    marginLeft: 14,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    width: 330,
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#323332",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
