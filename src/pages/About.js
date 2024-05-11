import React from 'react';

const About = () => {
    return (
        <div id="trading" className="text-white max-w-7xl mx-auto min-w-[320px] py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-5xl font-bold ">About Us</h2>
                    <p className="text-xl mt-2">Learn more about our cryptocurrency and NFT platform</p>
                </div>
                <div className="flex flex-wrap -mx-4 pt-8">
                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-3xl font-bold  mb-4">Our Mission</h3>
                        <p className='text-xl'>At Romi Finance, our mission is to revolutionize the way people buy, sell, and trade digital assets. We aim to provide a seamless and secure platform for cryptocurrency enthusiasts and NFT collectors worldwide.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-3xl font-bold  mb-4">What We Offer</h3>
                        <p className='text-xl'>Romi Finance offers a range of features and services to cater to the needs of both cryptocurrency investors and NFT enthusiasts. Our platform allows users to easily buy, sell, and trade cryptocurrencies and NFTs with low fees and high security.</p>
                        <p className='text-xl'>We also provide educational resources and market insights to help our users make informed decisions about their investments. Additionally, our customer support team is available 24/7 to assist with any queries or issues.</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-3xl font-bold mb-4">Our Team</h3>
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-[50%] w-fit px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src="" alt="Ramanjot Singh" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h4 className="text-lg font-bold text-gray-800">Ramanjot Singh</h4>
                                <p className="text-gray-600">Founder</p>
                                <p className="text-gray-600">Email: <a href="mailto:ramanjotsingh8574@gmail.com">ramanjotsingh8574@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
