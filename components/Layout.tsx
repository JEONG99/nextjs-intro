import { ReactNode } from "react";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
