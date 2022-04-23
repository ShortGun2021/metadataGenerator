const description = "This is a sample description of the NFTimage..";
const baseUri = "https://rishabhImages/nft";

const layerConfigurations = [
  {
    growEditionSizeTo: 3,
    layersOrder: [
      { name: "Strength" },
      { name: "Dexterity" },
      { name: "Constitution" },
      { name: "Experience" },
      { name: "Intelligence" },
      { name: "Charisma" },
      { name: "Wisdom" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
