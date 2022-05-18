import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Dataset } from './api/fetch'

export const Data = () => {
  return (
    <div className="App bg-slate-800 text-white min-h-screen flow-root">
      <DatasetData />
    </div>
  )
}

const DatasetData = () => {
  const [state, setState] = useState<any>(null)
  const { id } = useParams()

  useEffect(() => { 
    const fetchData = async () => {
      setState(await Dataset(id))
    }
    fetchData()
  }, [])

  if (state === null) return <>Loading...</>
  
  return (
    <div className="lg:ml-32 max-w-[700px]">
      <h1 className='text-4xl m-4 mt-10'>{state.title}</h1>      
      {state.resources.map((item:any,index:number)=>{
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
    </div>
  )
}