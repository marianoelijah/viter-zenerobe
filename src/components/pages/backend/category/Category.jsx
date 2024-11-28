
import React from 'react'
import { StoreContext } from '@/components/store/StoreContext'
import { setIsAdd } from '@/components/store/storeAction'
import ModalAddCategory from './ModalAddCategory'
import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import SearchBar from '../partials/SearchBar'
import { Plus } from 'lucide-react'
import CategoryTable from './CategoryTable'
import Footer from '../partials/Footer'
import ModalValidation from '../partials/modals/ModalValidation'
import ModalError from '../partials/modals/ModalError'
import ToastSuccess from '../partials/ToastSuccess'

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
        <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Manage Category of Clothes" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <CategoryTable />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddCategory />}
    </>
  )
}

export default Category
