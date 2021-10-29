// For å importere fra datafilen
import {SAMPLE_POSTS} from '../data/posts.js'

//De tre elemenetene som skal settes (må ikke være her)
const img_top_post = document.getElementById("img_top_post");
const section_top_post = document.getElementById("section_top_post");
const div_posts = document.getElementById("div_posts");

//const topPostObject = SAMPLE_POSTS[0]
//const postsObjcects = SAMPLE_POSTS.slice(1)
//Disse to er samme som linjen under
const [ topPostObject, ...postsObjects ] = SAMPLE_POSTS  //Destructure

function createTopPost(topPostObject){
    //Setter bildet til hovedoppslaget
    img_top_post.src=topPostObject.photo
    img_top_post.alt=topPostObject.alt

    //Setter teksten til hovedoppslaget
    section_top_post.innerHTML=`
        <b class="text-muted d-block mb-4">${topPostObject.date}</b>
        <h2 class="mb-1">${topPostObject.title}</h2>
        <h4 class="text-muted mb-4">${topPostObject.subTitle}</h4>
        <p>${topPostObject.intro}</p>

        <p class="text-muted d-flex align-items-center">
            <span class="material-icons">person</span>
            Written by ${topPostObject.author}
        </p>

        <footer>
            ${ createTags(topPostObject.tags) }
        </footer>
        `
}

function createPosts(postObject){
    return `
    <section class="card shadow"  >
        <img class="card-img-top" src="${postObject.photo}" alt="${postObject.alt}" />
        <div class="card-body" >
            <span class="text-muted d-block mb-4 fw-bold">${postObject.date}</span>
            <h2 class="mb-1">${postObject.title}</h2>
            <h4 class="text-muted mb-4">${postObject.subTitle}</h4>
            <p>${postObject.intro}</p>

            <p class="text-muted d-flex align-items-center">
                <span class="material-icons">person</span>
                Written by ${postObject.author}
            </p>

            <footer>
                ${ createTags(postObject.tags) }
            </footer>
        </div>
    </section>
    `
}

function createTags(tags){
    let retrunstring =''
    for (let tag of tags){
        retrunstring +=`<span  class="badge bg-primary">#${tag}</span> `}
    return retrunstring
}


//Insert elements / Run code
createTopPost(topPostObject)

for (const postObjcect of postsObjects){
    div_posts.innerHTML += createPosts(postObjcect);
}
