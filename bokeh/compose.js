import { Bokeh1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/bokeh1.cdn.min.js'

const bokeh1Background = Bokeh1Background(document.getElementById('webgl-canvas'))
bokeh1Background.loadMap('https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png')
bokeh1Background.setColors([0x6d4862, 0xfd826c, 0x22ccc1])

document.body.addEventListener('click', () => {
  // bokeh1Background.setBackgroundColor(0xffffff * Math.random())
  bokeh1Background.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
})


let loadData = function(mind,body,soul) {
    let title;
    let btitle = loadbody(body);
    let mtitle = loadmind(mind);
    let stitle = loadsoul(soul);
    title = mtitle + " - "  + btitle + " - "+ stitle;
    $("#convo_title").html(title);
}

let loadBio = function(mind) {
    loadbody(mind);
    loadsoul(mind);
    let mindsource;
    let title;
    switch (mind) {
        case 'meghan':
            mindsource = meghan.bio;
            title = "About " + meghan.shortname;
            break;
        case 'ugochi':
            mindsource = ugochi.bio;
            title = "About " + ugochi.shortname;
            break;
        case 'eve':
            mindsource = eve.bio;
            title = "About " +  eve.shortname;
            break;
        case 'lois':
            mindsource = lois.bio;
            title =  "About " + lois.shortname;
            break;
        case 'melanie':
            mindsource = melanie.bio;
            title =   "About " + melanie.shortname;
            break;
        case 'jessica':
            mindsource = jessica.bio;
            title =  "About " + jessica.shortname;
            break;
        case 'azizi':
            mindsource = azizi.bio;
            title =  "About " + azizi.shortname;
            break;
        case 'daughter':
            mindsource = daughter.bio;
            title =  "About " + daughter.shortname;
            break;
    }
    $("#mind_text").html(mindsource);
    $("#convo_title").html(title);

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
            title = ugochi.shortname + "\(body\)";
            break;
        case 'eve':
            bodysource = eve.body;
            title = eve.shortname + "\(body\)";
            break;
        case 'lois':
            bodysource = lois.body;
            title = lois.shortname + "\(body\)";
            break;
        case 'melanie':
            bodysource = melanie.body;
            title =  melanie.shortname + "\(body\)";
            break;
        case 'jessica':
            bodysource = jessica.body;
            title =  jessica.shortname + "\(body\)";
            break;
        case 'azizi':
            bodysource = azizi.body;
            title =  azizi.shortname + "\(body\)";
            break;
        case 'daughter':
            bodysource = daughter.body;
            title =  daughter.shortname + "\(body\)";
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
            title = meghan.shortname + "\(mind\)";
            break;
        case 'ugochi':
            mindsource = ugochi.mind;
            title = ugochi.shortname + "\(mind\)";
            break;
        case 'eve':
            mindsource = eve.mind;
            title =  eve.shortname + "\(mind\)";
            break;
        case 'lois':
            mindsource = lois.mind;
            title =  lois.shortname + "\(mind\)";
            break;
        case 'melanie':
            mindsource = melanie.mind;
            title =  melanie.shortname + "\(mind\)";
            break;
        case 'jessica':
            mindsource = jessica.mind;
            title =  jessica.shortname + "\(mind\)";
            break;
        case 'azizi':
            mindsource = azizi.mind;
            title =  azizi.shortname + "\(mind\)";
            break;
        case 'daughter':
            mindsource = daughter.mind;
            title =  daughter.shortname + "\(mind\)";
            break;
    }
    $("#mind_text").html(mindsource);
    return title;
}

let loadsoul = function(soul) {
    let theurl = "../sound/";
    let soulsource;
    let title;
    switch (soul) {
        case 'meghan':
            soulsource = meghan.soul;
            title =  daughter.shortname + "\(soul\)";
            break;
        case 'ugochi':
            soulsource = ugochi.soul;
            title =  ugochi.shortname + "\(soul\)";
            break;
        case 'eve':
            soulsource = eve.soul;
            title =  eve.shortname + "\(soul\)";
            break;
        case 'lois':
            soulsource = lois.soul;
            title =  lois.shortname + "\(soul\)";
            break;
        case 'melanie':
            soulsource = melanie.soul;
            title =  melanie.shortname + "\(soul\)";
            break;
        case 'jessica':
            soulsource = jessica.soul;
            title =  jessica.shortname + "\(soul\)";
            break;
        case 'azizi':
            soulsource = azizi.soul;
            title =  azizi.shortname + "\(soul\)";
            break;
        case 'daughter':
            soulsource = daughter.soul;
            title =  daughter.shortname + "\(soul\)";
            break;
    }
    $("#soul").attr('src', theurl + soulsource);
    document.getElementById("audiosoul").load();
    return title;
}



