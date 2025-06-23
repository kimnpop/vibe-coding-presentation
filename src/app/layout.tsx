import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kakaoSmall = localFont({
  src: [
    {
      path: "../../public/fonts/KakaoSmall-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/KakaoSmall.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/KakaoSmall-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kakao-small",
  display: "swap",
});

const kakaoBig = localFont({
  src: [
    {
      path: "../../public/fonts/KakaoBig.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/KakaoBig-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/KakaoBig-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-kakao-big",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI 업무 혁신 Pitch Deck",
  description: "AI를 통한 업무 영역 혁신 프레젠테이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${kakaoSmall.variable} ${kakaoBig.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
