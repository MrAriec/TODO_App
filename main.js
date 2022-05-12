(function (){
    function createAppTitle(title){
        let appTitle = document.createElement('h1');
        appTitle.textContent = title;
        return appTitle;
    }

    function createToDoItemForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let btnWrapper = document.createElement('div');
        let btn = document.createElement('button');

        form.classList.add('input-group mb-3');
        input.classList,add('form-control');
        input.placeholder = 'Введите название дела';
        btnWrapper.classList.add('input-group-append');
        btn.classList.add('btn btn-primary');
        btn.textContent = 'Добавить дело';

        btnWrapper.append(btn);
        form.append(input);
        form.append(btnWrapper);

        return{
            form,
            btn,
            input
        };
    };

    function createToDoList(){
            let list = document.createElement('ul');
            list.classList.add('list-group');
            return list;
    };

    function createToDoItem(name){
        let item = document.createElement('li');

        let btnGroup = document.createElement('div');
        let btnDone = document.createElement('button');
        let btnDelete = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        btnGroup.classList.add('btn-group', 'btn-group-sm');
        btnDone.classList.add('btn', 'btn-success');
        btnDone.textContent = 'Готово';
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.textContent = 'Удалить';

        btnGroup.append(btnDone);
        btnGroup.append(btnDelete);
        item.append(btnGroup);

        return{
            item,
            btnDone,
            btnDelete,
        }
    };

    document.addEventListener('DOOMContenLoaded', function(){
            let container = document.getElementById('todo-app');

            let toDoAppTitle = createAppTitle('Список дел');
            let toDoItemForm = createToDoItemForm();
            let toDoList = createToDoList();

            container.append(toDoAppTitle);
            container.append(toDoItemForm.form);
            container.append(toDoList);

            toDoItemForm.form.addEventListener('submit', function(e){
                e.preventDefault();

                if(!toDoItemForm.input.value){
                    return;
                }

                toDoList.append(createToDoItem(toDoItemForm.input.value));
                toDoItemForm.input.value = '';
            });
    });
}) ();