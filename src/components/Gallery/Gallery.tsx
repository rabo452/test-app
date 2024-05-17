import { View, StyleSheet, Image } from "react-native"
import { useQuery } from "react-query";
import { ImageGalleryApi } from "../../api/ImageGalleryApi";
import { GalleryImage } from "../../models/GalleryImage";
import { GalleryImageComponent } from "./GalleryImageComponent";

const styles = StyleSheet.create({
    gallery: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      flexWrap: "wrap"
    }
  });

export const Gallery = () => {
    var { isLoading, data } = useQuery({
        queryKey: 'LoadImages',
        queryFn: async (): Promise<GalleryImage[]> => {
          return await ImageGalleryApi.getImageGalleryPage(1);
        }
      });
    
      if (isLoading) {
        return (
          <View></View>
        )
      }
    
      data = data as GalleryImage[];

    return (
        <View style={styles.gallery}>
            {data.map((imageGallery, i) => {
              return (
                <GalleryImageComponent 
                    key={i}
                    imageGallery={imageGallery}
                />
              )
            })}
        </View>
    )
}