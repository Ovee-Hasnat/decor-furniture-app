import React from 'react'

const About_ImgDescription = () => {
  return (
    <div>
      <div className="p-6 lg:mt-6 flex flex-col lg:flex-row items-center justify-evenly max-w-5xl mx-auto lg:space-x-20">
        <img
          src="https://images.unsplash.com/photo-1578503439976-f0c1f7daf1cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          className="rounded-xl filter hover:brightness-75 transition-all duration-200 ease-linear w-[330px] sm:w-[400px] lg:drop-shadow-xl"
        />

        <div>
          <h3 className="text-2xl md:text-3xl font-serif text-neutral-800 my-6">
            We <span className='text-emerald-700'>craft</span> your dream
          </h3>
          <p className="font-thin text-neutral-800 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quam
            maiores, laudantium atque voluptatibus libero earum repellendus
            cupiditate ratione doloribus necessitatibus dolorem quasi
            dignissimos laborum totam tempora accusamus, veritatis tempore.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            illum facere esse reprehenderit iure, amet nemo mollitia odit ipsam
            nostrum voluptatem maiores delectus dicta magni aperiam sunt omnis,
            excepturi iusto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_ImgDescription