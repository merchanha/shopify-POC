export const getMetaObjectQuery = `
{
  metaobjects(type: "hero", first: 10) {
    nodes {
      field(key: "title") {
        value
      }
    }
  }
}
`;