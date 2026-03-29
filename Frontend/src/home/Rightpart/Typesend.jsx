// import React, { useState } from "react";
// import { IoSend } from "react-icons/io5";
// import useSendMessage from "../../context/useSendMessage.js";

// function Typesend() {
//   const [message, setMessage] = useState("");
//   const { loading, sendMessages } = useSendMessage();

//   const handleSubmit = async (e) => {
//     console.log(e);
//     e.preventDefault();
//     await sendMessages(message);
//     setMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex space-x-1 h-[8vh]  bg-gray-800">
//         <div className=" w-[70%] mx-4">
//           <input
//             type="text"
//             placeholder="Type here"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border border-gray-700 rounded-xl outline-none mt-1 px-4 py-3 w-full"
//           />
//         </div>
//         <button>
//           <IoSend className="text-3xl" />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Typesend;




import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-3 py-2 bg-gray-900">
      <div className="flex items-center bg-gray-800 rounded-2xl px-3 py-2 shadow-md">
        
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2 py-2"
        />

        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition duration-200"
        >
          <IoSend className="text-xl text-white" />
        </button>

      </div>
    </form>
  );
}

export default Typesend;






