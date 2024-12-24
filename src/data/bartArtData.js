const bartArtData = [
    {
        name: "Their Eyes Were Watching God (from Zora Neale Hurston)",
        image: "their-eyes-were-watching-god.jpg",
        stationLocation: "12th St. Oakland",
        artistName: "Diana Pumpelly Bates",
        location: "Broadway at 13th St. Entrance NE Corner. Street level. Stair/escalator entrance"
    },
    {
        name: "Coming and Going From Sun Up to Sundown",
        image: "coming-and-going-from-sun-up-to-sundown.jpg",
        stationLocation: "12th St. Oakland",
        artistName: "Diana Pumpelly Bates",
        location: "Platform Level"
    },
    {
        name: "Unknown",
        image: "unknown-16th.jpg",
        stationLocation: "16th St./Mission",
        artistName: "William Mitchell",
        location: "Concourse level entrances"
    },
    {
        name: "Future Roads",
        image: "future-roads.jpg",
        stationLocation: "16th St./Mission",
        artistName: "David Gálvez, Jos Sances",
        location: "SW Plaza - Area above stair/escalator entrance"
    },
    {
        name: "Palazo del Colibri",
        image: "palazo-del-colibri.jpg",
        stationLocation: "16th St./Mission",
        artistName: "Victor Mario Zaballa",
        location: "SW & NE Plazas"
    },
    {
        name: "Home",
        image: "home.jpg",
        stationLocation: "16th St./Mission",
        artistName: `Louis "Cork" Marcheschi`,
        location: "NE Plaza - Elevator enclosure"
    },
    {
        name: "Youth Voices",
        image: "youth-voices.jpg",
        stationLocation: "16th St./Mission",
        artistName: `Gary Carlos and students from St. John's Education Threshhold Center`,
        location: "NW Plaza - Elevator Enclosure below glass artwork"
    },
    {
        name: "Unknown",
        image: "unknown-24th.jpg",
        stationLocation: "24th St./Mission",
        artistName: `William Mitchell`,
        location: "Station entrances Concourse Level"
    },
    {
        name: "A-Round Oakland",
        image: "a-round-oakland.jpg",
        stationLocation: "Oakland Airport Connector - Coliseum Station",
        artistName: `Gordon Huether`,
        location: "Train Access area"
    },
    {
        name: "Periodic Motion",
        image: "periodic-motion.jpg",
        stationLocation: "Oakland Airport Connector - Airport",
        artistName: `Tom Patti`,
        location: "Train Access area"
    },
    {
        name: "Leonardo's Dream",
        image: "leonardos-dream.jpg",
        stationLocation: "Colma",
        artistName: `Daniel Goldstein`,
        location: "Concourse - Suspended above non-paid area"
    },
    {
        name: "Arco Iris",
        image: "arco-iris.jpg",
        stationLocation: "Colma",
        artistName: `Michael Hayden`,
        location: "Platform 1 & 2- Train Load/Unload Area"
    },
    {
        name: "Migration",
        image: "migration.jpg",
        stationLocation: "Daly City",
        artistName: `Eric Powell`,
        location: "St. Charles Ave. - 2 at entrance of garage, one across street from garage, and one across bridge"
    },
    {
        name: "Unknown",
        image: "unknown-elcerrito-norte.jpg",
        stationLocation: "El Cerrito del Norte",
        artistName: `Alfonso Pardiñas`,
        location: "Concourse - Main Level"
    },
    {
        name: "Unknown",
        image: "unknown-elcerrito-plaza.jpg",
        stationLocation: "El Cerrito Plaza",
        artistName: `Alfonso Pardiñas`,
        location: "Concourse - Main Level"
    },
    {
        name: "M.J.K.J.J.",
        image: "mjkjj.jpg",
        stationLocation: "Embarcadero",
        artistName: `Doug Heine`,
        location: "Concourse - Main Level"
    },
    {
        name: "Spin",
        image: "spin.jpg",
        stationLocation: "Embarcadero",
        artistName: `Robert Ellison`,
        location: "Concourse - Main Level"
    },
    {
        name: "Wall Canyon",
        image: "wall-canyon.jpg",
        stationLocation: "Embarcadero",
        artistName: `Stephen de Staebler`,
        location: "Concourse - Main Level"
    },
    {
        name: "Tallie Maule",
        image: "tallie-maule.jpg",
        stationLocation: "Embarcadero",
        artistName: `William Cullen`,
        location: "Concourse - Main Level"
    },
    {
        name: "Unknown",
        image: "fremont-unknown.jpg",
        stationLocation: "Fremont",
        artistName: `Joe Kievett`,
        location: "Plaza - Outside Area of Station"
    },
    {
        name: "Peace Wall, Tree of All Languages, Dove Embracing the World",
        image: "peace-wall.jpg",
        stationLocation: "Fruitvale",
        artistName: `Carolyna Marks and 3000 children, Roberto Guerrero, Xochitl, and Mario Padilla`,
        location: "Concourse - Paid Area, SW down escalator"
    },
    {
        name: "Long Live Oscar Grant",
        image: "long-live-oscar-grant.jpg",
        stationLocation: "Fruitvale",
        artistName: `Senay "Refa One" Alkebulan Aerosoul`,
        location: "Exterior west wall"
    },
    {
        name: "Unknown",
        image: "lafayette-unknown.jpg",
        stationLocation: "Lafayette",
        artistName: `Helen Webber, executed-Alfonso Pardiñas`,
        location: "Concourse - Main Level"
    },
    {
        name: "Unknown",
        image: "lake-merritt-unknown.jpg",
        stationLocation: "Lake Merritt",
        artistName: `William Mitchell`,
        location: "Plaza - Outside Area of Station"
    },
    {
        name: "Post and Lintel",
        image: "post-and-lintel.jpg",
        stationLocation: "MacArthur",
        artistName: `Harold Paris`,
        location: "Plaza - Outside Area of Station"
    },
    {
        name: "Unknown",
        image: "macarthur-unknown-1.jpg",
        stationLocation: "MacArthur",
        artistName: `Mark Adams`,
        location: "Concourse - Paid Area"
    },
    {
        name: "Unknown",
        image: "macarthur-unknown-2.jpg",
        stationLocation: "MacArthur",
        artistName: `Mark Adams`,
        location: "Adjacent to rolldown gate"
    },
    {
        name: "Time Traveler (each bench may have a name)",
        image: "time-traveler.jpg",
        stationLocation: "Millbrae",
        artistName: `Donna Billick`,
        location: "Platform 1 - Train Load/Unload Area"
    },
    {
        name: "Sipliskin Woman, c. 1550; Josefa Soto Sanchez, c. 1800; Farmer, c. 1930; Conductor, #40 Line, c. 1928; Baseball Player, c. 1959; Commuter, c. 2002",
        image: "sipliskin-woman.jpg",
        stationLocation: "Millbrae",
        artistName: `Scott Donahue`,
        location: "Platforms. Some figures located on closed platform"
    },
    {
        name: "Unknown",
        image: "orinda-unknown-1.jpg",
        stationLocation: "Orinda",
        artistName: `Lonnie Bee-original, Ellen Silva-replica`,
        location: "Plaza - Outside Area of Station"
    },
    {
        name: "Unknown",
        image: "orinda-unknown-2.jpg",
        stationLocation: "Orinda",
        artistName: `Win Ng`,
        location: "Concourse - Paid and Unpaid area"
    },
    {
        name: "Putting the Pieces Together",
        image: "putting-the-pieces-together.jpg",
        stationLocation: "Powell",
        artistName: `Peter Carpou with Larkin Street Youth Services clients`,
        location: "Concourse inside Muni and along hallway from stairs on Market St"
    },
    {
        name: "Moving Richmond",
        image: "moving-richmond.jpg",
        stationLocation: "Richmond",
        artistName: `Mildred Howard`,
        location: "Outside of parking garage"
    },
    {
        name: "Unknown",
        image: "richmond-unknown.jpg",
        stationLocation: "Richmond",
        artistName: `William Mitchell`,
        location: "Concourse - Main Level"
    },
    {
        name: "Untitled Space Mural",
        image: "untitled-space-mural.jpg",
        stationLocation: "Rockridge",
        artistName: `Gary Graham and Vista College Students`,
        location: "East Parking lot far wall"
    },
    {
        name: "Firestorm Community Mural Project",
        image: "firestorm-community.jpg",
        stationLocation: "Rockridge",
        artistName: `Brooke Levin and residents from surrounding neighborhoods`,
        location: "Plaza - Outside Area of Station"
    },
    {
        name: "Unknown (Go)",
        image: "unknown-go.jpg",
        stationLocation: "San Bruno",
        artistName: `Christine Stone`,
        location: "Concourse - Main Level - North End"
    },
    {
        name: "Unknown (Connect)",
        image: "unknown-connect.jpg",
        stationLocation: "San Bruno",
        artistName: `Gordon Huether`,
        location: "Concourse - Main Level - South End"
    },
    {
        name: "16 scenes of South San Francisco",
        image: "south-san-francisco.jpg",
        stationLocation: "South San Francisco",
        artistName: `Rufus Seder, Jeff Northam`,
        location: "Platform Walls"
    },
    {
        name: "Unknown",
        image: "union-city-unknown.jpg",
        stationLocation: "Union City",
        artistName: `Design-Jean Varda, executed Alfonso Pardiñas`,
        location: "Concourse - Entrance"
    },
    {
        name: "Sky Cycles",
        image: "sky-cycles.jpg",
        stationLocation: "Warm Springs",
        artistName: `Catherine Widgery`,
        location: "East, West Concourse, and Round Pavillion"
    },
];

export default bartArtData;