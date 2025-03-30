// L9
{
    interface Course {
        title: string;
        monthDuration: number;
    }

    let tasks: HTMLCollectionOf<Element> = document.getElementsByClassName('task');

    let coursesAndDurationArray: Course[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

// Task 1

    let div: HTMLDivElement = document.createElement('div');
    // document.body.append(div);
    tasks[0].appendChild(div);
    div.classList.add('wrap', 'collapse', 'alpha', 'beta');

    let divClone: HTMLDivElement = document.createElement('div');
    tasks[0].appendChild(divClone);
    divClone.classList.add('wrap', 'clone');

// Task 2

    let arr: string[] = ['Main', 'Products', 'About us', 'Contacts'];
    let ul: HTMLUListElement = document.createElement('ul');
    tasks[1].appendChild(ul)
    for (const arrElement of arr) {
        let li: HTMLLIElement = document.createElement('li');
        li.innerText = arrElement;
        ul.appendChild(li);
    }

// Task 3

    for (const arrElement of coursesAndDurationArray) {
        let div: HTMLDivElement = document.createElement('div');
        div.innerHTML = `<h3>${arrElement.title}</h3><p>${arrElement.monthDuration}</p>`;
        tasks[2].appendChild(div)
    }

// Task 4

    for (const arrElement of coursesAndDurationArray) {
        let div: HTMLDivElement = document.createElement('div');
        div.classList.add('item')
        div.innerHTML = `<h1 class='heading'>${arrElement.title}</h1><p class='description'>${arrElement.monthDuration}</p>`;
        tasks[3].appendChild(div)
    }
}

// L10
{
    let tasks: HTMLCollectionOf<Element> = document.getElementsByClassName('task');
    type Item = string | null;

// Task 1
    {
        let text: HTMLDivElement = document.createElement('div');
        let button: HTMLButtonElement = document.createElement('button');
        text.id = 'text';
        text.classList.add('wrap');
        tasks[0].append(text, button);

        button.onclick = (): void => text.remove()
    }

// Task 2
    {
        let form: HTMLFormElement = document.createElement('form');
        let input: HTMLInputElement = document.createElement('input');
        let button: HTMLButtonElement = document.createElement('button');

        tasks[1].append(form);
        form.append(input, button);

        form.onsubmit = function (ev: SubmitEvent): void {
            ev.preventDefault();
            if (parseInt(input.value) < 18) input.value = 'No';
            else input.value = 'Yes';
        }
    }

// Task 3
    {
        let form: HTMLFormElement = document.createElement('form');
        let inputName: HTMLInputElement = document.createElement('input');
        let inputSurname: HTMLInputElement = document.createElement('input');
        let inputAge: HTMLInputElement = document.createElement('input');
        let button: HTMLButtonElement = document.createElement('button');

        let div: HTMLDivElement = document.createElement('div')
        div.classList.add('wrap')

        tasks[2].append(form);
        form.append(inputName, inputSurname, inputAge, button, div);

        form.onsubmit = function (ev: SubmitEvent): void {
            ev.preventDefault();
            div.innerHTML = `
        <p>Name: ${inputName.value}</p>
        <p>Surname: ${inputSurname.value}</p>
        <p>Age: ${inputAge.value}</p>
        `
        }
    }

// Task 4
    {
        let item: Item = localStorage.getItem('number');
        let num: number = item === null ? 0 : parseInt(item);
        localStorage.setItem('number', (++num).toString());
        // localStorage.setItem('number', '1')
        tasks[3].append((num).toString());
    }

// Task 5
    {
        let item: Item = localStorage.getItem('sessionsList')
        for (const arrElem of JSON.parse(item === null ? '' : item)) {
            let p: HTMLParagraphElement = document.createElement('p')
            p.innerText = arrElem;
            tasks[4].append(p);
        }
    }

// Task 6
    {
        let inputKilograms: HTMLInputElement = document.createElement('input');
        let inputPounds: HTMLInputElement = document.createElement('input');

        tasks[5].append(inputKilograms, inputPounds);

        inputKilograms.oninput = (): string => inputPounds.value = (+inputKilograms.value * 2.205).toString();
        inputPounds.oninput = (): string => inputKilograms.value = (+inputPounds.value / 2.205).toString();
    }

// Task 7
    {
        function addToLocalStorage(arrayName: string, objToAdd: any): void {
            let item: Item = localStorage.getItem(arrayName);
            let array: any = JSON.parse(item === null ? '' : item);
            array[array.length] = objToAdd;
            localStorage.setItem(arrayName, JSON.stringify(array));
        }
    }

// Task 8
    {
        let inputRows: HTMLInputElement = document.createElement('input');
        let inputColumns: HTMLInputElement = document.createElement('input');
        let inputInput: HTMLInputElement = document.createElement('input');
        let button: HTMLButtonElement = document.createElement('button');

        tasks[7].append(inputRows, inputColumns, inputInput, button);

        button.onclick = function () {
            for (let i: number = 0; i < +inputColumns.value; i++) {
                let div: HTMLDivElement = document.createElement('div');
                div.classList.add('flex');
                tasks[7].append(div);
                for (let j = 0; j < +inputRows.value; j++) {
                    let wrap: HTMLDivElement = document.createElement('div');
                    wrap.classList.add('wrap');
                    wrap.innerText = inputInput.value;
                    div.append(wrap);
                }
            }
        }
    }

// localStorage.clear();
}

// L11
{
    let tasks = document.getElementsByClassName('task');

// Task 1

    {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(json => {
                let {carts} = json;
                for (const cart of carts) {
                    let wrap: HTMLDivElement = document.createElement('div')
                    wrap.classList.add('wrap');
                    tasks[0].append(wrap);
                    for (const cartKey in cart) {
                        switch (cartKey) {
                            case 'products':
                                for (const product of cart[cartKey]) {
                                    let innerWrap: HTMLDivElement = document.createElement('div');
                                    innerWrap.classList.add('inner-wrap');
                                    wrap.append(innerWrap);
                                    for (const productKey in product) {
                                        switch (productKey) {
                                            case 'thumbnail':
                                                let img: HTMLImageElement = document.createElement('img');
                                                img.classList.add('img');
                                                img.src = product[productKey];
                                                img.alt = 'img';
                                                innerWrap.append(img);
                                                break;
                                            default:
                                                let div: HTMLDivElement = document.createElement('div');
                                                div.innerText = `${productKey} : ${product[productKey]}`;
                                                innerWrap.append(div);
                                        }
                                    }
                                }
                                break;
                            default:
                                let div: HTMLDivElement = document.createElement('div');
                                div.innerText = `${cartKey} : ${cart[cartKey]}`;
                                wrap.append(div);
                        }
                    }
                }
            });
    }

// Task 2

    {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(json => {
                let {recipes} = json;
                console.log(recipes);
                for (const recipe of recipes) {
                    let wrap: HTMLDivElement = document.createElement('div')
                    wrap.classList.add('wrap');
                    tasks[1].append(wrap);
                    for (const recipeKey in recipe) {
                        switch (recipeKey) {
                            case 'ingredients':
                                let list: HTMLUListElement = document.createElement('ul')
                                wrap.innerHTML += `<div>${recipeKey} :</div>`;
                                wrap.append(list);
                                for (const ingredient of recipe[recipeKey]) {
                                    list.innerHTML += `<li>${ingredient}</li>`;
                                }
                                break;
                            case 'instructions':
                                let str: HTMLDivElement = document.createElement('div');
                                str.innerText = `${recipeKey} :`;
                                for (const instruction of recipe[recipeKey]) {
                                    str.innerText += ' ';
                                    str.innerText += instruction;
                                }
                                wrap.append(str);
                                break;
                            case 'image':
                                let img: HTMLImageElement = document.createElement('img');
                                img.classList.add('img');
                                img.src = recipe[recipeKey];
                                img.alt = 'img';
                                wrap.append(img);
                                break;
                            default:
                                let div: HTMLDivElement = document.createElement('div');
                                div.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
                                wrap.append(div);
                        }
                    }
                }
            });
    }
}
