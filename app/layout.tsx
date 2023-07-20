import './globals.css'

export const metadata = {
  title: 'Marco Martinez | Software Engineer',
  description: 'Portfolio and Projects',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="px-4" >{children}</body>
    </html>
  )
}

export default RootLayout