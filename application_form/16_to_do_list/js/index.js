$(document).ready(function(){

$("#addToDoList").submit(addTodoListItem);
$("#clearList").submit(emptyTodoList);
$("#clearCompletedList").submit(removeCompletedTodoListItem);
$("#todos").on('click' , '.remove' ,removeTodoListItem);
$("#todos").on('click' , '.edit' ,editTodoListItem);
$("#todos").on('blur' , '.editor' ,saveEditedTodoListItem);
$("#todos").on('click' , 'li' ,markItemAsCompleted);


function addTodoListItem(){
	var item = $('#addToDoListItem').val();
	
	$('#todos').append('<li><span class="item"> '+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a><li>');
}

function emptyTodoListItem(){
$('#todos').empty();
}


function editTodoListItem(){

var editClicked = $(this).parents('li');
var itemContent = $(this).siblings('.item').text();

$(editClicked).html('<form class="editor" action="">input type="text" value=""'+itemContent+'""/></form');
}
function saveEditedTodoListItem(){
	var newItem = $(this).find('.input').val();
var listItem = $(this).parents('li');
$(listItem).html('<span class="item"> '+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a>')

}

function markTodoListItemAsCompleted(){
	$(this).toggleClass('done');
	updateNumberOfTodoListItems();

}

function removeCompletedTodoListItem(){
	$('.done').remove();

}

function updateNumberOfTodoListItems(){
var count = $('#todos li').not('.done').length;
$('#count').html(count);
}



});