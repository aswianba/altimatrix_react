export function paginateGridRecords(flightList, selectedpage, perPage) {
  if (flightList) {
    let startIndex = (selectedpage - 1) * perPage;
    return flightList.splice(startIndex, perPage);
  }
  return [];
}
