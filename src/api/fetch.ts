export const datasets = ( page:number = 1, page_size:number = 5 ) => {
    return fetch("https://www.data.gouv.fr/api/1/datasets/"+
        "?page="+page+
        "&page_size="+page_size
        , {method: "GET"})
      .then(response => response.json())
      .then(data => data)
  }

export const dataset = (id:string = "") => {
    return fetch("https://www.data.gouv.fr/api/1/datasets/"+id, {method: "GET"})
      .then(response => response.json())
      .then(data => data)
  }