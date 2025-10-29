import "../styles/loader.css";

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#e8e8e8] w-screen z-50 fixed top-0 left-0">
            <div className="blobs">
                <div className="blob-center"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}