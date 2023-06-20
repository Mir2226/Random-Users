const API_USERS = 'https://randomuser.me/api'; 
const usersTableBody = document.getElementById('usersTableBody'); 
const modal = document.getElementById('myModal'); 
const closeButton = document.getElementById('closeButtonForModal'); 
const searchInput = document.getElementById("myInput");  
const usersName = document.getElementsByTagName("tr"); 
export { 
    API_USERS , usersTableBody , modal , closeButton  , searchInput , usersName 
}