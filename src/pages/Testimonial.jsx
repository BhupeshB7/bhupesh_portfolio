import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useInView } from 'react-intersection-observer';

const TestimonialItem = ({ testimonial }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
            className="card-container p-5 text-gray-800 font-light rounded-lg"
        >
            <div className="flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-slate-400">{testimonial.name}</h6>
                </div>
            </div>
            <div>
                <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    {testimonial.testimonial}
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                </p>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // Show skeleton for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    const testimonials = [
        {
            "id": 1,
            "name": "Ravi Kumar",
            "image": "https://img.freepik.com/free-photo/smiley-man-city-looking-camera_23-2148296615.jpg?t=st=1717611260~exp=1717614860~hmac=15e3b8f5f29a015e105f7e95dac1094e1da6e9dbc50ac4f4c6550ceba2c205e5&w=360",
            "testimonial": "Working with the MERN stack on our project was a game-changer. The developer's expertise in MongoDB, Express, React, and Node.js brought our application to life with seamless functionality and a great user experience."
        },
        {
            "id": 2,
            "name": "Aneha Sharma",
            "image": "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261878.jpg?size=626&ext=jpg&ga=GA1.2.260354095.1700988836&semt=ais_user",
            "testimonial": "The web application developed using MERN has transformed our business processes. The responsiveness and efficiency of the application have significantly improved our workflow. Highly recommend this developer for MERN projects."
        },
        {
            "id": 3,
            "name": "Amit Singh",
            "image": "https://img.freepik.com/free-photo/young-indian-man-standing-isolated-grey-wall-approving-doing-positive-gesture-with-hand-thumbs-up-smiling-happy-success_231208-2602.jpg?t=st=1717611286~exp=1717614886~hmac=33623a26d7dc54675d93444ac32ae658eb625dc4e56fa439a60c9912f9e008a8&w=996",
            "testimonial": "The developer's mastery of the MERN stack was evident in every aspect of the project. The application is not only robust and scalable but also incredibly intuitive for our users. A fantastic job overall!"
        },
        {
            "id": 4,
            "name": "Neha Gupta",
            "image": "https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?size=626&ext=jpg&ga=GA1.2.260354095.1700988836&semt=ais_user",
            "testimonial": "Our MERN-based application exceeded our expectations. The developer's ability to integrate MongoDB, Express, React, and Node.js seamlessly was impressive. We're thrilled with the final product and the positive feedback from our users."
        },
        {
            "id": 5,
            "name": "Vikram Mehta",
            "image": "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg?t=st=1717611374~exp=1717614974~hmac=a18a0a1a19c6198caec7d1e91825292e1c33edafc04eaf11b50595da7c00a83d&w=996",
            "testimonial": "Choosing this developer for our MERN stack project was the best decision we made. The application's performance and user interface are outstanding, and the developer's attention to detail was exceptional. Highly recommended!"
        },
        {
            "id": 6,
            "name": "Anish Patel",
            "image": "https://img.freepik.com/free-photo/young-delivery-man-red-uniform-cap-showing-pointing-up-with-fingers-number-eight-smiling_141793-46417.jpg?t=st=1717611431~exp=1717615031~hmac=aef082ca70c23511b99da35f05b4c64c8316f048fe48cef067a9e8f84fc65857&w=996",
            "testimonial": "The MERN stack expertise of the developer was evident in every feature and functionality of our web application. The project was delivered on time and exceeded all our expectations. A true professional in the field."
        }
    ];

    return (
        <div className="min-w-screen min-h-screen testimonial-container  flex items-center justify-center p-3 m-4 rounded-lg">
            <div className="w-full rounded-md testimonial-bg border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 ">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h3 className="text-3xl md:text-7xl font-bold mb-5 text-purple-400">What people <br />are saying.</h3>
                        <h3 className="text-xl mb-5 font-light">A testimonial is the reflection of your success in the eyes of your customers.</h3>
                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-slate-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-slate-300 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-slate-400 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-slate-300 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-slate-500 ml-1"></span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            Array.from(new Array(6)).map((_, index) => (
                                <Card key={index} className="skeleton-card card-container">
                                    <CardContent >
                                        <>
                                            <div className="skeleton-circle-card">
                                                <Skeleton variant="circular" width={40} height={40} />
                                                <Skeleton width="60%" />
                                            </div>
                                            <div className='mt-5'>
                                            <Skeleton variant="rectangular" width="100%" height={15} className='mb-2 mt-2' />
                                            <Skeleton variant="rectangular" width="100%" height={15} className='mb-2'/>
                                            <Skeleton variant="rectangular" width="100%" height={15} className='mb-2'/>
                                            <Skeleton variant="rectangular" width="100%" height={15} className='mb-2'/>
                                            </div>
                                        </>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            testimonials.map((testimonial) => (
                                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
