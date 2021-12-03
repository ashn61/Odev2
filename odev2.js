const blogList=[
    { name: 'Blogyazi1', author: 'Yazar1' },
    { name: 'Blogyazi2', author: 'Yazar2' },
    { name: 'Blogyazi3', author: 'Yazar3' },
    { name: 'Blogyazi4', author: 'Yazar4' },  
]


const listele= () => {
    blogList.map(blog => {
        console.log(blog.name)
    })
}
listele();
console.log('<<<<<<Yenineden Listem>>>>>>')

const addBook=(newBlog,callBack) =>{
    blogList.push(newBlog)
    callBack()
}


addBook( {name: 'Yeni Blog', author:'Yazar5'},listele)
