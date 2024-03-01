import { Bokeh1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/bokeh1.cdn.min.js'

const bokeh1Background = Bokeh1Background(document.getElementById('webgl-canvas'))
bokeh1Background.loadMap('https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png')
bokeh1Background.setColors([0x6d4862, 0xfd826c, 0x22ccc1])

document.body.addEventListener('click', () => {
  // bokeh1Background.setBackgroundColor(0xffffff * Math.random())
  bokeh1Background.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
})


let daughter =
    {
        name:"Our future daughter",
        bio: 'DBio',
        soul: 'DSoul',
        mind: 'DMind',
        body: 'Daughter.jpg',
        shortname: 'Daughter'
    };

let jessica =
    {
        name:"Dr. Jessica Rush Leeker",
        bio: "JBio",
        soul:"JSoul",
        mind: "Raised in a vibrant community that revered education and community service, my upbringing was deeply rooted in Black heritage and academic pursuits. " +
            "This foundation fostered my passion for STEM, guiding me toward a career that intersected with education, specifically in Supply Chain and " +
            "Information Systems, eventually leading to a Ph.D. in Engineering Education. Throughout my academic journey, I encountered mentors who encouraged " +
            "me to envision a STEM education landscape that was inclusive and equitable. " +
            "Teaching at institutions like the University of Colorado Boulder and Purdue University often placed me in situations where I was the sole " +
            "representative of my race and gender. These circumstances, though challenging, refined my educational approach to emphasize critical thinking, " +
            "problem-solving, and the integration of diverse perspectives. My identity as a Black woman has significantly shaped my teaching philosophy, " +
            "allowing me to address my students' educational needs and potential with a unique perspective. " +
            "The underrepresentation of Black women in STEM fields propelled me towards education to mentor, challenge systemic barriers, and foster a " +
            "diverse and inclusive community. My experiences in academia, navigating the intricacies of race and gender, have been both challenging and " +
            "rewarding. I’ve created an environment where students feel empowered to explore, question, and innovate." +
            "The evolution of STEM education, an emphasis on social justice, and the recognition of diversity's importance have influenced my teaching " +
            "and reinforced my belief in education's transformative power. Reflecting on my journey, I see my path as a testament to the resilience of " +
            "Black women in STEM. I aim to inspire future generations to challenge the status quo and contribute to a more equitable world, highlighting " +
            "the collective strength and perseverance required to forge new paths in the STEM fields.",
        body: "Jessica.jpg",
        shortname: "Jessica"
    };

let azizi =
    {
        name:"Azizi Penn",
        bio: "ABio",
        soul:"ASoul",
        mind: "AMind",
        body: "Azizi.jpg",
        shortname: "Azizi"
    };

let lois =
    {
        name:"Lois Mailou Jones",
        bio: "LBio",
        soul:"LSoul",
        mind: "LMind",
        body: "Lois.jpg",
        shortname: "Lois"
    };

let eve =
    {
        name:"Eve L. Ewing",
        bio: "EBio",
        soul:"ESoul",
        mind: "Testify<br>" +
            "i stand before you to say <br>" +
            "that today i walked home<br>" +
            "& caught the light through<br>" +
            "the fence & it was so golden\n" +
            "i wanted to cry & i lifted \n" +
            "my right hand to say thank\n" +
            "you god for the sun thank \n" +
            "you god for a chain link fence\n" +
            "& all the shoes that fit into\n" +
            "the chain link fence so that\n" +
            "we might get lifted god thank\n" +
            "you & i just wanted to dance\n" +
            "& it feels good to have food\n" +
            "in your belly & it feels good\n" +
            "to be home even when home\n" +
            "is the space between metal\n" +
            "shapes & still we are golden\n" +
            "& a man who wore the walk\n" +
            "of hard grounds & lost days\n" +
            "came toward me in the street\n" +
            "& said ‘girl what a beautiful \n" +
            "day’ & i said yes, testify\n" +
            "& i walked on & from some\n" +
            "place a horn rose, an organ,\n" +
            "a voice, a chorus, here to tell\n" +
            "you that we are not dead\n" +
            "we are not dead we are not\n" +
            "dead we are not dead we are\n" +
            "not dead we are not dead \n" +
            "we are not dead we are not\n" +
            "dead \n" +
            "yet",
        body: "Eve.jpg",
        shortname: "Eve"
    };


let melanie =
    {
        name:"Melanie N. Latson, Ed. D. Scholar-Practitioner",
        bio: "Melanie N. Latson is the Founder and Educator of the social justice collective, " +
            "March on Kid. While her roots are planted in Atlanta, her passion began in the " +
            "rich city of Richmond, California. Although rich in culture, love, and community, " +
            "this city’s lack of resources is, indeed, what ignited her fire to make a " +
            "difference both in and outside the classroom. She has earned her Bachelor of " +
            "Arts from the University of West Georgia, Master of Education from Northeastern University, " +
            "and is currently earning her Doctorate degree in Education Policy and Leadership at " +
            "American University. Entering each space as a “good troublemaker” striving for social " +
            "change through youth activism, her passion for social justice sparks the daily courage it " +
            "takes to boldly disrupt inequitable systems by equipping our youth with the powerful tools " +
            "of social consciousness,  advocacy, and activism.",
        soul:"Melanie.mp3",
        mind: "As I sat quietly in my literature class awaiting my new teacher and more than likely daydreaming about lunch, " +
            "my internal monologue was abruptly paused with a question so loud that I was startled. " +
            "My literature teacher vivaciously walked in asking a question to the class, " +
            "“What did you learn today, my friends, what did you learn today?!” As she asked this question, " +
            "I was not only enthralled by her presence, but surprised that this was a question I had never been asked before. " +
            "This question, so foreign in nature to me, led to a moment of speechlessness in a search to find the " +
            "answer, the right answer, or maybe the answer I thought she wanted to hear. " +
            "This question forced each of us students to remember that the purpose of our very presence was to learn " +
            "and that this learning was meant to be active through reflection in each moment of the day. " +
            "This very question also became the question I asked my students once I became a teacher and created a " +
            "safe space where learning was meant to be seeked, discovered and indulged in within the four walls of our classroom and beyond. ",
        body: "Melanie.jpg",
        shortname: "Melanie"
    };
let ugochi =
    {
        name:"Ugochi Emenaha, EdD",
        bio: "Dr. Ugochi Emenaha is a first-generation Nigerian-American educator and award-winning author. " +
            "Ugochi is a spoken word artist, storyteller, and award-winning author. " +
            "Outside of writing children's stories, she uses her passion for literacy and writing to inform educators on " +
            "research-based skills for growing our future leaders. She has spoken at various conferences nationwide, " +
            "including 100 Black Men in Education’s Annual Conference, Lead Forward in Nashville, and the National " +
            "Association for Multicultural Advancement’s annual conference. Her most prized accomplishment is raising " +
            "her son and teaching him how to be brave, smart, and have faith.",
        soul:"Ugochi.mp3",
        mind: "Sitting at the front of the class I am ridiculously ashamed of the person I’ve become. So much that I run from simple rhetoric set up to support me. Because in my eyes, I missed the mark." +
            "I should have been this and shouldn’t have been that; but I snapped and fell into the trap. Walking inside a door that I knew was closed I forced it open and shot the lock. " +
            "Pop the top and laid down to a system that was set up to mislead me, and mislead I was." +
            "And filled up I had been with a life that was yet the size of ball like Madden and I was saddened because " +
            "I created a causality of immorality-- yet convinced myself, that although it was not a legal soul it was known " +
            "before it was formed by the greatest of Souls.  And from an it, -- it became a him, and from a him --to dream " +
            "and now the joy of my world is in Zion—Looking up to the Hill towards Orion asking where does my help come from?" +
            "For on that same hill I cry I plead and beg and repeat the cycle that I fought with a masterful degree to obtain my " +
            "master’s degree to become a leader in a system that I joined to fight against little boys becoming impotent men that " +
            "shoot blanks at the world that they feel is against them and with injustice in the news and a bland taste in my " +
            "mouth I watch as I pray that my young black man doesn’t become the little boy in my classroom who walks away " +
            "from a cyclical system and pumps his fist at me because I am the only antagonist he sees in his story." +
            "Walking out the door he continues to feel his glory against the pavement as his beats fill the headphones and " +
            "the street hit his feet Wondering if it’s a wrap on his career because he can’t read and turned his back on the walls that were there to help him succeed. " +
            "But he keeps walking and hears his name being called so rhythmically that it sounds like the bouncing of a ball repetitively hitting the court to " +
            "which he contemplates can his skills reign and can he be the next King James and maintain the Black and White Queens throwing themselves at his dynasty " +
            "for a chance to become fleeting royalty or a duke and duchess of a rich roughness and a soft wind blows the rock past his feet " +
            "like people passing an overthrown regime.",
        body: "Ugochi.jpg",
        shortname: "Ugochi"
    };
let meghan =
    {
        name:"Meghan L. Green EdD.",
        bio: "Meghan L. Green, EdD is an Assistant Professor of Raciolinguistic Justice in Early Childhood Teacher Education at " +
            "Erikson Institute in Chicago, IL. She recently served as the lead researcher on the Illinois Governor’s " +
            "Office in Early Childhood Development (GOECD) funded project studying the dimensions of racial equity of the " +
            "Early Learning Council. Over the past 17 years, she has served in the field of early childhood education as a " +
            "researcher, an adjunct professor, a pre-kindergarten to 4th-grade teacher, a university field-based liaison, " +
            "and an anti-bias and anti-racist training facilitator. Meghan earned her EdD degree in curriculum and instruction " +
            "with a specialization in early childhood education at Texas A&M University-Commerce, a M. Ed. in Early Childhood " +
            "Education from Northwestern State University, and her B.A. in Anthropology with a minor in African American " +
            "studies from Howard University. Meghan’s dissertation has won multiple awards from AERA including the " +
            "2023 Dissertation Award from the Critical Perspectives in Early Childhood Education SIG and the Research " +
            "on Women and Education SIG’s  2023 Selma Greenberg Outstanding Dissertation Award. Her scholarly works have been " +
            "published in journals such as Equity & Excellence in Education, The Critical Social Educator, " +
            "Early Childhood Education Journal, Ethnic Studies Pedagogies, Exchange Press, and Early Years: Journal " +
            "of Texas Association for the Education of Young Children. In her forthcoming edited volume, " +
            "'Daughters of (Re)imagined Early Childhood Education: Reflective Narratives of Black Women Educators in Texas During Covid-19'," +
            " Meghan uses endarkened narrative inquiry to examine the lived experiences and pedagogical development of Black women early childhood educators.",
        soul:"Meghan.mp3",
        mind: "MMind",
        body: "Meghan.jpg",
        shortname: "Meghan"
    };

let loadData = function(mind,body,soul) {
    let title;
    let btitle = loadbody(body);
    let mtitle = loadmind(mind);
    let stitle = loadsoul(soul);
}

let loadbody = function(body) {
    let theurl = '../images/Card_Pictures/Selections/';
    let bodysource;
    let title;
    switch (body) {
        case 'meghan':
            bodysource = meghan.body;
            title = meghan.shortname + "\(body\)";
            break;
        case 'ugochi':
            bodysource = ugochi.body;
            title = meghan.shortname + "\(body\)";
            break;
        case 'eve':
            bodysource = eve.body;
            title = meghan.shortname + "\(body\)";
            break;
        case 'lois':
            bodysource = lois.body;
            title = meghan.shortname + "\(body\)";
            break;
        case 'melanie':
            bodysource = melanie.body;
            title = title + melanie.shortname + "\(body\)";
            break;
        case 'jessica':
            bodysource = jessica.body;
            title = title + jessica.shortname + "\(body\)";
            break;
        case 'azizi':
            bodysource = azizi.body;
            title = title + azizi.shortname + "\(body\)";
            break;
        case 'daughter':
            bodysource = daughter.body;
            title = title + daughter.shortname + "\(body\)";
            break;
    }
    $("#herbody").attr('src', theurl + bodysource);
   return title;
}

let loadmind = function(mind) {
    let mindsource;
    let title;
    switch (mind) {
        case 'meghan':
            mindsource = meghan.mind;
            break;
        case 'ugochi':
            mindsource = ugochi.mind;
            break;
        case 'eve':
            mindsource = eve.mind;
            break;
        case 'lois':
            mindsource = lois.mind;
            break;
        case 'melanie':
            mindsource = melanie.mind;
            break;
        case 'jessica':
            mindsource = jessica.mind;
            break;
        case 'azizi':
            mindsource = azizi.mind;
            break;
        case 'daughter':
            mindsource = daughter.mind;
            break;
    }
    $("#mind_text").html(mindsource);
}

let loadsoul = function(soul) {
    let theurl = "../sound/";
    let soulsource;
    let title;
    switch (soul) {
        case 'meghan':
            soulsource = meghan.soul;
            break;
        case 'ugochi':
            soulsource = ugochi.soul;
            break;
        case 'eve':
            soulsource = eve.soul;
            break;
        case 'lois':
            soulsource = lois.soul;
            break;
        case 'melanie':
            soulsource = melanie.soul;
            break;
        case 'jessica':
            soulsource = jessica.soul;
            break;
        case 'azizi':
            soulsource = azizi.soul;
            break;
        case 'daughter':
            soulsource = daughter.soul;
            break;
    }
    $("#soul").attr('src', theurl + soulsource);

}


$(document).ready(function() {
    let body = sessionStorage.getItem('body');
    let mind = sessionStorage.getItem('mind');
    let soul = sessionStorage.getItem('soul');
    let title = loadData(mind,body,soul);
    document.getElementById("audiosoul").load();
});




