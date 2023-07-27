
// MODAL LOGIC - OPEN / CLOSE

var PriceGalaxyS23 = 5414.50;


const ModalContainer = document.getElementsByClassName("every-modal-container")[0];
var PhonesContainerArray = document.getElementsByClassName("phones-container");

const CloseIconModal = document.getElementsByClassName("close-modal-container");
var TitleModal = document.getElementsByClassName("info-nameAndGiga")[0];

var ArrayPhoneContainer = 0;

var QualificationPhone = document.getElementsByClassName("qualification-number-modal")[0];

var a = false;

for (var i = 0; i < PhonesContainerArray.length; i++) {
    PhonesContainerArray[i].addEventListener('click', (event) => {

        OpColorsGalaxyS23Val = 2;
        ModalContainer.style.display = 'block';

        OpColorsGalaxyS23[0].style.borderLeft = '1px solid #BDBDBD';
        OpColorsGalaxyS23[2].style.borderLeft = '1px solid #BDBDBD';
        OpColorsGalaxyS23[3].style.borderLeft = '1px solid #BDBDBD';
        BallButton.style.background = 'black';
        OpPretoGalaxyS23.style.borderLeft = '4px solid black';
        if (event.target == PhonesContainerArray[0]) {
            TitleModal.innerHTML = 'Samsung Galaxy S23 5G';
            InfoTitleTamanho.innerHTML = '256GB'; // change title info
            InfoButtonTamanho.innerHTML = '<strong>256GB</strong>';
            ArrayPhoneContainer = 1;
            OptionTamanhoVal = 256;
            QualificationPhone.innerHTML = 226;
            ImgGalaxyS23Modal.src = 'img/GalaxyS23 modal Preto.jpeg';
            ReajustmentPrice();
        } else if (event.target == PhonesContainerArray[1]) {
            TitleModal.innerHTML = 'Samsung Galaxy S23+ 5G';
            InfoTitleTamanho.innerHTML = '512GB'; // change title info
            InfoButtonTamanho.innerHTML = '<strong>512GB</strong>'; // change button info
            ArrayPhoneContainer = 2;
            OptionTamanhoVal = 512;
            QualificationPhone.innerHTML = 192;
            ImgGalaxyS23Modal.src = 'img/GalaxyS23 modal Preto.jpeg';
            ReajustmentPrice();
        } else if (event.target == PhonesContainerArray[2]) {
            TitleModal.innerHTML = 'Samsung Galaxy S23 Ultra 5G';
            InfoTitleTamanho.innerHTML = '512GB'; // change title info
            InfoButtonTamanho.innerHTML = '<strong>512GB</strong>'; // change button info
            ArrayPhoneContainer = 3;
            OptionTamanhoVal = 512;
            QualificationPhone.innerHTML = 108;
            ImgGalaxyS23Modal.src = 'img/Galaxy S23 ultra modal Preto.jpg';
            ReajustmentPrice();
        } else {
            ModalContainer.style.display = 'none';
        }
    });
}

function CloseAllTabsOnModal() {
    ModalContainer.style.display = 'none';
    ModalCarrinhoContainer.style.display = 'none';
    AddToCarModal.style.display = 'none';
    document.getElementsByClassName("changeable-tamanho-text")[0].style.display = 'none';
    document.getElementsByClassName("changeable-cor-text")[0].style.display = 'none';
}

for (var i = 0; i < CloseIconModal.length; i++) {
    CloseIconModal[i].addEventListener('click', function () {
        CloseAllTabsOnModal();
    })
}

function CloseModalContainer() {
    ModalContainer.style.display = 'none';
}

// 'TAMANHO' MODAL LOGIC - OPEN / CLOSE

