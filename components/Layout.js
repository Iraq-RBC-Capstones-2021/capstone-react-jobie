import Footer from "./Footer";
import Navbar from "./Navbar";
import Message from "./Message";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  return (
    <>
      <Navbar />

      {notifications.map((msg) => {
        return <Message message={msg} key={msg.id} />;
      })}

      <main>{children}</main>
      
      <Footer />
    </>
  );
}
