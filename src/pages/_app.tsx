import '../styles/globals.scss'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

// function MyApp() {
//   return (
//     <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/404" element={<PageNotFound />} /> 
//           {/* <Route path="/admin/rooms/:id" element={<AdminRoom />} />  */}
//         </Routes>
//     </BrowserRouter>
//   )
// }

export default MyApp
