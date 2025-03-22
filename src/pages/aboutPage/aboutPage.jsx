import React from 'react'
import { BsPieChartFill } from "react-icons/bs";

function AboutPage() {
    return (
        <main className='container text-center custom-vh-75'>
            <p className='fs-3 text-primary-emphasis mb-4'>About</p>
            <section className='card bg-primary text-white mb-5 pt-1 pb-3'>
                <div className='custom-w-60 mx-auto pt-2'>
                    <p className='text-white fs-5'><BsPieChartFill /></p>
                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis exercitationem tenetur vero sequi mollitia sit architecto nam maxime.
                        Vitae dignissimos sed maiores! Et quaerat ut adipisci
                        fugit facere asperiores possimus?
                    </p>
                    <p className='text-white fs-5'><BsPieChartFill /></p>
                </div>
            </section>
        </main>
    )
}

export default AboutPage