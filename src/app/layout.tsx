import type { Metadata } from 'next';
import '../index.css';
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
   <html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">{children}</div>
  </body>
</html>
    )
}