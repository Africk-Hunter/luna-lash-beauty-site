import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.scss';
import Img1 from '../images/imageOne.jpg';
import Img2 from '../images/imageTwo.jpg';
import Img3 from '../images/imageThree.jpg';
import Img4 from '../images/imageFour.jpg';
import Img5 from '../images/imageFive.jpg';
import Img6 from '../images/imageSix.jpg';
import Img7 from '../images/imageSeven.jpg';
import Img8 from '../images/imageEight.jpg';
import Img9 from '../images/imageNine.jpg';
import Img10 from '../images/imageTen.jpg';


const Gallery: React.FC = () => {

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
  const [overlayShown, setOverlayShown] = useState(false);
  const [overlayImage, setOverlayImage] = useState(Img1);

  return (
    <>
      <Overlay overlayShown={overlayShown} overlayImage={overlayImage} setOverlayShown={setOverlayShown} />
      <div className='AbtbackgroundShapeOne'></div>
      <div className='AbtbackgroundShapeTwo'></div>
      <div className='AbtbackgroundShapeThree'></div>
      <Navbar />
      <div className="gallery">
        <h2 className="pageTitle">Gallery</h2>
        <ImagesContainer images={images} setOverlayImage={setOverlayImage} setOverlayShown={setOverlayShown} />
      </div>
      <Footer />
    </>

  );
};

interface ImagesContainerProps {
  images: string[];
  setOverlayImage: Function;
  setOverlayShown: Function;
}

const ImagesContainer: React.FC<ImagesContainerProps> = ({ images, setOverlayImage, setOverlayShown }) => {

  const imageList = images.map((image, index) =>
    <div key={index} className="imgContainer" onClick={() => { setOverlayImage(image); setOverlayShown(true); console.log('hi') }}><img src={image} alt="" className="galleryImg" /></div>
  );

  return (
    <section className="imagesContainer">
      {imageList}
    </section>
  );
};

interface OverlayProps {
  overlayShown: boolean;
  overlayImage: string;
  setOverlayShown: Function;
}
const Overlay: React.FC<OverlayProps> = ({ overlayShown, overlayImage, setOverlayShown }) => {
  return (
    <section className={overlayShown ? "overlay shown" : 'overlay'} onClick={() => setOverlayShown(false)}>
      <button className="closeButton" onClick={() => setOverlayShown(false)}>X</button>
      <img src={overlayImage} alt="" className="overlayImg" />
    </section>
  );
}

export default Gallery;


