const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];
let checkk = false;
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.map((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
        
    }, 1000)
checkk = true;
}

function creatPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();

    }, 2000);
   
}
getPosts();

creatPost({ title: 'Post Three', body: 'this is post three' }, getPosts)

let isfulfuiled = new Promise((resolved ,rejected)=>
{
    
     if(checkk)
    {
      resolved("allgood");
      
    }
    else
    rejected(Error("notgood"))
}).then(
    resolve => console.log(resolve),
    reject => console.log(reject)
);
