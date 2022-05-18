import { useState, useTransition, lazy } from 'react'
import { fetchDatasets } from '../api/fetch'

const dynamicImport = () => import("./DatasetsData")
const DatasetsData = lazy( dynamicImport )

const initialResource = fetchDatasets(1, 5)

const Datasets = () => {
  const [datasetsResource, setDatasetsResource] = useState<any>(initialResource)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(6)
  const [isPending, startTransition] = useTransition()
  
  let datasets = datasetsResource.read()

  const updatePage = ( p:number ) => {
    setPage(p)
    startTransition( () => setDatasetsResource(fetchDatasets(p, pageSize)) )
    datasets = datasetsResource.read()
  }
  
  const DatasetsDataLoad = () => isPending ? <>Loading...</> : <DatasetsData data={datasets}/>

  return (
    <div className="Datasets bg-slate-900 text-white min-h-screen flow-root">
      <div className="mt-16 m-4">
        <button className='rounded px-2 py-0.5 bg-emerald-700'
          onClick={()=>updatePage(page-1)}
        >Previous</button>
        <span className='px-2 py-0.5'>{page+" / "+Math.ceil(datasets.total/pageSize)}</span>
        <button className='rounded px-2 py-0.5 bg-emerald-700'
          onClick={()=>updatePage(page+1)}
        >Next</button>
      </div>
      <DatasetsDataLoad />
    </div>
  )
}

export default Datasets