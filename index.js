
import { menuArray} from './data.js'

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


          document.getElementById('checkout-container').style.display = 'block'; 
         
             const addItem = menu.find(function(item) { 
                return item.id === Number(e.target.id)
            })
            console.log(addItem.name)
        }

    })
    
}
handleAddClick(menuArray)
