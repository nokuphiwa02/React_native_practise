import { Text, View, StyleSheet, ScrollView } from "react-native";
import Register from "../components/Register/Register";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Register/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    gap:15,
  paddingVertical: 20,
},
});
