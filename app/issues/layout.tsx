export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body style={{ backgroundColor: "#fbfbfe" }}>
          <div className="flex">
        
          </div>
  
          <main>{children}</main>
        </body>
      </html>
    );
  }
  