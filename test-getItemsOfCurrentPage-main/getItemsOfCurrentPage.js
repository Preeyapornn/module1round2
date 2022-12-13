const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  //code here

  if(!allItems){return undefined}
  if(allItems.length===0){return []}
  if(rowsPerPage<1){return allItems}
  if(currentPage<1){return allItems}
  else{
    return allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  }
}
module.exports = getItemsOfCurrentPage
