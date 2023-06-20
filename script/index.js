import { randomuserAPI } from './fetchService.js'; 
import {usersTableBody} from './constants.js'; 
import {modal} from './constants.js'; 
import {closeButton} from './constants.js'; 
import { searchInput } from "./constants.js"; 
import { usersName } from "./constants.js"; 
//user table function  
 
(async () => { 
     
    const { results, info} = await randomuserAPI.get('?results=10'); 
 
    results.forEach(element => { 
        const {id, name, location } = element; 
        usersTableBody.innerHTML += ` 
        <tr class="${id.name}"> 
            <td> ${name.first} ${name.last}  </td>  
            <td> ${location.country} </td>  
        </tr>` 
    }); 
}) (); 
 
(() => { 
    usersTableBody.addEventListener('click', (event) => { 
        modal.style.display = "block"; 
        const tr = event.target.parentNode 
        const userId = tr.getAttribute('class'); 
        // console.log(userId); 
        const userName = tr.querySelector('td').textContent; 
        const modalBody = modal.querySelector('.modal-body'); 
        modalBody.innerHTML = ` 
        <p><b>User ID</b>: ${userId}</p> 
        <p><b>Name</b>: ${userName}</p> 
        `; 
    }) 
})(); 
 
closeButton.addEventListener ('click', () => { 
    modal.style.display = 'none' 
}); 
 
function calculatePages(itemsPerPage, totalItems) { 
    return Math.ceil(totalItems / itemsPerPage); 
  } 
 
let currentPage = 1; 
const itemsPerPage = 10; 
 
(async () => { 
  const { results, info } = await randomuserAPI.get('?results=100'); 
 
  const totalItems = results.length; 
  const totalPages = calculatePages(itemsPerPage, totalItems); 
 
  function populateTable() { 
    const startIndex = (currentPage - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage; 
    const displayedResults = results.slice(startIndex, endIndex); 
 
    usersTableBody.innerHTML = ''; 
 
    displayedResults.forEach((element) => { 
      const { id, name, location } = element; 
      usersTableBody.innerHTML += ` 
        <tr class="${id.name}"> 
            <td> ${name.first} ${name.last}  </td>  
            <td> ${location.country} </td>  
        </tr>`; 
    }); 
  } 
 
  populateTable(); 
 
  // Pagination buttons 
  function createPaginationButtons() { 
    pagination.innerHTML = ''; 
 
    for (let i = 1; i <= totalPages; i++) { 
      const button = document.createElement('button'); 
      button.textContent = i; 
      if (i === currentPage) { 
        button.classList.add('active'); 
      } 
 
      button.addEventListener('click', () => { 
        currentPage = i; 
        populateTable(); 
        createPaginationButtons(); 
      }); 
 
      pagination.appendChild(button); 
    } 
  } 
 
  createPaginationButtons(); 
})(); 
 
//search input  
const searchFunctional = () => { 
  searchInput.addEventListener("keyup", (event) => { 
      const { value } = event.target; 
      const searchElements = value.toLowerCase(); 
      for (const users of usersName) { 
          let name = users.textContent.toLowerCase();  
          if (name.includes(searchElements)) {  
              users.style.display = "block";  
              } else { 
              users.style.display = "none";  
          } 
      } 
  }); 
}; 
 
searchInput.addEventListener("keyup", searchFunctional);

