import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Port</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/task/new">
                <li>Create a task</li>
              </Link>
              <Link href="/profile/new">
                <li>create a Profile</li>
              </Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
