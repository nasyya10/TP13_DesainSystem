import "./globals.css"

export const metadata = {
  title: "TP-13 Desain System",
  description: "Design System untuk komponen UI florist - Header, Card, Button, Footer, Sidebar",
  icons: {
    icon: "/icon.jpg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
