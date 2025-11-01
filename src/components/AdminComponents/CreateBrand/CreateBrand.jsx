import React, { useState } from "react";
import AppContext from "../../../features/context/AppContext";
import "../adminStyles.scss"

export default function CreateBrand() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [logoPreview, setLogoPreview] = useState(null);
    const [logoDataUrl, setLogoDataUrl] = useState(null);
    const { request } = React.useContext(AppContext);
    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) {
            if (logoPreview && logoPreview.startsWith && logoPreview.startsWith('blob:')) {
                URL.revokeObjectURL(logoPreview);
            }
            setLogoPreview(null);
            setLogoDataUrl(null); // теперь хранит файл, поэтому очищаем
            return;
        }

        // Отменяем предыдущий blob URL, если был
        if (logoPreview && logoPreview.startsWith && logoPreview.startsWith('blob:')) {
            URL.revokeObjectURL(logoPreview);
        }

        const previewUrl = URL.createObjectURL(file);
        setLogoPreview(previewUrl);
        setLogoDataUrl(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Name', name.trim());
        formData.append('Description', description.trim());
        if (logoDataUrl) formData.append('LogoUrl', logoDataUrl);
        request("/api/admin/brand", {
            method: "POST",
            body: formData,
        }).then(console.log).catch(console.error);

        setName("");
        setDescription("");
        setLogoPreview(null);
        setLogoDataUrl(null);
        e.target.reset();
        };

        return (
        <form className="form-create-brand" onSubmit={handleSubmit}>
            <h3>Создать бренд</h3>
            <div>
                <label>
                    Название
                </label>
                <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Введите имя бренда"
                />
            </div>

            <div>
                <label>
                    Описание
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Короткое описание бренда"
                    rows={4}
                />
            </div>

            <div>
                <label>
                    Лого (изображение)
                </label>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {logoPreview && (
                        <div>
                        <img
                            src={logoPreview}
                            alt="logo preview"
                        />
                    </div>
                )}
            </div>

            <button type="submit">
            Создать бренд
            </button>
        </form>
        );
}