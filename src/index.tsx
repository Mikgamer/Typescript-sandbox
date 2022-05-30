import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Datasets from './Datasets'
import Data from './Data'

const root = createRoot( document.getElementById('root') as HTMLElement )
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Datasets />} />
        <Route path="/:id" element={<Data />} />
      </Routes>
    </BrowserRouter>
)
