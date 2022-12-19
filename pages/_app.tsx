import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil"
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('../pages/index'), {
  ssr: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Home/>
    </RecoilRoot>
  )
}