$(document).ready(function() {
    let body = sessionStorage.getItem('body');
    let mind = sessionStorage.getItem('mind');
    let soul = sessionStorage.getItem('soul');
    if ((body === mind) && (mind === soul)) {
        let title = loadBio(mind);
    } else {
        let title = loadData(mind, body, soul);
    }

});


let daughter =
    {
        name:"Our future daughter",
        bio: "Our future daughter's bio has not yet been written but we hope.",
        soul: 'Daughter.mp3',
        mind: 'DMind',
        body: 'Daughter.jpg',
        shortname: 'Daughter'
    };

let jessica =
    {
        name:"Dr. Jessica Rush Leeker",
        bio: "JBio",
        soul:"Jessica.mp3",
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
            "the collective strength and perseverance required to forge new paths in the STEM fields.<br><br>",
        body: "Jessica.jpg",
        shortname: "Jessica"
    };

let azizi =
    {
        name:"Azizi Penn",
        bio: "ABio",
        soul:"Azizi.mp3",
        mind: "AMind",
        body: "Azizi.jpg",
        shortname: "Azizi"
    };

let lois =
    {
        name:"Lois Mailou Jones",
        bio: "Lois Mailou Jones was more than an artist; she was a cultural bridge between continents and a pioneering educator. Her work and life story offer invaluable insights into the Black experience, the dynamics of the art world in the 20th century, and the power of art as a tool for social change." +
            "Born in Boston, Massachusetts, in 1905, Lois Mailou Jones was introduced to a culturally rich society yet segregated by race. Boston's early 20th-century atmosphere was marked by a burgeoning Black intellectual and artistic community despite the racial challenges of the era." +
            "Jones's parents were instrumental in her early development. Her mother, a talented pianist, and her father, a dedicated building superintendent, emphasized the importance of education and the arts (Johnson, 2018). This nurturing environment cultivated Jones's interest in art from a young age." +
            "Her education shaped Jones's artistic journey. She attended the Boston High School of Practical Arts and later the School of the Museum of Fine Arts, Boston. Her academic pursuit continued at Howard University, where she became a distinguished faculty member. A scholarship allowed her to study at the prestigious Académie Julian in Paris, broadening her artistic vision and style." +
            "Jones's tenure at Howard University was marked by her commitment to nurturing the next generation of Black artists. She was a beloved figure who significantly influenced the Washington Color School movement." +
            "Jones's art evolved from early works influenced by her New England upbringing to vibrant compositions reflecting her travels in France, Haiti, and Africa. Her paintings are celebrated for their intricate designs, bold colors, and thematic depth, exploring themes of race, identity, and social justice." +
            "As an educator, Jones strived to pass down her love of art, art history, and culture to her students. Her pedagogy and praxis centered the real world application of art as a form of resistance and authentic engagement in liberation movements domestically and abroad." +
            "Lois Mailou Jones honored her students’ lived experiences and legitimate funds of knowledge over the course of her tenure as an educator. Her dedication to her students’ success went beyond her academic expectations for them. Jones nurtured her students’ love of African Diasporic artistic representations and believed in her role as a co-conspirator and advocate. " +
            "Jones's legacy is profound. Her work resides in prestigious collections worldwide, including the Smithsonian American Art Museum. She broke racial and gender barriers, paving the way for future generations of artists. Her work inspires discussions on diversity and representation in the arts.<br><br><br>",
        soul:"Lois.mp3",
        mind: "“The guard saw me looking at the painting and said, ‘I guess you like art, don't you?’ I said to myself that he doesn't know that the " +
            "painting is mine hanging there. And so that's how it was way back in those early days; I was exhibiting at all of the big museums, " +
            "but they never knew that I was black because I either shipped my works or had a white person deliver them. Now you see how difficult it was.<br><br>",
        body: "Lois.jpg",
        shortname: "Lois"
    };

