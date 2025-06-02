import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Movoo">
      <Image src={LogoImg} width={32} height={32} alt="Movoo Docs" />
    </Link>
  )
}
