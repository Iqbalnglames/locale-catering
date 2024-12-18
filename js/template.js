const templateNav = document.createElement("template");

templateNav.innerHTML = `
 <style> @import "css/output.css"; </style>
   <nav
      class="flex justify-between items-center p-3 bg-[#047580ff] text-white font-bold lg:text-xl"
    >
      <a href="index.html">
        <img src="images/logo.png" alt="logo locale" class="w-[100px] lg:w-[150px]" />
      </a>
      <div class="space-x-3 hidden lg:flex">
        <a class="hover:underline uppercase" href="index.html">Beranda</a>
        <a class="hover:underline uppercase" href="paketMenu.html"
          >Paket Menu</a
        >
        <a class="hover:underline uppercase" href="kontak.html">Kontak</a>
      </div>
      <div class="hidden lg:block">
        <h1 class="text-right text-lg">Layanan Pemesanan<br />24 Jam</h1>
      </div>
      <button
        class="space-y-1 rounded border-2 border-white lg:hidden p-1 w-fit"
        id="menu-button"
      >
        <div class="w-6 h-[3px] rounded-full bg-white"></div>
        <div class="w-6 h-[3px] rounded-full bg-white"></div>
        <div class="w-6 h-[3px] rounded-full bg-white"></div>
      </button>
    </nav>
    <div
      id="menu-bar"
      class="lg:hidden hidden w-screen fixed flex-col bg-[#047580ff] text-white border-2 border-white rounded-lg"
    >
      <a
        class="hover:underline uppercase p-3 border-b border-white hover:bg-[#2a6c72] rounded-t-lg"
        href="index.html"
        >Beranda</a
      >
      <a
        class="hover:underline uppercase p-3 border-y border-white hover:bg-[#2a6c72]"
        href="paketMenu.html"
        >Paket Menu</a
      >
      <a
        class="hover:underline uppercase p-3 border-t border-white hover:bg-[#2a6c72] rounded-b-lg"
        href="kontak.html"
        >Kontak</a
      >
    </div>
`;

const menuBar = document.getElementById("menu-bar");

class navBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(templateNav.content.cloneNode(true))
    }

    connectedCallback() {
    const menuBar = this.shadowRoot.getElementById("menu-bar");
    const menuButton = this.shadowRoot.getElementById("menu-button");
      menuButton.addEventListener('click', () => {
        if (menuBar.classList.contains("hidden")) {
          menuBar.classList.remove("hidden");
          menuBar.classList.add("flex");
        } else if (menuBar.classList.contains("flex")) {
          menuBar.classList.add("hidden");
          menuBar.classList.remove("flex");
        }
      })
    }
}


customElements.define('nav-bar', navBar)

const templateFooter = document.createElement('template')

templateFooter.innerHTML = `
    <style> @import "css/output.css"; </style>
    <div class="text-center text-base lg:text-xl flex items-center bg-[#eebb4d] h-32 justify-center">
      <p>
        Kami Juga menyediakan penyaluran untuk amal sosial berupa snack atau
        rice box, <br />
        Seperti Jumat Berkah, Snack Panti Asuhan, Minggu Berbagi dll
      </p>
    </div>
`

class footer extends HTMLElement  {
    constructor() {
        super() 
        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(templateFooter.content.cloneNode(true))
    }
}

customElements.define('footer-element', footer)

const waLogoSvg = document.createElement('template')

waLogoSvg.innerHTML = `
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 308 308" xml:space="preserve">
<g id="XMLID_468_">
	<path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
	<path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
</g>
</svg>
`

class waLogo extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height']
  }

  constructor() {
    super()
    this.attachShadow({mode : 'open'})
    this.shadowRoot.appendChild(waLogoSvg.content.cloneNode(true))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'width' || name === 'height') {
      this.shadowRoot.querySelector('svg').setAttribute(name, newValue)
    }
  }
}

customElements.define('wa-logo', waLogo)

const igLogoSvg = document.createElement('template')

igLogoSvg.innerHTML = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
</svg>
`

class igLogo extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height']
  }
  
  constructor() {
    super()
    this.attachShadow({mode : 'open'})
    this.shadowRoot.appendChild(igLogoSvg.content.cloneNode(true))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'width' || name === 'height') {
      this.shadowRoot.querySelector('svg').setAttribute(name, newValue)
    }
  }
}
customElements.define('ig-logo', igLogo)
