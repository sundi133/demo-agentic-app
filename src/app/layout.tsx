export const metadata = {
  title: "Demo Agentic App",
  description: "Agentic app with tools for security testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
