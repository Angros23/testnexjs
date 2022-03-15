import Link from 'next/link'
import {MainLayout} from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
       <h1 className={'title'}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/contact">Contact</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/Princing.js</code>
        </p>
    </MainLayout>
      
  )
}
