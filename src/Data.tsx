import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataset } from './api/fetch'
import HomeButton from './components/HomeButton'

const Data = () => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState<Boolean>(false)
  const {id} = useParams()
  
  const loadData = async () => {
    setLoading(true)
    const newData = await dataset(id)
    setData(newData)
    setLoading(false)
  }

  useEffect(()=>{ loadData() },[])

  console.log(data)

  return (
    <div className="Datasets bg-slate-900 text-white flow-root">
      <HomeButton/>
      <div className="DatasetsContainer min-h-screen lg:ml-32 max-w-[700px]">
        {isLoading ? <div className='text-center text-3xl text-slate-400'>Loading...</div> : <ShowData data={data}/>}
      </div>
    </div>
  )
}

type ShowDataProps = {
  data:any
}

const ShowData = ({data}:ShowDataProps) => {
  if (data?.message) return <div className='text-center text-3xl text-slate-400 mt-16'>Il y a eu une erreur avec les données</div>
  return (
    <>
      <h1 className='text-5xl mb-16 text-center'>{data?.title}</h1>
      {data?.resources.map((item:any,index:number)=>{
        const preview_url = item.preview_url ? 
          item.preview_url.slice(0,2) === "//" ? item.preview_url : "//www.data.gouv.fr"+item.preview_url
        : ""
        return (
          <div key={index} className="mb-10 p-4 block">
            <h1 className="text-2xl mb-2">{item.title}</h1>
            {preview_url ? <a href={preview_url} rel="noreferrer" target="_blank" className="hover:text-blue-300 underline p-2">Preview</a> : ""}
            <a href={item.latest} rel="noreferrer" target="_blank" className="hover:text-blue-300 underline p-2">Download</a>
            <p>{item.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default Data