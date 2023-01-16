class customFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    // static get observedAttributes() {
    //     return ["img", "name1", "name2", "name3", "name4","linkhome", "link1", "link2", "link3", "link4"];
    // }
    // attributeChangedCallback(attr, oldVal, newVal) {
    //     if(attr === "img") {
    //         this.img = newVal;
    //     }
    //     if(attr === "name1") {
    //         this.name1 = newVal;
    //     }
    //     if(attr === "name2") {
    //         this.name2 = newVal;
    //     }
    //     if(attr === "name3") {
    //         this.name3 = newVal;
    //     }
    //     if(attr === "name4") {
    //         this.name4 = newVal;
    //     }
    //     if(attr === "linkhome") {
    //         this.linkhome = newVal;
    //     }
    //     if(attr === "link1") {
    //         this.link1 = newVal;
    //     }
    //     if(attr === "link2") {
    //         this.link2 = newVal;
    //     }
    //     if(attr === "link3") {
    //         this.link3 = newVal;
    //     }
    //     if(attr === "link4") {
    //         this.link4 = newVal;
    //     }
    // }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <footer id="contacto">
                <section class="contact">
                    <div>
                        <h1>Contáctame</h1>
                        <p>Si deseas ponerte en contacto conmigo para conocer un poco más acerca de mis proyectos, que colabore en alguno de los tuyos o para ofertas de trabajo, aquí te dejo la información que necesitas.</p>
                        <p><button onclick="location.href='./proyectos/proyectos.html'">MIS PROYECTOS</button></p>
                    </div>
                </section>
                <section class="contact-info">
                    <div>
                        <h2>LinkedIn</h2>
                        <p><a href="https://linkedin.com/in/manuel-araujo-beltrán-994564153" target="_blank">Manuel Araujo</a></p>
                        <h2>Correo electrónico</h2>
                        <p>manuelmad1981@gmail.com</p>
                        <h2>GitHub</h2>
                        <p><a href="https://github.com/manuelmad" target="_blank">manuelmad</a></p>
                    </div>
                </section>
                <section class="personal-logo">
                    <img src="./imagenes/logo-footer.png" alt="logo"> 
                </section>
            </footer>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
          <style>
            :host * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            :host {
                --bckg-color: #252C5A;
                --font-color: white;
            }

            footer {
                width: 100%;
                height: 20rem;
                display: flex;
                margin-top: 5rem;
                background-color: var(--dark-blue);
                padding-bottom: 2rem;
                padding-top: 2rem;
            }
            
            .contact {
                visibility: hidden;
                position: absolute;
            }
            
            .contact-info {
                display: flex;
                align-items: center;
                width: 60%;
            }
            
            .personal-logo {
                width: 40%;
            }
            
            .contact-info h2 {
                color: var(--hospital-green);
                margin-left: 3rem;
                margin-top: 2rem;
            }
            
            .contact-info h2:first-child {
                margin-top: 0;
            }
            
            .contact-info p {
                margin-left: 3rem;
                color: var(--white);
            }
            
            .contact-info a {
                text-decoration: none;
                color: var(--white);
            }
            
            .personal-logo {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .personal-logo img {
                width: 10rem;
                height: 10rem;
            }

            p {
                font-size: var(--sm);
                line-height: 2rem;
            }


            @media (min-width: 600px) {
                .contact-info h2 {
                    margin-left: 9rem;
                }
                
                .contact-info p {
                    margin-left: 9rem;
                }
                
                .personal-logo img {
                    width: 15rem;
                    height: 15rem;
                }
            }

            @media (min-width: 1024px) {
                p {
                    font-size: 1.6rem;
                }
                
                footer {
                    height: 25rem;
                }
                
                .contact {
                    visibility: visible;
                    position: static;
                    display: flex;
                    align-items: center;
                }
                
                .contact, .contact-info, .personal-logo {
                    width: 33.3%;
                }
                
                .contact h1 {
                    font-size: 3rem;
                    color: var(--white);
                    margin-left: 8rem;
                }
                
                .contact p {
                    margin-top: 1rem;
                    color: var(--white);
                    margin-left: 8rem;
                }
                
                .contact button {
                    background-color: var(--hospital-green);
                    border: 0.1rem solid  var(--hospital-green);
                    color: var(--dark-blue);
                    font-size: 1rem;
                    font-weight: 900;
                    height: 4rem;
                    width: 15rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }
                
                .contact button:active {
                    background-color: var(--white);
                }
                
                .contact-info h2 {
                    color: var(--hospital-green);
                    margin-left: 12rem;
                }
                
                .contact-info p {
                    margin-left: 12rem;
                    color: var(--white);
                }
                
                .personal-logo img {
                    width: 18rem;
                    height: 18rem;
                }
            }
          </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("my-footer", customFooter);