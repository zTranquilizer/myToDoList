document.addEventListener("DOMContentLoaded", function () {
	let ul = document.querySelector('.todo__list');
	let btnAdd = document.querySelector('.todo__btn');
	let input = document.querySelector('.todo__input');


	btnAdd.addEventListener('click', function () {
		let value = input.value;

		if (value != "") {
			let li = document.createElement('li');
			let close = document.createElement('button');
			let text = document.createElement('div');
			li.classList.add('todo__list-item');
			text.classList.add('todo__list-text');
			close.classList.add('todo__list-button');
			ul.appendChild(li);
			li.appendChild(text);
			li.appendChild(close);
			text.textContent = value;
			close.textContent = 'X';
			input.value = '';
			listenDeleteToDo(close);
			li.addEventListener('click', function (e) {
				li.classList.add('checked');
			});
			localStorage.setItem('todos', ul.innerHTML);
			let data = localStorage.getItem('todos');
			if (data) {
				ul.innerHTML = data;
			}
		}

	});

	input.addEventListener('keypress', function (e) {
		if (e.charCode == 13) {
			let value = input.value;

			if (value != "") {
				let li = document.createElement('li');
				let close = document.createElement('button');
				let text = document.createElement('div');
				li.classList.add('todo__list-item');
				text.classList.add('todo__list-text');
				close.classList.add('todo__list-button');
				ul.appendChild(li);
				li.appendChild(text);
				li.appendChild(close);
				text.textContent = value;
				close.textContent = 'X';
				input.value = '';
				listenDeleteToDo(close);
				li.addEventListener('click', function (e) {
					text.classList.add('checked');
				});
				localStorage.setItem('todos', ul.innerHTML);
				let data = localStorage.getItem('todos');
				if (data) {
					ul.innerHTML = data;
				}
			}
		}

	});

	function listenDeleteToDo(element) {
		element.addEventListener('click', function (e) {
			element.parentElement.remove();
		});
	}


});


