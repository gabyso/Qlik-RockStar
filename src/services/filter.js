export const getIds = (selected, artists, inputSearch) => {
  let ids = [];
  Object.keys(selected).forEach(id => {
    const artist = artists[id];   
      
    if(artist) {
      const isIncluded = [artist.name, ...artist.greatest_hits]
      .find(str => str.toLowerCase().startsWith(inputSearch.toLowerCase()));
        isIncluded && ids.push(id);
      }
  });

  return ids;
}

