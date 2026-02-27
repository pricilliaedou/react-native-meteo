import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.meteo_basic}>
        <Text> Hello World</Text>
      </View>
      <View style={styles.meteo_searchbar}>
        <Text> Hello World</Text>
      </View>
      <View style={styles.meteo_advanced}>
        <Text> Hello World oj</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  meteo_basic: {
    flex: 2,
  },
  meteo_searchbar: {
    flex: 2,
  },
  meteo_advanced: {
    flex: 1,
  },
});
