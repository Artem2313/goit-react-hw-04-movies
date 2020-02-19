const mapper = items => {
  return items.map(
    ({
      id,
      webformatURL: smallImageLink,
      largeImageURL: largeImageLink,
      tags,
      ...props
    }) => ({
      id,
      smallImageLink,
      largeImageLink,
      tags,
      ...props,
    }),
  );
};

export default mapper;
