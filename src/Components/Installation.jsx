import React from 'react'

const Installation = () => {
    const installation= [
        {steps: "Step 1: Initial Consultation", process: "We begin by discussing your needs and preferences. This includes understanding the type of service you require (roofing, doors, or windows), your budget, and any specific requirements. During this consultation, we will also assess the site to ensure we recommend the most suitable materials and solutions for your project."},
        {steps: "Step 2: Site Assessment & Preparation", process: "Our expert team will conduct a thorough site assessment to understand the existing conditions and take accurate measurements. This helps us plan the installation with precision, ensuring minimal disruption to your space. We also handle all necessary preparations, including the safe removal of old materials when needed."},

        {steps: "Step 3: Material Selection & Delivery", process: "Once you’ve approved the materials and design, we will source the highest quality products for your project. Our materials are carefully selected to ensure they meet your needs for durability, aesthetics, and performance. After delivery to the site, our team will begin preparing for the installation."},

        {steps: "Step 4: Professional Installation", process: "Our experienced technicians will begin the installation process with the utmost care and attention to detail. Whether it’s a roof, door, or window installation, we follow industry best practices to ensure each installation is structurally sound, secure, and aesthetically pleasing. We also make sure to protect your property during installation, minimizing any mess or damage."},

        {steps: "Step 5: Quality Check & Final Touches", process: "After installation, we conduct a thorough quality check to ensure everything meets our high standards. We make any necessary adjustments and finish up any last details, ensuring your new roof, doors, or windows are fully functional and look perfect."},

        {steps: "Step 6: Clean-Up & Customer Walkthrough", process: "Once the job is complete, we clean the site thoroughly, removing all debris and leftover materials. We will then walk you through the installation, explaining the features and benefits of your new installation and answering any questions you might have."}
    ]
  return (
    <section className='bg-stone-700 pb-11'>
              <div className='px-6 py-10'>
        <div className='text-xl py-2'>
       
        <h2 className="text-[#FF840E]">Our Installation Process</h2>
        <p className='text-xl text-white'>
        At Edafekioja, we ensure that every project is completed with the highest standards of professionalism and care. Our installation process is designed to be smooth, efficient, and hassle-free, from start to finish.
        </p>
        </div>
        </div>
        <div className='grid sm:grid-cols-2 gap-5 px-6'>
            {
                installation.map((step)=>(
                    <div className='bg-gray-300 py-3 rounded-xl p-4  shadow-2xl dark:text-black shadon'>
                      <h4>  {step.steps}</h4>
                      <p>{step.process}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Installation