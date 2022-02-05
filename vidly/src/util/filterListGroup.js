export function filterListGroup(items, genre) {
  if (genre === "AllGenre") return items;
  return items.filter((item) => item.genre._id === genre);
}
