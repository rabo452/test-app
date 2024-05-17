import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { GalleryImage } from "../../models/GalleryImage";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";

const styles = StyleSheet.create({
    pressableBlock: {
        width: "50%"
    },
    galleryImageBlock: {
        padding: 5,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    galleryImage: {
        width: "100%",
        height: 300
    },
    textBlock: {
        width: "100%",
        textAlign: "center",
    }
});

type GalleryImageProps = {
    imageGallery: GalleryImage
}

export const GalleryImageComponent: React.FC<GalleryImageProps> = ({imageGallery}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <Pressable style={styles.pressableBlock} onPress={() => {
            navigation.navigate("ImageScreen", {
                imageSrc: imageGallery.imageSrc
            });
        }}>
            <View style={styles.galleryImageBlock}>
                <Image
                    style={styles.galleryImage}
                    source={{
                        uri: imageGallery.imageSrc
                    }}
                />
                <Text style={styles.textBlock}>{imageGallery.title}</Text>
                <Text style={styles.textBlock}>{imageGallery.author}</Text>
            </View>
        </Pressable>
    )
}