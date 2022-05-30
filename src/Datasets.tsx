import { useEffect, useState } from 'react'
import { datasets } from './api/fetch'
import { Link } from 'react-router-dom'
import type { DatasetsType, DatasetType } from "./types/Datasets"

let pages = 1

const Datasets = () => {
  const [data, setData] = useState<DatasetsType|null>(null)
  const [page, setPage] = useState<number>(1)
  const [pageSize] = useState<number>(5)
  const [isLoading, setLoading] = useState<boolean>(true)

  const loadData = async (newPage:number=page) => {
    setLoading(true)
    const newData:DatasetsType = await datasets(newPage, pageSize)
    setData(newData)
    setPage(newPage)
    pages = Math.ceil(newData.total/pageSize) || 0
    setLoading(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{ loadData(page) },[])

  return (
    <div className="Datasets bg-slate-900 text-white flow-root">
      <div className="DatasetsContainer min-h-screen lg:ml-32 max-w-[700px] mt-16">
        <h1 className='text-5xl mb-16 text-center'>Data.gouv Data</h1>
        {
          isLoading ? <div className='text-center text-3xl text-slate-400'>Loading...</div> : <>
            <Controls page={page} pages={pages} loadData={loadData} />
            <ShowData data={data} />
          </>
        }
      </div>
    </div>
  )
}

export type ControlsProps = {
  page:number,
  pages:number,
  loadData:(newPage:number)=>void
}

const Controls = ({page,pages,loadData}:ControlsProps) => {
  const isFirstButtonAvailable = page > 1
  const isSecondButtonAvailable = page < pages

  return (
    <div className="m-4 text-center">
      <button className={"rounded px-2 py-0.5 "+(isFirstButtonAvailable?"bg-emerald-700":"bg-stone-700 cursor-not-allowed")}
        onClick={()=>loadData(page-1)}
        disabled={isFirstButtonAvailable === false}>Précédent</button>
      <span className="px-2 py-0.5">{page+" / "+pages}</span>
      <button className={"rounded px-2 py-0.5 "+(isSecondButtonAvailable?"bg-emerald-700":"bg-stone-700 cursor-not-allowed")} 
        onClick={()=>loadData(page+1)}
        disabled={isSecondButtonAvailable === false}>Suivant</button>
    </div>
  )
}

type ShowDataProps = {
  data:DatasetsType|null
}

const ShowData = ({data}:ShowDataProps) => {
  if (!data || !data.data) return <div className='text-center text-3xl text-slate-400 mt-16'>Il y a eu une erreur avec les données</div>
  return (
    <div>
      {data.data?.map((item:DatasetType,index:number)=>{
        return (
          <Link to={"/"+item.id} key={index} className="mb-10 p-4 block overflow-auto">
            <h2 className="text-3xl mb-3">{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Datasets