import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Brain,
} from "lucide-react";

const RecoveryApproach = () => {
  const items = [
    {
      icon: <ShieldCheck size={22}/>,
      title:"Structured Living",
    },

    {
      icon:<Users size={22}/>,
      title:"Peer Support",
    },

    {
      icon:<HeartHandshake size={22}/>,
      title:"Personal Guidance",
    },

    {
      icon:<Brain size={22}/>,
      title:"Mental Wellness",
    }

  ];

  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <img
              src="/images/home/approach.png"
              alt=""
              className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute bottom-8 right-[-20px] bg-white rounded-[30px] p-6 shadow-xl w-[250px]">

              <h4 className="text-primary font-semibold text-lg mb-2">

                Recovery Journey

              </h4>

              <p className="text-gray-500 text-sm leading-7">

                Safe support, structure and community for lasting healing.

              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="uppercase tracking-[5px] text-primary text-sm">

              Our Approach

            </span>

            <h2 className="font-heading text-primary text-5xl mt-5 mb-8 leading-tight">

              Supporting Recovery
              <br />
              Every Step Of The Way

            </h2>

            <p className="text-gray-500 leading-8 mb-10">

              We provide a compassionate and structured
              environment designed to help individuals
              build confidence, maintain stability,
              and create meaningful progress.

            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              {items.map((item,index)=>(

                <div
                  key={index}
                  className="bg-[#F8F6F2] rounded-[25px] p-6 hover:shadow-xl transition duration-500"
                >

                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-primary mb-4">

                    {item.icon}

                  </div>

                  <h3 className="text-primary font-semibold">

                    {item.title}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RecoveryApproach;