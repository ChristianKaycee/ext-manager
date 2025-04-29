import { useEffect, useState } from 'react'
import logo from "./images/logo.svg";
import themeDark from "./images/icon-sun.svg";
import themeLight from "./images/icon-moon.svg";
import Extensions from "./extension";
import datum from "./data";
export default function App() {
    const [goDark, setGodark] = useState(false);
    const toggleDark = () => {
        setGodark(prevMode => !prevMode);
    };
    useEffect (()=>{
        if (goDark) {
            document.body.style.backgroundColor="hsl(227, 75%, 14%)";
        } else {
            document.body.style.backgroundColor="hsl(217, 61%, 90%)";
        }
    },[goDark]);
    
       
        // For the extension header
        let btns = document.querySelectorAll(".extension-head .extension-btn button");

        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeClass(); // Remove active from all
                e.target.classList.toggle("active"); // Add active to clicked
            });
        });
        function removeClass() {
            let btns = document.querySelectorAll(".extension-head .extension-btn button");
            btns.forEach(btn => {
                btn.classList.remove("active");
            });
        }

        // For the extension checkboxes
        let boxes = document.querySelectorAll(".extension-list .extension-list-item");
        boxes.forEach(box => {
            let check = box.querySelector('.down .toggle .check')
            if (check.getAttribute('value') == "true") {
                check.checked = true;
            }
            check.addEventListener('change', (e) => {

                if (check.checked) {
                    check.setAttribute('value', 'true');
                }
                else {
                    check.setAttribute('value', 'false');
                }
            });
        })

        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                boxes.forEach(box => {
                    const check = box.querySelector('.down .toggle .check');
                    const value = check.getAttribute('value'); // "true" or "false"

                    const isActiveBtn = btn.classList.contains('active') && btn.classList.contains('two');
                    const isInactiveBtn = btn.classList.contains('active') && btn.classList.contains('three');

                    if (value === "true" && isActiveBtn) {
                        box.style.display = 'flex';
                    } else if (value === "false" && isInactiveBtn) {
                        box.style.display = 'flex';
                    } else if (btn.classList.contains('active') && btn.classList.contains('one')) {
                        box.style.display = 'flex';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });

        // Remove Extension

        boxes.forEach(box => {
            let remove = box.querySelector('.down button')
            remove.addEventListener('click', (e) => {
                box.style.display = 'none';
            })
        });
       
    return (
        <>
            <header className={goDark ? "header h-theme-dark" : "header h-theme-light"}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button onClick={toggleDark} className={goDark ? "theme theme-dark" : "theme theme-light"} >
                    <img src={goDark ? themeDark : themeLight} alt={goDark ? "themeDark" : "themeLight"} />
                </button>
            </header>
            <section className="extension-head">
                <p class={goDark ? 'dark' : 'white'}>Extensions List</p>
                <div className="extension-btn">
                    <button className={goDark ? "one active btn-theme-dark" : "one active btn-theme-light"}>All</button>
                    <button className={goDark ? "two btn-theme-dark" : "two btn-theme-light"}>Active</button>
                    <button className={goDark ? "three btn-theme-dark" : "three btn-theme-light"}>Inactive</button>
                </div>
            </section>
            <section className="extension-list">
                {datum.map((entity, index) => {
                    return (
                        <Extensions
                            key={index}
                            darkmode={goDark}
                            {...entity}
                        />
                    );
                })}

            </section>
        </>
    )
}
