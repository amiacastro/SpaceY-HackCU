import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.greeting} >
          Hello {name} 👋
        </Text>
        <Text style={styles.header}>Upcoming Events</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pastel_darker_blue,
    padding: SIZES.font,
  },
  spacing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchBar: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.background,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  }

});

export default HomeHeader;
