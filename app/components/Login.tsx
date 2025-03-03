'use client';
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const Login = () => {
    const [name, setName] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        if (name.trim()) {
            router.push(`/todolist?name=${encodeURIComponent(name)}`);
        }
    };

    return (
        <div className="p-10">
            <input
                type="text"
                placeholder="Name eingeben"
                className="input input-bordered w-full max-w-xs"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="btn btn-primary ml-2" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Login