import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.scss';
import Img1 from '../images/imageOne.jpg';
import Img2 from '../images/imageTwo.jpg';
import Img3 from '../images/imageThree.jpg';
import Img4 from '../images/ImageFour.jpg';

const Gallery: React.FC = () => {

  const images = [Img1, Img2, Img3, Img4];

  return (
    <>
      <Navbar />
      <div className="gallery">
        <h2 className="pageTitle">Gallery</h2>
        <ImagesContainer images={images} />
      </div>
      <Footer />
    </>

  );
};

interface ImagesContainerProps {
  images: string[];
}

const ImagesContainer: React.FC<ImagesContainerProps> = ({ images }) => {

  const imageList = images.map(image =>
    <div className="imgContainer"><img src={image} alt="" className="galleryImg" /></div>
  );

  return (
    <section className="imagesContainer">
      {imageList}
    </section>
  );
};


export default Gallery;
