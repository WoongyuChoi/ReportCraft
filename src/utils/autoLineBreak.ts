export const autoLineBreak = (text: string, numColumns: number) => {
  const pageWidth = 595.28; // A4 너비 (points)
  const pagePadding = 40; // 페이지 여백
  const tableWidth = pageWidth - pagePadding * 2; // 실제 테이블 너비
  const maxCharsPerLine = Math.floor(tableWidth / numColumns / 7); // 문자당 7px 가정

  const lines = [];
  let currentLine = "";

  for (let char of text) {
    currentLine += char;
    if (currentLine.length >= maxCharsPerLine) {
      lines.push(currentLine);
      currentLine = "";
    }
  }
  lines.push(currentLine); // 마지막 줄 추가
  return lines.join("\n");
};
