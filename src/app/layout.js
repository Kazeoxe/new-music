import localFont from "next/font/local";
import "./globals.css";
import Loader from "./utils/Loader";
import SmoothScroll from "./utils/SmoothScroller";

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

const anton = localFont({
  src: "./fonts/Anton.woff",
  variable: "--font-anton",
  weight: "100 900",
});

const IBMPlexMono = localFont({
  src: "./fonts/IBMPlexMono.woff",
  variable: "--font-IMBPlexMono",
  weight: "100 900",
})

export const metadata = {
  title: "Creepy Nuts",
  description: "Music group of DJ松永 and R-指定",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${round8four.variable}  ${IBMPlexMono.variable} ${trashSecret.variable} ${anton.variable} antialiased`}
      >
        <div className="loader">
          <Loader />
          <h1
            className="  text-[380px] fixed w-full
         h-full flex justify-end z-50 text-white py-1 px-2 pr-11 items-end"
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
        </div>
        
          <main>{children}</main>
        
      </body>
    </html>
  );
}
