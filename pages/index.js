import Head from 'next/head'
import Nav from '../components/Nav';
import Main from '../components/Main';
import Clients from '../components/Clients';

export default function Home() {
  return (
    <div className="relative overflow-hidden h-screen">
      <Nav/>
      <Main/>
    </div>
  )
}
