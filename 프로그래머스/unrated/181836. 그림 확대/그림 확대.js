function solution(picture, k) {
  const rows = picture.length; // 현재 그림 파일의 행 수
  const cols = picture[0].length; // 현재 그림 파일의 열 수
  
  // 가로로 k배 확장한 열 수와 세로로 k배 확장한 행 수
  const enlargedRows = rows * k;
  const enlargedCols = cols * k;
  
  // k배 확장한 그림 파일을 저장할 배열
  const enlargedPicture = [];
  
  // 현재 그림 파일의 픽셀을 k배 확장한 그림 파일에 복사
  for (let i = 0; i < rows; i++) {
    const row = picture[i];
    const enlargedRow = [];
    
    for (let j = 0; j < cols; j++) {
      const pixel = row[j];
      
      // k배 확장된 행의 픽셀을 생성
      const enlargedPixel = pixel.repeat(k);
      enlargedRow.push(enlargedPixel);
    }
    
    // k배 확장된 행을 그림 파일에 추가
    for (let r = 0; r < k; r++) {
      enlargedPicture.push(enlargedRow.join(""));
    }
  }
  
  return enlargedPicture;
}