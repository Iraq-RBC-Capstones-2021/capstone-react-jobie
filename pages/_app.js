import { wrapper } from "../store";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
