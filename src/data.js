import { v4 as uuidv4 } from "uuid";

const chillHop = [
  {
    name: "Wintertime",
    cover:
      "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,h_550,w_550/v1613327715/zoltan-tasi-hUp58GsPKAw-unsplash_jozykv.jpg",
    artist: "Anna Chowattanakul",
    audio:
      "https://littlepinkypianist.s3.us-east-2.amazonaws.com/Wintertime.mp3",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: true,
  },
  {
    name: "Nardis (Miles Davis)",
    cover:
      "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,h_550,w_550/v1613337432/ryan-quintal-_H7p-RZUVo4-unsplash_dnevts.jpg",
    artist: "Arr. Anna Chowattanakul",
    audio: "https://littlepinkypianist.s3.us-east-2.amazonaws.com/Nardis.mp3",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Dystopia",
    cover:
      "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,h_550,w_550/v1613337432/orlova-maria-bU8TeXhsPcY-unsplash_zotwhn.jpg",
    artist: "Anna Chowattanakul",
    audio: "https://littlepinkypianist.s3.us-east-2.amazonaws.com/Dystopia.m4a",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Funk Loop (GarageBand)",
    cover:
      "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,h_550,w_550/v1613337432/stephane-yaich-pUV1phrNReo-unsplash_ofrosu.jpg",
    artist: "Arr. Anna Chowattanakul",
    audio:
      "https://littlepinkypianist.s3.us-east-2.amazonaws.com/Funk+Loop+(GarageBand+Remix).m4a",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Indian Loop (GarageBand)",
    cover:
      "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,h_550,w_550/v1613337432/maryna-yazbeck-yv1is2sVAHQ-unsplash_pujbaf.jpg",
    artist: "Arr. Anna Chowattanakul",
    audio:
      "https://littlepinkypianist.s3.us-east-2.amazonaws.com/Indian+loops+(GarageBand+Mix).m4a",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "10 Thousand Reasons",
    cover:
      "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,h_550,w_550/v1613337433/rinck-content-studio-RTdRHgyGiiw-unsplash_p52dzf.jpg",
    artist: "Arr. Anna Chowattanakul",
    audio:
      "https://littlepinkypianist.s3.us-east-2.amazonaws.com/10ThousandReasons.m4a",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  //ADD MORE HERE
];

export default chillHop;
