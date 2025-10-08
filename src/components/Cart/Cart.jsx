import React, { useState } from "react";
import "./Cart.scss";

export default function Cart({ initialItems = null, onClose, isOpen }) {
    const defaultItems = [
        {
            id: 1,
            title: "Ноутбук Lenovo Yoga 7 14ACN6 (82N7009RRA) Slate Grey",
            price: 35555,
            oldPrice: 39999,
            qty: 1,
            image: "https://via.placeholder.com/80x60?text=Lenovo",
        },
        {
            id: 2,
            title: "Кігтеточка Superrto для кішок з будиночком і лежанкою Бежева",
            price: 1000,
            oldPrice: null,
            qty: 1,
            image: "https://via.placeholder.com/80x60?text=Cat",
        },
    ];

    const [items, setItems] = useState(initialItems ?? defaultItems);

    const total = items.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);

    function increase(id) {
        setItems((prev) => prev.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it));
    }

    function decrease(id) {
        setItems((prev) => prev.map(it => it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it));
    }

    function removeItem(id) {
        setItems((prev) => prev.filter(it => it.id !== id));
    }

    function handleClose() {
        if (typeof onClose === "function") onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="cart-overlay" role="dialog" aria-modal="true">
            <div className="cart-modal">
                <header className="cart-header">
                    <h3>Кошик</h3>
                    <button className="cart-close" onClick={handleClose} aria-label="Close">✕</button>
                </header>

                {items.length === 0 ? (
                    <div className="cart-empty">
                        <img src="/resourses/maincontent/emptyCart.svg" alt="empty cart"/>
                        <h4>Ой! Кошик порожній!</h4>
                        <p className="muted">Але це легко виправити!</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img className="thumb" src={item.image} alt={item.title} />
                                    <div className="item-info">
                                        <div className="item-title">{item.title}</div>
                                        <div className="item-actions">
                                            <div className="qty-control">
                                                <button onClick={() => decrease(item.id)} aria-label="decrease">−</button>
                                                <span className="qty">{item.qty}</span>
                                                <button onClick={() => increase(item.id)} aria-label="increase">+</button>
                                            </div>
                                            <button className="remove" onClick={() => removeItem(item.id)} aria-label="remove">🗑</button>
                                        </div>
                                    </div>
                                    <div className="price">
                                        {item.oldPrice ? <div className="old">{item.oldPrice.toLocaleString()} ₴</div> : null}
                                        <div className="current">{item.price.toLocaleString()} ₴</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <footer className="cart-footer">
                            <button className="btn-outline" onClick={handleClose}>Продовжити покупки</button>
                            <div className="cart-sum">
                                <div className="sum-value">{total.toLocaleString()} ₴</div>
                                <button className="btn-primary">Оформити замовлення</button>
                            </div>
                        </footer>
                    </>
                )}
            </div>
        </div>
    );
}

