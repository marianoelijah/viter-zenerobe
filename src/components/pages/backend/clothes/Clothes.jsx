import { Plus } from 'lucide-react'
import React from 'react'
import SideNavigation from '../partials/SideNavigation'
import Header from '../partials/Header'
import SearchBar from '../partials/SearchBar'
import ToastSuccess from '../partials/ToastSuccess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'
import { setIsAdd } from '@/components/store/storeAction'
import CategoryTable from './ClothesTable'
import ModalAddCategory from './ModalAddClothes'
import Footer from '@/components/pages/frontend/partials/Footer'

const Clothes = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
        <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="clothes" />
          <main>
            <Header title="Clothes" subtitle="Manage Kiosk Clothes" />
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

export default Clothes
