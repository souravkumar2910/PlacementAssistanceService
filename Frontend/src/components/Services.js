import React from 'react'

import Service from '../common/Service'

import { JwtToken } from '../services/JwtToken'



const Services = () => {



  const token = JwtToken



  return (



    <div>

        <section className='service py-5'>

            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <Service name="Resume Builder"

                    desc="Filled Required detail to get resume and downloaded"

                     visit="/resume"

                     btn="Resume" />



                    <Service name="Quiz Pratice"

                     desc="This is Quiz Pratice platform where you can take multiple Quiz"

                    visit="/quiz"

                    btn="Quiz" />



                    <Service name="Coding"

                     desc="We will provide a platform where you can prepared your coding."

                     visit="coding"

                     page="_blank"

                     to="https://www.hackerrank.com/auth/login"

                     btn="Coding Pratice" />

                </div>

            </div>

        </section>

    </div>

  )

}



export default Services