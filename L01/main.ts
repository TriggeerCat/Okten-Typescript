const QAEngineerWalksIntoTheBar = [1, 0, 99999999999, "lizard", -1, "ueicbksjdhd", true, "First real customer wals into the bar and asks where the toilet is", "Bar:", "🔥"]

// L1
{
// Task 1
    {
        let classic: string = 'hello';
        console.log(classic);

        let owu: string = 'owu';
        console.log(owu);

        let com: string = 'com';
        console.log(com);

        let countryIndex: string = 'ua';
        console.log(countryIndex);

        const ONE = 1;
        console.log(ONE);

        let numOne: number = 10;
        console.log(numOne);

        let numTwo: number = -999;
        console.log(numTwo);

        let predictablePattern: number = 123;
        console.log(predictablePattern);

        const PI = 3.14;
        console.log(PI);

        const E = 2.7;
        console.log(E);

        let minecraft: number = 16;
        console.log(minecraft);

        let catsAreCute: boolean = true;
        console.log(catsAreCute);

        let catsAreNotCute: boolean = false;
        console.log(catsAreNotCute);
    }

// Task 2
    {
        let firstName: string = 'Denys';
        let middleName: string = 'Yuriyovych';
        let lastName: string = 'Crawford';
        let theName: string = `${lastName} ${firstName} ${middleName}`;
        console.log(theName)
    }

// Task 3
    {
        let a: number = 100;
        let b: string = '100';
        let c: boolean = true;

        console.log(typeof a, typeof b, typeof c)
    }

// Task 4
    {
        let firstName: string | null = prompt('You first name, sir?');
        let middleName: string | null = prompt('You middle name, sir?');
        let years: string | null = prompt('Your years, sir?');

        console.log(firstName, middleName, years);
    }
}

