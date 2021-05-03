import React from 'react'
import './css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home_image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Mayart21/GWRev/MayART_PC_Hero_1x._CB671044501_.jpg" alt="bodyImage" />
            </div>
            <div className="home__row">
                <Product id="46566346" title='HARRICA Fashion Printed Rayon Unstitched Shirt ' price='399' image='https://m.media-amazon.com/images/I/71QxPsDdZWL._AC_UL320_.jpg' rating={5} />
                <Product id="1214541" title='Crumpled Belt for Men Women PU Leather Black / Brown Reversible Formal Casual Free Size with Buckle Genuine Color Belts Adjustable Waist (Fits Boys & Men) ' price='599' image='https://m.media-amazon.com/images/I/81YM7yHVuDL._AC_UL320_.jpg' rating={5} />

            </div>

            <div className="home__row">
                <Product id="1214543" title='Crumpled Belt for Men Women PU Leather Black / Brown Reversible Formal Casual Free Size with Buckle Genuine Color Belts Adjustable Waist (Fits Boys & Men) ' price='599' image='https://m.media-amazon.com/images/I/81YM7yHVuDL._AC_UL320_.jpg' rating={5} />
                <Product id="1214542" title='Style New Fashin Style New Fashion 15.6" Polyester Casual Laptop Bags/Backpack for Men with Adjustable Strap Expendable with 2 Compartments' price='599' image='https://m.media-amazon.com/images/I/41wRjE0cu0L._AC_UL320_.jpg' rating={5} />
                <Product id="1214544" title='AUGEN Unisex Adult Sunglasses With Hard Case & Carry Pouch ' price='5,566' image='https://m.media-amazon.com/images/I/61fG1B8sEtL._AC_UL320_.jpg' rating={5} />

            </div>

            <div className="home__row">
                <Product id="1214541" title='Sony Bravia 214.8 cm (85 inches) 4K Ultra HD Certified Android LED TV 85X8000H (Black) (2020 Model)' price="4,74,990" image='https://images-na.ssl-images-amazon.com/images/I/71gbflikQnL._SL1200_.jpg' rating={5} />
            </div>

        </div>

    )
}

export default Home
