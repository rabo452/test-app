import axios from "axios";
import { GalleryImage } from "../models/GalleryImage";
import { access_token, host } from "./config";

export class ImageGalleryApi {
    static async getImageGalleryPage(pageCount: number = 1): Promise<GalleryImage[]> {
        var images: GalleryImage[] = [];
        
        var response = await axios.get(`https://${host}/photos?page=${pageCount}&client_id=${access_token}`);

        for (var image of response.data) {
            images.push(new GalleryImage(image.links.download, image.user.name, image.alt_description));
        }

        return images;
    }
}