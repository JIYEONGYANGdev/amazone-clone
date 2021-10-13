import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img
                src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
                alt=""
                className="home__image"/> {/*  https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/
 * Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB.
 * _CB428684220_.jpg 
 */
            }
            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product
                    className='home_row__eachProduct'
                    id="1"
                    title='The God Delusion (Paperback/10th Anniversary Edition) by. Dawkins, Richard'
                    price={2.5}
                    rating={5}
                    image='http://image.kyobobook.co.kr/images/book/large/934/l9781784161934.jpg' />

                <Product
                    id="2"
                    className='home_row__eachProduct'
                    title='Samsung Bespoke cube fridge wine cooler 25L'
                    price={54.05}
                    rating={5}
                    image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSiRJ0Uvu4dcC-cnlccIA-Cuq5-3Wmn3h4LigQ56otKYrU7txYwWkLXGRwcWnZSSA7gdJMjD6fLnik&usqp=CAc'/>

            </div>
            <div className="home__row">
                <Product
                    className='home_row__eachProduct'
                    id="3"
                    title='[EENK] SAVA Single-Breasted Blazer - Navy'
                    price={63.17}
                    rating={5}
                    image='https://cdn.imweb.me/thumbnail/20210218/3a6ec73438edf.jpg'/>
                <Product
                    className='home_row__eachProduct'
                    id="4"
                    title='IKEA ALEFJÄLL 알레피엘 사무용의자 (Color: Gold Brown)'
                    price={23.91}
                    rating={5}
                    image='https://www.ikea.com/kr/ko/images/products/alefjaell-office-chair-grann-golden-brown__0724709_pe734591_s5.jpg?f=xl'/>
                <Product
                    id="5"
                    className='home_row__eachProduct'
                    title='[GENTLE MONSTER] Sunglass 2021 Pre-Collection GHOST 01'
                    price={30.09}
                    rating={5}
                    image='https://www.gentlemonster.com/data/item/renewal_prod_img/GHOST_01_2.jpg'/>
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    className='home_row__eachProduct'
                    title='Apple M1 칩 장착 블루 24형 iMac (16GB 메모리 업그레이드 & 1TB SSD)'
                    price={256.64}
                    rating={5}
                    image='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=627&hei=566&fmt=jpeg&qlt=95&.v=1617479508000'/>
            </div>

        </div>
    )
}

export default Home

