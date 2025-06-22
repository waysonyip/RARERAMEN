const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const product = [
  {
    id: 1,
    title: "Lemonade",
    prices: {
      "Regular": 21.50,
      "Large": 26.50,
      "Extra Large": 39.50,
    },
    size: [
      {
        img: "./img/Product/gyuniku.png"
      }
    ]
  },
  {
    id: 2,
    title: " SPICY GYUNIKU RAMEN",
    prices: {
      "Regular": 22.00,
      "Larger": 27.00,
      "Extra Large": 40.00,
    },
    size: [
      {
        img: "./img/Product/spgyuniku.png"
      }
    ]
  },
  {
    id: 3,
    title: "KAISEN RAMEN",
    prices: {
      "Regular": 31.50,
      "Large": 36.00,
      "Extra Large": 45.00,
    },
    size: [
      {
        img: "./img/Product/seefood.png"
      }
    ]
  },
  {
    id: 4,
    title: "SPICY KAISEN RAMEN",
    prices: {
      "Regular": 32.00,
      "Large": 36.00,
      "Extra Large": 45.00,
    },
    size: [
      {
        img: "./img/Product/spseefood.png"
      }
    ]
  },
  {
    id: 5,
    title: "CHICKEN RAMEN",
    prices: {
      "Regular": 20.00,
      "Large": 25.00,
      "Extra Large": 30.00,
    },
    size: [
      {
        img: "./img/Product/chicken.png"
      }
    ]
  }
];

let choosenProduct = product[0]; // 默认选择第一个产品

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// 1. 页面加载时默认显示Small价格
currentProductPrice.textContent = "RM" + choosenProduct.prices["Reguler"]; // 默认显示Small价格

// 当菜单项被点击时，切换产品
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // 切换当前的幻灯片
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // 更改选中的产品
    choosenProduct = product[index]; // 修改为正确的数组名称

    console.log(choosenProduct);

    // 更改产品的文本信息
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.prices["Regular"]; // 更新为默认Small价格
    currentProductImg.src = choosenProduct.size[0].img;

    // 重置尺寸按钮样式，确保默认选中 Small 按钮
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    currentProductSizes[0].style.backgroundColor = "black"; // 默认选中 Small
    currentProductSizes[0].style.color = "white"; // 默认选中 Small

    // 为每个颜色设置样式（如果需要）
    // currentProductColors.forEach((color, index) => {
    //   color.style.backgroundColor = choosenProduct.colors[index].code;
    // });
  });
});

// 颜色点击事件（假设你有颜色的处理逻辑）
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img; // 如果有颜色，可以更改图片
  });
});

// 大小点击事件
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    // 重置其他大小的样式
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    // 设置当前选中大小的样式
    size.style.backgroundColor = "black";
    size.style.color = "white";
    
    // 更新价格为选中大小的价格
    console.log(size.textContent);
    currentProductPrice.textContent = "RM" + choosenProduct.prices[size.textContent];
  });
});

// "Buy Now" 按钮点击事件
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  // 确保正确的产品信息传递到支付页面
  console.log("You are buying: ", choosenProduct);  // 检查当前选择的产品
  payment.style.display = "flex";  // 显示支付弹窗
});

close.addEventListener("click", () => {
  payment.style.display = "none";  // 隐藏支付弹窗
});
