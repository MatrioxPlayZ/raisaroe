import './components.css'
import gsap from "gsap";

export default function HeroComponent() {
    function pageLoad() {
        gsap.to(".hero", {y: 40, opacity: 1, delay: 0, ease: "power2.out"})
    }

    setTimeout(pageLoad, 10)
    return (
        <div className="hero">
            <nav className='navbar'>
                <h1 className='container mx-auto text-4xl'><span className='name'>Sarah Rai</span></h1>
                <h2 className='text-2xl blog'>Blog</h2>
                <h2 className='text-2xl works'>Works</h2>
            </nav>
            <div className='aboutDetail'><p>I am a college student working towards my goal of
                becoming a.</p><p>I am currently working on.
            </p> <p>I am currently learning.
            </p>
            </div>
        </div>
    );
}