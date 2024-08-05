import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Card = lazy(() => import("../pages/card"));
const Login = lazy(() => import("../pages/login"));
const Not = lazy(() => import("../pages/not_found"));
const One = lazy(() => import("../pages/one_product"));
const Reg = lazy(() => import("../pages/registration"));

export default function TheRoute() {
    return (
        <>
            <Suspense fallback={<h3>Loading...</h3>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/card" element={<Card />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Not />} />
                        <Route path="/product/:id" element={<One />} />
                        <Route path="/registration" element={<Reg />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}