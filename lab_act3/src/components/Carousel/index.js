import './carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Haircut from './Haircut';

export default function CarouselSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const haircutData = [
    {
      id: 1,
      imageurl: "https://www.apetogentleman.com/wp-content/uploads/2022/05/bjordan-buzz-cut-fade.jpg",
      name: "Buzz Cut",
      description: "Shaving the sides, back and top of your head to a uniform length."
    },
    {
      id: 2,
      imageurl: "https://manofmany.com/wp-content/uploads/2021/03/Pompadour-Haircut-Hairstyles-for-Men-1.jpg",
      name: "Pompadour",
      description: "Short sides, long top cut can be worn with fade or taper."
    },
    {
      id: 3,
      imageurl: "https://content.latest-hairstyles.com/wp-content/uploads/george-clooney-inspired-caesar.jpg",
      name: "Caesar Cut",
      description: "Short, horizontally straight cut bangs. The hair is layered all over."
    },
    {
      id: 4,
      imageurl: "https://menshaircuts.com/wp-content/uploads/2023/03/tp-crew-cut.jpg",
      name: "Crew Cut",
      description: "Upright hair on the top of the head is cut relatively short"
    },
    {
      id: 5,
      imageurl: "https://content.latest-hairstyles.com/wp-content/uploads/very-short-flattop-for-men.jpg",
      name: "Flat Top",
      description: "Top of the head is cut and styled upright to form a flat profile."
    },
    {
      id: 6,
      imageurl: "https://ph-live-01.slatic.net/p/241ec5802626b5f546ce989eb65164e3.jpg",
      name: "Layered Two Block",
      description: "Cut shorter at the sides and at the back while keeping the top length longer."
    },
    {
      id: 7,
      imageurl: "https://www.menshairstyletrends.com/wp-content/uploads/2021/12/Curly-mullet-haircut-with-temple-fade-franaranda_.jpg",
      name: "Mullet",
      description: "Hair is cut shorter at the front, top and sides, but is longer at the back."
    },
    {
      id: 8,
      imageurl: "https://content.latest-hairstyles.com/wp-content/uploads/naturally-textured-faded-mohawk-for-men.jpg",
      name: "Mohawk",
      description: "Both sides of the head are shaven, leaving a strip of hair in the center."
    }
  ]

  const haircut = haircutData.map(item => (
    <Haircut 
      name={item.name}
      url={item.imageurl}
      description={item.description} />
  ))

  return (
    <div className="carousel">
      <h3>HAIRCUTS</h3>
      <h1 className='carousel-title'>SOME OF THE MEN'S HAIRSTYLES WE OFFER:</h1>

      <Carousel showDots={true} responsive={responsive}>
        {haircut}
      </Carousel>
    </div>
  );
}