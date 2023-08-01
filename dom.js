// Get form, item input, description input, list, filter
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var itemInput = document.getElementById('item');
var descriptionInput = document.getElementById('description');

// Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click',removeItem);
// //filter event
// itemList.addEventListener('kryup',filterItems);


//Add item
function addItem(e){
  e.preventDefault();

  // Get input value and description value
  var newItem = itemInput.value;
  var newDescription = descriptionInput.value;

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value and description value
  li.appendChild(document.createTextNode(newItem + ': ' + newDescription));

  // Create delete button element
  var deleteBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// Filter event
filter.addEventListener('keyup', filterItems);

// Filter items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  // Get list items
  var items = itemList.getElementsByTagName('li');
  
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // If search text matches item name or description, show it; otherwise hide it
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
