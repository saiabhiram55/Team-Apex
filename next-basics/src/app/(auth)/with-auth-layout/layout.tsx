export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <h3>Inner Layout</h3>
            {children}
        </>  
    )
  }
  