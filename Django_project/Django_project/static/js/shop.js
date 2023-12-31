$(document).ready(function() {
    // Thực hiện Ajax 
    $('.btn_category').click(function() {
        var component = $(this).data('component');
        $.ajax({
            url: "get_products/" + component + "/",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var productHTML = '';
                $.each(data, function(index, product) {
                    console.log(product)
                    productHTML += '<div class="col-sm-4 product">';
                    productHTML += '<img src="/  static/' + encodeURL(product.img_url) + '" alt="img_product" class="img_product">';
                    productHTML += '<h4>' + product.product_name + '</h4>';
                    productHTML += '<div class="cost">' + product.price + '</div>';
                    productHTML += '<button class="btn btn-outline-dark addToCart" data-product-id="'+ product.product_id + '" + data-product-name="' + product.product_name +'" data-product-price="'+ product.price +'" data-product-img="' + product.img_url+ '">Add to cart</button>';
                    productHTML += '<a href="/product/'+ product.slug + '.p-' + product.product_id + '">';
                    productHTML += '<button class="btn btn-outline-dark">Chi tiết sản phẩm</button>';
                    productHTML += '</a>'
                    productHTML += '<input type="button" value="-" onclick="minusQuantity()" class="btn">';
                    productHTML += '<input type="text" id="quantity" name="quantity" value="1">';
                    productHTML += '<input type="button" value="+" onclick="plusQuantity()" class="btn">';
                    
                    productHTML += '</div>';
                });

                $('.product_container').html(productHTML);
            }
        });
    });

    // Giảm giá trị số lượng sản phẩm
    $('.decreaseBtn').click(function() {
        var productId = $(this).data('product-id');
        var inputElement = $('.quantityInput[data-product-id="' + productId + '"]');
        var currentValue = parseInt(inputElement.val());
        if (currentValue > 1) {
            inputElement.val(currentValue - 1);
        }
    });

    // Tăng giá trị số lượng sản phẩm 
    $('.increaseBtn').click(function() {
        var productId = $(this).data('product-id');
        var inputElement = $('.quantityInput[data-product-id="' + productId + '"]');
        var currentValue = parseInt(inputElement.val());
        inputElement.val(currentValue + 1);
    });
});

// Chuyển đổi URL thành dạng thích hợp
function encodeURL(inputString) {
    return inputString.replace(/ /g, '%20');
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".addToCart");

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productId = button.getAttribute("data-product-id");
            const productName = button.getAttribute("data-product-name");
            const productPrice = button.getAttribute("data-product-price");
            const productImg = button.getAttribute("data-product-img");
            
            const parentDiv = button.closest(".product");
            let quantityInput = null;
            
            // Kiểm tra xem parentDiv có tồn tại không và tìm quantityInput trong parentDiv
            if (parentDiv) {
                quantityInput = parentDiv.querySelector('.quantityInput');
            }

            // Nếu quantityInput không tồn tại hoặc null, gán giá trị mặc định là 1
            let quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            
            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cartItems.find(item => item.product_id === productId);


            if (existingProduct) {
                existingProduct.quantity += quantity; // Tăng số lượng nếu sản phẩm đã tồn tại trong giỏ hàng
            } 
            else {
                // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng với số lượng là 1
                const productInfo = {
                    "product_id": productId,
                    "product_name": productName,
                    "price": productPrice,
                    "img": productImg,
                    "quantity": quantity
                };
                cartItems.push(productInfo);
            }

            localStorage.setItem("cart", JSON.stringify(cartItems));
            
            
            alert("Sản phẩm đã được thêm vào giỏ hàng!");

            const cartCount = document.getElementById("cart-count");
            if (cartCount) {
                cartCount.textContent = calculateTotalQuantity(cartItems);
            }
        });
    });

    // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
    function calculateTotalQuantity(cartItems) {
        let totalQuantity = 0;
        cartItems.forEach(item => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }
});