// L2
{
// Task 1
    {
        console.log(QAEngineerWalksIntoTheBar);
    }

    console.log(" ");

// Task 2
    interface Book {
        title: string,
        pageCount: number,
        genre: string
    }

    {
        let book1: Book = {
            title: "Silver Eyes",
            pageCount: 300,
            genre: "Horror"
        };

        let book2: Book = {
            title: '1984',
            pageCount: 400,
            genre: "dystopia"
        }

        let book3: Book = {
            title: "Unmatched Core Rules",
            pageCount: 16,
            genre: "game rules"
        }

        console.log(book1, book2, book3);
    }

    console.log(" ");

// Task 3
    interface BookExpanded {
        title: string,
        pageCount: number,
        genre: string,
        authors: string[]
    }

    {
        let book1: BookExpanded = {
            title: "Silver Eyes",
            pageCount: 300,
            genre: "Horror",
            authors: ["Scott Cawthon, Kira Breed-Wrisley"]
        };

        let book2: BookExpanded = {
            title: '1984',
            pageCount: 400,
            genre: "dystopia",
            authors: ["George Orwell"]
        }

        let book3: BookExpanded = {
            title: "Unmatched Core Rules",
            pageCount: 16,
            genre: "game rules",
            authors: ["Julia Angotti", "Ashleigh Edwards", "Chad Edwards", "Jason Hager", "Alfie Harris", "Frank Klensch", "John Leveille", "Zack Lovaas", "Jacob Marks", "Gary McCarthy", "Peter Osterweil", "Ethan Ottoy", "Taylor Pochetti", "Ben Stapleton", "Joshua Tan Jer Yi", "Michael Topjian", "Jason Viddal"]
        }

        console.log(book1, book2, book3);
    }

    console.log(" ");

// Task 4 (filled by ChadGPT)
    interface User {
        name: string;
        username: string;
        password: string;
    }

    {
        let users: User[] = [
            {name: "Alice Johnson", username: "alicej", password: "pass123"},
            {name: "Bob Smith", username: "bobsmith", password: "secure456"},
            {name: "Charlie Brown", username: "charlieb", password: "hello789"},
            {name: "David Wilson", username: "davidw", password: "test321"},
            {name: "Emma Davis", username: "emmad", password: "qwerty654"},
            {name: "Frank Miller", username: "frankm", password: "sunshine987"},
            {name: "Grace Lee", username: "gracel", password: "moonlight234"},
            {name: "Henry White", username: "henryw", password: "starlight567"},
            {name: "Ivy Scott", username: "ivys", password: "rainbow890"},
            {name: "Jack Taylor", username: "jackt", password: "cloudy123"}
        ];

        console.log(users);
    }

    console.log(" ");

// Task 5 (filled by ChadGPT)
    {
        const week = [
            [12, 18, 14], // Monday
            [11, 20, 15], // Tuesday
            [10, 19, 13], // Wednesday
            [9, 17, 12],  // Thursday
            [8, 16, 11],  // Friday
            [7, 15, 10],  // Saturday
            [6, 14, 9]    // Sunday
        ];

        console.log(week[5][2]);
    }

    console.log(" ");

// Task 6
    {
        let x: number = 1; //parseInt(prompt("Enter x"));
        if (x !== 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    console.log(" ");

// Task 7
    {
        let computer: { blow: boolean } = {
            blow: false
        }
        let time: number = 12; //parseInt(prompt("Enter time"));
        if (time < 0) {
            computer.blow = true;
        } else if (time < 15) {
            console.log("The time is in first quarter")
        } else if (time < 30) {
            console.log("The time is in second quarter")
        } else if (time < 45) {
            console.log("The time is in third quarter")
        } else if (time < 60) {
            console.log("The time is in fourth quarter")
        } else {
            computer.blow = true;
        }
    }

    console.log(" ");

// Task 8
    {
        let day: number = 31; //parseInt(prompt("Enter day"));
        day = ~~((day - 0.1) / 10) + 1;
        switch (day) {
            case 1:
                console.log("The day is in the first decade");
                break;
            case 2:
                console.log("The day is in the second decade");
                break;
            case 3:
                console.log("The day is in the third decade");
                break;
            default:
                console.log("31 day actually is start of the fourth decade, cuz decade of the month is 10 days")
        }
    }

    console.log(" ");

// Task 9 (filled by ChadGPT)
    {
        let day: string = "Monday"; //parseInt(prompt("Enter day"));
        switch (day.toLowerCase()) {
            case "monday":
                console.log("9:00 AM - Team Meeting\n1:00 PM - Project Work\n5:00 PM - Gym");
                break;
            case "tuesday":
                console.log("10:00 AM - Client Call\n2:00 PM - Code Review\n6:00 PM - Cooking Class");
                break;
            case "wednesday":
                console.log("8:00 AM - Yoga\n12:00 PM - Lunch with Team\n3:00 PM - Presentation Prep");
                break;
            case "thursday":
                console.log("9:30 AM - Stand-up Meeting\n2:30 PM - Development Work\n7:00 PM - Movie Night");
                break;
            case "friday":
                console.log("10:00 AM - Sprint Review\n4:00 PM - Happy Hour\n8:00 PM - Dinner with Friends");
                break;
            case "saturday":
                console.log("10:00 AM - Hiking\n3:00 PM - Shopping\n7:00 PM - Family Time");
                break;
            case "sunday":
                console.log("9:00 AM - Church\n1:00 PM - Relax & Read\n6:00 PM - Prepare for Week");
                break;
            default:
                console.log("Invalid day. Please enter a valid weekday.");
        }
    }

    console.log(" ");

// Task 10
    {
        let a: number = 1, b: number = 2;
        if (a > b) {
            console.log(a);
        } else if (b > a) {
            console.log(b);
        } else {
            console.log("They're equal");
        }
    }

    console.log(" ");

// Task 11
    {
        let x: string = "123";
        if (!x) {
            x = "default"
        }
        console.log(x);
    }

    console.log(" ");

// Task 12
    interface Course {
        title: string;
        monthDuration: number;
    }

    {
        let coursesAndDurationArray: Course[] = [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ];

        if (coursesAndDurationArray[0].monthDuration > 5) {
            console.log("Nice!")
        }
        if (coursesAndDurationArray[1].monthDuration > 5) {
            console.log("Nice!")
        }
        if (coursesAndDurationArray[2].monthDuration > 5) {
            console.log("Nice!")
        }
        if (coursesAndDurationArray[3].monthDuration > 5) {
            console.log("Nice!")
        }
        if (coursesAndDurationArray[4].monthDuration > 5) {
            console.log("Nice!")
        }
        if (coursesAndDurationArray[5].monthDuration > 5) {
            console.log("Nice!")
        }
    }
}

// L3
{
// Task 1
    {
        document.write(`<div class="task">`)
        for (const arrElem of QAEngineerWalksIntoTheBar) {
            document.write(`<div>${arrElem}</div>`)
        }
        document.write(`</div>`)
    }

// Task 2
    {
        document.write(`<div class="task">`)
        for (let i: number = 0; i < QAEngineerWalksIntoTheBar.length; i++) {
            const arrElem: string | number | boolean = QAEngineerWalksIntoTheBar[i];
            document.write(`<div>${i}. ${arrElem}</div>`)
        }
        document.write(`</div>`)
    }

// Task 3
    {
        document.write(`<div class="task">`)
        let i: number = 0;
        while (i < 20) {
            document.write(`<h1>${++i}</h1>`);
        }
        document.write(`</div>`)
    }

// Task 4
    {
        document.write(`<div class="task">`)
        let i: number = 0;
        while (i < 20) {
            document.write(`<h1>${i}. ${++i}</h1>`);
        }
        document.write(`</div>`)
    }

// Task 5
    {
        document.write(`<div class="task"><ul>`)
        let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
        for (const arrElem of listOfItems) {
            document.write(`<li>${arrElem}</li>`)
        }
        document.write(`</ul></div>`)
    }

// Task 6
    interface Product {
        title: string;
        price: number;
        image: string;
    }

    {
        document.write(`<div class="task">`)
        let products: Product[] = [{
            title: 'milk',
            price: 22,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        }, {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        }, {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/images/full/tomato_noun_001_17860.jpg?version=6.0.45'
        }, {
            title: 'tea',
            price: 15,
            image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:2048/quality=value:75/3RuT7WnQsGUMxOVU10q5'
        },];
        for (const arrElem of products) {
            document.write(`
            <div class="product-card">
                <h3 class="product-title">${arrElem.title}. Price — ${arrElem.price} UAH</h3>
                <img src="${arrElem.image}" alt="" class="product-image">
            </div>  
        `)
        }
        document.write(`</div>`)
    }

// Task 7
    interface UserClassic {
        name: string;
        age: number;
        status: boolean;
    }

    {
        document.write(`<div class="task">`)
        let users: UserClassic[] = [
            {name: 'vasya', age: 31, status: false},
            {name: 'petya', age: 30, status: true},
            {name: 'kolya', age: 29, status: true},
            {name: 'olya', age: 28, status: false},
            {name: 'max', age: 30, status: true},
            {name: 'anya', age: 31, status: false},
            {name: 'oleg', age: 28, status: false},
            {name: 'andrey', age: 29, status: true},
            {name: 'masha', age: 30, status: true},
            {name: 'olya', age: 31, status: false},
            {name: 'max', age: 31, status: true}
        ];
        document.write(`<div class="user">`)
        for (const user of users) {
            if (user.status) document.write(`<p>${user.name}</p>`);
        }
        document.write(`</div><div class="user">`)
        for (const user of users) {
            if (!user.status) document.write(`<p>${user.name}</p>`);
        }
        document.write(`</div><div class="user">`)
        for (const user of users) {
            if (user.age > 30) document.write(`<p>${user.name}</p>`);
        }
        document.write(`</div></div>`)
    }
}

// L4
{
    const PI = 3.14;

// Task 1
    function areaRectangle(a: number, b: number): number {
        return a * b;
    }

// Task 2
    function areaCircle(r: number): number {
        return 2 * PI * r;
    }

// Task 3
    function areaCylinder(h: number, r: number): number {
        return 2 * PI * h * r;
    }

// Task 4
    function arrViewer(arr: unknown[]): void {
        for (const arrElement of arr) {
            console.log(arrElement);
        }
    }

// Task 5
    function paragraph(a: unknown): void {
        document.write(`
        <div class="task">
            <p>${a}</p>
        </div>
    `)
    }

// Task 6
    function listOne(a: unknown): void {
        document.write(`
        <div class="task">
            <ul>
                <li>${a}</li>
                <li>${a}</li>
                <li>${a}</li>
            </ul>
        </div>
    `)
    }

// Task 7
    function listTwo(a: unknown, b: number): void {
        document.write(`<div class="task"><ul>`)
        for (let i = 0; i < b; i++) {
            document.write(`<li>${a}</li>`)
        }
        document.write(`</ul></div>`)
    }

// Task 8
    function listArr(arr: unknown[]): void {
        document.write(`<div class="task"><ul>`)
        for (const arrElement of arr) {
            document.write(`<li>${arrElement}</li>`)
        }
        document.write(`</ul></div>`)
    }

// Task 9
    interface User {
        id: number;
        name: string;
        age: number;
    }

    function listArrObj(arr: User[]): void {
        document.write(`<div class="task">`)
        for (const arrElement of arr) {
            for (const arrElementKey in arrElement) {
                document.write(`
            <div>
                ${arrElementKey}: ${arrElement[arrElementKey as keyof User]}
            </div>
            `)
            }
        }
        document.write(`</div>`)
    }

// Task 10
    function minElem(arr: number[]): number {
        let min: number = arr[0];
        for (const arrElement of arr) {
            if (min > arrElement) min = arrElement;
        }
        return min;
    }

// Task 11
    function sumElem(arr: number[]): number {
        let sum: number = 0;
        for (const arrElement of arr) {
            sum += arrElement;
        }
        return sum;
    }

// Task 12
    function swapElem(arr: unknown[], pos1: number, pos2: number): unknown[] {
        let a: unknown = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = a;
        return arr;
    }

// Task 13
    interface Currency {
        currency: string;
        value: number;
    }

    function exchange(sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number | undefined {
        for (const currency of currencyValues) {
            if (currency.currency === exchangeCurrency) return sumUAH / currency.value;
        }
    }
}

// L5
{
    const PI = 3.14;

// Task 1
    let areaRectangle = (a: number, b: number): number => a * b;

// Task 2
    let areaCircle = (r: number): number => 2 * PI * r;

// Task 3
    let areaCylinder = (h: number, r: number): number => 2 * PI * h * r;

// Task 4
    let arrViewer = (arr: unknown[]): void => {
        for (const arrElement of arr) {
            console.log(arrElement);
        }
    }

// Task 5
    let paragraph = (a: unknown): void => {
        document.write(`
        <div class="task">
            <p>${a}</p>
        </div>
    `)
    }

// Task 6
    let listOne = (a: unknown): void => {
        document.write(`
        <div class="task">
            <ul>
                <li>${a}</li>
                <li>${a}</li>
                <li>${a}</li>
            </ul>
        </div>
    `)
    }

// Task 7
    let listTwo = (a: unknown, b: number): void => {
        document.write(`<div class="task"><ul>`)
        for (let i = 0; i < b; i++) {
            document.write(`<li>${a}</li>`)
        }
        document.write(`</ul></div>`)
    }

// Task 8
    let listArr = (arr: unknown[]): void => {
        document.write(`<div class="task"><ul>`)
        for (const arrElement of arr) {
            document.write(`<li>${arrElement}</li>`)
        }
        document.write(`</ul></div>`)
    }

// Task 9
    interface User {
        id: number;
        name: string;
        age: number;
    }

    let listArrObj = (arr: User[]): void => {
        document.write(`<div class="task">`)
        for (const arrElement of arr) {
            for (const arrElementKey in arrElement) {
                document.write(`
            <div>
                ${arrElementKey}: ${arrElement[arrElementKey as keyof User]}  
            </div>
            `)
            }
        }
        document.write(`</div>`)
    }

// Task 10
    let minElem = (arr: number[]): number => {
        let min: number = arr[0];
        for (const arrElement of arr) {
            if (min > arrElement) min = arrElement;
        }
        return min;
    }

// Task 11
    let sumElem = (arr: number[]): number => {
        let sum: number = 0;
        for (const arrElement of arr) {
            sum += arrElement;
        }
        return sum;
    }

// Task 12
    let swapElem = (arr: unknown[], pos1: number, pos2: number): unknown[] => {
        let a: unknown = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = a;
        return arr;
    }

// Task 13
    interface Currency {
        currency: string;
        value: number;
    }

    let exchange = (sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number | undefined => {
        for (const currency of currencyValues) {
            if (currency.currency === exchangeCurrency) return sumUAH / currency.value;
        }
    }
}

// L6
{
// Task 1

    console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// Task 2

    console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());

// Task 3

    console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// Task 4

    function trueJoin(arr: string[]): string {
        let str = "";
        for (const arrElement of arr) {
            if (arrElement !== '') str += (arrElement + ' ');
        }
        return str;
    }

    console.log(trueJoin(' dirty string   '.split(' ')))

// Task 5

    let stringToArray = (str: string): string[] => str.split(' ');
    console.log(stringToArray('Ревуть воли як ясла повні'));

// Task 6

    console.log([10, 8, -7, 55, 987, -1011, 0, 1050, 0].map((value) => value.toString()));

// Task 7

    function sortNums(array: number[], direction: string): number[] | null {
        switch (direction) {
            case 'descending':
                return array.sort((a, b) => a < b ? 1 : -1);
            case 'ascending':
                return array.sort((a, b) => a > b ? 1 : -1);
            default:
                return null;
        }
    }

    console.log(sortNums([11, 21, 3], 'descending'));
    console.log(sortNums([11, 21, 3], 'ascending'));

// Task 8

    interface CourseSecond {
        title: string;
        monthDuration: number;
    }

    let coursesAndDurationArray: CourseSecond[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
    console.log(coursesAndDurationArray.map((course, index) => {
        return {id: index + 1, title: course.title, monthDuration: course.monthDuration};
    }));
    console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration < b.monthDuration ? 1 : -1));

// Task 9

    interface Card {
        cardSuit: string;
        value: string;
        color: string;
    }

    const deck: Card[] = [
        {cardSuit: 'spade', value: '6', color: 'black'},
        {cardSuit: 'spade', value: '7', color: 'black'},
        {cardSuit: 'spade', value: '8', color: 'black'},
        {cardSuit: 'spade', value: '9', color: 'black'},
        {cardSuit: 'spade', value: '10', color: 'black'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},

        {cardSuit: 'clubs', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'},

        {cardSuit: 'diamond', value: '6', color: 'red'},
        {cardSuit: 'diamond', value: '7', color: 'red'},
        {cardSuit: 'diamond', value: '8', color: 'red'},
        {cardSuit: 'diamond', value: '9', color: 'red'},
        {cardSuit: 'diamond', value: '10', color: 'red'},
        {cardSuit: 'diamond', value: 'jack', color: 'red'},
        {cardSuit: 'diamond', value: 'queen', color: 'red'},
        {cardSuit: 'diamond', value: 'king', color: 'red'},
        {cardSuit: 'diamond', value: 'ace', color: 'red'},

        {cardSuit: 'heart', value: '6', color: 'red'},
        {cardSuit: 'heart', value: '7', color: 'red'},
        {cardSuit: 'heart', value: '8', color: 'red'},
        {cardSuit: 'heart', value: '9', color: 'red'},
        {cardSuit: 'heart', value: '10', color: 'red'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'heart', value: 'ace', color: 'red'}
    ];

    console.log(deck.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
    console.log(deck.filter(card => card.value === '6'));
    console.log(deck.filter(card => card.color === 'red'));
    console.log(deck.filter(card => card.cardSuit === 'diamond'));
    console.log(deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));

// Task 10

    console.log(deck.reduce((accumulator, card) => {
        switch (card.cardSuit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
                break;
        }
        return accumulator;
    }, {
        spades: [] as Card[],
        diamonds: [] as Card[],
        hearts: [] as Card[],
        clubs: [] as Card[]
    }));

// Task 11

    interface Course {
        title: string;
        monthDuration: number;
        hourDuration: number;
        modules: string[];
    }

    let coursesArray: Course[] = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    console.log(coursesArray.filter((course) => course.modules.includes('sass')));
    console.log(coursesArray.filter((course) => course.modules.includes('docker')));
}

// L7
{
    // Task 1

    class User {
        id: number;
        name: string;
        surname: string;
        email: string;
        phone: string;

        constructor(id: number, name: string, surname: string, email: string, phone: string) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
        }
    }

    let users: User[] = [
        new User(5, "Charlie", "Brown", "charlie.brown@example.com", "+1334455667"),
        new User(2, "Jane", "Smith", "jane.smith@example.com", "+1987654321"),
        new User(3, "Alice", "Johnson", "alice.johnson@example.com", "+1122334455"),
        new User(4, "Bob", "Williams", "bob.williams@example.com", "+1223344556"),
        new User(1, "John", "Doe", "john.doe@example.com", "+1234567890"),
        new User(8, "Frank", "Moore", "frank.moore@example.com", "+1667788990"),
        new User(7, "Emma", "Wilson", "emma.wilson@example.com", "+1556677889"),
        new User(10, "Hank", "Anderson", "hank.anderson@example.com", "+1889900112"),
        new User(9, "Grace", "Taylor", "grace.taylor@example.com", "+1778899001"),
        new User(6, "David", "Miller", "david.miller@example.com", "+1445566778")
    ];

// Task 2

    users = users.filter(user => user.id % 2 === 0)
    console.log(users);

// Task 3

    users.sort((user1, user2) => user1.id > user2.id ? 1 : -1)
    console.log(users);

// Task 4

    class Client {
        id: number;
        name: string;
        surname: string;
        email: string;
        phone: string;
        order: string[];

        constructor(id: number, name: string, surname: string, email: string, phone: string, ...order: string[]) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

    const clients: Client[] = [
        new Client(5, "Charlie", "Brown", "charlie.brown@example.com", "+1334455667", "Monitor", "Keyboard", "Mouse"),
        new Client(2, "Jane", "Smith", "jane.smith@example.com", "+1987654321", "Tablet"),
        new Client(3, "Alice", "Johnson", "alice.johnson@example.com", "+1122334455", "Smartwatch", "Headphones"),
        new Client(4, "Bob", "Williams", "bob.williams@example.com", "+1223344556", "Gaming Console"),
        new Client(1, "John", "Doe", "john.doe@example.com", "+1234567890", "Laptop", "Smartphone"),
        new Client(8, "Frank", "Moore", "frank.moore@example.com", "+1667788990", "TV", "Soundbar"),
        new Client(7, "Emma", "Wilson", "emma.wilson@example.com", "+1556677889", "E-Book Reader", "Wireless Earbuds"),
        new Client(10, "Hank", "Anderson", "hank.anderson@example.com", "+1889900112", "Drone", "VR Headset"),
        new Client(9, "Grace", "Taylor", "grace.taylor@example.com", "+1778899001", "Smart Home Hub"),
        new Client(6, "David", "Miller", "david.miller@example.com", "+1445566778", "Camera")
    ];

// Task 5

    clients.sort((user1, user2) => user1.order.length < user2.order.length ? 1 : -1)

    console.log(clients)

// Task 6-7

    class ClassCar {
        model: string;
        producer: string;
        productionYear: number;
        maxSpeed: number;
        fuelTankVolume: number;
        driver: unknown;

        constructor(model: string, producer: string, productionYear: number, maxSpeed: number, fuelTankVolume: number) {
            this.model = model;
            this.producer = producer;
            this.productionYear = productionYear;
            this.maxSpeed = maxSpeed;
            this.fuelTankVolume = fuelTankVolume;
        }

        drive(): void {
            console.log(`Driving with ${this.maxSpeed} km per hour`);
        }

        info(): void {
            console.log(`
        Model — ${this.model}
        Producer — ${this.producer}
        Production year — ${this.productionYear}
        Max speed — ${this.maxSpeed}
        Fuel tank volume — ${this.fuelTankVolume}
        `);
        }

        increaseMaxSpeed(newSpeed: number): void {
            this.maxSpeed = newSpeed;
        }

        changeYear(newYear: number): void {
            this.productionYear = newYear;
        }

        addDriver(driver: unknown): void {
            this.driver = driver;
        }
    }

// Task 8

    class Person {
        name: string;
        age: number;
        shoeSize: number;

        constructor(name: string, age: number, footSize: number) {
            this.name = name;
            this.age = age;
            this.shoeSize = footSize;
        }
    }

    const cinderellas: Person[] = [
        new Person("Ella", 19, 36),
        new Person("Sophia", 21, 37),
        new Person("Isabella", 22, 38),
        new Person("Mia", 18, 35),
        new Person("Amelia", 20, 39),
        new Person("Olivia", 23, 37),
        new Person("Emma", 19, 36),
        new Person("Ava", 24, 40),
        new Person("Lily", 22, 38),
        new Person("Charlotte", 21, 37)
    ];

    const prince = new Person("William", 22, 35)

    console.log(`The name of the cinderella who should be with prince ${prince.name} is ${(cinderellas.find(cinderella => cinderella.shoeSize === prince.shoeSize))?.name}!`);
}

// L8
{
    // Task 1

    interface User {
        name: string;
        age: number;
        status: boolean | null;
        skills: string[];

        greeting(): void;
    }

    let user1: User = {
        name: 'Artem',
        age: 20,
        status: null,
        skills: ['c++', 'python', 'binding of isaac'],
        greeting() {
            return `Hello, my name is ${this.name}, I'm gonna break your knees`;
        }
    }

    function deepCopy(obj: any): any {
        let newObj: any = {};
        for (const objKey in obj) {
            if (typeof obj[objKey] === "object") {
                if (Array.isArray(obj[objKey])) {
                    newObj[objKey] = obj[objKey].map(value => value);
                } else if (obj[objKey] === null) {
                    newObj[objKey] = null;
                } else {
                    newObj[objKey] = deepCopy(obj[objKey]);
                }
            } else {
                newObj[objKey] = obj[objKey];
            }
        }
        return newObj;
    }

    let user2: User = deepCopy(user1);

    console.log(user1);
    console.log(user2);
    console.log(user2?.greeting(), user1 === user2, user1.skills === user2.skills);

// Task 2

    interface Course {
        id?: number;
        title: string;
        monthDuration: number;
    }

    let coursesAndDurationArray: Course[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    const addId = (value: Course, index: number): Course => ({id: index + 1, ...value});
    console.log(coursesAndDurationArray.map(addId));
}
