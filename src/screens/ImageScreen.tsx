import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native"
import { RootStackParams } from "../../App";

const styles = StyleSheet.create({
    container: {
      padding: 0,
      width: "100%",
      height: "100%",
    },
    imageBlock: {
        width: "100%",
        height: "100%"
    }
});

type ImageScreenProps = NativeStackScreenProps<RootStackParams, "ImageScreen">

export const ImageScreen: React.FC<ImageScreenProps> = ({route}) => {
    const {imageSrc} = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: imageSrc
                }}
                style={styles.imageBlock}
            />
        </View>
    )
}