export const replaceStringSpaces = (string) => {
    
    // return encodeURIComponent(string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-').toLowerCase())
    return string.replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-').toLowerCase()
  }



  export const getItemById = (id, items) => {
    return items.find(item=>item.id===id)
  }