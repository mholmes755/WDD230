
const baseURL = "https://github.com/mholmes755/wdd230";
const linksURL = "https://mholmes755.github.io/wdd230/data/links.json"
const section = document.querySelector('#card')


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
        let weekNumber = document.createElement('h3');
        weekNumber.textContent = week.week;

        ul.appendChild(weekNumber); // Display Week Number above each set of associated links


        
        week.links.forEach(links =>{ // Access individual week information
            let li = document.createElement('li');
            let link = document.createElement('a');

            link.setAttribute("href", links.url);
            link.setAttribute("target", "blank");
            link.textContent = links.title;
    
            li.appendChild(link);
            ul.appendChild(li);

        });


        section.appendChild(ul);
        
    });        
    }


getLinks(linksURL);