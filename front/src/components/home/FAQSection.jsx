import React, { useState } from "react";
import { Plus, Minus, Phone, ArrowRight } from "lucide-react";

const FAQSection = () => {

  const [open, setOpen] = useState(0);

  const faqData = [

    {
      question:"What is a recovery home?",
      answer:
      "A recovery home provides a structured and supportive sober living environment focused on accountability, stability and community support."
    },

    {
      question:"Is MAT supported?",
      answer:
      "Yes, The Nest provides a supportive environment for residents participating in MAT programs."
    },

    {
      question:"How long can residents stay?",
      answer:
      "Length of stay can vary depending on individual goals and progress."
    },

    {
      question:"What is expected from residents?",
      answer:
      "Residents are expected to actively participate in recovery, attend meetings, remain productive and contribute positively to the home environment."
    },

    {
      question:"How do I apply for housing?",
      answer:
      "You can contact our team directly through the application form or call us to begin the process."
    }

  ];

  return (

    <section className="
              relative
              py-20
              sm:py-24
              lg:py-36
              px-4
              sm:px-6
              overflow-hidden bg-white
              ">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-primary text-sm">

            Frequently Asked Questions

          </span>

          <h2 className="
font-heading
text-primary
text-4xl
sm:text-5xl
lg:text-6xl
mt-4
sm:mt-5
mb-5
sm:mb-6
leading-[1.1]
">

            Questions?
            <br />
            We've Got Answers

          </h2>

          <p className="
max-w-2xl
mx-auto
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
">

            Find answers to common questions about
            The Nest Recovery Homes and housing process.

          </p>

        </div>

        {/* FAQ */}

        <div className="
space-y-4
sm:space-y-5
">

          {faqData.map((faq,index)=>(

            <div
              key={index}
              className="
bg-[#F8F6F2]
rounded-[20px]
sm:rounded-[30px]
overflow-hidden
shadow-md
"
            >

              <button
                onClick={() =>
                  setOpen(open===index ? null : index)
                }
                className="
w-full
px-5
sm:px-8
py-5
sm:py-6
flex
items-center
justify-between
gap-4
"
              >

                <h3 className="
text-left
text-primary
font-semibold
text-base
sm:text-lg
leading-6
flex-1
">

                  {faq.question}

                </h3>

                {
                  open===index
                  ?
                  <Minus/>
                  :
                  <Plus/>
                }

              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  open===index
                  ?
                  "max-h-[200px]"
                  :
                  "max-h-0"
                }`}
              >

                <p className="
px-5
sm:px-8
pb-5
sm:pb-6
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
">

                  {faq.answer}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="
flex
flex-col
sm:flex-row
justify-center
items-center
gap-4
sm:gap-6
mt-10
sm:mt-14
">

          <button className="
bg-primary
text-white
w-full
sm:w-auto
justify-center
px-6
sm:px-8
py-4
sm:py-5
rounded-full
flex
items-center
gap-2
hover:scale-105
transition
">

            <Phone size={18}/>

            Call Now

          </button>

          

        </div>

      </div>

    </section>

  );
};

export default FAQSection;