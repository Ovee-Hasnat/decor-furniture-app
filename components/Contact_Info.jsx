import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact_Info = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => console.log(formData);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="w-fit">
          <motion.h4
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl uppercase font-medium tracking-wider my-6"
          >
            Get in touch
          </motion.h4>
          <PhoneIcon className="w-8 h-8 inline-block text-emerald-700" />
          <p className="inline-block ml-4 text-lg">012 3456 789</p>
          <br />
          <EnvelopeIcon className="w-8 h-8 inline-block text-emerald-700" />
          <p className="inline-block ml-4 text-lg">hello@decore.info</p>

          <motion.h4
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl uppercase font-medium tracking-wider mt-14 mb-6"
          >
            visit us
          </motion.h4>

          <MapPinIcon className="w-8 h-8 inline-block text-emerald-700" />
          <p className="inline-block ml-4 text-lg">Dhaka, Bangladesh</p>
        </div>

        <div>
          <div className="mt-16">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-1 w-[350px] mx-auto"
            >
              <input
                {...register("name")}
                placeholder="Name"
                className="formInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="formInput"
                type="email"
              />
              <input
                {...register("subject")}
                placeholder="Subject"
                className="formInput"
                type="text"
              ></input>
              <textarea
                {...register("message")}
                placeholder="Message"
                className="formInput"
              />
              <button
                type="submit"
                className="py-2 bg-emerald-700/80 rounded-md text-white text-lg font-semibold uppercase tracking-[5px] hover:bg-emerald-700 transition-all duration-300 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Info;
