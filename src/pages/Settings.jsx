import "./styles/settings.scss"
import TopNav from '../elements/TopNav'
import Button from "../components/Button"
import { useState } from "react"

const Settings = () => {
  const [isEditForm, setIsEditForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "Sachin Bhadoriya", email: "bhadoriysachin33@gmail.com", number: "5412785425", gstCode: "GSTIN5412785412", address: "New Ashok Nagar, New Delhi, India (110096)"
  })

  function toggleEditBtn() {
    setIsEditForm(!isEditForm)
  }

  return (
    <>
      <TopNav />

      <div className="setting-main-container">
        <div className="user-details-container">
          <h3>Admin Details</h3>
          <Button name={isEditForm ? "Save Details" : "Edit Details"} clickFn={toggleEditBtn} />
        </div>
        
        <div className="setting-details-form-container">
          <form>
            <label htmlFor="">Name</label>
            <input type="text" value={formData.name} disabled={!isEditForm} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <label htmlFor="">Email</label>
            <input type="email" value={formData.email} disabled={!isEditForm} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <label htmlFor="">Contact</label>
            <input type="number" value={formData.number} disabled={!isEditForm} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
            <label htmlFor="">Address</label>
            <textarea type="text" value={formData.address} disabled={!isEditForm} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            <label htmlFor="">GSTIN</label>
            <input type="text" value={formData.gstCode} disabled={!isEditForm} onChange={(e) => setFormData({ ...formData, gstCode: e.target.value })} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Settings