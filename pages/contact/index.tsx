import Link from 'next/link'
import {MainLayout} from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (

    <MainLayout>
      <h1 className={'title'}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home Page</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/ContactPage.js</code>
        </p>
    </MainLayout>
  )
}
