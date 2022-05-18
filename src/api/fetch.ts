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

const wrapPromise = (promise:Promise<any>) => {
  let status = "pending",
      result:any,
      suspender = promise.then(
        r => { status = "success"; result = r },
        e => { status = "error";   result = e }
      )

  return { read() {
    if      (status === "pending" ) { throw suspender }
    else if (status === "error"   ) { throw result    }
    else if (status === "success" ) { return result   }
  } }
}

export const Datasets = ( page:number = 1, page_size:number = 5 ) => {
    return fetch("https://www.data.gouv.fr/api/1/datasets/"+
        "?page="+page+
        "&page_size="+page_size
        , {method: "GET"})
      .then(response => response.json())
      .then(data => data)
  }

export const fetchDatasets = ( page:number = 1, page_size:number = 5 ) => {
  const datasets = Datasets(page,page_size)
  return wrapPromise(datasets)
}

export const Dataset = (id:string = "") => {
    return fetch("https://www.data.gouv.fr/api/1/datasets/"+id, {method: "GET"})
      .then(response => response.json())
      .then(data => data)
  }