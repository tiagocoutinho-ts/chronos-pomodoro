import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'
import History from '../../pages/History'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({top: 0})
    }, [pathname])

    return null
}

export function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/history/" element={<History />} />
                    <Route path="/about-pomodoro/" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollToTop/>
            </BrowserRouter>
        </>
    )
}