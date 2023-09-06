import "bootstrap/dist/css/bootstrap.min.css"; // Importez le fichier CSS de Bootstrap
import { Provider } from "react-redux";
import "../styles/globals.css"; // Importez votre fichier globals.css ici
import type { AppProps } from "next/app";
import store from "@/redux/store";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <div className="my-global-class">
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      </>
      <Component {...pageProps} />
    </div>
  </Provider>
);

export default MyApp;
