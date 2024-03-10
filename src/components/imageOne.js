import { Parallax } from 'react-parallax';
import img1 from "../img/img1.jpg"; // Assuming you have an image named 1.jpg in the img folder

const ImageOne = () => (
    <Parallax className="image"bgImage={img1} strength={800}>
        <div className ="content">
            <span className="img-txt">A trip to Switzerland</span>

        </div>
    </Parallax>
);

export default ImageOne;
