import Image from 'next/image'

const Logo = ({width, height}) => {
  return (
    <Image
      src='/logo.svg'
      width={width}
      height={height}
      alt="Logo Watin"
      priority
    />
  )
}
export default Logo