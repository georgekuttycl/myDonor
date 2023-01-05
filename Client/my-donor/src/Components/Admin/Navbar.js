import {Outlet} from "react-router-dom"

function Navbar() {
    return (
        <>
        <header className="shadow bg-white-200 text-black" style={{paddingBottom:'2.8em'}}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div data-search-form className="ml-20 relative hidden md:inline-block">
              <div className="text-black-500">
                <h4>Dashboard</h4>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button data-messages className="p-3 mr-2 focus:outline-none hover:bg-gray-200 hover:rounded-md" typle="button">
              <svg className="fill-current w-5" viewBox="0 0 512 512">
                <path d="M339.392 258.624L512 367.744V144.896zM0 144.896v222.848l172.608-109.12zM480 80H32C16.032 80 3.36 91.904.96 107.232L256 275.264l255.04-168.032C508.64 91.904 495.968 80 480 80zM310.08 277.952l-45.28 29.824a15.983 15.983 0 01-8.8 2.624c-3.072 0-6.112-.864-8.8-2.624l-45.28-29.856L1.024 404.992C3.488 420.192 16.096 432 32 432h448c15.904 0 28.512-11.808 30.976-27.008L310.08 277.952z" /></svg>
            </button>
            <button data-notifications className="p-3 mr-3 focus:outline-none hover:bg-gray-200 hover:rounded-md" typle="button">
              <svg className="fill-current w-5" viewBox="-21 0 512 512">
                <path d="M213.344 512c38.636 0 70.957-27.543 78.379-64H134.965c7.426 36.457 39.746 64 78.379 64zm0 0M362.934 255.98c-.086 0-.172.02-.258.02-82.324 0-149.332-66.988-149.332-149.332 0-22.637 5.207-44.035 14.273-63.277-4.695-.446-9.453-.723-14.273-.723-82.473 0-149.332 66.855-149.332 149.332v59.477c0 42.218-18.496 82.07-50.946 109.503C2.25 370.22-2.55 384.937 1.332 399.297c4.523 16.703 21.035 27.371 38.36 27.371H386.89c18.175 0 35.308-11.777 38.996-29.59 2.86-13.781-2.047-27.543-12.735-36.523-31.02-26.004-48.96-64.215-50.218-104.575zm0 0" />
                <path style={{fill: "red"}} d="M469.344 106.668c0 58.91-47.754 106.664-106.668 106.664-58.91 0-106.664-47.754-106.664-106.664C256.012 47.758 303.766 0 362.676 0c58.914 0 106.668 47.758 106.668 106.668zm0 0" /></svg>
            </button>

            <button data-dropdown className="flex items-center px-3 py-2 focus:outline-none hover:bg-gray-200 hover:rounded-md" type="button" x-data="{ open: false }" >
              <img src="https://yt3.ggpht.com/yti/AJo0G0msX3wRsrbN-gMo_zXEmrvUPl2cZ8QJK25OhmVdGQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="Profle" className="h-8 w-8 rounded-full"/>

              <span className="ml-4 text-sm hidden md:inline-block">Admin</span>
              <svg className="fill-current w-3 ml-4" viewBox="0 0 407.437 407.437">
                <path d="M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z" /></svg>
            </button>

          </div>
        </div>
      </header>
      </>
    );
}
export default Navbar;