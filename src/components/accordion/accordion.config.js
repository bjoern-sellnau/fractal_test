const items = [
  {
    title: "Konferenzen",
    content:
      "<ul><li>Reactathon 2020 - 30.03.2020 - 31.03.2020</li><li>React Summit Amsterdam 2020 - 15.04.2020 - 17.04.2020</li><li>Byteconf React 2020 - 01.05.2020</li><li>ReactEurope 2020 - 14.05.2020 - 15.05.2020</li></ul>"
  },
  {
    title: "Dummy Text",
    content:
      "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
  },
  {
    title: "Panel 3",
    content: "Inhalt von Panel 3"
  }
];

const baseContext = {
  modifier: "all-closed",
  items
};

module.exports = {
  title: "A very simple Accordion Component",
  status: "wip",
  context: {
    modifier: "all-closed",
    openPanel: "-1",
    ...baseContext
  },
  variants: [
    {
      name: "First open",
      context: {
        ...baseContext,
        modifier: "single-open",
        openPanel: "0"
      }
    },
    {
      name: "Second open",
      context: {
        ...baseContext,
        modifier: "single-open",
        openPanel: "1"
      }
    },
    {
      name: "Third open",
      context: {
        ...baseContext,
        modifier: "single-open",
        openPanel: "2"
      }
    },
    {
      name: "All open",
      status: "prototype",
      context: {
        ...baseContext,
        modifier: "all-open",
        openPanel: "-1"
      }
    }
  ]
};
