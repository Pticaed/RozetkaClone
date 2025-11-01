import React, { useEffect, useState } from "react";
import AppContext from "../../../features/context/AppContext";
import "../adminStyles.scss";

export default function CreateProduct() {
    const { request } = React.useContext(AppContext);

    const [productGroupId, setProductGroupId] = useState("");
    const [brandId, setBrandId] = useState("");
    const [userSellerId, setUserSellerId] = useState("");
    const [slug, setSlug] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const [productGroups, setProductGroups] = useState([]);
    const [brands, setBrands] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        request("/api/data/brands")
            .then(setBrands)
            .catch(() => setBrands([]));

        request("/api/data/product-groups")
            .then(setProductGroups)
            .catch(() => setProductGroupId([]));

        request("/api/data/users")
            .then(setUsers)
            .catch(() => setUsers([]));
        console.log(users, productGroups, brands);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            ProductGroupId: productGroupId || null,
            BrandId: brandId || null,
            UserSellerId: userSellerId || null,
            Slug: slug.trim(),
            Name: name.trim(),
            Description: description.trim(),
            Price: Number(price),
            Stock: Number(stock),
        };

        request("/api/admin/product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
            .then((res) => {
                console.log("Product created:", res);
                setProductGroupId("");
                setBrandId("");
                setUserSellerId("");
                setSlug("");
                setName("");
                setDescription("");
                setPrice(0);
                setStock(0);
                e.target.reset();
            })
            .catch(console.error);
    };

    return (
        <form className="form-create-product" onSubmit={handleSubmit}>
            <h3>Создать товар</h3>

            <label>
                ProductGroup
                <select value={productGroupId} onChange={(e) => setProductGroupId(e.target.value)} required>
                    <option value="">-- выбрать группу --</option>
                    {productGroups.map((pg) => (
                        <option key={pg.id } value={pg.id}>{pg.name}</option>
                    ))}
                </select>
            </label>

            <label>
                Brand
                <select value={brandId} onChange={(e) => setBrandId(e.target.value)} required>
                    <option value="">-- выбрать бренд --</option>
                    {brands.map((b) => (
                        <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                </select>
            </label>

            <label>
                UserSeller
                <select value={userSellerId} onChange={(e) => setUserSellerId(e.target.value)} required>
                    <option value="">-- выбрать продавца --</option>
                    {users.map((u) => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                </select>
            </label>

            <label>
                Slug(не обязательно)
                <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug-for-product" />
            </label>

            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Название товара" required />
            </label>

            <label>
                Description
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Короткое описание" />
            </label>

            <label>
                Price
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} min="0" step="0.01" required />
            </label>

            <label>
                Stock
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} min="0" step="1" required />
            </label>

            <div>
                <button type="submit">Создать товар</button>
            </div>
        </form>
    );
}