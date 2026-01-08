
import { menuArray} from './data.js'

let orderArray = []

function getMenuHtml(menu) {

return menu.map(({name, ingredients, price, emoji, id}) =>{
   return  `<div class="menu-item">
   <div class="item-info">
   <div class="item-details">
        <div class="item-emoji">${emoji}</div>
        <div class="item-text">
            <h3 class="item-name black">${name}</h3>
            <p class="item-ingredients grey">${ingredients.join(', ')}</p>
            <span class="item-price black">$${price}</span>
        </div>
    </div>
        <button id="${id}" class="add-btn">+</button>
    </div>
    </div>`
    
}).join('')

}

document.getElementById('menu-container').innerHTML = getMenuHtml(menuArray)


function handleAddClick(menu) {

    document.addEventListener('click', function(e){

        if (e.target.classList && e.target.classList.contains('add-btn')) {
            const targetItem = menu.find(function(item) { 
                return item.id === Number(e.target.id)
            })

            if (targetItem) {
                orderArray.push(targetItem)
                updateCheckoutVisibility()
                renderOrder()
                renderTotal()
            }

        }

        if(e.target.dataset.remove) {
            const index = e.target.dataset.remove
            removeItemFromOrder(index)
        }
        
        if (e.target.id === "complete-order-btn") {
            const loginForm = document.getElementById('login-form')
            loginForm.classList.remove('hidden')
        }


    })




}

function updateCheckoutVisibility() {
    const checkoutContainer = document.getElementById('checkout-container')
    const hasItems = orderArray.length > 0


    checkoutContainer.classList.toggle('visible', hasItems)
    checkoutContainer.classList.toggle('hidden', !hasItems)
    
  }


 function renderOrder() {


    let orderHtml = orderArray.map(({name, price}, index) => {
        return `
            
            <div class="checkout-item">
                <div class="items-data">
                    <div class="inline">
                        <div class="checkout-item-name black">${name}</div>
                        <button class="remove-btn" data-remove="${index}" >Remove</button>
                    </div>
                        <div class="checkout-item-price black">$${price}</div>
                </div>
                 
            </div>`
    }).join('')

    document.getElementById('checkout-section').innerHTML = orderHtml
 }
 handleAddClick(menuArray)

 function removeItemFromOrder(index) {
orderArray.splice(index, 1)
updateCheckoutVisibility()
renderOrder()
}



function renderTotal() {
    const prices = orderArray.map(item => item.price)
    
    document.getElementById('checkout-total-price').innerText = `$${prices.reduce((a,b) => a + b, 0)}`
}