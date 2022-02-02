import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from "../store/store";
import {FC} from "react";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;

// export default MyApp
export default wrapper.withRedux(WrappedApp);
