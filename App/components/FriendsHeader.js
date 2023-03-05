import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const FriendsHeader = (onSearch) => {
  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.greeting} >
          Hello Victoria 👋
        </Text>
        <Text style={styles.header}>
          This is the Home Page
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.searchBar}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Friends"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
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
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchBar: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.pastel_pink,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  }

});

export default FriendsHeader;
