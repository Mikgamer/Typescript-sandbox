// type Datasets = {
//   data?: {
//     title: string,
//     description: string,
//     acronym: string,
//     archived: Date,
//     badges?: [],
//     community_resources?: [],
//     created_at: Date,
//     deleted: Date,
//     extras?: {},
//     featured: Boolean,
//     frequency: string,
//     frequency_date: Date,
//     id: string,
//     last_modified: Date,
//     last_update: Date,
//     license: string,
//     metrics?: {},
//     organization: string,
//     owner: string,
//     page: string,
//     private: Boolean,
//     quality?: {},
//     resources?: [],
//     slug: string,
//     spatial: string,
//     tags?: [],
//     temporal_coverage: string,
//     uri: string
//   },
//   page: number,
//   page_size: number,
//   total: number
//   next_page: string,
//   previous_page: string
// }

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