// import React, { useState } from "react";
// import { TbMessageChatbot } from "react-icons/tb";
// const Chatbot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<
//     { sender: string; text: string }[]
//   >([
//     {
//       sender: "chatbot",
//       text: 'Greetings from CareerBanao Education!<br>Guidance regarding course?<br>Connect to us at +91-8750092628',
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [step, setStep] = useState(0);

//   const toggleChat = () => setIsOpen(!isOpen);

//   const sendMessage = () => {
//     if (!inputValue.trim()) return;

//     setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

//     if (step === 0) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text: "May I know which course you are looking for?",
//         },
//       ]);
//       setStep(1);
//     } else if (step === 1) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text: "Could you please help me with your <br>NAME:<br> PHONE NUMBER: ?",
//         },
//       ]);
//       setStep(2);
//     } else if (step === 2) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text: "Are you connected to any other counselor?",
//         },
//       ]);
//       setStep(3);
//     } else if (step === 3) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text:
//             "Thank you for reaching out to us!<br>Our Program expert CareerBanao Mentor will contact you shortly.<br>Meanwhile, please do not share your number with any other source to avoid multiple calls.",
//         },
//       ]);
//       setStep(4);
//     }

//     setInputValue("");
//   };

//   return (
//     <div>
//       {/* Chat Icon */}
//       <div
//         className="fixed bottom-10 right-5 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-lg z-50 transition-transform transform hover:scale-110"
//         onClick={toggleChat}
//       >
//         <div className="relative">
          
//           <TbMessageChatbot className="rounded-full w-10 h-10 border-2 border-white"/>
//           <span className="absolute top-0 left-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//             1
//           </span>
//         </div>
//       </div>

//       {/* Chatbot */}

//       {isOpen && (
//         <div className="fixed bottom-24 right-5 font-poppins w-80 max-w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
//           {/* Chat Header */}
//           <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-t-lg">
//             <div className="text-lg font-bold flex items-center gap-2">
//               <img
//                 src="./logo/CBlogo.jpg"
//                 alt="CareerBanao"
//                 className="h-8 w-8 rounded-full"
//               />
//               <h2 className="text-white">CareerBanao Mentor</h2>
//             </div>
//             <button className="text-2xl" onClick={toggleChat}>
//               &times;
//             </button>
//           </div>

//           {/* Chat Body */}
//           <div className="h-64 overflow-y-auto px-4 py-2 bg-gray-50">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`p-2 mb-2 max-w-[75%] rounded-lg shadow-md text-sm ${
//                   message.sender === "user"
//                     ? "bg-purple-100 ml-auto"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 <p dangerouslySetInnerHTML={{ __html: message.text }} />
//               </div>
//             ))}
//           </div>

//           {/* Chat Footer */}
//           {step < 4 && (
//             <div className="flex items-center px-4 py-2 bg-gray-100 rounded-b-lg">
//               <input
//                 type="text"
//                 className="flex-grow border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="Type a message..."
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

import React, { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import "./Chatbot.css"; // Custom CSS for animations
import { CSSTransition } from "react-transition-group";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: string; text: string }[]
  >([
    {
      sender: "chatbot",
      text: 'Greetings from CareerBanao Education!<br>Guidance regarding course?<br>Connect to us at +91-8750092628',
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

    if (step === 0) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "May I know which course you are looking for?",
        },
      ]);
      setStep(1);
    } else if (step === 1) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "Could you please help me with your <br>NAME:<br> PHONE NUMBER: ?",
        },
      ]);
      setStep(2);
    } else if (step === 2) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "Are you connected to any other counselor?",
        },
      ]);
      setStep(3);
    } else if (step === 3) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text:
            "Thank you for reaching out to us!<br>Our Program expert CareerBanao Mentor will contact you shortly.<br>Meanwhile, please do not share your number with any other source to avoid multiple calls.",
        },
      ]);
      setStep(4);
    }

    setInputValue("");
  };

  return (
    <div>
      {/* Chat Icon */}
      <div
        className="fixed bottom-10 right-5 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-lg z-50 transition-transform transform hover:scale-110"
        onClick={toggleChat}
      >
        <div className="relative">
          <TbMessageChatbot className="rounded-full w-10 h-10 border-2 border-white" />
          <span className="absolute top-0 left-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            1
          </span>
        </div>
      </div>

      {/* Chatbot */}
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="chatbot"
        unmountOnExit
      >
        <div className="fixed bottom-24 right-5 font-poppins w-80 max-w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-t-lg">
            <div className="text-lg font-bold flex items-center gap-2">
              <img
                src="./logo/CBlogo.jpg"
                alt="CareerBanao"
                className="h-8 w-8 rounded-full"
              />
              <h2 className="text-white">CareerBanao Mentor</h2>
            </div>
            <button className="text-2xl" onClick={toggleChat}>
              &times;
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-64 overflow-y-auto px-4 py-2 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 max-w-[75%] rounded-lg shadow-md text-sm ${
                  message.sender === "user"
                    ? "bg-purple-100 ml-auto"
                    : "bg-gray-200"
                }`}
              >
                <p dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
          </div>

          {/* Chat Footer */}
          {step < 4 && (
            <div className="flex items-center px-4 py-2 bg-gray-100 rounded-b-lg">
              <input
                type="text"
                className="flex-grow border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Chatbot;
