import { Dispatch, useState, useEffect } from "react";
import FormInput from "ui/FormItems/FormInput";
import MyCol from "ui/MyCol";
import MyForm, { Form } from "ui/MyForm";
import MyModal from "ui/MyModal";
import MyRow from "ui/MyRow";
import MyText from "ui/MyText";
import axios from "axios";
import BaseUrl from "utils/baseurl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

type cardData = {
  image: string;
  title: string;
  description: string;
  type?: string;
  index?: number;
  showForm?: boolean;
  setQueryCategory?: any;
  setShowForm?: Dispatch<React.SetStateAction<boolean>>;
};

type modalProps = {
  showForm: boolean;
  referFriend: boolean;
  hideForm: () => void;
  submitHandler: (values: contactData) => void;
};

export type contactData = {
  name: string;
  phone: string;
  email: string;
  state: string;
  stream: string;
  category: string;
};

const Section5 = () => {
  const [showForm, setShowForm] = useState(false);
  const [queryCategory, setQueryCategory] = useState(0);


  const hideForm = () => {
    if (setShowForm) {
      setShowForm(false);
    }
  };
  function errorAlert() {
    toast.error("Something Went Wrong");
  }
  function successAlert() {
    toast.success("Message Send Successfully");
  }

  const submitHandler = async (payload: any) => {
    payload = {
      name: payload.Name,
      phone: payload.Phone,
      email: payload.Email,
      state: payload.state,
      stream: payload.stream,
      category: queryCategory == 1 ? "video/voice" : "face-session",
    };
    payload = JSON.stringify(payload);

    try {
      const response = await axios.post(`${BaseUrl}/userQueryAPI`, payload);
      if (response.status == 200) {
        successAlert();
        hideForm();
      } else {
        errorAlert();
        hideForm();
      }
    } catch (error) {
      toast.error("Something Went Wrong ");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mt-[5rem] gap-4">
      {items.map((item, index) => (
        <CardItem
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          image={item.image}
          type={item.type}
          showForm={showForm}
          setShowForm={setShowForm}
          setQueryCategory={setQueryCategory}
        />
      ))}
      <ContactForm
        showForm={showForm ?? false}
        hideForm={hideForm}
        submitHandler={submitHandler}
        referFriend={false}
      />
    </div>
  );
};

export default Section5;

const items: cardData[] = [
  {
    title: "WhatsApp Chat",
    description:
      "Chat with our admission expert on WhatsApp for personalized guidance and answers to your admission-related queries.",
    image: "whatsapp",
    type: "ws",
  },
  {
    title: "Voice/Video Call",
    description:
      "Connect with our admission expert for an online face-to-face session to receive personalized guidance.",
    image: "videocalls",
  },
  {
    title: "Face to Face Sessions",
    description:
      "Connect one to one in-person with an expert of your choice.To have a positive or meaningful connection with us.",
    image: "facetoface",
  },
];

const CardItem = ({
  title,
  description,
  image,
  type,
  index,
  setShowForm,
  setQueryCategory,
}: cardData) => {
  const [whatsapp] = useFetch(`${BaseUrl}/getWhatsAppUrl`)
  const handleClick = () => {
    setQueryCategory(index);

    if (setShowForm) {
      setShowForm(true);
    }
  };

  if (type === "ws") {
    return (
      <div className="card-container hover-card w-full lg:w-[35%]">
        <Link
          to={whatsapp ? (whatsapp as any)[0]?.whatsApp_link : ""}
          target="_blank"
          className="flex px-5 py-8 gap-4"
        >
          <div className="card-img w-[20%] flex justify-center items-start ">
            <img
              width={"100%"}
              height={"100%"}
              src={`/icons/home/${image}.png`}
            />
          </div>
          <div className="content w-[80%]">
            <p className="text-[20px] text-[#983FD4]  font-bold">{title}</p>
            <p className="text-[15px] text-gray-500 fonse">{description}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="card-container hover-card flex px-5 py-8 gap-4 w-full lg:w-[35%]"
        onClick={handleClick}
      >
        <div className="card-img w-[20%] flex justify-center items-start ">
          <img
            width={"100%"}
            height={"100%"}
            src={`/icons/home/${image}.png`}
          />
        </div>
        <div className="content w-[80%]">
          <p className="text-[20px] text-[#983FD4] font-bold">{title}</p>
          <p className="text-[15px] text-gray-500 fonse">{description}</p>
        </div>
      </div>
    );
  }
};

export const ContactForm = ({
  showForm,
  hideForm,
  submitHandler,
  referFriend,
}: modalProps) => {
  const [contactForm] = Form.useForm();
  const [isSmallScreen, setIsSmallScreen] = useState(false);


    // State options
    const stateOptions = [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
      "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
      "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
      "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
      "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
      "West Bengal", "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh",
    ];
  
    // Stream options
    const streamOptions = [
      "Science", "Commerce", "Arts", "Engineering", "Medical",
      "Law", "Management", "Education", "Other",
    ];
  


  const validateHandler = async () => {
    const values = await contactForm.validateFields();
    // if(contactForm.isFieldsValidating()){
    submitHandler(values);
    contactForm.resetFields();
    // }else{
    //   errorAlert();
    // }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the width threshold as needed
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MyModal
      open={showForm}
      cancelHandler={hideForm}
      submitHandler={validateHandler}
    >
      <MyRow>
        {/* Title Section */}
        <MyCol className="text-center flex justify-center font-poppins w-full mb-4">
          <MyText variant="title" level={4} style={{fontWeight:'700'}}>
            {referFriend
              ? "Refer a Friend, Win Up to ₹1000 Paytm Cashback!"
              : "Shape Your Dreams: Submit Your Details Now."}
          </MyText>
        </MyCol>
      
        {/* Image Section */}
        <MyCol span={isSmallScreen ? 24 : 14} className="flex justify-center items-center">
          {/* <img
            src={`/icons/home/voicecall.png`}
            alt="contactForm"
            className="object-cover w-full max-w-[300px] h-auto rounded-xl shadow-lg"
          /> */}
          <div className="popup-left-content bg-[#983fd4] p-5 justify-center items-center rounded-l-lg hidden sm:flex">

            <div className="why-register font-poppins mt-4 p-4 rounded-lg text-sm text-white">
              <h1 className="font-semibold text-white text-2xl mb-2">Why register with us?</h1>
              <ul className="list-disc pl-5 space-y-4">
                  <li>25000+ Students Counseled, Absolutely Free of Cost</li>
                  <li>Get help from our experts in finding the right college for you</li>
                  <li>With a totally online admission process, we help you get college admission without having to step out</li>
                  <li>You won’t get unwanted calls from third parties</li>
              </ul>
            </div>
          </div>
        </MyCol>
      
        {/* Form Section */}
        <MyCol span={isSmallScreen ? 24 : 10} className="bg-purple-50 p-6 rounded-xl shadow-xl mt-2">
          <MyForm form={contactForm}>
            <FormInput
              name="Name"
              required={true}
              type="text"
              pattern={/^[a-zA-Z\s]*$/}
              
            />
            <FormInput
              name="Phone"
              required={true}
              type="tel"
              max={10}
              pattern={/^[0-9]{10}$/}
              
            />
            <FormInput
              name="Email"
              required={true}
              type="email"
              
            />
             {/* State Dropdown */}
             <FormInput
              name="state"
              required={true}
              type="select"
              options={stateOptions.map((state) => ({
                value: state,
                label: state,
              }))}
            />

            {/* Stream Dropdown */}
            <FormInput
              name="stream"
              required={true}
              type="select"
              options={streamOptions.map((stream) => ({
                value: stream,
                label: stream,
              }))}
              
            />
          </MyForm>
        </MyCol>
      </MyRow>
    </MyModal>
  );
};
