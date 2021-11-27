import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '.';
import PageNotFound from './404';

export default function RoutesTeste() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<PageNotFound />} /> 
          {/* <Route path="/admin/rooms/:id" element={<AdminRoom />} />  */}
        </Routes>
    </BrowserRouter>
    );
  }