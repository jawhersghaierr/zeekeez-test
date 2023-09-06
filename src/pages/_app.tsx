import "../styles/globals.css";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import store from "@/redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