var TamanhoModalContainer = document.getElementsByClassName("changeable-tamanho-text")[0]; // 'Tamanho' Modal Container
var TamanhoButton = document.getElementsByClassName("tamanhoGb-button-container")[0]; // 'Tamanho' Buttom
TamanhoButton.addEventListener("click", function () {
    TamanhoModalContainer.style.display = 'block';

    if (ArrayPhoneContainer == 1) {
        OptionOneTamanhoModal.innerHTML = '128GB';
        OptionTwoTamanhoModal.innerHTML = '256GB';
    } else {
        OptionOneTamanhoModal.innerHTML = '256GB';
        OptionTwoTamanhoModal.innerHTML = '512GB';
    }
})

ModalContainer.addEventListener("click", (event) => {
    if (event.target.id == 'every-modal-container-id' || event.target.id == 'galaxyS23-modal-container' || event.target.id == 'cor-button-container') {
        document.getElementsByClassName("changeable-tamanho-text")[0].style.display = 'none';
    }
})

ModalContainer.addEventListener("click", (event) => {
    if (event.target.id == 'every-modal-container-id') {
        ModalContainer.style.display = 'none';
    }
})

// CHANGE OPTIONS LOGIC

// Price Phone 
var HtmlPriceGalaxyS23 = document.getElementsByClassName('price-number-modal')[0];

var OptionOneTamanhoModal = document.getElementById("tamanho128gb-text-galaxyS23"); // 128 GB
var OptionTwoTamanhoModal = document.getElementById("tamanho256gb-text-galaxyS23"); // 256 GB
var InfoTitleTamanho = document.getElementById('info-galaxyS23-gigaByte');
var InfoButtonTamanho = document.getElementById('gigaByte-desc-galaxyS23');

var OptionTamanhoVal = 256;

function ReajustmentPrice() { // function to change the price
    if (ArrayPhoneContainer == 1) {
        PriceGalaxyS23 = 5414.50;
        if (OptionTamanhoVal == 256) {
            if (OpColorsGalaxyS23Val == 1) {
                PriceGalaxyS23 = 4851.14;
            } else if (OpColorsGalaxyS23Val == 2) {
                PriceGalaxyS23 = 5414.50;
            } else if (OpColorsGalaxyS23Val == 3) {
                PriceGalaxyS23 = 4499.00;
            } else {
                PriceGalaxyS23 = 4851.14;
            }
        } else {
            if (OpColorsGalaxyS23Val == 1) {
                PriceGalaxyS23 = 4233.90;

            } else if (OpColorsGalaxyS23Val == 2) {
                PriceGalaxyS23 = 4409.00;
            } else if (OpColorsGalaxyS23Val == 3) {
                PriceGalaxyS23 = 4238.01;
            } else {
                PriceGalaxyS23 = 4409.00;
            }
        }
    } else if (ArrayPhoneContainer == 2) {
        PriceGalaxyS23 = 5383.12;
        if (OptionTamanhoVal == 512) {
            if (OpColorsGalaxyS23Val == 1) {
                PriceGalaxyS23 = 5550.97;
            } else if (OpColorsGalaxyS23Val == 2) {
                PriceGalaxyS23 = 5383.12;
            } else if (OpColorsGalaxyS23Val == 3) {
                PriceGalaxyS23 = 5887.78;
            } else {
                PriceGalaxyS23 = 5383.12;
            }
        } else {
            if (OpColorsGalaxyS23Val == 1) {
                PriceGalaxyS23 = 4999.00;
            } else if (OpColorsGalaxyS23Val == 2) {
                PriceGalaxyS23 = 4999.00;
            } else if (OpColorsGalaxyS23Val == 3) {
                PriceGalaxyS23 = 4321.51;
            } else {
                PriceGalaxyS23 = 6999.00;
            }
        }
    } else {
        PriceGalaxyS23 = 7499.00;
        if (OptionTamanhoVal == 512) {
            if (OpColorsGalaxyS23Val == 1) {
                PriceGalaxyS23 = 7315.40;
            } else if (OpColorsGalaxyS23Val == 2) {
                PriceGalaxyS23 = 7499.00;
            } else if (OpColorsGalaxyS23Val == 3) {
                PriceGalaxyS23 = 8059.00;
            } else {
                PriceGalaxyS23 = 8014.68;
            }
        } else {
            if (OpColorsGalaxyS23Val == 1) {
                PriceGalaxyS23 = 7899.90;
            } else if (OpColorsGalaxyS23Val == 2) {
                PriceGalaxyS23 = 7899.90;
            } else if (OpColorsGalaxyS23Val == 3) {
                PriceGalaxyS23 = 7756.36;
            } else {
                PriceGalaxyS23 = 7110.00
                    ;
            }
        }
    }


    HtmlPriceGalaxyS23.innerHTML = PriceGalaxyS23.toFixed(2);
}


