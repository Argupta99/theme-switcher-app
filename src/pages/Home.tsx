import Card from "../Components/Cards";

//makeing an array of data to pass to the card components

const cardData = [
    {
        id: "1",
        title: "CHimalayan Stillness at Kunzum Pass",
        description: "Where the sky is a shade of blue you've never seen before. Colorful prayer flags flutter in the cold, thin air, sending whispers across the stark, majestic peaks of Spiti Valley. A place where time slows, and the world feels pure.",
       
    },
    {
        id: "2",
        title: "The Unfinished Canvas",
        description: "The beautiful chaos of a new idea. The first bold stroke of cobalt blue on a blank canvas, surrounded by terracotta pots, scattered notes, and the promise of a story waiting to be told.",
        
    },
    {
        id:"3",
        title: "Sunday Chai & Cardamom",
        description: "There's a special kind of magic in the first sip of chai on a lazy Sunday. The warmth of the cup, the fragrant steam carrying notes of ginger and cardamom, and the soft rhythm of rain outside.",
        
    }
]

function Home () {
    return (

        <main>
            <h1>HomePage</h1>

           {cardData.map((card, index) => (
        <Card 
        key = {index}
        title= {card.title}
        description= {card.description} />
       ) )}
        </main>
    );
}

export default Home;