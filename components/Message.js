import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { notifyDelete } from "../store/notification/notificationSlice";
import { useDispatch } from "react-redux";

function Message({ message }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timerID = setTimeout(() => {
      dispatch(notifyDelete(message.id));
    }, 5000);
    // returning a cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [dispatch, message.id]);

  return (
    <div
      className={`alert flex flex-row items-center p-4 rounded border-b-2 fixed right-0 top-8 z-50 ${
        message.type === "success"
          ? "bg-green-100  border-green-300"
          : "bg-red-100  border-red-300"
      }`}
    >
      <div
        className={`alert-icon flex items-center justify-center h-6 w-6 flex-shrink-0 rounded-full border-2 z-50 ${
          message.type === "success"
            ? "bg-green-100 border-green-500"
            : "bg-red-100  border-red-500"
        }`}
      >
        <span
          className={` ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.type === "success" ? <FaCheck /> : <FaTimes />}
        </span>
      </div>
      <div className="alert-content ml-4">
        <div
          className={`alert-description text-sm ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}

export default Message;
