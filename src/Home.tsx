import { Suspense, lazy } from 'react'

const dynamicImport = () => import("./components/Datasets")
const Datasets = lazy( dynamicImport )

export const Home = () => {
  return (
    <div className="Datasets bg-slate-900 text-white min-h-screen flow-root">
      <Suspense fallback={<>Loading</>}>
        <Datasets />
      </Suspense>
    </div>
  )
}