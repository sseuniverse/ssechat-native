/*
 * This is the source code of SSE Universe.
 * It is licensed under GNU GPL v. 3.
 * You should have received a copy of the license in this archive (see LICENSE).
 *
 * Copyright SSE World, 2024-2030.
 */
import { StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "config/Miscellaneous";
import { ThemeContext } from "config/Theme/Context";
import { SafeAreaView } from "react-native-safe-area-context";

interface MiniBaseViewProps {
  children: React.ReactNode;
}

const MiniBaseView = (props: MiniBaseViewProps) => {
  const { isThemeDark } = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isThemeDark ? COLORS.primaryDark : COLORS.primaryLight,
    },
  });

  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default MiniBaseView;
