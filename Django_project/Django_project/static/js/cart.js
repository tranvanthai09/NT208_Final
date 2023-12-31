document.addEventListener("DOMContentLoaded", function () {
    // Lấy giá trị 'cartItems' từ localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    var productHTML = '';
    var totalQuantity = 0;
    var totalPrice = 0;

    // Duyệt qua mỗi sản phẩm trong giỏ hàng và cập nhật thông tin vào phần HTML
    cartItems.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
        // Tạo HTML cho từng sản phẩm và cập nhật thông tin từ cartItems vào đây
        productHTML += `
        <div class="miditem">
            <div class="product">
                <div class="product-img">
                    <img src="/  static/${item.img}" alt="" />
                </div>
                <div class="product-x">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <h3 class="product-name">${item.product_name}</h3>
            </div>
            <div class="price">
                <div class="price-number">$${item.price}</div>
            </div>
            <div class="quantity">
                <i class="fa fa-plus" aria-hidden="true"></i>
                <span>${item.quantity}</span>
                <i class="fa-solid fa-minus"></i>
            </div>
            <div class="subtotal">
                <div class="subtotal-number">$${item.price * item.quantity}</div>
            </div>
            </div>
        `;
    });
    
    $('.miditem_container').html(productHTML);
    const quantityDisplay = document.getElementById("quantityDisplay");
    quantityDisplay.textContent = totalQuantity 

    const priceDisplay = document.getElementById("priceDisplay");
    priceDisplay.textContent = "$" + totalPrice


    $('.delete_cart').click(function() {
        localStorage.removeItem('cart'); // 'cart' là tên của item trong localStorage cần xóa
        alert('Đã xóa giỏ hàng!'); // Thông báo khi xóa thành công'
        location.reload();
    });
});
