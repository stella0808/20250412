let img; // 宣告變數來儲存圖片
let slider; // 宣告滑桿變數
let circles = []; // 儲存圓圈的資訊

function preload() {
  img = loadImage("相片1.jpg"); // 載入圖片檔案
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP); // 設定文字對齊方式為左上角
  slider = createSlider(10, 40, 20); // 建立滑桿，範圍為 10 到 40，初始值為 20
  slider.position(50, 20); // 設定滑桿的位置
  slider.style("background", "#669bbc"); // 設定滑桿的背景顏色

  // 初始化圓圈
  for (let i = 0; i < 50; i++) {
    circles.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(20, 50), // 隨機大小
      color: color(random(100, 255), random(100, 255), random(100, 255)), // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background("#bde0fe");

  // 繪製圓圈
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let dynamicSize = circle.size + map(mouseX, 0, width, -10, 30); // 根據滑鼠位置調整大小
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, dynamicSize);
  }

  // 根據滑桿的值設定文字大小
  let textSizeValue = slider.value();
  textSize(textSizeValue);

  // 設定文字顏色為黑色
  fill(0);

  // 顯示文字
  let textContent = "大家好我是許思騏，我喜歡看小說、聽音樂、烹飪、吃美食和睡覺，小說的話什麼類型都喜歡，音樂的話喜歡聽中文歌，烹飪的話在空閒的時候，我會嘗試做不同的甜點，像是餅乾和奶酪等，吃美食和睡覺則是我的最愛。";
  let maxWidth = width / 2 - 50; // 限制文字的最大寬度為視窗的一半
  let words = textContent.split(""); // 將文字分成單個字元
  let currentLine = "";
  let y = 80; // 將第一行的起始 y 座標調整為 80

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i];
    if (textWidth(testLine) > maxWidth) {
      text(currentLine, 50, y); // 繪製當前行
      currentLine = words[i]; // 開始新的一行
      y += textSize() + 5; // 調整行高
    } else {
      currentLine = testLine;
    }
  }

  // 繪製最後一行
  if (currentLine) {
    text(currentLine, 50, y);
  }

  // 如果滑鼠在視窗的右半邊，顯示圖片
  if (mouseX > width / 2) {
    let imgX = width / 2 + 50; // 圖片的 x 座標
    let imgY = 50; // 圖片的 y 座標
    let imgWidth = (width / 2 - 100) * 0.7; // 縮小圖片寬度為原來的 80%
    let imgHeight = (img.height / img.width) * imgWidth; // 根據圖片比例計算高度
    image(img, imgX, imgY, imgWidth, imgHeight);
  }
}
