
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

        if(e.target.id) {

            document.getElementById('checkout-container').classList.add('visible')
                    
              const targetItem = menu.find(function(item) { 
                return item.id === Number(e.target.id)
            })
            
            orderArray.push(targetItem)
            renderOrder()
        } 



    })
    
}
 function renderOrder() {

    let orderHtml = orderArray.map(({name, price}) => {
        return `
            
            <div class="checkout-item">
                <div class="checkout-item-name black">${name}</div>
                <div class="checkout-item-price black">$${price}</div>
            </div>`
    }).join('')

    document.getElementById('checkout-section').innerHTML = orderHtml
 }
 handleAddClick(menuArray)