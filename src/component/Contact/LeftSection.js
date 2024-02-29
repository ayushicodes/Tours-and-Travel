import React from "react";
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
    <div className="w-full  flex flex-col items-center justify-center ">
      <h1 className="text-2xl sm:text-2xl text-cyan-700 uppercase pt-12 text-center font-bold">
        Get In Touch
      </h1>
      <div className=" border-2 border-cyan-400 w-3/6 flex items-center bg-cyan-50 rounded justify-center mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-9/12	flex  flex-col  py-10"
        >
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
          <Controller
            name="text"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="text"
                label="Location"
                placeholder="Enter Location here..."
                fieldRef={field}
                hasError={errors.text?.type === "required"}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="date"
                label="Date of Travel"
                placeholder="Enter Date of Travel here..."
                fieldRef={field}
                hasError={errors.date?.type === "required"}
              />
            )}
          />
          <Controller
            name="Number of Nights"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="number"
                label="Number of Nights"
                placeholder="Enter Number of Nights here..."
                fieldRef={field}
                hasError={errors.number?.type === "required"}
              />
            )}
          />
          <Controller
            name="Number of Adults"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="number"
                label="Number of Adults"
                placeholder="Enter Number of Adults here..."
                fieldRef={field}
                hasError={errors.number?.type === "required"}
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
                label="Number of Kids"
                placeholder="Enter Number of Kids here..."
                fieldRef={field}
                hasError={errors.number?.type === "required"}
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
