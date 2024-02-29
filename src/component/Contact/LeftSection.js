import React, { useCallback } from "react";
import FormElement from "./FormElement";
import { useForm, Controller } from "react-hook-form";

const LeftSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="xl:container mx-auto mb-32">
      <div
        className="flex justify-center"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(252,70,107,1) 100%)",
          height: "250px",
        }}
      >
        <h1 className="text-5xl sm:text-7xl text-white uppercase pt-12">
          Get In Touch
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="text"
                label="Name"
                placeholder="Enter name here..."
                fieldRef={field}
                hasError={errors.name?.type === "required"}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="number"
                label="Number"
                placeholder="Enter Number here..."
                fieldRef={field}
                hasError={errors.number?.type === "required"}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="email"
                label="Email"
                placeholder="Enter Email here..."
                fieldRef={field}
                hasError={errors.email?.type === "required"}
              />
            )}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-500	text-white font-medium uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:outline-none focus:ring-0 active:bg-cyan-800"
          >
            Book A Tour
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeftSection;
