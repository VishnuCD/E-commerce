import { useContext, useEffect, useState } from 'react';
import ShopProducts from '../ProductItems/Shop';
import { ShopContext } from '../Context/ShopContext';
function Shop(props){
  const [searchTerm,setSearchTerm] = useState("");
  const {all_products} = useContext(ShopContext);
    return(<>
    <>
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="/" className="text-decoration-none">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Shop</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Shop Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              
            </div>
          
             
           
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-2"
              />
              <label className="custom-control-label" htmlFor="price-2">
                100 - 300
              </label>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-3"
              />
              <label className="custom-control-label" htmlFor="price-3">
                300 - 500
              </label>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-4"
              />
              <label className="custom-control-label" htmlFor="price-4">
                500 - 800
              </label>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="price-5"
              />
              <label className="custom-control-label" htmlFor="price-5">
                800 - 1000
              </label>
              
            </div>
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
      
        {/* Color End */}
        {/* Size Start */}
        <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by Weight</h5>
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">
                All 
              </label>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-1"
              />
              <label className="custom-control-label" htmlFor="size-1">
                0.5kg
              </label>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-2"
              />
              <label className="custom-control-label" htmlFor="size-2">
              1kg
              </label>
              
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-3"
              />
              <label className="custom-control-label" htmlFor="size-3">
               1.5kg
              </label>
              
            </div>
           
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-4"
              />
              <label className="custom-control-label" htmlFor="size-4">
                2kg
              </label>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-5"
              />
              <label className="custom-control-label" htmlFor="size-5">
              4kg
              </label>
              
            </div>
              
          </form>
        </div>
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-9 col-md-12">
        <div className="row pb-3">
          {/**cards start*/}
          <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Search by name"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                  />
                  </div>
                  <div className="dropdown ml-4">
                <button
                  className="btn border dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="triggerId"
                >
                  <a className="dropdown-item" href="#">
                  Popularity
                  </a>
                  <a className="dropdown-item" href="#">
                    Price Low to High
                  </a>
                  <a className="dropdown-item" href="#">
                    Price High to Low
                  </a>
                </div>
              </div>
              </div>
          </div>
                  <div className="row px-xl-5 pt-2">
                  {
                    all_products.filter((product)=>{
                      if(searchTerm == ""){
                        return product;
                      }else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return product;
                      }
                    })
                    .map((product,i)=>{
                      return(<>
                      <ShopProducts 
                     key={i}
                     id={product.id}
                     name={product.name}
                     image={product.image}
                     new_price={product.new_price}
                     old_price={product.old_price}
                     description={product.description}
                      
                  
                  />
                    
                      
                    
                      </>
                      )
                    })
                  }
             
                </div>
     
          
          
          
        
          {/**cards end */}
          <div className="col-12 pb-1">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center mb-3">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
     
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}

</>

    </>)
}
export default Shop;