import "./globals.css"

export const metadata = {
  title: "Styled-Pasya UI",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
