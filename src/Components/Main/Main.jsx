import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'
import img1 from "../../Assests/img1.jpg"
import img2 from "../../Assests/img2.jpg"
import img3 from "../../Assests/img3.jpg"
import img4 from "../../Assests/img4.jpg"
import img5 from "../../Assests/img5.jpg"
import img6 from "../../Assests/img6.jpg"
import img7 from "../../Assests/img7.jpg"
import img8 from "../../Assests/img8.jpg"
import img9 from "../../Assests/img9.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealend',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatons in the World. This place is known for its luxurious stys and adventurous activities. '
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru. A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Spanning over 2,300km (1,430mi) down Australias eastern coastline, The Great Barrier Reef offers an abundance of coastal experiences unlike anywhere else in the world. Swim amongst the stunning coral formations, giant clams, rare species of whales, and six of the worlds seven marine turtle species.'
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Cappadocia is a region spreading an area covering the provinces particularly to Nevsehir, Kirsehir, Nigde, Aksaray and Kayseri. The region of Cappadocia is a place where nature and history integrates. While geographical events created fairy chimneys – the people carved houses and churches inside these chimneys.'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Image result for short description of travel destinations of guanajuato mexico Besides the silver mines, Guanajuato is a very artistic, lively town. There are several art colleges and universities, and a large student population, which adds a youthful feel to this historic town. Though somewhat off the beaten path, Guanajuato is definitely worth visiting!'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Cinque Terre, nestled between Pisa and Genoa is a string of seaside villages - Manarola, Vernazza, Monterosso al Mare, Corniglia and Riomaggiore. Situated on a mountainous stretch overlooking the Italian Riviera coastline these towns make for the dreamest of summer expeditions.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'The vast religious complex of Angkor Wat comprises more than a thousand buildings, and it is one of the great cultural wonders of the world. Angkor Wat is the worlds largest religious structure, covering some 400 acres (160 hectares), and marks the high point of Khmer architecture.'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers paradise!'
  },

]
const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map((i
            // id, imgSrc, destTitle, location, grade, fees, description
            ) => {
            return (
              <div data-aos="fade-up" key={i.id} className="singleDestination">
                <div className="imageDiv">
                  <img src={i.imgSrc} alt={i.destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{i.destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{i.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{i.grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{i.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{i.description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main