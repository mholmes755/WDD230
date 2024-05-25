
const baseURL = "https://github.com/mholmes755/wdd230";
const linksURL = "https://github.com/mholmes755/wdd230/data/links.json"
const section = dodcument.querySelector('#card')


async function getLinks(linksURL) {

        // Fetch Data from url
        const response = await fetch(linksURL);
        // Make that data readable in a json file
        const data = await response.json();
        // console.log(data);
        displayLinks(data.weeks);
};

const displayLinks = (weeks) =>{
    //section builder code
    weeks.forEach(week => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let link = document.createElement('a');


        link.setAttribute = ("href", week.url);
        link.textContent = `${week.links.title}`;

        li.appendChild(link);
        ul.appendChild(li);
        section.appendChild(ul);
        
    });        
    }


getLinks(linksURL);