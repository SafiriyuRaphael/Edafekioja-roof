

const OurProjects = ({item}) => {
  return (
    <>
            <h1 className=" pt-9 text-[#FF840E]">Our Projects</h1>
        <p className=" md:text-xl">
          At Edafekioja, we pride ourselves on delivering exceptional quality in
          every roofing, doors, and windows project we undertake. Our commitment
          to excellence is reflected in each of our completed projects, tailored
          to meet the unique needs of our clients. Whether you’re upgrading your
          home or business, our team ensures that every detail is meticulously
          handled, resulting in a flawless finish that lasts.{" "}
          {!item &&
          <span className={`block py-3 text-[#FF840E]`}>
            {" "}
            Below are some of the recent projects we’ve had the privilege of
            working on:
          </span>}
        </p>
    </>
  )
}

export default OurProjects