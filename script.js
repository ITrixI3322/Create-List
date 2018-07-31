var parenDiv = document.getElementById('parenDiv');
var blockLists = document.getElementById('blockLists');
var setText = document.getElementById('setText');
var deleteAll = document.getElementById('deleteAll');
var searchList = document.getElementById('searchList');
var sortList = document.getElementById('sortList');
var reversSortList = document.getElementById('reversSortList');


window.onload = function(){
	var text = localStorage.getItem('list');
	blockLists.innerHTML = JSON.parse(text);

		var delText = document.getElementsByClassName('delText');
		var changeText = document.getElementsByClassName('changeText');
		

		for (var i=0; i<changeText.length; i++){
				
			 changeText[i].addEventListener('click', changeeText)
		};

		for (i=0; i<delText.length; i++){

			delText[i].addEventListener('click', deletedText);
		};
};



	deleteAll.addEventListener('click', ()=>{

		blockLists.innerHTML = '';
		localStorage.clear();

	});

setText.addEventListener('click', function setTextFunc(){

	var inputNameList = document.createElement('input');
	var clickAddList = document.createElement('button');
	clickAddList.innerHTML = 'OK';
	clickAddList.classList.add('btnAddText');
	inputNameList.classList.add('inpAddText');
	blockLists.appendChild(inputNameList);
	blockLists.appendChild(clickAddList);

		deleteAll.addEventListener('click', ()=>{
			setText.addEventListener('click', setTextFunc);
		});

	setText.removeEventListener('click', setTextFunc);

	clickAddList.addEventListener('click', function addListFun(){
		var paragraphEditTextList = document.createElement('p');
		var btnSaveChangeList = document.createElement('button');
		var btnCanslChangeList = document.createElement('button');
		var inpChangeText = document.createElement('input');
		btnSaveChangeList.innerHTML = 'сохранить';
		btnCanslChangeList.innerHTML = 'отмена';

		paragraphEditTextList.classList.add('paragraphEditTextList');
		btnSaveChangeList.classList.add('btnSaveChangeList');
		btnCanslChangeList.classList.add('btnCanslChangeList');
		inpChangeText.classList.add('inpChangeText');
		

		paragraphEditTextList.appendChild(inpChangeText);
		paragraphEditTextList.appendChild(btnSaveChangeList);
		paragraphEditTextList.appendChild(btnCanslChangeList);
		blockLists.appendChild(paragraphEditTextList);
		paragraphEditTextList.style.display = 'none';

		var nameList = document.createElement('b');
		var paragraphNameTextList = document.createElement('p');
		var delText = document.createElement('button');
		var changeText = document.createElement('button');

		delText.innerHTML = 'Удалить';
		changeText.innerHTML = 'Редактировать';
		paragraphNameTextList.classList.add('paragraphNameTextList');
		delText.classList.add('delText');
		changeText.classList.add('changeText');

		nameList.innerHTML = inputNameList.value;
		var textNameList = nameList.innerHTML;
		paragraphNameTextList.appendChild(nameList);
		paragraphNameTextList.appendChild(changeText);
		paragraphNameTextList.appendChild(delText);
		setText.addEventListener('click', setTextFunc);

		blockLists.appendChild(paragraphNameTextList);
		blockLists.removeChild(clickAddList);
		blockLists.removeChild(inputNameList);

		localStorage.setItem('list', JSON.stringify(blockLists.innerHTML));

		
			delText.addEventListener('click', deletedText);

			changeText.addEventListener('click', changeeText) ;
		        			
			});
	});



sortList.addEventListener('click', sortListFunct);
reversSortList.addEventListener('click', reversSortListFunct);

function sortListFunct(){
var nameList = document.querySelectorAll('b');

for (i=0;i<nameList.length;i++){

	if (nameList[i].innerHTML != searchList.value){
		nameList[i].parentElement.style.display = 'none';
		};
	};
	sortList.style.display = 'none';
	reversSortList.style.display = 'block';	
};


 function reversSortListFunct(){
var nameList = document.querySelectorAll('b');

for (i=0;i<nameList.length;i++){

		nameList[i].parentElement.style.display = 'block';
		
	};
	sortList.style.display = 'block';
	reversSortList.style.display = 'none';
};



function changeeText(){
	 
		this.parentElement.style.display = 'none';
				this.parentElement.previousElementSibling.style.display = 'block';
				var elem = this.previousElementSibling;
				var text = elem.innerHTML;
				this.parentElement.previousElementSibling.children[0].value = text;
		

			this.parentElement.previousElementSibling.children[1].addEventListener('click', function(){
				text = this.previousElementSibling.value;
				elem.innerHTML = text;
				this.parentElement.nextElementSibling.style.display = 'block';
				this.parentElement.style.display = 'none';

				localStorage.setItem('list', JSON.stringify(blockLists.innerHTML));
	});

				this.parentElement.previousElementSibling.children[2].addEventListener('click', function(){ 
				this.parentElement.nextElementSibling.style.display = 'block';
				this.parentElement.style.display = 'none';
			 });
};


function deletedText(){
		
			blockLists.removeChild(this.parentElement.previousElementSibling);
			blockLists.removeChild(this.parentElement);
			
			localStorage.setItem('list', JSON.stringify(blockLists.innerHTML));
			
};
