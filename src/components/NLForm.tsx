// newsletter form
"use client";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const NLForm = () => {
    const [email, setEmail] = useState("");

    return (
        <form 
            className=""
            onSubmit={e => e.preventDefault()}
        >
            <div className="flex justify-between items-center space-x-2 p-2 border-2 border-white/40 rounded-md">
                <AiOutlineMail className="text-2xl text-white" />
                <input 
                    type="text" 
                    className="flex-grow bg-transparent text-white outline-none"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                />
            </div>
            <button className="mt-2 w-full bg-app-porange text-white text-[.9rem] p-2 rounded-md">
                Subscribe
            </button>
        </form>
    )
}

export default NLForm