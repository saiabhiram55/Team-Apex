import { Metadata } from "next"
export const metadata : Metadata = {
  title:{
    absolute: "",                                      // blog page 
    default:"Next.js Tutorial - Codevolution  ",       // any page 
    template:"%s | codevolution ",                     //about page 
  }, 
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header 
      style={{
        backgroundColor:"lightblue", 
        padding:"1rem",
      }}>
        <p> header </p>
      </header>
      {children}
      <footer
      style={{
        backgroundColor:"ghostwhite",
        padding:"1rem",
      }} 
      >
        <p> Footer</p>
      </footer></body>
      
    </html>
  )
}