OptionOneTamanhoModal.addEventListener("click", function OptionOneTamanhoModalFunction() {

    OptionOneTamanhoModal.style.borderLeft = '3px solid black';
    OptionTwoTamanhoModal.style.borderLeft = '1px solid #BDBDBD';
    TamanhoModalContainer.style.display = 'none'; // close modal

    if (ArrayPhoneContainer == 1) {
        InfoTitleTamanho.innerHTML = '128GB'; // change title info
        InfoButtonTamanho.innerHTML = '<strong>128GB</strong>'; // change button info
        OptionTamanhoVal = 128;
    } else {
        InfoTitleTamanho.innerHTML = '256GB'; // change title info
        InfoButtonTamanho.innerHTML = '<strong>256GB</strong>'; // change button info
        OptionTamanhoVal = 256;
    }

    console.log(OptionTamanhoVal);

    ReajustmentPrice();
})

OptionTwoTamanhoModal.addEventListener("click", function OptionTwoTamanhoModalFunction() {
    OptionTwoTamanhoModal.style.borderLeft = '3px solid black';
    OptionOneTamanhoModal.style.borderLeft = '1px solid #BDBDBD';
    TamanhoModalContainer.style.display = 'none'; // close modal

    if (ArrayPhoneContainer == 1) {
        InfoTitleTamanho.innerHTML = '256GB'; // change title info
        InfoButtonTamanho.innerHTML = '<strong>256GB</strong>'; // change button info
        OptionTamanhoVal = 256;
    } else {
        InfoTitleTamanho.innerHTML = '512GB'; // change title info
        InfoButtonTamanho.innerHTML = '<strong>512GB</strong>'; // change button info
        OptionTamanhoVal = 512;
    }

    console.log(OptionTamanhoVal);

    ReajustmentPrice();
})

// 'COR' MODAL LOGIC - OPEN / CLOSE

var CorModalContainer = document.getElementsByClassName("changeable-cor-text")[0]; // 'Tamanho' Modal Container
var CorButton = document.getElementsByClassName("cor-button-container")[0]; // 'Tamanho' Buttom
CorButton.addEventListener("click", function () {
    CorModalContainer.style.display = 'flex';
})

ModalContainer.addEventListener("click", (event) => {
    if (event.target.id == 'every-modal-container-id' || event.target.id == 'galaxyS23-modal-container' || event.target.id == 'tamanhoGb-button-container') {
        document.getElementsByClassName("changeable-cor-text")[0].style.display = 'none';
    }
})

// OPTIONS 'COR' MODAL

const OpCremeGalaxyS23 = document.getElementById("creme-cor-container");
const OpPretoGalaxyS23 = document.getElementById("preto-cor-container");
const OpVerdeGalaxyS23 = document.getElementById("verde-cor-container");
const OpVioletaGalaxyS23 = document.getElementById("violeta-cor-container");

var OpColorsGalaxyS23 = document.getElementsByClassName("color-ball-container");

var ImgGalaxyS23Modal = document.getElementById("galaxyS23-img-modal-presetation");
var BallButton = document.getElementsByClassName("color-ball-interactive")[0];

