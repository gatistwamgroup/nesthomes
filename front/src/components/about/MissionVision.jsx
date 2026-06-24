import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Target,
    Eye
} from "lucide-react";

const MissionVision = () => {

    const data = [

        {
            icon: <Target size={28} />,
            title: "Our Mission",

            description:
                "To create a stable and supportive environment where recovery, growth and accountability can thrive.",

            button: "Learn More",
            link: "/services"
        },

        {
            icon: <Eye size={28} />,
            title: "Our Vision",

            description:
                "Helping residents move toward a healthier future with confidence, structure and long-term stability.",

            button: "Apply Today",
            link: "/contact"
        }

    ]

    return (

        <section className="
py-16
md:py-20
lg:py-32
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                >

                    <span className="uppercase tracking-[5px] text-primary text-sm">

                        Mission & Vision

                    </span>

                    <h2 className="
font-heading
text-primary
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
mt-4
sm:mt-5
leading-[1.2]
">

                        Guided By Purpose
                        <br />

                        Driven By Hope

                    </h2>

                </div>

                {/* Cards */}

                <div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
lg:gap-10
">

                    {data.map((item, index) => (

                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            className="
relative
bg-white
rounded-[25px]
sm:rounded-[30px]
lg:rounded-[40px]

p-6
sm:p-8
lg:p-14

shadow-xl
overflow-hidden
group

hover:-translate-y-2
lg:hover:-translate-y-3

hover:shadow-2xl
transition-all
duration-500
"
                        >

                            {/* Background Accent */}

                            <div className="
absolute
top-0
right-0

w-[120px]
h-[120px]

sm:w-[150px]
sm:h-[150px]

lg:w-[180px]
lg:h-[180px]

rounded-full
bg-primary/5

translate-x-8
-translate-y-8

lg:translate-x-10
lg:-translate-y-10
"></div>

                            {/* Icon */}

                            <div className="
w-14
h-14

sm:w-16
sm:h-16

rounded-full
bg-primary/10
flex
items-center
justify-center
text-primary
mb-6
sm:mb-8

group-hover:scale-110
transition
">

                                {item.icon}

                            </div>

                            {/* Title */}

                            <h3 className="
font-heading
text-2xl
sm:text-3xl
lg:text-4xl
text-primary
mb-4
sm:mb-6
">

                                {item.title}

                            </h3>

                            {/* Text */}

                            <p className="
text-gray-500
text-base
sm:text-lg

leading-7
sm:leading-8
lg:leading-9

mb-8
sm:mb-10
">

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default MissionVision