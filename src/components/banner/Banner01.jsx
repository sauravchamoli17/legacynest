import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/layout/banner-01.png'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Button from '../button';

Banner01.propTypes = {
    data: PropTypes.array,
};

function Banner01(props) {
    const { data } = props;

    const [dataBlock] = useState(
        {
            title: 'Pass on Your ERC20 Token Assets',
            desc: `Legacy Nest introduces an innovative solution for preserving your digital legacy. Our platform empowers you to seamlessly lock in the fate of your ERC20 token assets, ensuring a secure future for your holdings.`,
            title2: 'Tokens we support'
        }
    );
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="banner__content">
                            <h2 className="title">{dataBlock.title}</h2>
                            <p className="fs-20 desc">
                                {dataBlock.desc}
                            </p>
                            <Button title='Secure Your Tokens' path='#' />
                            <div className="partner">
                                <h6>{dataBlock.title2}</h6>
                                <div className="partner__list">

                                    <Swiper
                                        modules={[Navigation, Scrollbar, A11y]}
                                        spaceBetween={65}
                                        slidesPerView={4}
                                        className="swiper-partner"
                                    >
                                        {
                                            data.map(idx => (
                                                <SwiperSlide key={idx.id}>
                                                    <Link to="#">
                                                        {/* <img src={idx.img} alt="Rockies"/> */}
                                                        {
                                                            idx.img == null ?
                                                              <p>{idx.text}</p>
                                                                :
                                                              <img src={idx.img} alt="Legacy" />
                                                        }
                                                    </Link>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="banner__image">
                            <img src={img1} alt="Legacy Nest" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner01;