var OpColorsGalaxyS23Val = 2;
PhoneColorOnHtml = 'Preto';
OpCremeGalaxyS23.addEventListener("click", function () {
    for (var i = 0; i < OpColorsGalaxyS23.length; i++) {
        OpColorsGalaxyS23[i].style.borderLeft = '1px solid #BDBDBD';
    }
    OpCremeGalaxyS23.style.borderLeft = '4px solid black';

    if (ArrayPhoneContainer == 1 || ArrayPhoneContainer == 2) {
        ImgGalaxyS23Modal.src = 'img/GalaxyS23 modal Creme.jpg';
    } else {
        ImgGalaxyS23Modal.src = 'img/Galaxy S23 ultra modal Creme.jpg';
    }
    BallButton.style.background = '#fffdd0';
    PhoneColorOnHtml = 'Creme';
    OpColorsGalaxyS23Val = 1;


    ReajustmentPrice();
})

OpPretoGalaxyS23.addEventListener("click", function () {
    for (var i = 0; i < OpColorsGalaxyS23.length; i++) {
        OpColorsGalaxyS23[i].style.borderLeft = '1px solid #BDBDBD';
    }
    OpPretoGalaxyS23.style.borderLeft = '4px solid black';

    if (ArrayPhoneContainer == 1 || ArrayPhoneContainer == 2) {

        ImgGalaxyS23Modal.src = 'img/galaxyS23 modal Preto.jpeg';
    } else {
        ImgGalaxyS23Modal.src = 'img/Galaxy S23 ultra modal Preto.jpg';
    }
    PhoneColorOnHtml = 'Preto';
    BallButton.style.background = 'black';

    OpColorsGalaxyS23Val = 2;

    ReajustmentPrice();
})

OpVerdeGalaxyS23.addEventListener("click", function () {
    for (var i = 0; i < OpColorsGalaxyS23.length; i++) {
        OpColorsGalaxyS23[i].style.borderLeft = '1px solid #BDBDBD';
    }
    OpVerdeGalaxyS23.style.borderLeft = '4px solid black';

    if (ArrayPhoneContainer == 1 || ArrayPhoneContainer == 2) {

        ImgGalaxyS23Modal.src = 'img/GalaxyS23 modal Verde.jpg';
    } else {
        ImgGalaxyS23Modal.src = 'img/Galaxy S23 ultra modal Verde.jpg';
    }

    BallButton.style.background = 'rgb(42, 98, 42)';
    PhoneColorOnHtml = 'Verde';
    OpColorsGalaxyS23Val = 3;

    ReajustmentPrice();
})

OpVioletaGalaxyS23.addEventListener("click", function () {
    for (var i = 0; i < OpColorsGalaxyS23.length; i++) {
        OpColorsGalaxyS23[i].style.borderLeft = '1px solid #BDBDBD';
    }
    OpVioletaGalaxyS23.style.borderLeft = '4px solid black';

    if (ArrayPhoneContainer == 1 || ArrayPhoneContainer == 2) {

        ImgGalaxyS23Modal.src = 'img/Galaxy S23 modal violeta.jpg';
    } else {
        ImgGalaxyS23Modal.src = 'img/Galaxy S23 ultra modal Violeta.jpg';
    }

    BallButton.style.background = 'rgb(236, 195, 236)';
    PhoneColorOnHtml = 'Violeta';
    OpColorsGalaxyS23Val = 4;

    ReajustmentPrice();
})

// ADD TO CAR (PRINCIPAL PAGE)

var AddToCarButton = document.getElementsByClassName("buy-product-btn");
const AddToCarModal = document.getElementById("modal-addToCar");
const CloseAddToCarModal = document.getElementById("close-addToCar-modal");
var ArrayAddToCarButton

var PhoneName = document.getElementsByClassName("phones-cards-title");
var PhoneNameOnHtml;

var PhoneImg = document.getElementsByClassName("phones-img");
var PhoneImgOnHtml;

var PhoneColorOnHtml;

// function ColorAddToCarValidation() {
//     if (OpColorsGalaxyS23Val == 1) {
//         PhoneColorOnHtml = 'Creme';
//     } else if (OpColorsGalaxyS23Val == 2) {
//         PhoneColorOnHtml = 'Preto';
//     } else if (OpColorsGalaxyS23Val == 3) {
//         PhoneColorOnHtml = 'Verde';
//     } else if (OpColorsGalaxyS23Val == 4) {
//         PhoneColorOnHtml = 'Violeta';
//     }
//     console.log(PhoneColorOnHtml);
// }


