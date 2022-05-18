import { Link } from 'react-router-dom'

const DatasetsData = (data:any) => {
  const resource = data.data

  return (
    <div className="lg:ml-32 max-w-[700px]">
      {resource.data.map((item:any,index:number)=>{
        return (
          <Link to={item.id} key={index} className="mb-10 p-4 block overflow-auto">
            <h2 className="text-3xl mb-3">{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default DatasetsData