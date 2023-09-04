var h=Object.defineProperty;var c=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var d=(o,t,e)=>(c(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const C=`
    .widget__container * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    } 
    .prognosis-sidebar-menu-wrapper {
        padding: 25px 15px 15px 25px;
        width: 256px;
        height: 100%;
    }
    .prognosis-sidebar-menu-list {
        list-style: none;
        color: #000;
        margin: 74px 0 0 0;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-title {
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-title span {
        display: block;
        font-weight: bold;
        margin: 0 0 0 23px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children {
        list-style: none;
        font-size: 15px;
        margin: 18px 0 0 48px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children {
        line-height: 2
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children li {
        cursor: pointer;
    }
    .prognosis-sidebar-menu-list ul li {
        color: #4C535D;
    }
    
    .prognosis-chat-close-header {
        border-radius: 100rem;
        border: 1px solid #ccc;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
    }
    .btn-main-hidden {
        display: none !important;
    }
    .prognosis-chat-header {
        padding: 10px;
        display: flex;
        justify-content: end;
        align-items: center;
        position: absolute;
        width: 100%;
        z-index: 2;
        top: 0;
    }
           
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 50vw;
        height: 100vh;
        overflow: auto;
        right: -25px;
        bottom: -25px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #ffffff;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .widget__container.full-width {
        width: 100vw;
    }
    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }
    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        border: none;
        background-color: #0f172a;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }
    .widget__container.hidden {
        max-height: 0px;
    }
    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }
    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }
    form {
        padding: 2rem 1rem 1.5rem;
    }
    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }
    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }
    .form__field input {
        height: 48px;
    }
    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }
    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #000;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }
    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }
`,p=`
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" viewBox="0 0 150 30" fill="none">
    <path d="M0 23.5511V2.76018H8.05911C9.98659 2.76018 11.5928 3.08906 12.8778 3.74682C14.1721 4.39504 15.1265 5.28159 15.7411 6.40645C16.365 7.53132 16.6769 8.80394 16.6769 10.2243C16.6769 11.6542 16.365 12.9316 15.7411 14.0565C15.1265 15.1718 14.1721 16.0584 12.8778 16.7161C11.5928 17.3643 9.98659 17.6885 8.05911 17.6885H4.39968V23.5511H0ZM4.39968 13.7133H8.22671C9.47445 13.7133 10.4335 13.3797 11.104 12.7124C11.7837 12.0355 12.1236 11.2062 12.1236 10.2243C12.1236 9.25198 11.7837 8.42739 11.104 7.75057C10.4335 7.07374 9.47445 6.73533 8.22671 6.73533H4.39968V13.7133Z" fill="#32365C"/>
    <path d="M18.9256 23.5511V9.19478H23.1577V11.1967C23.6512 10.6342 24.3589 10.1338 25.2807 9.69525C26.2119 9.24721 27.2268 8.98506 28.3256 8.9088L28.8424 13.0412C27.8554 13.0603 26.7845 13.1795 25.6299 13.3987C24.4753 13.6084 23.6512 13.9373 23.1577 14.3854V23.5511H18.9256Z" fill="#32365C"/>
    <path d="M29.4011 16.3729C29.4011 14.9907 29.7363 13.7276 30.4067 12.5837C31.0771 11.4397 31.999 10.5437 33.1722 9.89544C34.3455 9.23768 35.6351 8.9088 37.0412 8.9088C38.4565 8.9088 39.7508 9.23768 40.9241 9.89544C42.0973 10.5437 43.0145 11.4397 43.6756 12.5837C44.346 13.7276 44.6812 14.9907 44.6812 16.3729C44.6812 17.7552 44.3414 19.0183 43.6616 20.1622C42.9912 21.3061 42.074 22.207 40.9101 22.8647C39.7461 23.513 38.4565 23.8371 37.0412 23.8371C35.6351 23.8371 34.3501 23.513 33.1862 22.8647C32.0223 22.207 31.1004 21.3109 30.4207 20.1765C29.7409 19.0326 29.4011 17.7647 29.4011 16.3729ZM33.7589 16.3729C33.7589 17.4692 34.0568 18.3557 34.6528 19.0326C35.258 19.6999 36.0541 20.0335 37.0412 20.0335C38.0375 20.0335 38.8336 19.6999 39.4296 19.0326C40.0348 18.3557 40.3374 17.4692 40.3374 16.3729C40.3374 15.2767 40.0348 14.3949 39.4296 13.7276C38.8336 13.0508 38.0375 12.7124 37.0412 12.7124C36.0541 12.7124 35.258 13.0508 34.6528 13.7276C34.0568 14.4044 33.7589 15.2862 33.7589 16.3729Z" fill="#32365C"/>
    <path d="M46.2735 16.2585C46.2735 14.8763 46.5901 13.6227 47.2233 12.4979C47.8565 11.373 48.6945 10.496 49.7374 9.86684C50.7896 9.22814 51.9163 8.9088 53.1175 8.9088C54.5887 8.9088 55.8737 9.39497 56.9724 10.3673V9.19478H60.9252V23.5511C60.9252 24.5616 60.6365 25.5625 60.0592 26.5539C59.4912 27.5548 58.6113 28.3794 57.4194 29.0277C56.2275 29.6759 54.747 30 52.9778 30C51.6835 30 50.4497 29.795 49.2765 29.3851C48.1125 28.9752 47.1907 28.5129 46.511 27.9981L48.0474 24.5234C48.5967 24.9524 49.351 25.3623 50.31 25.7532C51.2691 26.144 52.1677 26.3394 53.0057 26.3394C54.1324 26.3394 55.0543 26.0534 55.7712 25.4815C56.4975 24.919 56.8607 24.2279 56.8607 23.4081V22.5502C56.3858 22.941 55.8597 23.2556 55.2824 23.4939C54.7144 23.7227 53.9927 23.8371 53.1175 23.8371C51.9163 23.8371 50.7896 23.5082 49.7374 22.8504C48.6945 22.1831 47.8565 21.2728 47.2233 20.1193C46.5901 18.9563 46.2735 17.6694 46.2735 16.2585ZM50.6313 16.3443C50.6313 17.4215 50.9386 18.3558 51.5531 19.147C52.177 19.9382 53.043 20.3338 54.151 20.3338C55.0077 20.3338 55.855 20.0383 56.6931 19.4473V13.3272C56.3672 13.0317 55.9947 12.8029 55.5757 12.6409C55.1567 12.4788 54.7377 12.3978 54.3187 12.3978C53.1361 12.3978 52.2236 12.7886 51.5811 13.5703C50.9479 14.352 50.6313 15.2767 50.6313 16.3443Z" fill="#32365C"/>
    <path d="M64.1237 23.5511V9.19478H68.3557V10.6962C68.7189 10.2291 69.2264 9.81441 69.8782 9.45216C70.5393 9.08992 71.3261 8.9088 72.2386 8.9088C73.8402 8.9088 75.1392 9.42357 76.1355 10.4531C77.1411 11.4731 77.644 12.822 77.644 14.4998V23.5511H73.4119V15.1146C73.4119 14.352 73.2163 13.7371 72.8253 13.27C72.4342 12.8029 71.8895 12.5694 71.1911 12.5694C70.6045 12.5694 70.0597 12.6885 69.5569 12.9269C69.0634 13.1556 68.663 13.4559 68.3557 13.8277V23.5511H64.1237Z" fill="#32365C"/>
    <path d="M79.9067 16.3729C79.9067 14.9907 80.2419 13.7276 80.9123 12.5837C81.5827 11.4397 82.5046 10.5437 83.6778 9.89544C84.8511 9.23768 86.1407 8.9088 87.5467 8.9088C88.9621 8.9088 90.2564 9.23768 91.4296 9.89544C92.6029 10.5437 93.5201 11.4397 94.1812 12.5837C94.8516 13.7276 95.1868 14.9907 95.1868 16.3729C95.1868 17.7552 94.847 19.0183 94.1672 20.1622C93.4968 21.3061 92.5796 22.207 91.4157 22.8647C90.2517 23.513 88.9621 23.8371 87.5467 23.8371C86.1407 23.8371 84.8557 23.513 83.6918 22.8647C82.5278 22.207 81.606 21.3109 80.9263 20.1765C80.2465 19.0326 79.9067 17.7647 79.9067 16.3729ZM84.2644 16.3729C84.2644 17.4692 84.5624 18.3557 85.1583 19.0326C85.7636 19.6999 86.5597 20.0335 87.5467 20.0335C88.5431 20.0335 89.3392 19.6999 89.9351 19.0326C90.5404 18.3557 90.843 17.4692 90.843 16.3729C90.843 15.2767 90.5404 14.3949 89.9351 13.7276C89.3392 13.0508 88.5431 12.7124 87.5467 12.7124C86.5597 12.7124 85.7636 13.0508 85.1583 13.7276C84.5624 14.4044 84.2644 15.2862 84.2644 16.3729Z" fill="#32365C"/>
    <path d="M96.7232 22.2928L98.0781 18.718C98.7857 19.166 99.4887 19.5283 100.187 19.8047C100.895 20.0812 101.649 20.2194 102.45 20.2194C103.064 20.2194 103.576 20.1384 103.986 19.9763C104.405 19.8047 104.615 19.5426 104.615 19.1899C104.615 18.8753 104.429 18.6322 104.056 18.4606C103.693 18.2795 103.078 18.0745 102.212 17.8457L101.165 17.5455C100.038 17.2309 99.0697 16.7685 98.2596 16.1585C97.4495 15.5388 97.0445 14.6046 97.0445 13.3558C97.0445 11.9926 97.5939 10.9107 98.6926 10.1099C99.8007 9.30917 101.253 8.9088 103.05 8.9088C104.745 8.9088 106.458 9.28057 108.19 10.0241L106.961 13.3844C105.648 12.7267 104.363 12.3978 103.106 12.3978C103.088 12.3978 103.069 12.3978 103.05 12.3978C102.52 12.3978 102.059 12.4645 101.668 12.598C101.277 12.7314 101.081 12.965 101.081 13.2986C101.081 13.556 101.197 13.7419 101.43 13.8563C101.672 13.9707 102.133 14.1184 102.813 14.2996L103.791 14.557C104.629 14.7953 105.369 15.0622 106.011 15.3577C106.663 15.6437 107.241 16.0917 107.743 16.7018C108.256 17.3024 108.512 18.0841 108.512 19.0469C108.512 19.9811 108.246 20.8104 107.715 21.5349C107.194 22.2499 106.472 22.8123 105.551 23.2222C104.629 23.6321 103.586 23.8371 102.422 23.8371C101.332 23.8371 100.271 23.6846 99.2373 23.3795C98.2131 23.0649 97.375 22.7027 96.7232 22.2928Z" fill="#32365C"/>
    <path d="M112.993 6.33496C111.86 6.33496 110.942 5.40348 110.942 4.25443C110.942 3.10539 111.86 2.17391 112.993 2.17391H113.235C114.368 2.17391 115.286 3.10539 115.286 4.25443C115.286 5.40348 114.368 6.33496 113.235 6.33496H112.993ZM110.998 23.5511V9.19478H115.23V23.5511H110.998Z" fill="#32365C"/>
    <path d="M122.143 23.913L130.941 3.91304H134.773L143.571 23.913H138.872L137.207 19.9653H128.507L126.843 23.913H122.143ZM130.046 16.2239H135.669L132.857 9.51139L130.046 16.2239Z" fill="#194CA6"/>
    <path d="M147 6.08696C145.343 6.08696 144 4.72434 144 3.04348C144 1.36261 145.343 0 147 0C148.657 0 150 1.36261 150 3.04348C150 4.72434 148.657 6.08696 147 6.08696Z" fill="#0FA84F"/>
    <path d="M144.857 8.69565V23.913H148.714V8.69565H144.857Z" fill="#194CA6"/>
    </svg>
`,g=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`,u=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`,m=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.49998 18V15V14.5C9.33331 14.6667 11.8 14.9 15 14.5C18.2 14.1 18.6667 11 18.5 9.5H20C22 9.5 23.1667 11.1667 23.5 12V23H22L17.5 21H11C8.59998 21 8.33331 19 8.49998 18Z" fill="#E0E4E7"/>
<path d="M20.6154 8.72002H19.0769V4.25537C19.0769 1.86982 17.7255 0 16 0H3.07692C1.35138 0 0 1.86982 0 4.25537V17.5422C0 18.3307 0.396308 18.991 1.00923 19.2252C1.15938 19.2825 1.312 19.3099 1.46462 19.3099C1.84 19.3099 2.20431 19.1392 2.47877 18.8215L5.648 15.1554H7.38338V18.3743C7.38338 20.2641 8.90092 21.8001 10.768 21.8001H16.688C16.9231 21.8001 17.7612 21.8225 18.0751 21.8499L21.8892 23.8916C22.0714 23.9651 22.2646 24 22.4554 24C22.7618 24 23.0646 23.9091 23.3255 23.7284C23.7477 23.4382 24 22.9536 24 22.4354V12.1457C24 10.256 22.4825 8.72002 20.6154 8.72002ZM5.41046 13.2868C5.02523 13.2868 4.66462 13.4587 4.39385 13.7714L1.84738 16.7175V4.25537C1.84738 2.88882 2.49723 1.86858 3.07815 1.86858H16.0012C16.5822 1.86858 17.232 2.88882 17.232 4.25537V10.8988C17.232 12.2666 16.5822 13.2868 16.0012 13.2868H5.41046ZM22.1538 21.9259L18.7348 20.0934C18.4234 19.9601 17.4498 19.9315 16.6892 19.9315H10.7692C9.92123 19.9315 9.23077 19.2326 9.23077 18.3743V15.1554H16C17.7255 15.1554 19.0769 13.2856 19.0769 10.8988V10.5886H20.6154C21.4634 10.5886 22.1538 11.2874 22.1538 12.1457V21.9259ZM14.4615 6.85145H4.61538C4.10585 6.85145 3.69231 6.43289 3.69231 5.91716C3.69231 5.40143 4.10585 4.98287 4.61538 4.98287H14.4615C14.9711 4.98287 15.3846 5.40143 15.3846 5.91716C15.3846 6.43289 14.9711 6.85145 14.4615 6.85145ZM15.3846 9.65431C15.3846 9.13859 14.9711 8.72002 14.4615 8.72002H4.61538C4.10585 8.72002 3.69231 9.13859 3.69231 9.65431C3.69231 10.17 4.10585 10.5886 4.61538 10.5886H14.4615C14.9711 10.5886 15.3846 10.17 15.3846 9.65431Z" fill="#37404F"/>
</svg>
`;class f extends HTMLUListElement{constructor(){super(),this.style.position="relative",this.style.paddingLeft="30px",this.style.paddingTop="30px",this.toggleBtn=document.createElement("button"),this.toggleBtn.style.position="absolute",this.toggleBtn.style.border="none",this.toggleBtn.style.top="0",this.toggleBtn.style.top="5px",this.toggleBtn.style.cursor="pointer",this.toggleBtn.innerText="Test Button",this.toggleBtn.addEventListener("click",()=>{this.dataset.expanded=!this.isExpanded}),this.appendChild(this.toggleBtn)}get isExpanded(){return this.dataset.expanded!=="false"&&this.dataset.expanded!=null}static get observedAttributes(){return["data-expanded"]}attributeChangedCallback(t,e,s){console.log("name EXP, oldValue EXP, newValue EXP",t,e,s),this.updateStyles()}connectedCallback(){this.updateStyles()}updateStyles(){const t=this.isExpanded?"rotate(90deg)":"";this.toggleBtn.style.transform=t,[...this.children].forEach(e=>{e!==this.toggleBtn&&(e.style.display=this.isExpanded?"":"none")})}}customElements.define("expandable-list",f,{extends:"ul"});class b extends HTMLLIElement{constructor(){super(),this.style.position="relative",this.toggleBtn=document.createElement("button"),this.toggleBtn.style.position="absolute",this.toggleBtn.style.border="none",this.toggleBtn.style.background="transparent",this.toggleBtn.style.width="100%",this.toggleBtn.style.height="100%",this.toggleBtn.style.left="0",this.toggleBtn.style.top="0px",this.toggleBtn.style.cursor="pointer",this.toggleBtn.innerText="",this.toggleBtn.addEventListener("click",()=>{this.isExpanded}),this.appendChild(this.toggleBtn)}get isExpanded(){return console.log("this.dataset.id",this.dataset.id),this.dataset.id}static get observedAttributes(){return["data-expanded"]}attributeChangedCallback(t,e,s){console.log("name EXP, oldValue EXP, newValue EXP",t,e,s),this.updateStyles()}connectedCallback(){this.updateStyles()}updateStyles(){console.log("coming")}}customElements.define("menu-list-item",b,{extends:"li"});class x{constructor(t){d(this,"position","");d(this,"open",!1);d(this,"widgetContainer",null);d(this,"headerContainer",null);d(this,"buttonContainer",null);this.defaultTheme={primaryColor:"red",secondaryColor:"rgb(239, 241, 247)",sideMenuBgColor:"#F5F6F7",btnTextColor:"#ffffff",position:"bottom-right"},this.theme=t.theme?t.theme:this.defaultTheme,this.position=this.getPosition(this.theme.position),this.open=!1,this.initialize(),this.injectStyles(),console.log("options",this.theme)}getPosition(t){const[e,s]=t.split("-");return{[e]:"30px",[s]:"30px"}}async initialize(){window.TestFunc=function(){alert(window.PROGNOSIS_WID)};const t=document.createElement("div");t.style.position="fixed",t.style.zIndex="123456789012",Object.keys(this.position).forEach(l=>t.style[l]=this.position[l]),document.body.appendChild(t),this.headerContainer=document.createElement("div"),this.headerContainer.classList.add("prognosis-chat-header");const e=document.createElement("button");e.style.cursor="pointer",e.style.marginRight="20px",e.innerText="<>",e.classList.add("prognosis-chat-maximize-header"),e.classList.add("prognosis-chat-close-header"),e.addEventListener("click",this.maximizeChatbox.bind(this)),this.headerContainer.appendChild(e);const s=document.createElement("button");s.style.cursor="pointer",s.innerText="x",s.classList.add("prognosis-chat-close-header"),s.addEventListener("click",this.toggleOpen.bind(this)),this.headerContainer.appendChild(s),this.buttonContainer=document.createElement("button"),this.buttonContainer.style.backgroundColor=this.theme.primaryColor,this.buttonContainer.classList.add("button__container");const i=document.createElement("button");i.classList.add("submit__container"),i.innerHTML="Submit",i.addEventListener("click",function(){window.TestFunc()});const n=document.createElement("span");n.innerHTML=g,n.classList.add("widget__icon"),this.widgetIcon=n;const r=document.createElement("span");r.innerHTML=u,r.classList.add("widget__icon","widget__hidden"),this.closeIcon=r,this.buttonContainer.appendChild(this.widgetIcon),this.buttonContainer.appendChild(this.closeIcon),this.buttonContainer.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),t.appendChild(this.widgetContainer),t.appendChild(this.buttonContainer)}test(){alert("Test")}createWidgetContent(){this.widgetContainer.innerHTML=`
      <div class="prognosis-sidebar-menu-wrapper" style="background-color: ${this.theme.sideMenuBgColor}">
            ${p}
            <ul class="prognosis-sidebar-menu-list">
              <li>
                <div class="prognosis-menu-title">${m} <span>Chat</span></div>
                <ul class="prognosis-menu-children">
                  <li is="menu-list-item" data-id="newChat">New Chat</li>
                  <li is="menu-list-item" data-id="existingChat">Existing Chat</li>
                </ul>
              </li>
            </ul>
            
        </div>
      
    `}submitChat(){alert("clicked")}injectStyles(){const t=document.createElement("style");t.innerHTML=C.replace(/^\s+|\n/gm,""),document.head.appendChild(t)}maximizeChatbox(){this.widgetContainer.classList.contains("full-width")?this.widgetContainer.classList.remove("full-width"):this.widgetContainer.classList.add("full-width")}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden"),this.widgetContainer.appendChild(this.headerContainer),this.buttonContainer.classList.add("btn-main-hidden"),this.widgetContainer.appendChild(this.headerContainer),console.log("this.buttonContainer 1",this.buttonContainer)):(this.createWidgetContent(),this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"),this.buttonContainer.classList.remove("btn-main-hidden"),console.log("this.buttonContainer 2",this.buttonContainer))}}function a(o){return new x(o)}a(options);window.IntPrognosisWidget=a;
