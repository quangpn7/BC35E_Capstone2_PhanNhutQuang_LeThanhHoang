function renderContent(arrProduct) {
  //   CONTENT GRID
  var contentProduct = "";
  for (var i = 0; i < arrProduct.length; i++) {
    var product = arrProduct[i];
    contentProduct += `
      <div class="product__item col">
              <div class="item-upper">
                <img width="334" src="${product.image}" />
                <div class="item-text">
                  <p >${
                    product.name.length > 20
                      ? product.name.substr(0, 20) + "..."
                      : product.name
                  }</p>
                  <span>${
                    product.description.length > 50
                      ? product.shortDescription.substr(0, 50) + "..."
                      : product.shortDescription
                  }</span>
                </div>
              </div>
              <div class="item-bottom d-flex align-items-center">
                <a href="./detail.html?id=${product.id}" class="btn">Buy now</a>
                <span class="item-price btn">${product.price}$</span>
              </div>
            </div>
      `;
  }
  document.querySelector("#productHolder").innerHTML = contentProduct;
}
let getApiDetail = () => {
  let urlParam = new URLSearchParams(window.location.search);
  let id = urlParam.get("id");

  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });
  promise.then(function (result) {
    //GET DETAIL
    let productDetail = result.data.content;
    // console.log(productDetail);
    //DOM PRODUCT IMG
    document.querySelector("#productImage").src = productDetail.image;
    document.querySelector("#productImage").style = "width: 400px";
    //DOM PRODUCT NAME
    document.querySelector("#productName").innerHTML = productDetail.name;
    //DOM DESCRIPTION
    document.querySelector("#productDesc").innerHTML =
      productDetail.description;
    //DOM SIZE

    let sizeBtnContent = "";

    for (let size of productDetail.size) {
      sizeBtnContent += `
      <button class="size__button btn" onclick="addPresseed()">${size}</button
              >
      `;
    }

    document.querySelector("#productSizeHolder").innerHTML = sizeBtnContent;
    //DOM PRICE
    document.querySelector("#productPrice").innerHTML =
      "$" + productDetail.price;
    //DOM RELATED PRODUCTS
    renderContent(productDetail.relatedProducts);
  });
  promise.catch(function (error) {
    console.log(error);
  });
};
getApiDetail();
//ADDITION FUCTION
//FUNCTION INCRE-DECRE
let countProduct = (boolean) => {
  let count = document.querySelector("#count").value * 1;
  if (boolean == true) {
    count += 1;
  } else {
    if (count > 1) count -= 1;
  }
};
//FUNCTION ADD CLASS TO PRESSED SIZE BUTTON
var addPresseed = () => {
  $(".size__button").click(function (e) {
    $(".size__button").removeClass("btn-pressed");

    $(this).addClass("btn-pressed");
    e.preventDefault();
  });
};
