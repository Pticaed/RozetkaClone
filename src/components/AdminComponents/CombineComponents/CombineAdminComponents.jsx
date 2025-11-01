import CreateBrand from "../CreateBrand/CreateBrand";
import CreateProduct from "../CreateProduct/CreateProduct";
import CreateProductGroup from "../CreateProductGroup/CreateProductGroup";
import "../adminStyles.scss";
export default function CombineAdminComponents() {
    return (
        <div className="div-combine-admin-components">
            <h2>Admin Components</h2>
            <CreateBrand />
            <CreateProductGroup />
            <CreateProduct />
        </div>
    );
}