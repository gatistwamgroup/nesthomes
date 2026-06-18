import React from "react";
import {
  Home,
  Users,
  HeartHandshake,
  ShieldCheck,
  Brain,
  Activity,
} from "lucide-react";

const ProgramsSection = () => {

  const programs = [

    {
      icon:<Home size={28}/>,
      title:"Sober Living",
      desc:"Safe and structured living designed for stability."
    },

    {
      icon:<Users size={28}/>,
      title:"Group Support",
      desc:"Build meaningful connections through community."
    },

    {
      icon:<HeartHandshake size={28}/>,
      title:"Recovery Coaching",
      desc:"Personal guidance throughout your journey."
    },

    {
      icon:<ShieldCheck size={28}/>,
      title:"Relapse Prevention",
      desc:"Strategies focused on long-term recovery."
    },

    {
      icon:<Brain size={28}/>,
      title:"Mental Wellness",
      desc:"Support emotional and mental well-being."
    },

    {
      icon:<Activity size={28}/>,
      title:"Wellness Activities",
      desc:"Healthy routines for mind and body."
    },

  ];

  return (

    <section className="py-28 px-6 bg-[#F8F6F2]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-primary text-sm">

            Programs & Services

          </span>

          <h2 className="font-heading text-primary text-5xl mt-5 mb-6">

            Recovery Support
            <br />
            Built Around You

          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 leading-8">

            Personalized support, guidance, and community
            designed to help create meaningful and lasting progress.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program,index)=>(

            <div
              key={index}
              className="group bg-white p-8 rounded-[35px] shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition">

                {program.icon}

              </div>

              <h3 className="text-primary text-2xl font-semibold mb-4">

                {program.title}

              </h3>

              <p className="text-gray-500 leading-8">

                {program.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default ProgramsSection;