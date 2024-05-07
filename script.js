class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author 
        this.year=year
    }
}

const defaultBooks=[
    //Json format => key: value pair
    //JS object Notation
    {
        title: 'Carrie', 
        author: 'Stephen King',
        year: '1974'
    },

    {
        title: 'Six Crimson Cranes', 
        author: 'Elizabeth Lim',
        year: '2021'
    },

    {
        title: 'Orphans on the tide', 
        author: 'Stuart Murray',
        year: '2020'
    },

    {
        title: 'Red dragon', 
        author: 'Thomas Harris',
        year: '1981'
    },

    {
        title: 'The silence of the lambs', 
        author: 'Thomas Harris',
        year: '1988'
    }
]

class UI{
    static addBookToList=(book)=>{
        const list=document.getElementById('book-list')
        const row=document.createElement('tr')
        row.innerHTML=`<td>${book.title}</td> <td>${book.author}</td> <td>${book.year}</td>`
        list.appendChild(row)
    }

    static displayBooks=()=>{
        defaultBooks.forEach(book => UI.addBookToList(book))
    }
}

UI.displayBooks()

document.querySelector('#book-form').addEventListener('submit',addABook)

function addABook(e){
    //precent actual submission
    e.preventDefualt()

    //get the form values
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const year=document.querySelector('#year').value;

    const book = new Book(title,author,year)
    UI.addBookToList(book)
}