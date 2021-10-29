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
    let temp_section = document.createElement("section");
    temp_section.className = "card shadow";
    let temp_img = document.createElement("img");
    temp_img.alt =  postObject.alt
    temp_img.src = postObject.photo
    temp_img.className = "card-img-top"
    temp_section.appendChild(temp_img)
    let temp_div = document.createElement("div")
    let temp_span = document.createElement("span")
    temp_span.className = "fw-bold text-muted d-block mb-4"
    temp_span.innerHTML = postObject.date
    temp_div.appendChild(temp_span)
    let temp_h2 = document.createElement("h2")
    temp_h2.className = "mb-1"
    temp_h2.innerHTML=postObject.title
    temp_div.appendChild(temp_h2)
    let temp_h4 = document.createElement("h4")
    temp_h4.className = "text-muted mb-4"
    temp_h4.innerHTML = postObject.subTitle
    temp_div.appendChild(temp_h4)
    let temp_p_intro = document.createElement("p")
    temp_p_intro.innerHTML=postObject.intro
    temp_div.appendChild(temp_p_intro)
    let temp_p_author = document.createElement("p")
    temp_p_author.className = "text-muted d-flex align-items-center"
    temp_p_author.innerHTML= `
        <span class="material-icons">person</span>
        Written by ${postObject.author}`

    temp_div.appendChild(temp_p_author)
    temp_div.appendChild(createTags(postObject.tags))
    temp_section.appendChild(temp_div)
    
    return temp_section
    
}

function createTags(tags){
    let temp_footer = document.createElement("footer")
    for (let tag of tags){
        let temp_span_tag = document.createElement("span")
        temp_span_tag.className="badge bg-primary"
        temp_span_tag.innerHTML="#" + tag
        temp_footer.appendChild(temp_span_tag)
        temp_footer.innerHTML+=" "
        }
    return temp_footer
    
}

//Run the code
createTopPost(topPostObject)

for (const postObjcect of postsObjects){
    //div_posts.innerHTML += createPosts(postObjcect);
    div_posts.appendChild(createPosts(postObjcect))
}
//console.log(topPostObject)