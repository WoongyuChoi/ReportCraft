import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Pretendard",
  fonts: [
    { src: "./ttf/Pretendard-Thin.ttf", fontWeight: 100 },
    { src: "./ttf/Pretendard-ExtraLight.ttf", fontWeight: 200 },
    { src: "./ttf/Pretendard-Light.ttf", fontWeight: 300 },
    { src: "./ttf/Pretendard-Regular.ttf", fontWeight: 400 },
    { src: "./ttf/Pretendard-Medium.ttf", fontWeight: 500 },
    { src: "./ttf/Pretendard-SemiBold.ttf", fontWeight: 600 },
    { src: "./ttf/Pretendard-Bold.ttf", fontWeight: 700 },
    { src: "./ttf/Pretendard-ExtraBold.ttf", fontWeight: 800 },
    { src: "./ttf/Pretendard-Black.ttf", fontWeight: 900 },
  ],
});
