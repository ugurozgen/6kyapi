import ImageGallery from 'react-image-gallery';
 
export default function Gallery(props) {
  
    return (
        <ImageGallery items={props.images} />
    );
}