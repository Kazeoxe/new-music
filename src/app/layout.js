import localFont from "next/font/local";
import "./globals.css";
import Loader from "./component/Loader";

const round8four = localFont({
  src: "./fonts/Round8four.woff",
  variable: "--font-round8four",
  weight: "100 900",
});

const trashSecret = localFont({
  src: "./fonts/TrashSecret.woff",
  variable: "--font-trash-secret",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${round8four.variable}  ${trashSecret.variable} antialiased overflow-hidden `}
      >
        <Loader />
        <h1
          className="  text-[380px] fixed w-full
         h-full flex justify-end z-50 text-white py-1 px-2 pr-11 items-end
         overflow-hidden"
        >
          <p className="counter font-round8four flex">0</p>
        </h1>
        <div className="overlay fixed w-screen h-screen z-10 flex">
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
          <div className="w-[10vw] h-[105vh] bg-[red] bar"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
