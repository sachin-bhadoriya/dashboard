import Table from '../components/Table'
import TopNav from '../elements/TopNav'

const ProductManagement = () => {
  return (
    <>
      <TopNav />
      <div style={{ padding: "20px", margin: "20px", border: "0.3px solid rgba(128, 128, 128, 0.4)", borderRadius: "10px" }}>
        <h3>Product Management</h3>
        <Table />
      </div>
    </>
  )
}

export default ProductManagement