import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from './Carousel.module.css';

const CarouselComp = () => {

    const imgArr = [
        "https://www.meatpoultry.com/ext/resources/2022/10/20/Pizza_Hut_Melts.jpg?height=667&t=1666284127&width=1080",

        "https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg",
        
        "https://th.bing.com/th/id/OIP.jQ80u-o5Vlz9a2vGGbL_3AHaDe?rs=1&pid=ImgDetMain",

        "https://th.bing.com/th/id/OIP.Z0MS9d6q8-u4pGZZusZuLAHaDt?w=1440&h=720&rs=1&pid=ImgDetMain",

        "https://www.ktc.co.th/pub/media/Article/05/KFC-bucket-hat1200x630.webp",

        "https://downtown-brooklyn.imgix.net/imgr/mcdonalds-395-Flatbush.jpg?fm=jpg&auto=compress,enhance,format&w=1200",

        "https://d33wubrfki0l68.cloudfront.net/c9c4c789ffae538445a106ee90e3bfc3d89c75c3/3a613/en/recipes/kunafa/featured_2_hub6e3f8dc209b40c9147f217b474e1546_215267_960x640_fill_q75_box_bottomleft.jpg",

        "https://i.pinimg.com/originals/00/72/bd/0072bd16177b2967bd086f48dc4a038f.jpg",

        "https://thumbs.dreamstime.com/b/traditional-greek-souvlaki-lamb-barbecue-skewer-paprika-onion-tzatziki-rustic-metal-tray-traditional-greek-souvlaki-210730758.jpg",

        "https://arnienicola.com/wp-content/uploads/2023/03/burrito-George-Dolgikh-1024x576.jpg"
    ];

    return (
        <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={1500} swipeable={true} useKeyboardArrows={true} className={styles.container}>
            {
                imgArr.map((ele, idx) => {
                    return <div key={`${idx}${ele}`} className={styles.img}>
                        <img src={ele} alt="restro" />
                    </div>
                })
            }
        </Carousel>
    );
};

export default CarouselComp;