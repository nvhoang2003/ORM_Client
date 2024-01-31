import '@/styles/globals.css'
import '@/styles/style.css'
import { ThemeProvider } from "@mui/material"
import theme from '@/styles/theme'
import Layout from '@/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
