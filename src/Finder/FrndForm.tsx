import React, { useState } from "react";
  interface FrndFormProps {
    onButtonClick: (param: string) => void;
    Form_sub: (param: string) => void;
    data: string;
  }
  
  const FrndForm: React.FC<FrndFormProps> = ({
    onButtonClick,
    Form_sub,
    data
  }) => {
    const bhandleClick = () => {
      onButtonClick(data); // Access onButtonClick and data directly
    };
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    mobileNumber: "",
    program: "",
    state: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    dob: false,
    email: false,
    mobileNumber: false,
    program: false,
    state: false,
  });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  // Validate the field dynamically and update the errors state
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: validateField(name, value),
  }));
};

// Helper function to validate individual fields
const validateField = (name: string, value: string) => {
  switch (name) {
    case "fullName":
      return value.trim() === "";
    case "dob":
      return value.trim() === "";
    case "email":
      return !/^\S+@\S+\.\S+$/.test(value);
    case "mobileNumber":
      return !/^\d{10}$/.test(value);
    case "program":
      return value.trim() === "";
    case "state":
      return value.trim() === "";
    default:
      return false;
  }
};


  const validateForm = () => {
    const newErrors = {
      fullName: formData.fullName === "",
      dob: formData.dob === "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      mobileNumber: !/^\d{10}$/.test(formData.mobileNumber),
      program: formData.program === "",
      state: formData.state === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
      const jsonData = JSON.stringify(formData);
        Form_sub(jsonData);
    }
  };

  return (
    <div className="bg-[#EDEDE9] font-poppins p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Enter Your Friend Details!</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mt-5">
        <div>
          <label className="block text-gray-700 font-bold mb-1">Full Name </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } w-full p-2 rounded-lg`}
            placeholder="Enter your Friend full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm">Full name is required</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className={`border ${
              errors.dob ? "border-red-500" : "border-gray-300"
            } w-full p-2 rounded-lg`}
          />
          {errors.dob && <p className="text-red-500 text-sm">Date of Birth is required</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } w-full p-2 rounded-lg`}
            placeholder="Enter your Friend email"
          />
          {errors.email && <p className="text-red-500 text-sm">Invalid email address</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className={`border ${
              errors.mobileNumber ? "border-red-500" : "border-gray-300"
            } w-full p-2 rounded-lg`}
            placeholder="Enter your Friend mobile number"
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm">Enter a valid 10-digit number</p>}
        </div>
        
      </form>
      <div className="mt-5 flex gap-2">
          <button className="bg-purple-700 text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500 hover:text-white transition duration-300"
          onClick={bhandleClick}
          >
            PREV
          </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-purple-700 text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-pink-500 hover:text-white transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FrndForm;