for (var i = 0; i < (AddToCarButton.length - 1); i++) {
    AddToCarButton[i].addEventListener("click", function addToCarPrincipalPageModal(event) {
        AddToCarModal.style.display = 'block';

        OpColorsGalaxyS23Val = 2; // color black
        // ColorAddToCarValidation();
        PhoneColorOnHtml = 'Preto';
        if (event.target == AddToCarButton[0]) { // store values of PRICE, NAME, IMG
            PriceGalaxyS23 = 5414.50;
            PhoneNameOnHtml = PhoneName[0].textContent;
            PhoneImgOnHtml = PhoneImg[0].src;
        } else if (event.target == AddToCarButton[1]) {
            PriceGalaxyS23 = 5383.12;
            PhoneNameOnHtml = PhoneName[1].textContent;
            PhoneImgOnHtml = PhoneImg[1].src;
        } else if (event.target == AddToCarButton[2]) {
            PriceGalaxyS23 = 7499.00
            PhoneNameOnHtml = PhoneName[2].textContent;
            PhoneImgOnHtml = PhoneImg[2].src;
        }
        // console.log(PriceGalaxyS23); // price
        // console.log(PhoneNameOnHtml); // name
        // console.log(PhoneImgOnHtml) // img
        // console.log(PhoneColorOnHtml); // color
        // console.log(OpColorsGalaxyS23Val);

    })
}

CloseAddToCarModal.addEventListener("click", function CloseAddToCarModal() {
    AddToCarModal.style.display = 'none';
})

// ADD TO CAR (PHONE MODAL page)

const AddToCarModalButton = document.getElementById("addToCar-btn");

AddToCarModalButton.addEventListener("click", function AddToCarPhoneModal() {
    CloseAllTabsOnModal();
    AddToCarModal.style.display = 'block';
    // ColorAddToCarValidation();

    // console.log(PriceGalaxyS23); // price
    // console.log(PhoneColorOnHtml); // color
    // console.log(TitleModal.textContent); // phone name
    PhoneNameOnHtml = TitleModal.textContent;
    // PhoneImgOnHtml = 
    PhoneImgOnHtml = ImgGalaxyS23Modal.src;

})

// ADD TO CAR LOGIC


var QtyValue;
var PriceProduct;
var Subtotal;


const ModalCarrinhoContainer = document.getElementById("modal-carrinho"); // open modal
const RedirectMsgToOpenModalCarrinho = document.getElementById("redirectMsg");
RedirectMsgToOpenModalCarrinho.addEventListener("click", function () {
    CloseAllTabsOnModal();
    ModalCarrinhoContainer.style.display = 'block';
})
const HeaderItemToOpenModalCarrinho = document.getElementsByClassName("right-items")[0]; // open modal
HeaderItemToOpenModalCarrinho.addEventListener("click", function () {
    CloseAllTabsOnModal();
    ModalCarrinhoContainer.style.display = 'block';
})

