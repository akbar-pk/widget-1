var a=Object.defineProperty;var l=(n,e,t)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const c=`
    .widget__container * {
        box-sizing: border-box;
    }        
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
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
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`,h=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;class g{constructor(e="bottom-right",t){d(this,"position","");d(this,"open",!1);d(this,"widgetContainer",null);this.position=this.getPosition(e),this.open=!1,this.initialize(),this.injectStyles(),console.log("siteId",t)}getPosition(e){const[t,r]=e.split("-");return{[t]:"30px",[r]:"30px"}}async initialize(){window.TestFunc=function(){alert("")};const e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(s=>e.style[s]=this.position[s]),document.body.appendChild(e);const t=document.createElement("button");t.classList.add("button__container");const r=document.createElement("button");t.classList.add("submit__container"),t.innerHTML="Submit",t.addEventListener("click",function(){window.TestFunc()});const i=document.createElement("span");i.innerHTML=p,i.classList.add("widget__icon"),this.widgetIcon=i;const o=document.createElement("span");o.innerHTML=h,o.classList.add("widget__icon","widget__hidden"),this.closeIcon=o,t.appendChild(this.widgetIcon),t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(t),e.appendChild(r)}createWidgetContent(){this.widgetContainer.innerHTML=`
        <header class="widget__header">
            <h3>Start a conversation</h3>
            <p>We usually respond within a few hours</p>
        </header>
        <form>
            <div class="form__field">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
            </div>
            <div class="form__field">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
            </div>
            <div class="form__field">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Message Subject"
                />
            </div>
            <div class="form__field">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
            </div>
            <button type="button" onclick="submitChat()">Send Message</button>
        </form>
    `}submitChat(){alert("clicked")}injectStyles(){const e=document.createElement("style");e.innerHTML=c.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.createWidgetContent(),this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function m(){return new g}m();