let eve =
    {
        name:"Eve L. Ewing",
        bio: "Dr. Eve L. Ewing is a writer, scholar, and cultural organizer from Chicago. " +
            "She is the award-winning author of four books: the poetry collections " +
            "Electric Arches and 1919, the nonfiction work Ghosts in the Schoolyard: " +
            "Racism and School Closings on Chicago's South Side, and a novel for young readers," +
            " Maya and the Robot. She is the co-author (with Nate Marshall) of the play " +
            "No Blue Memories: The Life of Gwendolyn Brooks. She has written several projects " +
            "for Marvel Comics, most notably the Ironheart series, and is currently writing Black Panther. " +
            "Ewing is an associate professor in the Department of Race, Diaspora, and Indigeneity " +
            "at the University of Chicago. Her work has been published in The New Yorker, " +
            "The Atlantic, The New York Times, and many other venues. Currently she is working on her next book, " +
            "Original Sins: The (Mis)education of Black and Native Children and the Construction of American Racism, which will be published by One World.<br><br> ",
        soul:"Eve.mp3",
        mind: "<div class='mind_title'>Testify</div>" +
            "i stand before you to say <br>" +
            "that today i walked home<br>" +
            "& caught the light through<br>" +
            "the fence & it was so golden<br>" +
            "i wanted to cry & i lifted<br>" +
            "my right hand to say thank<br>" +
            "you god for the sun thank <br>" +
            "you god for a chain link fence<br>" +
            "& all the shoes that fit into<br>" +
            "the chain link fence so that<br>" +
            "we might get lifted god thank<br>" +
            "you & i just wanted to dance<br>" +
            "& it feels good to have food<br>" +
            "in your belly & it feels good<br>" +
            "to be home even when home<br>" +
            "is the space between metal<br>" +
            "shapes & still we are golden<br>" +
            "& a man who wore the walk<br>" +
            "of hard grounds & lost days<br>" +
            "came toward me in the street<br>" +
            "& said ‘girl what a beautiful <br>" +
            "day’ & i said yes, testify<br>" +
            "& i walked on & from some<br>" +
            "place a horn rose, an organ,<br>" +
            "a voice, a chorus, here to tell<br>" +
            "you that we are not dead<br>" +
            "we are not dead we are not<br>" +
            "dead we are not dead we are<br>" +
            "not dead we are not dead <br>" +
            "we are not dead we are not<br>" +
            "dead <br>" +
            "yet<br><br>",
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
            "of social consciousness,  advocacy, and activism.<br><br>",
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
            "safe space where learning was meant to be seeked, discovered and indulged in within the four walls of our classroom and beyond.<br><br> ",
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
        name:"Meghan L. Green Ed.D.",
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
            " Meghan uses endarkened narrative inquiry to examine the lived experiences and pedagogical development of Black women early childhood educators.<br><br>",
        soul:"Meghan.mp3",
        mind: "I am accountable to the communities that raised me, and as I navigate all of these marginalized identities, I remember " +
            "these words: It is necessary to teach by living and speaking those truths which we believe and know beyond understanding. " +
            "Because in this way alone we can survive, by taking part in a process of life that is creative and continuing, that is growth " +
            "(Lorde, 1984, p. 31). Audre Lorde (1984) conceptualized the marginalization of Black queer women in the liberation movements of the " +
            "1960s, and the idea of the “mythical norm” was born out of this reflective internal dialogue. Black queer women’s" +
            " experiences are positioned outside of the margins of their white female identifying and Black heterosexual peers. " +
            "When I was a freshman in college, I read “Zami: A New Spelling of My Name” by Audre Lorde for the first time. I felt a sense of " +
            "belonging and kinship that I had never felt before. Audre Lorde became a staple in my collection of prose and poetry by " +
            "Black LGBTQ women. The following life history narrative serves as a journey through my life in and along the margins of identity, " +
            "just outside of the “mythical norm”." +
            "There’s something about growing up in southwest Louisiana that grounds my very being. I am the daughter of Creole legacies. " +
            "My roots extend into places with names that are difficult for outsiders to pronounce like Plaisance, Opelousas, and Bayou Teche. " +
            "I grew up swimming in ditches on the sides of highways and chewing on sugarcane stalks just for fun. " +
            "I grew up surrounded by multiple generations of Black educators. Previously, I thought that my Black family " +
            "teacher lineage began with my paternal grandmother’s generation. Wiona White Thomas, my paternal grandmother aka Maw Maw, " +
            "was born and raised in Plaisance, Louisiana. She graduated from Plaisance High School in 1956, two years after the U.S. " +
            "Supreme Court had decided Brown v. Board of Education and ended legal segregation. I had done some research during my undergraduate " +
            "years about the Plaisance School and its connection to the Julius Rosenwald Foundation. From my research, I had learned about my paternal " +
            "family’s role in building the school in 1919-1920. Most of what I knew about the history of Plaisance and its community school came " +
            "from conversations with my Maw Maw. She taught elementary school from 1960 to 1996, and she has always been such a wealth of knowledge. " +
            "She was born in 1937 and followed her older brother, Marion Overton White, to college after graduating from high school.<br><br>",
        body: "Meghan.jpg",
        shortname: "Meghan"
    };