var AddToCarBtn = document.getElementsByClassName("buy-product-btn");
for (var i = 0; i < AddToCarBtn.length; i++) {
    AddToCarBtn[i].addEventListener("click", function () {
        const ProductCardsName = document.getElementsByClassName("product-name");
        const ProductCardsColor = document.getElementsByClassName("product-color");
        var ProductCardsPrice = document.getElementsByClassName("price-table");
        for(var i = 0; i < ProductCardsName.length; i++){
            
            if(ProductCardsName[i].innerText == PhoneNameOnHtml && ProductCardsColor[i].innerText == PhoneColorOnHtml && ProductCardsPrice[i].innerText.replace("R$", "") == PriceGalaxyS23){
                ProductCardsName[i].parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].children[1].innerText++;
                return;
            }
        }
        let newCartProduct = document.createElement("tr");
        newCartProduct.classList.add("product-container");

        
        newCartProduct.innerHTML = 
            `
            <td class="info-product-td">
            <div class="info-product-container">
                <div class="remove-product-container">
                    <i class="fa-regular fa-circle-xmark" style="color: #575757;"></i>
                </div>
                <div class="info-product-content">
                    <div class="img-product-container">
                        <img src="${PhoneImgOnHtml}" alt="" class="img-product">
                    </div>
                    <div class="text-product-container">
                        <p class="product-name">${PhoneNameOnHtml}</p>
                        <p class="product-color">${PhoneColorOnHtml}</p>
                    </div>
                </div>
            </div>
        </td>
        <td class="price-table">R$${PriceGalaxyS23.toFixed(2)}</td>
        <td class="qty-table">
    
            <div class="qty-container">
                <button class="increase-qty"><i class="fa-solid fa-sort-up"
                        style="color: #575757;"></i></button>
                <p class="qty-text">1</p>
                <button class="decrease-qty"><i class="fa-solid fa-sort-down"
                        style="color: #575757;"></i></button>
            </div>
    
        </td>
        <td class="subtotal-table">R$0.00</td>
            `;
        const TableBody = document.querySelector("tbody");
        TableBody.appendChild(newCartProduct);
        updateTotal();
    })
}


document.addEventListener("click", (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    var QtyValue = parentEl.children[1];

    if(targetEl.classList.contains("fa-sort-up")){
        QtyValue.innerText++;
        
    }else if(targetEl.classList.contains("fa-sort-down")){
        QtyValue.innerText--;
        if (QtyValue.innerText == 0) {
            QtyValue.parentElement.parentElement.parentElement.remove();
        }
    }else if(targetEl.classList.contains("fa-circle-xmark")){
        targetEl.parentElement.parentElement.parentElement.parentElement.remove();
    }
    updateTotal();
})

// const RemoveProductButtons = document.getElementsByClassName("remove-product-container"); // remove products funciton
// for (var i = 0; i < RemoveProductButtons.length; i++) {
//     RemoveProductButtons[i].addEventListener("click", function RemoveProduct(event) {

//         event.target.parentElement.parentElement.parentElement.parentElement.remove();
//         updateTotal();
//     })
// }


// var IncreaseButton = document.getElementsByClassName("increase-qty");
// for (var i = 0; i < IncreaseButton.length; i++) {
//     IncreaseButton[i].addEventListener("click", function IncreaseQty(event) {

//         var QtyValue = event.target.parentElement.parentElement.children[1];
//         QtyValue.innerText++;
//         AddToCarProduct();
//         updateTotal();
//     })
// }

// var DecreaseButton = document.getElementsByClassName("decrease-qty");
// for (var i = 0; i < DecreaseButton.length; i++) {
//     DecreaseButton[i].addEventListener("click", function (event) {
//         var QtyValue = event.target.parentElement.parentElement.children[1];
//         QtyValue.innerText--;
//         updateTotal();
//         if (QtyValue.innerText == 0) {
//             QtyValue.parentElement.parentElement.parentElement.remove();
//         }
//     })
// }



function updateTotal() { // update the total price
    var TotalValue = 0;
    var ProductContainer = document.getElementsByClassName("product-container");
    for (var i = 0; i < ProductContainer.length; i++) {
        var QtyValue = ProductContainer[i].getElementsByClassName("qty-text")[0].innerText;
        var PriceProduct = ProductContainer[i].getElementsByClassName("price-table")[0].innerText.replace("R$", "");
        var Subtotal = PriceProduct * QtyValue;
        TotalValue += Subtotal;
        // console.log(Subtotal)
        document.getElementsByClassName("subtotal-table")[i].innerHTML = 'R$' + Subtotal.toFixed(2);
    }

    document.getElementById("total-price").innerHTML = 'R$' + TotalValue.toFixed(2);
    document.getElementById("subtotal-price").innerHTML = 'R$' + TotalValue.toFixed(2);
}