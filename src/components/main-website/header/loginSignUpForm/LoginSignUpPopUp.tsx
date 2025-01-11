import { useState } from "react";
import { auth, provider } from "src/firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { Modal,Button } from "antd";
import { setUserData } from "src/redux/userSlice";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import './login.css'

export default function LoginSignUpPopUp({ modalIsOpen, closeModal }: any) {

  const [isHovered, setIsHovered] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [value, setValue] = useState(null);
  const [isForgot, setIsForgot] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setIsForgot(false)
    if (showRegisterForm == true) {
      setShowRegisterForm(!showRegisterForm);
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    if (showLoginForm == true) {
      setShowLoginForm(!showLoginForm);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    closeModal();
  };
  const Forgot = () => {
    setIsForgot(!isForgot);
  };
  const handleGoogleClick = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        setValue(result.user.email);

        // /-------------------- store data in session and redux user state----------
        const userData = {
          email: result.user.email,
          photoUrl: result.user.photoURL,
          uid: result.user.uid
        }
        sessionStorage.setItem("user", JSON.stringify(userData));
        dispatch(setUserData(userData));
        closeModal();
        // console.log("Authentication successful:", result);
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        footer={null}
        className="loginModal"
        width="auto"
        style={{ padding: "24px", maxWidth: "60rem" }} 
      >
        <div className="flex flex-col-reverse md:flex-row gap-5">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md custom-video">
            <div className="relative w-full h-full object-cover overflow-hidden">
            {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full custom-video"
                >
                <source src="./logo/7683446-hd_1080_1920_30fps.mp4" type="video/mp4" />
              </video>
         
              {/* Text Overlay */}
              <div className="relative font-poppins w-full md:w-1/2 opacity-100 z-10 rounded-lg shadow-md mx-auto custom-text">
               <h2 className="text-3xl text-white font-bold mb-4">Welcome Back!</h2>
               <p className="text-white">
               Login or register to access exclusive features, manage your account, and explore more.
               </p>
              </div>
         
             {/* Optional Overlay for Dimming the Video */}
             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>
           </div>
          </div>
  
          {/* Right Side - Forms */}
          <div className="w-full md:w-1/2">
            <div className="HeadingPop flex justify-between mb-4">
              <Button
                onClick={handleLoginClick}
                className="popUpheadin flex-1 text-center"
                style={{
                  borderBottom: showLoginForm ? "2px solid blue" : "none",
                  color: "black",
                }}
              >
                Login
              </Button>
              <Button
                onClick={handleRegisterClick}
                className="popUpheadin2 flex-1 text-center"
                style={{
                  borderBottom: showRegisterForm ? "2px solid blue" : "none",
                  color: "black",
                }}
              >
                Register
              </Button>
            </div>
  
            {showLoginForm && (
              <LoginForm
                handleSubmit={handleSubmit}
                closeModal={closeModal}
                forgotPassword={Forgot}
                isForgot={isForgot}
                value={value}
                isHovered={isHovered}
                handleGoogleClick={handleGoogleClick}
                setIsHovered={setIsHovered}
              />
            )}
            {showRegisterForm && (
              <RegisterForm
                handleGoogleClick={handleGoogleClick}
                setShowLoginForm={setShowLoginForm}
                setShowRegisterForm={setShowRegisterForm}
              />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
  
}

