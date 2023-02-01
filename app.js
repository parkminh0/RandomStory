const randomize = document.querySelector("#Gen");
const customName = document.querySelector("#Input");
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
const result = document.querySelector("#story");

function randomArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function getStory(){
    let story = storyText;

    story = story.replaceAll(":insertx:", randomArray(insertX));
    story = story.replaceAll(":inserty:", randomArray(insertY));
    story = story.replaceAll(":insertz:", randomArray(insertZ));
    
    if(customName.value !== ""){
        story = story.replaceAll("Bob", customName.value);
    }

    if(document.querySelector("#uk").checked){
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        story = story.replaceAll("94 fahrenheit", temperature);
        story = story.replaceAll("300 pounds", weight);
    }
    
    result.innerText = story;
}

randomize.addEventListener('click', getStory);