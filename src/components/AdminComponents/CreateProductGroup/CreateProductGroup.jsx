import React, { useState, useEffect } from "react";
import AppContext from "../../../features/context/AppContext";
import "../adminStyles.scss";
export default function CreateProductGroup() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [logoFile, setLogoFile] = useState(null);
    const [parentId, setParentId] = useState("");
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { request } = React.useContext(AppContext);
    useEffect(() => {
            request("/api/data/product-groups")
                .then(promise => {
                    setGroups(promise.sort((a, b) => a.name.localeCompare(b.name)));
                })
                .catch(() => setGroups([]));
        }, []);
    function handleLogoChange(e) {
        const file = e.target.files && e.target.files[0];
        setLogoFile(file || null);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!name.trim() || !slug.trim()) {
            setError("Поля Name и Slug обязательны");
            return;
        }
        const formData = new FormData();
        formData.append("Name", name.trim());
        formData.append("Slug", slug.trim());
        if (logoFile) {
            formData.append("LogoPath", logoFile);
        }
        if (parentId) {
            formData.append("ParentId", parentId);
        }

        setLoading(true);
        request("/api/admin/product-group", {
        method: "POST",
        body: formData
        })
        .then((res) => {
            console.log("Product group created:", res);

            setSuccess("Группа успешно создана");
            setName("");
            setSlug("");
            setLogoFile(null);
        })
        .catch((err) => {
            console.error(err);
            setError(err.message || "Ошибка");
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <div>

            {error && <div style={{ color: "crimson" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>{success}</div>}

            <form className="form-create-product-group" onSubmit={handleSubmit}>
                <h2>Создать группу продуктов</h2>
                <div>
                    <label>
                        Name
                        <br />
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Название группы"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Slug
                        <br />
                        <input
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="slug-название (например my-group)"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Logo (пользователь добавляет)
                        <br />
                        <input type="file" accept="image/*" onChange={handleLogoChange} />
                    </label>
                    {logoFile && (
                        <div>
                            <strong>Выбран файл:</strong> {logoFile.name}
                        </div>
                    )}
                </div>

                <div>
                    <label>
                        Parent Group
                        <br />
                        <select
                            value={parentId}
                            onChange={(e) => setParentId(e.target.value)}
                        >
                            <option value="">— без родителя —</option>
                            {groups.map((g) => (
                                <option key={g.id} value={g.id}>
                                    {g.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Сохраняю..." : "Создать группу"}
                    </button>
                </div>
            </form>
        </div>
    );
}