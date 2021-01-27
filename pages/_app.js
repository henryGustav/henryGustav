import 'antd/dist/antd.css'
import '../public/css/bootstrap.min.css'

import 'react-responsive-modal/styles.css'
import '../public/css/index.css'

import '../public/css/font-awesome.min.css'
import DatosProvider from '../context/DatosContext'
import ModalProvider from '../context/ModalContext'
export default function MyApp ({ Component, pageProps }) {
  return (
    <DatosProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </DatosProvider>
  )
}
