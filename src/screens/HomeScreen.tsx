import { ScrollView, View, StyleSheet, StatusBar} from "react-native"
import { Gallery } from "../components/Gallery/Gallery";

const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingTop: StatusBar.currentHeight,
      width: "100%",
      height: "100%",
    },
});

export const HomeScreen = () => {
    return (
       <View style={styles.container}>
        <ScrollView>
          <Gallery />
        </ScrollView>
      </View>
    )
}