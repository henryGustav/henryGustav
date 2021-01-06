import 'antd/dist/antd.css'
import '../public/css/bootstrap.min.css'

import 'react-responsive-modal/styles.css'
import '../public/css/styles.css'

import '../public/css/font-awesome.min.css'
import DatosProvider from '../context/DatosContext'
export default function MyApp ({ Component, pageProps }) {
  return (
 
    <DatosProvider>
        <Component {...pageProps} />
    </DatosProvider>


  )
}
