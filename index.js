const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Character {
    id: String
    status: String
    created: String
    name: String
    type: String
    image: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    characters: [Character]
  }
`;

const characters = [
  {
    id: "1",
    status: "Alive",
    created: "2017-11-01",
    name: "Rick Sanchez",
    type: "Acura",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },

  {
    id: "2",
    status: "Alive",
    created: "2017-11-01",
    name: "Morty Smith",
    type: "SuperHuman",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },

  {
    id: "3",
    status: "Alive",
    created: "2017-11-01",
    name: "Summer Smith",
    type: "Acura",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },

  {
    id: "4",
    status: "Alive",
    created: "2017-11-01",
    name: "Beth Smith",
    type: "SuperHuman",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },

  {
    id: "5",
    status: "Alive",
    created: "2017-11-02",
    name: "Jerry Smith",
    type: "Adigo",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },

  {
    id: "6",
    status: "Alive",
    created: "2017-11-02",
    name: "Abadango Cluster Princess",
    type: "Human Spice",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  },

  {
    id: "7",
    status: "unknown",
    created: "2017-11-02",
    name: "Abradolf Lincler",
    type: "Genetic experiment",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  },

  {
    id: "8",
    status: "Dead",
    created: "2017-11-02",
    name: "Adjudicator Rick",
    type: "SuperHuman",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  },

  {
    id: "9",
    status: "Dead",
    created: "2017-11-03",
    name: "Agency Director",
    type: "Calister",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },

  {
    id: "10",
    status: "Dead",
    created: "2017-11-03",
    name: "Alan Rails",
    type: "Superhuman (Ghost trains summoner)",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  },

  {
    id: "11",
    status: "Dead",
    created: "2017-11-03",
    name: "Albert Einstein",
    type: "Amigo",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  },
  {
    id: "12",
    status: "Dead",
    created: "2017-11-03",
    name: "Alexander",
    type: "Human Root",
    image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
  },

  {
    id: "13",
    status: "unknown",
    created: "2017-11-04",
    name: "Alien Googah",
    type: "Spice",
    image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
  },
  {
    id: "14",
    status: "unknown",
    created: "2017-11-04",
    name: "Alien Morty",
    type: "Superhuman",
    image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  },
  {
    id: "15",
    status: "unknown",
    created: "2017-11-04",
    name: "Alien Rick",
    type: "Human Super",
    image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  },

  {
    id: "16",
    status: "Dead",
    created: "2017-11-04",
    name: "Amish Cyborg",
    type: "Parasite",
    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  },

  {
    id: "17",
    status: "Alive",
    created: "2017-11-05",
    name: "Annie",
    type: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  },

  {
    id: "18",
    status: "Alive",
    created: "2017-11-05",
    name: "Antenna Morty",
    type: "Human with antennae",
    image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  },

  {
    id: "19",
    status: "unknown",
    created: "2017-11-05",
    name: "Antenna Rick",
    type: "Human with antennae",
    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  },

  {
    id: "20",
    status: "unknown",
    created: "2017-11-05",
    name: "Ants in my Eyes Johnson",
    type: "Human with ants in his eyes",
    image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    characters: () => characters,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
