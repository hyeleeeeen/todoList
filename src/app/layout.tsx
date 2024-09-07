import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hello, It is TodoList !",
  description: "My todoList",
};

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode; // modal prop 추가
}

export default function RootLayout({
  children,
  modal,
}: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
