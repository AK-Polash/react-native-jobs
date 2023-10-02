import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from "../constants";
import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: true,
          headerTitle: "A.K. Polash",
          headerTitleAlign: "center",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimention="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimention="100%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
