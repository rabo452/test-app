// data class
export class GalleryImage {
    public readonly imageSrc: string;
    public readonly author: string;
    public readonly title: string;

    constructor(imageSrc: string, author: string, title: string) {
        this.imageSrc = imageSrc;
        this.author = author;
        this.title = title;
    }
}