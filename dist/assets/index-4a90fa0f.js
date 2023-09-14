var A=Object.defineProperty;var S=(d,t,s)=>t in d?A(d,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[t]=s;var x=(d,t,s)=>(S(d,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const V=`
    .widget__container * {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        font-weight: normal;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    } 
    .shadow_layer {
        width: 100%;
        height: 1px;
        position: relative;
        z-index: 1;
    }
    .shadow_layer::before {
        content: "";
        display: block;
        width: 100%;
        position: relative;
        box-shadow: 0px -1px 3px #000;
        height: 1px;
        z-index: 0;
    }
    .shadow_layer::after {
        content: "";
        display: block;
        width: 100%;
        position: relative;
        height: 2px;
        background: #fff;
        z-index: 1;
    }
    
    .hide_element {
        display: none !important;
    }
    button, button:focus-visible, button:focus, button:focus-within, button:active {
        border: none;
        outline: none;
    }
    .prognosis_logo_in_ai {
        display: flex;
        gap: 5px;
        zoom: 1.3;
    }
    .hidden_module, .hide_page {
        display: none !important;
    }
    .prognosis_menu_collapse_btn_holder {
        display: flex;
        justify-content: end;
        margin-right: -25px;
        position: absolute;
        z-index: 3;
        width: 66px;
    }
    .prognosis-sidebar-menu-wrapper.collapsed .prognosis_menu_collapse_btn_holder {
        width: 55px;
    }
    .prognosis-sidebar-menu-wrapper.expanded .prognosis_menu_collapse_btn_holder {
        width: 246px;
    }
    .prognosis_menu_collapse_btn {
        cursor: pointer;
        padding: 0;
        margin: 0;
        border-radius: 100px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #efefef !important;
    }
    .prognosis_menu_collapse_btn:hover {
        background: lightgray !important;
    }
    .prognosis_menu_collapse_btn .collapse_arrow_right,
    .prognosis_menu_collapse_btn .collapse_arrow_left {
        display: block;
        width: 22px;
        height: 22px;
    }
    .prognosis_menu_collapse_btn.expanded .collapse_arrow_right {
        display: none;
    }
    .prognosis_menu_collapse_btn.collapsed .collapse_arrow_left {
        display: none;
    }
    .prognosis_chat_home_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
        background: #fff;
    }
    .prognosis_chat_home_wrapper .prognosis_chat_home_left {
        width: 50%;
        height: 100%;
    }
    .prognosis_chat_home_wrapper .prognosis_chat_home_left.maximum {
        width: 75%;
        border-right: 1px solid lightgray;
    }
    .prognosis_chat_home_logo_holder {
        margin-top: 20px;
    }
    .prognosis_chat_home_logo_holder svg {
        zoom: 150%;
    }
    .prognosis_chat_inner_left {
        padding: 0;
        height: 100%;
        position: relative;
    }
    .prognosis_chat_heading {
        font-size: 20px;
        font-weight: bold;
    }
    .prognosis_chat_inner_left_header {
        margin-top: 50px;
        padding: 0 30px;
    }
    .prognosis_main_question_input_wrapper {
        border-radius: 30px;
        transition: all 0.3s ease;
        border: 1px solid #acacac;
        margin-top: 20px;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 62%;
    }
    .prognosis_main_question_input {
        padding: 15px;
        border: none;
        outline: none !important;
        width: 80%;
    }
    .prognosis_main_question_input_wrapper:hover {
        box-shadow: 0px 0px 15px #ababab;
    }
    .prognosis_e_chat {
        cursor: pointer;
    }
    .prognosis_chat_home_wrapper .prognosis_chat_home_right {
        width: 50%;
        height: 100%;
        background: url("https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80") top center / cover no-repeat;
    }
    .prognosis_chat_home_left_content {
        margin: 40px 0 0 0;
        padding-left: 20px;
    }
    .prognosis_chat_question_item {
        font-size: 14px;
        font-weight: normal;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 7px;
    }
    .prognosis_chat_home_left_list_holder {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .prognosis_chat_home_left_list_holder .prognosis_chat_question_item {
        margin-bottom: 15px;
        border: 1px solid #dcdbdb;
        padding: 10px 15px 10px 15px;
        border-radius: 40px;
        transition: all 0.3s ease;
    }
    .prognosis_chat_home_left_list_holder .prognosis_chat_question_item:hover {
        box-shadow: 0px 0px 10px #ccc;
    }
    .prognosis_chat_question_item:hover {
        font-weight: bold;
    }
    .prognosis_pre_questions_wrapper {
        padding: 30px 15px 15px 15px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }
    .prognosis_pre_qa_wrapper {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 30px;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: none;
    }
    .prognosis_pre_qa_wrapper .prognosis_pre_question_block {
        min-width: 120px;
        min-height: 70px;
        border: 1px solid gray;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 15px;
    }
    .prognosis_pre_qa_wrapper .prognosis_pre_question_block:hover {
        backgound: red;
    }
    .prognotsis_clear_chat_btn {
        font-size: 11px;
        border-radius: 15px;
        padding: 5px;
        border: unset;
        cursor: pointer;
        border: unset !important;
    }

    .prognosis_chat_stop_btn {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        border: unset;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: unset;
    }

    .prognosis_recording_wrapper {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13px;
    }

    .prognosis_start_record_btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-bottom: 15px;
    }

    .prognosis_start_record_btn:hover, .prognosis__consult_submitBtn:hover {
        opacity: 0.8;
    }

    .prognosis_start_record_btn svg {
        width: 30px;
        height: 30px;
    }
    .prognosis_user_rating_wrapper {
        margin-left: -70px;
        margin-right: 10px;
        width: 50px;
        display: flex;
        flex-direction: column;
    }

    .prognosis_user_like_btn, .prognosis_user_dislike_btn {
        background: transparent;
        border: unset;
        outline: unset;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 10px;
        background: unset !important;
    }
    .prognosis_user_like_btn svg, .prognosis_user_dislike_btn svg {
        width: 25px;
        height: 25px;
    }
    .prognosis_user_like_btn svg path, .prognosis_user_dislike_btn svg path {
        fill: #194ca6;
    }
    .prognosis_user_like_btn:hover svg path, .prognosis_user_dislike_btn:hover svg path {
        fill: #63c68d;
    }
    .prognosis__chat_bubble_out {
        border: 1px solid lightgray;
        padding: 15px;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        align-items: start;
        gap: 10px;
        border-radius: 15px;
        background: #f3f3f3;
        margin-left: 50px;
        max-width: 800px;
    }
    .prognosis__chat_bubble_out_inner {
        max-width: 700px;
    }
    .prognosis__chat_bubble_user {
        margin-bottom: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid lightgray;
    }
    .prognosis_static_button {
        background: unset !important;
        border: unset !important;
        outline: unset !important;
        cursor: normal;
    }
    .prognosis__chat_bubble_user_inner {
        padding: 10px 10px 10px 2px;
    }
    .prognosis__consult_submitBtn, .prognosis_main_question_btn {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        border: unset;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: unset !important;
        color: black !important;
    }
    .prognosis__consult_submitBtn:hover {
        background: lightgray !important;
    }
    .prognosis__consult_submitBtn svg {
        stroke: black !important;
    }
    .prognosis__consult_wrap {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    .prognosis_text_input_wrapper {
        width: 100%;
        position: absolute;
        bottom: 70px;
        background-color: #fff;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .prognosis_text_input_container {
        border-radius: 30px;
        border: 1px solid #a7a7a7;
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 0 15px;
        width: 100%;
        max-width: 70%;
        margin: 5px 0 0 0;
        overflow: hidden;
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;
    }
    .prognosis_text_input_container:hover {
        box-shadow: 0px 0px 15px #ababab;
    }
    .shadow-edge {
        box-shadow: 0px 0px 3px black;
        height: 1px;
        margin-bottom: -2px;
        display: none;
    }
    .prognosis__consult_inputbox {
        border: unset;
        padding: 15px;
        height: 50px;
        width: 91%;
        overflow: hidden;
        outline: unset;
        resize: none;
    }
    .prognosis__consult_inputbox:focus-visible {
        border: unset;
    }
    .prognosis__consult_submitBtn svg {
        width: 20px;
        height: 20px;
    }
    .prognosis__conslutation_holder {
        height: 100%;
    }
    .prognosis__display_area {
        width: 100%;
        height: calc(100% - 200px);
        padding: 70px 30px 50px 30px;
        box-sizing: border-box;
        overflow: auto;
    }
    .prognosis__wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }
    .prognosis__main-wrap {
        flex: 1;
        width: calc(100% - 296px)
    }
    
    .prognosis-sidebar-menu-wrapper {
        padding: 25px 15px 15px 25px;
        height: 100%;
    }
    .prognosis-sidebar-menu-wrapper.expanded {
        width: 256px;
    }
    .prognosis-sidebar-menu-wrapper.collapsed {
        width: 66px;
        overflow: hidden;
    }
    .prognosis-sidebar-menu-list {
        list-style: none;
        color: #000;
        margin: 50px 0 0 0;
    }
    .prognosis-sidebar-menu-list > li {
        margin-bottom: 25px;
        position: relative;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-title {
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-title.active::after {
        position: absolute;
        content: "";
        border-right: 3px solid black;
        width: 2px;
        height: 20px;
        right: -10px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-title span {
        display: block;
        font-weight: bold;
        margin: 0 0 0 23px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children {
        list-style: none;
        font-size: 15px;
        margin: 15px 0 0 48px;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children {
        line-height: 2
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children li {
        cursor: pointer;
    }
    .prognosis-sidebar-menu-list .prognosis-menu-children li.active {
        background: lightgray;
        border-radius: 15px;
        padding-left: 10px;
        margin-left: -10px;
    }
    .prognosis-sidebar-menu-list ul li {
        color: #4C535D;
    }
    .prognosis-sidebar-menu-wrapper.collapsed .logo-header-main,
    .prognosis-sidebar-menu-wrapper.collapsed .prognosis-menu-text {
        display: none;
    }
    .prognosis-sidebar-menu-wrapper.expanded .logo-header-main,
    .prognosis-sidebar-menu-wrapper.expanded .prognosis-menu-text {
        display: block;
    }
    .prognosis_main_module {
        height: 100%;
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

    .hide_section {
        display: none !important;
    }

    @keyframes chat-typing-bar {
        0% {
          width: 8px;
        }
        25% {
          width: calc(100% - 10px);
        }
        50% {
          width: 8px;
        }
        75% {
          width: calc(100% - 10px);
        }
        100% {
          width: 8px;
        }
        25% {
          left: 5px;
        }
        50% {
          left: calc(100% - 13px);
        }
        75% {
          left: 5px;
        }
        0% {
          background: blue;
        }
        50% {
          background: green;
        }
        100% {
          background: #65B360;
        }
      }

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #b0afaf;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`,H=`
    <div class="prognosis_logo_in_ai">
    <div class="mr-2">
        <svg width="18" height="20" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9848 12.824V18.5885C12.9848 22.1149 10.1071 25 6.58967 25C3.07225 25 0.193848 22.115 0.193848 18.5885V0H12.9848V12.824Z" fill="#194CA6"></path><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.9848 0H13.1369C16.6533 0 19.5306 2.88513 19.5306 6.41163C19.5306 9.93813 16.6533 12.824 13.1361 12.824H0.193848V0H12.9848Z" fill="#3FBA73"></path></svg></div><svg class="logo-header-main" width="110" height="14" viewBox="0 0 121 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="text-path" d="M0.523438 15V0.800781H6.1582C7.50586 0.800781 8.62891 1.02539 9.52734 1.47461C10.4323 1.91732 11.0996 2.52279 11.5293 3.29102C11.9655 4.05924 12.1836 4.92839 12.1836 5.89844C12.1836 6.875 11.9655 7.7474 11.5293 8.51562C11.0996 9.27734 10.4323 9.88281 9.52734 10.332C8.62891 10.7747 7.50586 10.9961 6.1582 10.9961H3.59961V15H0.523438ZM3.59961 8.28125H6.27539C7.14779 8.28125 7.81836 8.05339 8.28711 7.59766C8.76237 7.13542 9 6.56901 9 5.89844C9 5.23438 8.76237 4.67122 8.28711 4.20898C7.81836 3.74674 7.14779 3.51562 6.27539 3.51562H3.59961V8.28125ZM14.1562 15V0.800781H20.3574C21.347 0.800781 22.2552 0.986328 23.082 1.35742C23.9154 1.72201 24.5794 2.25911 25.0742 2.96875C25.569 3.67188 25.8164 4.50195 25.8164 5.45898C25.8164 6.63086 25.4518 7.60417 24.7227 8.37891C23.9935 9.15365 23.069 9.66146 21.9492 9.90234L26.8711 15H22.6523L18.3359 10.0391H17.2324V15H14.1562ZM17.2324 7.40234H20.1523C20.9922 7.40234 21.6042 7.21354 21.9883 6.83594C22.3789 6.45182 22.5742 5.99284 22.5742 5.45898C22.5742 4.91211 22.3691 4.45312 21.959 4.08203C21.5553 3.70443 20.888 3.51562 19.957 3.51562H17.2324V7.40234ZM27.3301 7.90039C27.3301 6.56576 27.6719 5.3418 28.3555 4.22852C29.0456 3.11523 29.9766 2.23307 31.1484 1.58203C32.3268 0.924479 33.6094 0.595703 34.9961 0.595703C36.3828 0.595703 37.6621 0.924479 38.834 1.58203C40.0059 2.23307 40.9336 3.11523 41.6172 4.22852C42.3073 5.3418 42.6523 6.56576 42.6523 7.90039C42.6523 9.23503 42.3073 10.459 41.6172 11.5723C40.9336 12.6855 40.0059 13.5677 38.834 14.2188C37.6621 14.8698 36.3828 15.1953 34.9961 15.1953C33.6094 15.1953 32.3268 14.8698 31.1484 14.2188C29.9766 13.5677 29.0456 12.6855 28.3555 11.5723C27.6719 10.459 27.3301 9.23503 27.3301 7.90039ZM30.6113 7.90039C30.6113 8.72721 30.8034 9.47917 31.1875 10.1562C31.5781 10.8268 32.1055 11.3607 32.7695 11.7578C33.4401 12.1484 34.1823 12.3438 34.9961 12.3438C35.8099 12.3438 36.5488 12.1484 37.2129 11.7578C37.8835 11.3607 38.4108 10.8268 38.7949 10.1562C39.179 9.47917 39.3711 8.72721 39.3711 7.90039C39.3711 7.07357 39.179 6.32487 38.7949 5.6543C38.4108 4.97721 37.8835 4.44336 37.2129 4.05273C36.5488 3.6556 35.8099 3.45703 34.9961 3.45703C34.1823 3.45703 33.4401 3.6556 32.7695 4.05273C32.1055 4.44336 31.5781 4.97721 31.1875 5.6543C30.8034 6.32487 30.6113 7.07357 30.6113 7.90039ZM43.9219 7.8418C43.9219 6.33789 44.2962 5.03906 45.0449 3.94531C45.8001 2.85156 46.7865 2.02148 48.0039 1.45508C49.2279 0.882161 50.5202 0.595703 51.8809 0.595703C52.8835 0.595703 53.86 0.742188 54.8105 1.03516C55.7611 1.32161 56.4967 1.64388 57.0176 2.00195L55.7188 4.58008C55.263 4.27409 54.6706 4.02344 53.9414 3.82812C53.2188 3.63281 52.5254 3.53516 51.8613 3.53516C51.0215 3.53516 50.2467 3.70117 49.5371 4.0332C48.8275 4.35872 48.2578 4.84049 47.8281 5.47852C47.4049 6.11654 47.1934 6.88477 47.1934 7.7832C47.1934 8.71419 47.4277 9.52474 47.8965 10.2148C48.3652 10.8984 48.9609 11.4225 49.6836 11.7871C50.4128 12.1452 51.1647 12.3242 51.9395 12.3242C52.8704 12.3242 53.8242 12.0964 54.8008 11.6406V7.36328H57.877V13.0762C56.959 13.8118 56.0215 14.349 55.0645 14.6875C54.1139 15.026 53.0592 15.1953 51.9004 15.1953C50.5267 15.1953 49.2279 14.9056 48.0039 14.3262C46.7865 13.7467 45.8001 12.9004 45.0449 11.7871C44.2962 10.6738 43.9219 9.35872 43.9219 7.8418ZM60.1523 15V0.800781H62.4668L69.7715 9.7168V0.800781H72.8477V15H70.3281L63.2285 6.29883V15H60.1523ZM74.9863 7.90039C74.9863 6.56576 75.3281 5.3418 76.0117 4.22852C76.7018 3.11523 77.6328 2.23307 78.8047 1.58203C79.9831 0.924479 81.2656 0.595703 82.6523 0.595703C84.0391 0.595703 85.3184 0.924479 86.4902 1.58203C87.6621 2.23307 88.5898 3.11523 89.2734 4.22852C89.9635 5.3418 90.3086 6.56576 90.3086 7.90039C90.3086 9.23503 89.9635 10.459 89.2734 11.5723C88.5898 12.6855 87.6621 13.5677 86.4902 14.2188C85.3184 14.8698 84.0391 15.1953 82.6523 15.1953C81.2656 15.1953 79.9831 14.8698 78.8047 14.2188C77.6328 13.5677 76.7018 12.6855 76.0117 11.5723C75.3281 10.459 74.9863 9.23503 74.9863 7.90039ZM78.2676 7.90039C78.2676 8.72721 78.4596 9.47917 78.8438 10.1562C79.2344 10.8268 79.7617 11.3607 80.4258 11.7578C81.0964 12.1484 81.8385 12.3438 82.6523 12.3438C83.4661 12.3438 84.2051 12.1484 84.8691 11.7578C85.5397 11.3607 86.0671 10.8268 86.4512 10.1562C86.8353 9.47917 87.0273 8.72721 87.0273 7.90039C87.0273 7.07357 86.8353 6.32487 86.4512 5.6543C86.0671 4.97721 85.5397 4.44336 84.8691 4.05273C84.2051 3.6556 83.4661 3.45703 82.6523 3.45703C81.8385 3.45703 81.0964 3.6556 80.4258 4.05273C79.7617 4.44336 79.2344 4.97721 78.8438 5.6543C78.4596 6.32487 78.2676 7.07357 78.2676 7.90039ZM91.4512 13.6035L92.6523 10.9766C94.1432 11.9076 95.5039 12.3763 96.7344 12.3828C97.3984 12.3828 97.9909 12.2624 98.5117 12.0215C99.0326 11.7806 99.293 11.4062 99.293 10.8984C99.293 10.5664 99.1888 10.2962 98.9805 10.0879C98.7786 9.87956 98.5117 9.71029 98.1797 9.58008C97.8542 9.44987 97.3594 9.28385 96.6953 9.08203C96.2266 8.95182 95.7741 8.81185 95.3379 8.66211C94.166 8.26497 93.2578 7.74089 92.6133 7.08984C91.9753 6.43229 91.6562 5.58919 91.6562 4.56055C91.6562 3.68164 91.9395 2.94596 92.5059 2.35352C93.0723 1.76107 93.7884 1.32161 94.6543 1.03516C95.5202 0.742188 96.4219 0.595703 97.3594 0.595703C98.362 0.595703 99.2637 0.722656 100.064 0.976562C100.872 1.23047 101.562 1.52344 102.135 1.85547L100.953 4.42383C100.458 4.13086 99.8952 3.88346 99.2637 3.68164C98.6322 3.47982 97.9844 3.37891 97.3203 3.37891C96.5846 3.37891 96.002 3.49284 95.5723 3.7207C95.1491 3.94857 94.9375 4.25456 94.9375 4.63867C94.9375 4.94466 95.0482 5.19531 95.2695 5.39062C95.4974 5.58594 95.8294 5.75521 96.2656 5.89844C96.7018 6.03516 97.4049 6.23047 98.375 6.48438C99.7747 6.84245 100.81 7.35677 101.48 8.02734C102.158 8.69141 102.496 9.58333 102.496 10.7031C102.496 11.6211 102.236 12.4219 101.715 13.1055C101.194 13.7826 100.497 14.3001 99.625 14.6582C98.7526 15.0163 97.7891 15.1953 96.7344 15.1953C95.6667 15.1953 94.7129 15.0423 93.873 14.7363C93.0332 14.4303 92.2259 14.0527 91.4512 13.6035ZM104.664 15V0.800781H107.74V15H104.664ZM109.869 13.6035L111.07 10.9766C112.561 11.9076 113.922 12.3763 115.152 12.3828C115.816 12.3828 116.409 12.2624 116.93 12.0215C117.451 11.7806 117.711 11.4062 117.711 10.8984C117.711 10.5664 117.607 10.2962 117.398 10.0879C117.197 9.87956 116.93 9.71029 116.598 9.58008C116.272 9.44987 115.777 9.28385 115.113 9.08203C114.645 8.95182 114.192 8.81185 113.756 8.66211C112.584 8.26497 111.676 7.74089 111.031 7.08984C110.393 6.43229 110.074 5.58919 110.074 4.56055C110.074 3.68164 110.357 2.94596 110.924 2.35352C111.49 1.76107 112.206 1.32161 113.072 1.03516C113.938 0.742188 114.84 0.595703 115.777 0.595703C116.78 0.595703 117.682 0.722656 118.482 0.976562C119.29 1.23047 119.98 1.52344 120.553 1.85547L119.371 4.42383C118.876 4.13086 118.313 3.88346 117.682 3.68164C117.05 3.47982 116.402 3.37891 115.738 3.37891C115.003 3.37891 114.42 3.49284 113.99 3.7207C113.567 3.94857 113.355 4.25456 113.355 4.63867C113.355 4.94466 113.466 5.19531 113.688 5.39062C113.915 5.58594 114.247 5.75521 114.684 5.89844C115.12 6.03516 115.823 6.23047 116.793 6.48438C118.193 6.84245 119.228 7.35677 119.898 8.02734C120.576 8.69141 120.914 9.58333 120.914 10.7031C120.914 11.6211 120.654 12.4219 120.133 13.1055C119.612 13.7826 118.915 14.3001 118.043 14.6582C117.171 15.0163 116.207 15.1953 115.152 15.1953C114.085 15.1953 113.131 15.0423 112.291 14.7363C111.451 14.4303 110.644 14.0527 109.869 13.6035Z" fill="#32365C"></path></svg>
    </div>
`,P=`
    <svg width="18" height="20" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9848 12.824V18.5885C12.9848 22.1149 10.1071 25 6.58967 25C3.07225 25 0.193848 22.115 0.193848 18.5885V0H12.9848V12.824Z" fill="#194CA6"></path><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.9848 0H13.1369C16.6533 0 19.5306 2.88513 19.5306 6.41163C19.5306 9.93813 16.6533 12.824 13.1361 12.824H0.193848V0H12.9848Z" fill="#3FBA73"></path></svg>
`,O=`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M11.8926 1.74319C12.4766 0.770525 13.2519 0.25191 14.0644 0.0707069C14.8359 -0.100082 15.6269 0.0477962 16.3086 0.414367C16.9805 0.776773 17.5566 1.35579 17.9101 2.05561C18.043 2.31804 18.1465 2.59713 18.2129 2.88456C18.6094 2.87623 19.0137 2.94912 19.4062 3.09075C20.1523 3.35943 20.8691 3.88638 21.4238 4.58411C21.9805 5.28602 22.3769 6.1712 22.4785 7.1522C22.5254 7.60416 22.5078 8.07487 22.416 8.556C22.8242 8.94548 23.1641 9.38495 23.4199 9.85358C23.8164 10.5763 24.0234 11.3782 24.0019 12.1925C23.9805 13.0132 23.7266 13.8338 23.2031 14.5898C22.873 15.0668 22.4375 15.5146 21.8887 15.9166C21.9394 17.1704 21.5918 18.2951 21.0293 19.1657C20.3926 20.1488 19.4707 20.8153 18.5137 20.9944C18.3027 21.8671 17.7598 22.6357 17.0586 23.1709C16.1719 23.8478 15.0156 24.1665 13.959 23.8583C13.1797 23.6312 12.4707 23.0814 11.9844 22.1129C11.3926 23.1772 10.5801 23.7395 9.72851 23.9291C8.70702 24.1561 7.65038 23.8208 6.85351 23.1584C6.21679 22.6294 5.73827 21.8859 5.5664 21.0423C5.23241 21.0277 4.89452 20.9569 4.56444 20.8382C3.83593 20.5758 3.13476 20.0676 2.58593 19.3907C2.03515 18.7138 1.63476 17.8619 1.50976 16.9142C1.4453 16.4206 1.45507 15.9041 1.55663 15.373C1.19921 15.0272 0.892569 14.6377 0.648428 14.2149C0.222647 13.4922 -0.00977507 12.6758 -9.44294e-06 11.8364C0.00975618 10.9908 0.261709 10.1327 0.808584 9.33704C1.12694 8.87466 1.54687 8.43311 2.07812 8.02905C2.07226 7.87492 2.07226 7.7208 2.07616 7.56875C2.11913 6.33366 2.54491 5.24852 3.16796 4.43832C3.81249 3.59895 4.67577 3.0491 5.56249 2.9158H5.5664C5.59765 2.77625 5.63476 2.64087 5.68163 2.50757C5.96679 1.6807 6.55468 0.978804 7.27538 0.531004C7.99999 0.0811208 8.87108 -0.116744 9.71874 0.0707069C10.5332 0.249827 11.3086 0.770525 11.8926 1.74319ZM18.168 4.55912C18.0391 5.01317 17.8086 5.4693 17.457 5.91294C17.1894 6.25243 16.7148 6.29617 16.3965 6.01083C16.0781 5.72548 16.0371 5.21937 16.3047 4.87987C16.8711 4.16131 16.8769 3.40734 16.5781 2.81791C16.3711 2.40968 16.0293 2.0681 15.6269 1.85149C15.2344 1.64113 14.791 1.55157 14.3691 1.6453C13.8066 1.77026 13.2617 2.23473 12.8848 3.17823C12.8906 3.21989 12.8945 3.26363 12.8945 3.30736V19.9051C12.9062 19.9447 12.916 19.9884 12.9238 20.0301C13.1406 21.436 13.7109 22.1129 14.3516 22.3003C14.9434 22.4732 15.625 22.2712 16.168 21.8546C16.7012 21.4464 17.082 20.8507 17.0859 20.2238C17.0918 19.5094 16.5996 18.7013 15.2832 17.9848C14.9101 17.7828 14.7637 17.2954 14.9531 16.8976C15.1426 16.4998 15.5996 16.3436 15.9726 16.5456C17.4258 17.337 18.1914 18.3076 18.4726 19.2886C18.9394 19.1262 19.3926 18.7471 19.7363 18.2181C20.168 17.5537 20.4121 16.6601 20.2949 15.6562C20.2266 15.3126 20.3672 14.946 20.666 14.7606C21.2363 14.4045 21.6562 14.0108 21.9414 13.5964C22.2656 13.1298 22.4219 12.6341 22.4355 12.1467C22.4492 11.6552 22.3164 11.1595 22.0625 10.6971C21.8301 10.2743 21.5019 9.88482 21.0898 9.55574C20.8027 9.35162 20.666 8.95798 20.7832 8.59349C20.9219 8.1561 20.959 7.73121 20.918 7.33132C20.8535 6.70231 20.5918 6.12955 20.2266 5.66508C19.8574 5.19854 19.3848 4.84863 18.9023 4.67576C18.6523 4.58412 18.4023 4.54246 18.168 4.55912ZM5.63476 19.3761C5.93554 18.368 6.72851 17.362 8.2246 16.5477C8.59765 16.3456 9.05273 16.5018 9.24413 16.8997C9.43359 17.2975 9.2871 17.7828 8.91405 17.9869C7.52733 18.7429 7.00585 19.6094 7.00585 20.3654C7.00585 20.9549 7.3203 21.5068 7.77929 21.8879C8.24413 22.2733 8.84569 22.4732 9.4121 22.3482C10.1191 22.192 10.8008 21.4943 11.1543 19.9759V4.00302C10.8008 2.49508 10.1191 1.80151 9.41405 1.6453C8.94921 1.54116 8.45507 1.65988 8.03319 1.92231C7.60741 2.18682 7.26366 2.59297 7.10155 3.06159C6.88476 3.68643 7.01366 4.45498 7.74608 5.17771C8.05077 5.47971 8.0703 5.98583 7.7871 6.31075C7.5039 6.63566 7.02929 6.65649 6.7246 6.35449C6.15429 5.79213 5.80273 5.19437 5.62694 4.59869C5.17773 4.71325 4.73437 5.02983 4.37694 5.49429C3.95702 6.03999 3.66991 6.77729 3.64062 7.62499C3.6328 7.84993 3.64452 8.08737 3.67577 8.33106H3.67382C3.71483 8.64764 3.58202 8.97464 3.31054 9.15376C2.76171 9.51408 2.35546 9.90981 2.07226 10.3222C1.72851 10.8221 1.5703 11.3469 1.56444 11.8531C1.55858 12.3675 1.70702 12.8778 1.97265 13.3381C2.19726 13.7276 2.50585 14.0816 2.88085 14.3795C3.1621 14.5857 3.29491 14.9731 3.17968 15.3355C3.03124 15.8041 2.99804 16.2602 3.05468 16.683C3.13476 17.2933 3.40038 17.8494 3.76366 18.2972C4.1289 18.7471 4.58983 19.0824 5.06249 19.2532C5.2539 19.3282 5.44726 19.3678 5.63476 19.3761ZM5.80663 8.02697C6.10351 7.71663 6.58007 7.7208 6.87304 8.03738C7.16405 8.35397 7.16015 8.86217 6.86327 9.17459C6.21679 9.85358 5.8789 10.7283 5.84374 11.6239C5.80858 12.5466 6.08984 13.4943 6.67968 14.2753C6.9414 14.6211 6.88866 15.1272 6.56444 15.4063C6.24023 15.6854 5.76562 15.6292 5.5039 15.2834C4.67773 14.192 4.28515 12.8632 4.33593 11.5615C4.38866 10.266 4.87499 9.0038 5.80663 8.02697ZM16.5059 8.79968C16.168 8.53933 16.0937 8.0353 16.3379 7.67498C16.582 7.31465 17.0547 7.23343 17.3926 7.49586C17.543 7.61249 17.6855 7.73538 17.8184 7.86451C18.8008 8.8101 19.3379 10.0577 19.4355 11.349C19.5332 12.6279 19.1992 13.9483 18.4433 15.0564C18.332 15.2188 18.2129 15.3771 18.084 15.5292C17.8047 15.8603 17.3281 15.8874 17.0176 15.5896C16.707 15.2917 16.6816 14.7835 16.9609 14.4524C17.0547 14.342 17.1406 14.2274 17.2207 14.1108C17.7598 13.3193 17.998 12.3821 17.9297 11.474C17.8613 10.5805 17.4902 9.71611 16.8086 9.06211C16.7129 8.97047 16.6133 8.88299 16.5059 8.79968Z" fill="#37404F"/>
    </svg>`,R=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`,Z=`
<svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-259.000000, -760.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z" id="like-[#1385]">

</path>
            </g>
        </g>
    </g>
</svg>
`,N=`
<svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -760.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M139.800374,612 L144.00037,612 L144.00037,600 L139.800374,600 L139.800374,612 Z M127.698085,600 L137.700376,600 L137.700376,611.979 L135.894378,618.174 C135.725328,619.224 134.776129,620 133.66103,620 C132.412581,620 131.400381,619.036 131.400381,617.847 L131.400381,612 L125.873186,612 C124.026238,612 122.659139,610.358 123.074939,608.644 L124.899837,602.109 C125.200137,600.868 126.360386,600 127.698085,600 L127.698085,600 Z" id="dislike-[#1387]">

</path>
            </g>
        </g>
    </g>
</svg>
`,D=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`,Q=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.49998 18V15V14.5C9.33331 14.6667 11.8 14.9 15 14.5C18.2 14.1 18.6667 11 18.5 9.5H20C22 9.5 23.1667 11.1667 23.5 12V23H22L17.5 21H11C8.59998 21 8.33331 19 8.49998 18Z" fill="#E0E4E7"/>
<path d="M20.6154 8.72002H19.0769V4.25537C19.0769 1.86982 17.7255 0 16 0H3.07692C1.35138 0 0 1.86982 0 4.25537V17.5422C0 18.3307 0.396308 18.991 1.00923 19.2252C1.15938 19.2825 1.312 19.3099 1.46462 19.3099C1.84 19.3099 2.20431 19.1392 2.47877 18.8215L5.648 15.1554H7.38338V18.3743C7.38338 20.2641 8.90092 21.8001 10.768 21.8001H16.688C16.9231 21.8001 17.7612 21.8225 18.0751 21.8499L21.8892 23.8916C22.0714 23.9651 22.2646 24 22.4554 24C22.7618 24 23.0646 23.9091 23.3255 23.7284C23.7477 23.4382 24 22.9536 24 22.4354V12.1457C24 10.256 22.4825 8.72002 20.6154 8.72002ZM5.41046 13.2868C5.02523 13.2868 4.66462 13.4587 4.39385 13.7714L1.84738 16.7175V4.25537C1.84738 2.88882 2.49723 1.86858 3.07815 1.86858H16.0012C16.5822 1.86858 17.232 2.88882 17.232 4.25537V10.8988C17.232 12.2666 16.5822 13.2868 16.0012 13.2868H5.41046ZM22.1538 21.9259L18.7348 20.0934C18.4234 19.9601 17.4498 19.9315 16.6892 19.9315H10.7692C9.92123 19.9315 9.23077 19.2326 9.23077 18.3743V15.1554H16C17.7255 15.1554 19.0769 13.2856 19.0769 10.8988V10.5886H20.6154C21.4634 10.5886 22.1538 11.2874 22.1538 12.1457V21.9259ZM14.4615 6.85145H4.61538C4.10585 6.85145 3.69231 6.43289 3.69231 5.91716C3.69231 5.40143 4.10585 4.98287 4.61538 4.98287H14.4615C14.9711 4.98287 15.3846 5.40143 15.3846 5.91716C15.3846 6.43289 14.9711 6.85145 14.4615 6.85145ZM15.3846 9.65431C15.3846 9.13859 14.9711 8.72002 14.4615 8.72002H4.61538C4.10585 8.72002 3.69231 9.13859 3.69231 9.65431C3.69231 10.17 4.10585 10.5886 4.61538 10.5886H14.4615C14.9711 10.5886 15.3846 10.17 15.3846 9.65431Z" fill="#37404F"/>
</svg>
`,z=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
`,F=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v220h-80v-220H160v120H80Zm200 320q-11 0-21-5.5T244-302l-69-138H80v-80h120q11 0 21 5.5t15 16.5l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l67 134q-18 11-34.5 23T478-474l-38-76-124 248q-5 11-15 16.5t-21 5.5Zm147 120H160q-33 0-56.5-23.5T80-240v-120h80v120h243q3 21 9 41t15 39Zm53-320ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm8-180 91-91-28-28-91 91 28 28Z"/></svg>
`,G=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M390-120q-51 0-88-35.5T260-241q-60-8-100-53t-40-106q0-21 5.5-41.5T142-480q-11-18-16.5-38t-5.5-42q0-61 40-105.5t99-52.5q3-51 41-86.5t90-35.5q26 0 48.5 10t41.5 27q18-17 41-27t49-10q52 0 89.5 35t40.5 86q59 8 99.5 53T840-560q0 22-5.5 42T818-480q11 18 16.5 38.5T840-400q0 62-40.5 106.5T699-241q-5 50-41.5 85.5T570-120q-25 0-48.5-9.5T480-156q-19 17-42 26.5t-48 9.5Zm130-590v460q0 21 14.5 35.5T570-200q20 0 34.5-16t15.5-36q-21-8-38.5-21.5T550-306q-10-14-7.5-30t16.5-26q14-10 30-7.5t26 16.5q11 16 28 24.5t37 8.5q33 0 56.5-23.5T760-400q0-5-.5-10t-2.5-10q-17 10-36.5 15t-40.5 5q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480q33 0 56.5-23.5T760-560q0-33-23.5-56T680-640q-11 18-28.5 31.5T613-587q-16 6-31-1t-20-23q-5-16 1.5-31t22.5-20q15-5 24.5-18t9.5-30q0-21-14.5-35.5T570-760q-21 0-35.5 14.5T520-710Zm-80 460v-460q0-21-14.5-35.5T390-760q-21 0-35.5 14.5T340-710q0 16 9 29.5t24 18.5q16 5 23 20t2 31q-6 16-21 23t-31 1q-21-8-38.5-21.5T279-640q-32 1-55.5 24.5T200-560q0 33 23.5 56.5T280-480q17 0 28.5 11.5T320-440q0 17-11.5 28.5T280-400q-21 0-40.5-5T203-420q-2 5-2.5 10t-.5 10q0 33 23.5 56.5T280-320q20 0 37-8.5t28-24.5q10-14 26-16.5t30 7.5q14 10 16.5 26t-7.5 30q-14 19-32 33t-39 22q1 20 16 35.5t35 15.5q21 0 35.5-14.5T440-250Zm40-230Z"/></svg>
`,j=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
`,K=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
`,$=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
`,w=`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            data-reactid="1036"
            >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>`,T=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill="#000000" fillRule="evenodd" clipRule="evenodd" d="M13 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V13C2.5 14.3807 3.61929 15.5 5 15.5H13C14.3807 15.5 15.5 14.3807 15.5 13V5C15.5 3.61929 14.3807 2.5 13 2.5ZM5 0C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0H5Z"/>
        </svg>`,E=`
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="40" viewBox="0 0 27 40" fill="none">
            <path d="M13.1376 26.4286H13.8482C14.8282 26.4305 15.7989 26.238 16.7048 25.8623C17.6108 25.4866 18.4341 24.935 19.1277 24.239C19.8213 23.5431 20.3716 22.7164 20.7471 21.8064C21.1225 20.8964 21.3158 19.9209 21.3158 18.9357V7.50715C21.3177 6.52198 21.1263 5.5461 20.7525 4.63538C20.3788 3.72465 19.8301 2.89696 19.1378 2.19967C18.4455 1.50238 17.6232 0.949181 16.718 0.571737C15.8127 0.194293 14.8424 1.18291e-05 13.8624 1.36196e-05H13.1518C12.1719 -0.0018647 11.2011 0.190558 10.2952 0.566268C9.38925 0.941978 8.56592 1.4936 7.8723 2.18956C7.17868 2.88553 6.62839 3.71217 6.25293 4.62217C5.87747 5.53218 5.68422 6.50769 5.68422 7.49287V18.9214C5.68235 19.9066 5.87376 20.8825 6.24749 21.7932C6.62123 22.7039 7.16994 23.5316 7.86224 24.2289C8.55454 24.9262 9.37683 25.4794 10.2821 25.8569C11.1873 26.2343 12.1576 26.4286 13.1376 26.4286ZM8.52632 7.49287C8.5282 6.26398 9.01464 5.08597 9.87902 4.21701C10.7434 3.34806 11.9152 2.85904 13.1376 2.85716H13.8482C14.4547 2.85622 15.0554 2.97538 15.6161 3.20784C16.1768 3.4403 16.6864 3.7815 17.116 4.21196C17.5455 4.64243 17.8865 5.15373 18.1194 5.71667C18.3524 6.27961 18.4728 6.88316 18.4737 7.49287V18.9214C18.4746 19.5311 18.3561 20.1351 18.1249 20.6987C17.8936 21.2624 17.5542 21.7747 17.126 22.2065C16.6978 22.6383 16.1892 22.9811 15.6292 23.2153C15.0693 23.4495 14.4689 23.5705 13.8624 23.5714H13.1518C12.5453 23.5724 11.9446 23.4532 11.3839 23.2208C10.8232 22.9883 10.3136 22.6471 9.88405 22.2166C9.45453 21.7862 9.11356 21.2749 8.8806 20.7119C8.64764 20.149 8.52726 19.5454 8.52632 18.9357V7.49287Z" fill="white"/>
            <path d="M27 18.5715C27 18.1926 26.8503 17.8292 26.5838 17.5613C26.3173 17.2934 25.9558 17.1429 25.5789 17.1429C25.2021 17.1429 24.8406 17.2934 24.5741 17.5613C24.3076 17.8292 24.1579 18.1926 24.1579 18.5715C24.1579 21.4131 23.035 24.1383 21.0363 26.1476C19.0375 28.1569 16.3266 29.2857 13.5 29.2857C10.6734 29.2857 7.96247 28.1569 5.96373 26.1476C3.96499 24.1383 2.84211 21.4131 2.84211 18.5715C2.84211 18.1926 2.69239 17.8292 2.42589 17.5613C2.15939 17.2934 1.79794 17.1429 1.42105 17.1429C1.04417 17.1429 0.682716 17.2934 0.416217 17.5613C0.149718 17.8292 0 18.1926 0 18.5715C0.000779712 21.9229 1.23512 25.1556 3.46526 27.6468C5.69541 30.138 8.76363 31.7115 12.0789 32.0643V32.1429V37.1429H7.10526C6.72838 37.1429 6.36693 37.2934 6.10043 37.5613C5.83393 37.8292 5.68421 38.1926 5.68421 38.5714C5.68421 38.9503 5.83393 39.3137 6.10043 39.5816C6.36693 39.8495 6.72838 40 7.10526 40H20.6053C20.9821 40 21.3436 39.8495 21.6101 39.5816C21.8766 39.3137 22.0263 38.9503 22.0263 38.5714C22.0263 38.1926 21.8766 37.8292 21.6101 37.5613C21.3436 37.2934 20.9821 37.1429 20.6053 37.1429H14.9211V32.1429C14.9211 32.1429 14.9211 32.0929 14.9211 32.0643C18.2364 31.7115 21.3046 30.138 23.5347 27.6468C25.7649 25.1556 26.9992 21.9229 27 18.5715Z" fill="white"/>
        </svg>`,U=`
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
`;class J extends HTMLLIElement{constructor(){super(),this.style.position="relative",this.toggleBtn=document.createElement("button"),this.toggleBtn.style.position="absolute",this.toggleBtn.style.border="none",this.toggleBtn.style.background="transparent",this.toggleBtn.style.width="100%",this.toggleBtn.style.height="100%",this.toggleBtn.style.left="0",this.toggleBtn.style.top="0px",this.toggleBtn.style.cursor="pointer",this.toggleBtn.innerText="",this.toggleBtn.addEventListener("click",()=>{this.isExpanded}),this.appendChild(this.toggleBtn)}hiddenModules(){document.querySelectorAll(".prognosis_main_module").forEach(s=>{s.classList.add("hidden_module")})}get isExpanded(){switch(document.querySelectorAll(".prognosis_main_nav_item").forEach(s=>s.classList.remove("active")),this.dataset.id){case"newChat":this.hiddenModules(),document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module"),document.getElementById("menu_item_new_chat").classList.add("active");break;case"medicalCoding":this.hiddenModules(),document.getElementById("prognosis_medical_coding_holder").classList.remove("hidden_module"),document.getElementById("menu_item_medical_coding").classList.add("active");break;case"explain":this.hiddenModules(),document.getElementById("prognosis_explain_holder").classList.remove("hidden_module"),document.getElementById("menu_item_explain").classList.add("active");case"guideline":this.hiddenModules(),document.getElementById("prognosis_guideline_holder").classList.remove("hidden_module"),document.getElementById("menu_item_guideline").classList.add("active");break}return this.dataset.id}static get observedAttributes(){return["data-expanded"]}attributeChangedCallback(t,s,e){console.log("name EXP, oldValue EXP, newValue EXP",t,s,e),this.updateStyles()}connectedCallback(){this.updateStyles()}updateStyles(){console.log("coming")}}customElements.define("menu-list-item",J,{extends:"li"});class Y extends HTMLDivElement{constructor(){super(),this.theme=JSON.parse(localStorage.getItem("prognosisTheme")),console.log("this.options",this.theme.primaryColor),this.currentOutput="",this.inputValue="",this.mainChatLink=document.getElementById("prognosis_e_chat"),this.mainChatLink.classList.add("prognosis_e_chat"),this.mainChatLink.addEventListener("click",()=>{this.chatHomeWrapper.classList.remove("hide_page")}),this.newChatBtn=document.querySelector(".prognosis_e_chat"),this.newChatBtn.addEventListener("click",()=>{this.chatLeftContentBox.classList.remove("hide_section"),this.displayArea.classList.add("hide_section"),this.textInputWrapper.classList.add("hide_section"),this.chatHomeRight.classList.remove("hide_section"),this.chatHomeLeft.classList.remove("maximum")});const t=`
            align-items: center;
            border: 1px solid lightgray;
            border-radius: 15px;
            display: flex;
            height: 14px;
            padding: 0 1px 0 1px;
            position: relative;
            width: 45px;
            margin-left: 5px;
        `,s=`
            animation: chat-typing-bar 1.5s infinite;
            border-radius: 5px;
            height: 6px;
            left: 5px;
            position: absolute;
        `;this.loaderWrapper=document.createElement("div"),this.loaderWrapper.classList.add("prognosis_message_loader"),this.loaderWrapper.setAttribute("style",t),this.loaderBar=document.createElement("div"),this.loaderBar.classList.add("prognosis_message_loader_bar"),this.loaderBar.setAttribute("style",s),this.loaderWrapper.appendChild(this.loaderBar),this.questions=[{title:"What is Atrial Fibrillation?"},{title:"What is Stroke?"},{title:"What is HF Stage B?"},{title:"What is Hypertension?"},{title:"What is what is Anaemia?"}],this.chatHomeWrapper=document.createElement("div"),this.chatHomeWrapper.classList.add("prognosis_chat_home_wrapper"),this.chatHomeLeft=document.createElement("div"),this.chatHomeLeft.classList.add("prognosis_chat_home_left"),this.chatHomeLogoHolder=document.createElement("div"),this.chatHomeLogoHolder.classList.add("prognosis_chat_home_logo_holder"),this.chatHomeLogoHolder.innerHTML=H,this.chatHomeLeftInner=document.createElement("div"),this.chatHomeLeftInner.classList.add("prognosis_chat_inner_left"),this.chatInnerHeader=document.createElement("div"),this.chatInnerHeader.classList.add("prognosis_chat_inner_left_header"),this.chatLeftHeading=document.createElement("h2"),this.chatLeftHeading.classList.add("prognosis_chat_heading");const e=document.createTextNode("What medical questions can I answer for you today?");this.chatLeftHeading.appendChild(e),this.chatInnerHeader.appendChild(this.chatLeftHeading),this.chatHomeLeftInner.appendChild(this.chatInnerHeader),this.chatHomeLeft.appendChild(this.chatHomeLeftInner),this.mainQuestionInputWrapper=document.createElement("div"),this.mainQuestionInputWrapper.classList.add("prognosis_main_question_input_wrapper"),this.mainQuestionInput=document.createElement("input"),this.mainQuestionInput.setAttribute("id","prognosis_main_question_input"),this.mainQuestionInput.classList.add("prognosis_main_question_input"),this.mainQuestionInput.setAttribute("name","mainInput"),this.mainQuestionInputWrapper.appendChild(this.mainQuestionInput),this.mainQuestionSubmitBtn=document.createElement("button"),this.mainQuestionSubmitBtn.classList.add("prognosis_main_question_btn"),this.mainQuestionSubmitBtn.innerHTML=w,this.mainQuestionSubmitBtn.addEventListener("click",()=>{this.clearCurrentChat(),this.processMessageToChatGPT({from:"main"})}),this.mainQuestionInput.addEventListener("keyup",o=>{this.inputValue=o.target.value,console.log("this.inputValue",this.inputValue),console.log("e",o.target.value)}),this.mainQuestionInput.addEventListener("keyup",o=>{o.key==="Enter"&&(this.clearCurrentChat(),this.processMessageToChatGPT({from:"main"}))}),this.mainQuestionInputWrapper.appendChild(this.mainQuestionSubmitBtn),this.chatInnerHeader.appendChild(this.mainQuestionInputWrapper),this.chatLeftContentBox=document.createElement("div"),this.chatLeftContentBox.classList.add("prognosis_chat_home_left_content"),this.chatLetListHolder=document.createElement("div"),this.chatLetListHolder.classList.add("prognosis_chat_home_left_list_holder");const i=[{question:"Why is my chest beating fast while resting?",icon:"heart"},{question:"Is my blood pressure medication the right dosage?",icon:"bloodPressure"},{question:"What is risk of stroke for a 35 year old?",icon:"brain"},{question:"Does not drinking  milk make me anaemic?",icon:"food"}];this.chatHomeLeftInner.appendChild(this.chatLeftContentBox),this.generateChatHomeQuestion(i),this.chatLeftContentBox.appendChild(this.chatLetListHolder),this.chatHomeRight=document.createElement("div"),this.chatHomeRight.classList.add("prognosis_chat_home_right"),this.chatHomeWrapper.appendChild(this.chatHomeLeft),this.chatHomeWrapper.appendChild(this.chatHomeRight);const n=document.querySelector(".prognosis__conslutation_holder");n&&n.appendChild(this.chatHomeWrapper),this.questionsWrapper=document.createElement("div"),this.generateQuestion(this.questions),this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper"),this.displayArea=document.createElement("div"),this.displayArea.classList.add("prognosis__consult_display_area"),this.displayArea.classList.add("prognosis__display_area"),this.displayArea.classList.add("hide_section"),this.displayArea.appendChild(this.questionsWrapper),this.chatBubble=document.createElement("div"),this.chatBubble.classList.add("prognosis__chat_bubble_out"),this.chatBubbleInner=document.createElement("div"),this.chatBubbleInner.classList.add("prognosis__chat_bubble_out_inner"),this.progIconHolder=document.createElement("button"),this.progIconHolder.classList.add("prognosis_static_button"),this.progIconHolder.innerHTML=P,this.userChatBubble=document.createElement("div"),this.userChatBubble.classList.add("prognosis__chat_bubble_user"),this.userChatBubbleInner=document.createElement("div"),this.userChatBubbleInner.classList.add("prognosis__chat_bubble_user_inner"),this.userIconHolder=document.createElement("button"),this.userIconHolder.classList.add("prognosis_static_button"),this.userIconHolder.innerHTML=U,this.userChatBubble.appendChild(this.userIconHolder),this.inputBox=document.createElement("TEXTAREA"),this.inputBox.placeholder="Ask a follow-up question",this.inputBox.classList.add("prognosis__consult_inputbox"),this.inputBox.addEventListener("keyup",o=>{this.inputValue=o.target.value,console.log("this.inputValue",this.inputValue),console.log("e",o.target.value)}),this.inputBox.addEventListener("keyup",o=>{o.key==="Enter"&&this.processMessageToChatGPT()}),`${this.theme.primaryColor}${this.theme.btnTextColor}${this.theme.btnTextColor}`,this.submitBtn=document.createElement("button"),this.submitBtn.classList.add("prognosis__consult_submitBtn"),this.submitBtn.innerHTML=w,this.submitBtn.addEventListener("click",()=>{this.processMessageToChatGPT()}),this.chatStopBtn=document.createElement("button"),this.chatStopBtn.classList.add("prognosis_chat_stop_btn"),this.chatStopBtn.innerHTML=T,this.chatStopBtn.title="Stop",this.chatStopBtn.style.display="none",this.chatStopBtn.addEventListener("click",()=>{this.controller&&(this.controller.abort(),this.controller=null,this.clearChatBtn.style.display="flex")});const r=`
                background-color: lightgray;
                color: gray;
                fill: gray;
            `;this.clearChatBtn=document.createElement("button"),this.clearChatBtn.classList.add("prognotsis_clear_chat_btn"),this.clearChatBtn.setAttribute("style",r),this.clearChatBtn.innerText="Clear",this.clearChatBtn.addEventListener("click",()=>{this.displayArea.innerHTML="",this.clearChatBtn.style.display="none",this.displayArea.appendChild(this.questionsWrapper),this.questionsWrapper.classList.remove("hide_section")}),this.clearChatBtn.style.display="none",this.textInputWrapper=document.createElement("div"),this.textInputWrapper.classList.add("prognosis_text_input_wrapper"),this.textInputContainer=document.createElement("div"),this.textInputContainer.classList.add("prognosis_text_input_container"),this.shadowLayer=document.createElement("div"),this.shadowLayer.classList.add("shadow_layer"),this.textInputContainer.appendChild(this.inputBox),this.textInputContainer.appendChild(this.submitBtn),this.textInputContainer.appendChild(this.chatStopBtn),this.textInputContainer.appendChild(this.clearChatBtn),this.textInputWrapper.appendChild(this.shadowLayer),this.textInputWrapper.appendChild(this.textInputContainer),this.textInputWrapper.classList.add("hide_section"),this.recordingWrapper=document.createElement("div"),this.recordingWrapper.classList.add("prognosis_recording_wrapper"),this.startRecordBtn=document.createElement("button"),this.startRecordBtn.classList.add("prognosis_start_record_btn"),this.startRecordBtn.style.backgroundColor=this.theme.primaryColor,this.startRecordBtn.innerHTML=E,this.recordDescription=document.createElement("p"),this.recordDescription.classList.add("prognosis_record_desc_text"),this.recordDescription.innerText="Press the mic button to ask a question",this.inputWrapper=document.createElement("div"),this.inputWrapper.classList.add("prognosis__consult_wrap"),this.inputWrapper.appendChild(this.recordingWrapper),this.chatHomeLeftInner.appendChild(this.displayArea),this.chatHomeLeftInner.appendChild(this.textInputWrapper),this.appendChild(this.inputWrapper),this.userRatingWrapper=document.createElement("div"),this.userRatingWrapper.classList.add("prognosis_user_rating_wrapper"),this.userLikeWrapper=document.createElement("div"),this.userLikeWrapper.classList.add("prognosis_user_like_wrapper"),this.userLikeBtn=document.createElement("button"),this.userLikeBtn.classList.add("prognosis_user_like_btn"),this.userLikeBtn.innerHTML=Z,this.userLikeBtn.addEventListener("click",(o,l)=>{console.log("Like",o,l)}),this.userDislikeBtn=document.createElement("button"),this.userDislikeBtn.classList.add("prognosis_user_dislike_btn"),this.userDislikeBtn.innerHTML=N,this.userDislikeBtn.addEventListener("click",(o,l)=>{console.log("Like",o,l)}),this.API_KEY=localStorage.getItem("prognosisOAKey"),this.controller=null,this.placeholderAnimation()}get consult(){console.log("get consult")}async processMessageToChatGPT(t){var i;this.chatHomeRight.classList.add("hide_section"),this.chatHomeLeft.classList.add("maximum");let s="none";t&&t.from&&(s=t.from),this.chatLeftContentBox.classList.add("hide_section"),this.displayArea.classList.remove("hide_section");let e="";if(e=this.inputValue,this.mainQuestionInput.value=e,this.mainQuestionInputWrapper.classList.remove("hide_element"),e.trim().length){this.questionsWrapper.classList.add("hide_section"),this.chatStopBtn.style.display="flex",this.submitBtn.style.display="none";let n=this.chatBubble.cloneNode(!0),r=this.chatBubbleInner.cloneNode(!0);const o=this.userRatingWrapper.cloneNode(!0),l=this.userLikeBtn.cloneNode(!0);o.appendChild(l);const p=this.userDislikeBtn.cloneNode(!0);o.appendChild(p),n.appendChild(o),n.appendChild(this.progIconHolder),n.appendChild(r);let c=this.userChatBubble.cloneNode(!0),u=this.userChatBubbleInner.cloneNode(!0);c.appendChild(u),this.textInputWrapper.classList.remove("hide_section"),s==="none"&&(this.displayArea.appendChild(c),u.innerText=e),this.displayArea.appendChild(n),this.displayArea.appendChild(this.loaderWrapper),this.inputBox.value="",this.inputValue="";const g={model:"gpt-3.5-turbo",messages:[{role:"user",content:e}],stream:!0};console.log("apiRequestBody",g),this.controller=new AbortController;const C=this.controller.signal;try{const y=(i=(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+this.API_KEY,"Content-Type":"application/json"},body:JSON.stringify(g),signal:C})).body)==null?void 0:i.getReader(),b=new TextDecoder("utf-8");for(;;){const q=await(y==null?void 0:y.read()),{done:a,value:f}=q;if(a){this.clearChatBtn.style.display="flex";break}const h=b.decode(f).split(`
`).map(_=>_.replace(/^data: /,"").trim()).filter(_=>_!==""&&_!=="[DONE]").map(_=>JSON.parse(_));console.log("parsedLines",h);const W={message:e,direction:"outgoing",sender:"user"};for(const _ of h){const{choices:I}=_,{delta:M}=I[0],{content:k}=M;if(console.log("content ltst",k),k){let B="";B+=k,this.currentOutput+=B,console.log("contscontscontsconts",B),r.innerText=this.currentOutput;const ot={message:B,sentTime:"just now",sender:"Prognosis"}}}}}catch(v){C.aborted?(console.log("Request aborted!"),this.loaderWrapper.remove()):(console.log("Error occured while generating."),console.log("Error ",v),this.loaderWrapper.remove())}finally{this.chatStopBtn.style.display="none",this.submitBtn.style.display="flex",this.controller=null,this.inputBox.value="",this.inputValue="",this.loaderWrapper.remove()}}else alert("Please enter a message")}generateQuestion(t){t.forEach(s=>{console.log("element.title",s.title);const e=document.createElement("div");e.classList.add("prognosis_pre_question_block"),e.setAttribute("id",s.title),e.innerText=s.title,e.addEventListener("click",i=>{this.inputValue=i.currentTarget.id,this.processMessageToChatGPT(),this.questionsWrapper.classList.add("hide_section")}),this.questionsWrapper.appendChild(e)})}generateChatHomeQuestion(t){t.forEach(s=>{const e=document.createElement("h4");e.classList.add("prognosis_chat_question_item"),e.setAttribute("id",s.question);const i=document.createElement("span");switch(i.classList.add("prognosis_chat_question_icon"),s.icon){case"heart":i.innerHTML=z;break;case"bloodPressure":i.innerHTML=F;break;case"brain":i.innerHTML=G;break;case"food":i.innerHTML=j;break}e.appendChild(i);const n=document.createElement("span");n.classList.add("prognosis_question_text_holder"),n.innerText=s.question,e.appendChild(n),e.addEventListener("click",r=>{this.inputValue=r.currentTarget.id,this.clearCurrentChat(),this.processMessageToChatGPT({from:"main"}),this.questionsWrapper.classList.add("hide_section")}),this.chatLetListHolder.appendChild(e)})}clearCurrentChat(){this.displayArea.innerHTML="",this.clearChatBtn.style.display="none"}askQuestion(t){console.log("question",t.currentTarget.id),this.inputValue=t.currentTarget.id,this.processMessageToChatGPT()}placeholderAnimation(){function t(r,o){return o.setAttribute("placeholder",o.getAttribute("placeholder")+r),new Promise(l=>setTimeout(l,100))}function s(r){r.setAttribute("placeholder","")}const e=(r,o)=>new Promise(l=>{s(o);let p=r.split("");p.reduce((c,u,g)=>c.then(C=>(g===p.length-1&&setTimeout(l,1e3),t(u,o))),Promise.resolve())});function i(r,o){r.reduce((p,c)=>p.then(u=>e(c,o)),Promise.resolve()).then(p=>n())}function n(){i(["What is hypertension?","What is fatty liver?","What atrial fibrillation?"],document.getElementById("prognosis_main_question_input"))}n()}}customElements.define("consultation-component",Y,{extends:"div"});class X extends HTMLDivElement{constructor(){super(),this.questions=[{title:"What is Atrial Fibrillation?"},{title:"What is Stroke?"},{title:"What is HF Stage B?"},{title:"What is Hypertension?"},{title:"What is what is Anaemia?"}],this.questionsWrapper=document.createElement("div"),this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper"),this.createQuestion(),this.generateQuestion(this.questions)}createQuestion(){this.appendChild(this.questionsWrapper)}generateQuestion(t){t.forEach(s=>{console.log("element.title",s.title);const e=document.createElement("div");e.classList.add("prognosis_pre_question_block"),e.innerText=s.title,e.addEventListener("click",this.askQuestion(s)),this.questionsWrapper.appendChild(e)})}askQuestion(t){console.log("question",t)}}customElements.define("pre-defined-questions",X,{extends:"div"});class tt extends HTMLDivElement{constructor(){super(),this.theme=JSON.parse(localStorage.getItem("prognosisTheme")),console.log("this.options",this.theme.primaryColor),this.currentOutput="",this.inputValue="",this.questions=[{title:"ICD-10-CM"},{title:"CPT"},{title:"HCPCS"},{title:"DRG"},{title:"SNOMED CT"},{title:"LOINC"}];const t=`
            align-items: center;
            border: 1px solid lightgray;
            border-radius: 15px;
            display: flex;
            height: 14px;
            padding: 0 1px 0 1px;
            position: relative;
            width: 45px;
            margin-left: 5px;
        `,s=`
            animation: chat-typing-bar 1.5s infinite;
            border-radius: 5px;
            height: 6px;
            left: 5px;
            position: absolute;
        `;this.loaderWrapper=document.createElement("div"),this.loaderWrapper.classList.add("prognosis_message_loader"),this.loaderWrapper.setAttribute("style",t),this.loaderBar=document.createElement("div"),this.loaderBar.classList.add("prognosis_message_loader_bar"),this.loaderBar.setAttribute("style",s),this.loaderWrapper.appendChild(this.loaderBar),this.questionsWrapper=document.createElement("div"),this.generateQuestion(this.questions),this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper"),this.displayArea=document.createElement("div"),this.displayArea.classList.add("prognosis__consult_display_area"),this.displayArea.classList.add("prognosis__display_area"),this.displayArea.appendChild(this.questionsWrapper),this.chatBubble=document.createElement("div"),this.chatBubble.classList.add("prognosis__chat_bubble_out"),this.userChatBubble=document.createElement("div"),this.userChatBubble.classList.add("prognosis__chat_bubble_user"),this.userChatBubbleInner=document.createElement("div"),this.userChatBubbleInner.classList.add("prognosis__chat_bubble_user_inner"),this.inputBox=document.createElement("TEXTAREA"),this.inputBox.placeholder="Type question",this.inputBox.classList.add("prognosis__consult_inputbox"),this.inputBox.addEventListener("keyup",n=>{this.inputValue=n.target.value,console.log("this.inputValue",this.inputValue),console.log("e",n.target.value)}),this.inputBox.addEventListener("keyup",n=>{n.key==="Enter"&&this.processMessageToChatGPT()});const e=`
            background-color: ${this.theme.primaryColor};
            color: ${this.theme.btnTextColor};
            fill: ${this.theme.btnTextColor};
        `;this.submitBtn=document.createElement("button"),this.submitBtn.classList.add("prognosis__consult_submitBtn"),this.submitBtn.innerHTML=w,this.submitBtn.setAttribute("style",e),this.submitBtn.addEventListener("click",()=>{this.processMessageToChatGPT()}),this.chatStopBtn=document.createElement("button"),this.chatStopBtn.classList.add("prognosis_chat_stop_btn"),this.chatStopBtn.innerHTML=T,this.chatStopBtn.setAttribute("style",e),this.chatStopBtn.title="Stop",this.chatStopBtn.style.display="none",this.chatStopBtn.addEventListener("click",()=>{this.controller&&(this.controller.abort(),this.controller=null,this.clearChatBtn.style.display="flex")});const i=`
                background-color: lightgray;
                color: gray;
                fill: gray;
            `;this.clearChatBtn=document.createElement("button"),this.clearChatBtn.classList.add("prognotsis_clear_chat_btn"),this.clearChatBtn.setAttribute("style",i),this.clearChatBtn.innerText="Clear",this.clearChatBtn.addEventListener("click",()=>{this.displayArea.innerHTML="",this.clearChatBtn.style.display="none",this.displayArea.appendChild(this.questionsWrapper),this.questionsWrapper.classList.remove("hide_section")}),this.clearChatBtn.style.display="none",this.textInputWrapper=document.createElement("div"),this.textInputWrapper.classList.add("prognosis_text_input_wrapper"),this.textInputWrapper.appendChild(this.inputBox),this.textInputWrapper.appendChild(this.submitBtn),this.textInputWrapper.appendChild(this.chatStopBtn),this.textInputWrapper.appendChild(this.clearChatBtn),this.recordingWrapper=document.createElement("div"),this.recordingWrapper.classList.add("prognosis_recording_wrapper"),this.startRecordBtn=document.createElement("button"),this.startRecordBtn.classList.add("prognosis_start_record_btn"),this.startRecordBtn.style.backgroundColor=this.theme.primaryColor,this.startRecordBtn.innerHTML=E,this.recordDescription=document.createElement("p"),this.recordDescription.classList.add("prognosis_record_desc_text"),this.recordDescription.innerText="Press the mic button to ask a question",this.recordingWrapper.appendChild(this.startRecordBtn),this.recordingWrapper.appendChild(this.recordDescription),this.inputWrapper=document.createElement("div"),this.inputWrapper.classList.add("prognosis__consult_wrap"),this.inputWrapper.appendChild(this.recordingWrapper),this.inputWrapper.appendChild(this.textInputWrapper),this.appendChild(this.displayArea),this.appendChild(this.inputWrapper),this.API_KEY=localStorage.getItem("prognosisOAKey"),this.controller=null}get consult(){console.log("get consult")}async processMessageToChatGPT(){var s;let t="";if(t=this.inputValue,t.trim().length){this.questionsWrapper.classList.add("hide_section"),this.chatStopBtn.style.display="flex",this.submitBtn.style.display="none";let e=this.chatBubble.cloneNode(!0),i=this.userChatBubble.cloneNode(!0),n=this.userChatBubbleInner.cloneNode(!0);i.appendChild(n),this.displayArea.appendChild(i),n.innerText=t,this.displayArea.appendChild(e),this.displayArea.appendChild(this.loaderWrapper),this.inputBox.value="",this.inputValue="";const r={model:"gpt-3.5-turbo",messages:[{role:"user",content:"what is "+t+" in medical"}],stream:!0};console.log("apiRequestBody",r),this.controller=new AbortController;const o=this.controller.signal;try{const p=(s=(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+this.API_KEY,"Content-Type":"application/json"},body:JSON.stringify(r),signal:o})).body)==null?void 0:s.getReader(),c=new TextDecoder("utf-8");for(;;){const u=await(p==null?void 0:p.read()),{done:g,value:C}=u;if(g){this.clearChatBtn.style.display="flex";break}const b=c.decode(C).split(`
`).map(a=>a.replace(/^data: /,"").trim()).filter(a=>a!==""&&a!=="[DONE]").map(a=>JSON.parse(a));console.log("parsedLines",b);const q={message:t,direction:"outgoing",sender:"user"};for(const a of b){const{choices:f}=a,{delta:L}=f[0],{content:m}=L;if(console.log("content ltst",m),m){let h="";h+=m,this.currentOutput+=h,console.log("contscontscontsconts",h),e.innerText=this.currentOutput;const W={message:h,sentTime:"just now",sender:"Prognosis"};setTimeout(()=>{this.displayArea.scrollTop=this.displayArea.scrollHeight},100)}}}}catch(l){o.aborted?console.log("Request aborted!"):(console.log("Error occured while generating."),console.log("Error ",l)),this.loaderWrapper.remove()}finally{this.chatStopBtn.style.display="none",this.submitBtn.style.display="flex",this.controller=null,this.inputBox.value="",this.inputValue="",this.loaderWrapper.remove()}}else alert("Please enter a message")}generateQuestion(t){t.forEach(s=>{console.log("element.title",s.title);const e=document.createElement("div");e.classList.add("prognosis_pre_question_block"),e.setAttribute("id",s.title),e.innerText=s.title,e.addEventListener("click",i=>{this.inputValue=i.currentTarget.id,this.processMessageToChatGPT(),this.questionsWrapper.classList.add("hide_section")}),this.questionsWrapper.appendChild(e)})}askQuestion(t){console.log("question",t.currentTarget.id),this.inputValue=t.currentTarget.id,this.processMessageToChatGPT()}}customElements.define("medical-coding",tt,{extends:"div"});class et extends HTMLDivElement{constructor(){super(),this.theme=JSON.parse(localStorage.getItem("prognosisTheme")),console.log("this.options",this.theme.primaryColor),this.currentOutput="",this.inputValue="";const t=`
            align-items: center;
            border: 1px solid lightgray;
            border-radius: 15px;
            display: flex;
            height: 14px;
            padding: 0 1px 0 1px;
            position: relative;
            width: 45px;
            margin-left: 5px;
        `,s=`
            animation: chat-typing-bar 1.5s infinite;
            border-radius: 5px;
            height: 6px;
            left: 5px;
            position: absolute;
        `;this.loaderWrapper=document.createElement("div"),this.loaderWrapper.classList.add("prognosis_message_loader"),this.loaderWrapper.setAttribute("style",t),this.loaderBar=document.createElement("div"),this.loaderBar.classList.add("prognosis_message_loader_bar"),this.loaderBar.setAttribute("style",s),this.loaderWrapper.appendChild(this.loaderBar),this.questions=[{title:"Dialysis"},{title:"Respiratory Therapy"},{title:"Cardiac Rehabilitation"},{title:"Physical Medicine and Rehabilitation (PM&R)"},{title:"Immunotherapy"}],this.questionsWrapper=document.createElement("div"),this.generateQuestion(this.questions),this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper"),this.displayArea=document.createElement("div"),this.displayArea.classList.add("prognosis__consult_display_area"),this.displayArea.classList.add("prognosis__display_area"),this.displayArea.appendChild(this.questionsWrapper),this.chatBubble=document.createElement("div"),this.chatBubble.classList.add("prognosis__chat_bubble_out"),this.userChatBubble=document.createElement("div"),this.userChatBubble.classList.add("prognosis__chat_bubble_user"),this.userChatBubbleInner=document.createElement("div"),this.userChatBubbleInner.classList.add("prognosis__chat_bubble_user_inner"),this.inputBox=document.createElement("TEXTAREA"),this.inputBox.placeholder="Type question",this.inputBox.classList.add("prognosis__consult_inputbox"),this.inputBox.addEventListener("keyup",n=>{this.inputValue=n.target.value,console.log("this.inputValue",this.inputValue),console.log("e",n.target.value)}),this.inputBox.addEventListener("keyup",n=>{n.key==="Enter"&&this.processMessageToChatGPT()});const e=`
            background-color: ${this.theme.primaryColor};
            color: ${this.theme.btnTextColor};
            fill: ${this.theme.btnTextColor};
        `;this.submitBtn=document.createElement("button"),this.submitBtn.classList.add("prognosis__consult_submitBtn"),this.submitBtn.innerHTML=w,this.submitBtn.setAttribute("style",e),this.submitBtn.addEventListener("click",()=>{this.processMessageToChatGPT()}),this.chatStopBtn=document.createElement("button"),this.chatStopBtn.classList.add("prognosis_chat_stop_btn"),this.chatStopBtn.innerHTML=T,this.chatStopBtn.setAttribute("style",e),this.chatStopBtn.title="Stop",this.chatStopBtn.style.display="none",this.chatStopBtn.addEventListener("click",()=>{this.controller&&(this.controller.abort(),this.controller=null,this.clearChatBtn.style.display="flex")});const i=`
                background-color: lightgray;
                color: gray;
                fill: gray;
            `;this.clearChatBtn=document.createElement("button"),this.clearChatBtn.classList.add("prognotsis_clear_chat_btn"),this.clearChatBtn.setAttribute("style",i),this.clearChatBtn.innerText="Clear",this.clearChatBtn.addEventListener("click",()=>{this.displayArea.innerHTML="",this.clearChatBtn.style.display="none",this.displayArea.appendChild(this.questionsWrapper),this.questionsWrapper.classList.remove("hide_section")}),this.clearChatBtn.style.display="none",this.textInputWrapper=document.createElement("div"),this.textInputWrapper.classList.add("prognosis_text_input_wrapper"),this.textInputWrapper.appendChild(this.inputBox),this.textInputWrapper.appendChild(this.submitBtn),this.textInputWrapper.appendChild(this.chatStopBtn),this.textInputWrapper.appendChild(this.clearChatBtn),this.recordingWrapper=document.createElement("div"),this.recordingWrapper.classList.add("prognosis_recording_wrapper"),this.startRecordBtn=document.createElement("button"),this.startRecordBtn.classList.add("prognosis_start_record_btn"),this.startRecordBtn.style.backgroundColor=this.theme.primaryColor,this.startRecordBtn.innerHTML=E,this.recordDescription=document.createElement("p"),this.recordDescription.classList.add("prognosis_record_desc_text"),this.recordDescription.innerText="Press the mic button to ask a question",this.recordingWrapper.appendChild(this.startRecordBtn),this.recordingWrapper.appendChild(this.recordDescription),this.inputWrapper=document.createElement("div"),this.inputWrapper.classList.add("prognosis__consult_wrap"),this.inputWrapper.appendChild(this.recordingWrapper),this.inputWrapper.appendChild(this.textInputWrapper),this.appendChild(this.displayArea),this.appendChild(this.inputWrapper),this.API_KEY=localStorage.getItem("prognosisOAKey"),this.controller=null}get consult(){console.log("get consult")}async processMessageToChatGPT(){var s;let t="";if(t=this.inputValue,t.trim().length){this.questionsWrapper.classList.add("hide_section"),this.chatStopBtn.style.display="flex",this.submitBtn.style.display="none";let e=this.chatBubble.cloneNode(!0),i=this.userChatBubble.cloneNode(!0),n=this.userChatBubbleInner.cloneNode(!0);i.appendChild(n),this.displayArea.appendChild(i),n.innerText=t,this.displayArea.appendChild(e),this.displayArea.appendChild(this.loaderWrapper),this.inputBox.value="",this.inputValue="";const r={model:"gpt-3.5-turbo",messages:[{role:"user",content:"explain what is "+t}],stream:!0};console.log("apiRequestBody",r),this.controller=new AbortController;const o=this.controller.signal;try{const p=(s=(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+this.API_KEY,"Content-Type":"application/json"},body:JSON.stringify(r),signal:o})).body)==null?void 0:s.getReader(),c=new TextDecoder("utf-8");for(;;){const u=await(p==null?void 0:p.read()),{done:g,value:C}=u;if(g){this.clearChatBtn.style.display="flex";break}const b=c.decode(C).split(`
`).map(a=>a.replace(/^data: /,"").trim()).filter(a=>a!==""&&a!=="[DONE]").map(a=>JSON.parse(a));console.log("parsedLines",b);const q={message:t,direction:"outgoing",sender:"user"};for(const a of b){const{choices:f}=a,{delta:L}=f[0],{content:m}=L;if(console.log("content ltst",m),m){let h="";h+=m,this.currentOutput+=h,console.log("contscontscontsconts",h),e.innerText=this.currentOutput;const W={message:h,sentTime:"just now",sender:"Prognosis"};setTimeout(()=>{this.displayArea.scrollTop=this.displayArea.scrollHeight},100)}}}}catch(l){o.aborted?(console.log("Request aborted!"),this.loaderWrapper.remove()):(console.log("Error occured while generating."),console.log("Error ",l),this.loaderWrapper.remove())}finally{this.chatStopBtn.style.display="none",this.submitBtn.style.display="flex",this.controller=null,this.inputBox.value="",this.inputValue="",this.loaderWrapper.remove()}}else alert("Please enter a message")}generateQuestion(t){t.forEach(s=>{console.log("element.title",s.title);const e=document.createElement("div");e.classList.add("prognosis_pre_question_block"),e.setAttribute("id",s.title),e.innerText=s.title,e.addEventListener("click",i=>{this.inputValue=i.currentTarget.id,this.processMessageToChatGPT(),this.questionsWrapper.classList.add("hide_section")}),this.questionsWrapper.appendChild(e)})}askQuestion(t){console.log("question",t.currentTarget.id),this.inputValue=t.currentTarget.id,this.processMessageToChatGPT()}}customElements.define("explain-component",et,{extends:"div"});class st extends HTMLDivElement{constructor(){super(),this.theme=JSON.parse(localStorage.getItem("prognosisTheme")),console.log("this.options",this.theme.primaryColor),this.currentOutput="",this.inputValue="";const t=`
            align-items: center;
            border: 1px solid lightgray;
            border-radius: 15px;
            display: flex;
            height: 14px;
            padding: 0 1px 0 1px;
            position: relative;
            width: 45px;
            margin-left: 5px;
        `,s=`
            animation: chat-typing-bar 1.5s infinite;
            border-radius: 5px;
            height: 6px;
            left: 5px;
            position: absolute;
        `;this.loaderWrapper=document.createElement("div"),this.loaderWrapper.classList.add("prognosis_message_loader"),this.loaderWrapper.setAttribute("style",t),this.loaderBar=document.createElement("div"),this.loaderBar.classList.add("prognosis_message_loader_bar"),this.loaderBar.setAttribute("style",s),this.loaderWrapper.appendChild(this.loaderBar),this.questions=[{title:"Dialysis"},{title:"Respiratory Therapy"},{title:"Cardiac Rehabilitation"},{title:"Physical Medicine and Rehabilitation (PM&R)"},{title:"Immunotherapy"}],this.questionsWrapper=document.createElement("div"),this.generateQuestion(this.questions),this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper"),this.displayArea=document.createElement("div"),this.displayArea.classList.add("prognosis__consult_display_area"),this.displayArea.classList.add("prognosis__display_area"),this.displayArea.appendChild(this.questionsWrapper),this.chatBubble=document.createElement("div"),this.chatBubble.classList.add("prognosis__chat_bubble_out"),this.userChatBubble=document.createElement("div"),this.userChatBubble.classList.add("prognosis__chat_bubble_user"),this.userChatBubbleInner=document.createElement("div"),this.userChatBubbleInner.classList.add("prognosis__chat_bubble_user_inner"),this.inputBox=document.createElement("TEXTAREA"),this.inputBox.placeholder="Type question",this.inputBox.classList.add("prognosis__consult_inputbox"),this.inputBox.addEventListener("keyup",n=>{this.inputValue=n.target.value,console.log("this.inputValue",this.inputValue),console.log("e",n.target.value)}),this.inputBox.addEventListener("keyup",n=>{n.key==="Enter"&&this.processMessageToChatGPT()});const e=`
            background-color: ${this.theme.primaryColor};
            color: ${this.theme.btnTextColor};
            fill: ${this.theme.btnTextColor};
        `;this.submitBtn=document.createElement("button"),this.submitBtn.classList.add("prognosis__consult_submitBtn"),this.submitBtn.innerHTML=w,this.submitBtn.setAttribute("style",e),this.submitBtn.addEventListener("click",()=>{this.processMessageToChatGPT()}),this.chatStopBtn=document.createElement("button"),this.chatStopBtn.classList.add("prognosis_chat_stop_btn"),this.chatStopBtn.innerHTML=T,this.chatStopBtn.setAttribute("style",e),this.chatStopBtn.title="Stop",this.chatStopBtn.style.display="none",this.chatStopBtn.addEventListener("click",()=>{this.controller&&(this.controller.abort(),this.controller=null,this.clearChatBtn.style.display="flex")});const i=`
                background-color: lightgray;
                color: gray;
                fill: gray;
            `;this.clearChatBtn=document.createElement("button"),this.clearChatBtn.classList.add("prognotsis_clear_chat_btn"),this.clearChatBtn.setAttribute("style",i),this.clearChatBtn.innerText="Clear",this.clearChatBtn.addEventListener("click",()=>{this.displayArea.innerHTML="",this.clearChatBtn.style.display="none",this.displayArea.appendChild(this.questionsWrapper),this.questionsWrapper.classList.remove("hide_section")}),this.clearChatBtn.style.display="none",this.textInputWrapper=document.createElement("div"),this.textInputWrapper.classList.add("prognosis_text_input_wrapper"),this.textInputWrapper.appendChild(this.inputBox),this.textInputWrapper.appendChild(this.submitBtn),this.textInputWrapper.appendChild(this.chatStopBtn),this.textInputWrapper.appendChild(this.clearChatBtn),this.recordingWrapper=document.createElement("div"),this.recordingWrapper.classList.add("prognosis_recording_wrapper"),this.startRecordBtn=document.createElement("button"),this.startRecordBtn.classList.add("prognosis_start_record_btn"),this.startRecordBtn.style.backgroundColor=this.theme.primaryColor,this.startRecordBtn.innerHTML=E,this.recordDescription=document.createElement("p"),this.recordDescription.classList.add("prognosis_record_desc_text"),this.recordDescription.innerText="Press the mic button to ask a question",this.recordingWrapper.appendChild(this.startRecordBtn),this.recordingWrapper.appendChild(this.recordDescription),this.inputWrapper=document.createElement("div"),this.inputWrapper.classList.add("prognosis__consult_wrap"),this.inputWrapper.appendChild(this.recordingWrapper),this.inputWrapper.appendChild(this.textInputWrapper),this.appendChild(this.displayArea),this.appendChild(this.inputWrapper),this.API_KEY=localStorage.getItem("prognosisOAKey"),this.controller=null}get consult(){console.log("get consult")}async processMessageToChatGPT(){let t="";if(t=this.inputValue,t.trim().length){this.questionsWrapper.classList.add("hide_section"),this.chatStopBtn.style.display="flex",this.submitBtn.style.display="none";let s=this.chatBubble.cloneNode(!0),e=this.userChatBubble.cloneNode(!0),i=this.userChatBubbleInner.cloneNode(!0);e.appendChild(i),this.displayArea.appendChild(e),i.innerText=t,this.displayArea.appendChild(s),this.displayArea.appendChild(this.loaderWrapper),this.inputBox.value="",this.inputValue="";const n=[t];console.log("apiRequestBody",n),this.controller=new AbortController;const r=this.controller.signal;try{const o=await fetch("https://2t3eh2eevg.execute-api.us-east-1.amazonaws.com/develop/getdiseasewithguidelines",{method:"POST",headers:{Authorization:"Bearer "+this.API_KEY,"Content-Type":"application/json"},body:JSON.stringify(n),signal:r});for(;;);}catch(o){r.aborted?(console.log("Request aborted!"),this.loaderWrapper.remove()):(console.log("Error occured while generating."),console.log("Error ",o),this.loaderWrapper.remove())}finally{this.chatStopBtn.style.display="none",this.submitBtn.style.display="flex",this.controller=null,this.inputBox.value="",this.inputValue="",this.loaderWrapper.remove()}}else alert("Please enter a message")}generateQuestion(t){t.forEach(s=>{console.log("element.title",s.title);const e=document.createElement("div");e.classList.add("prognosis_pre_question_block"),e.setAttribute("id",s.title),e.innerText=s.title,e.addEventListener("click",i=>{this.inputValue=i.currentTarget.id,this.processMessageToChatGPT(),this.questionsWrapper.classList.add("hide_section")}),this.questionsWrapper.appendChild(e)})}askQuestion(t){console.log("question",t.currentTarget.id),this.inputValue=t.currentTarget.id,this.processMessageToChatGPT()}}customElements.define("guideline-component",st,{extends:"div"});class it{constructor(t){x(this,"position","");x(this,"open",!1);x(this,"widgetContainer",null);x(this,"headerContainer",null);x(this,"buttonContainer",null);this.from=t.from,this.defaultTheme={primaryColor:"red",secondaryColor:"rgb(239, 241, 247)",sideMenuBgColor:"#F5F6F7",btnTextColor:"#ffffff",position:"bottom-right"},this.theme=t.theme?t.theme:this.defaultTheme,localStorage.setItem("prognosisTheme",JSON.stringify(this.theme)),console.log("options.prognosisOAKey",t),localStorage.setItem("prognosisOAKey",t.prognosisOAKey),this.position=this.getPosition(this.theme.position),this.open=!1,this.initialize(),this.injectStyles(),this.mainWrapper=document.querySelector(".prognosis__wrapper"),this.sideMenuWrapper=document.querySelector("#prognosis_side_bar_wrapper"),this.sideMenuToggleBtn=document.querySelector("#prognosis_menu_collapse_btn"),this.sideMenuToggleBtn.addEventListener("click",this.toggleSideMenu.bind(this))}getPosition(t){const[s,e]=t.split("-");return{[s]:"30px",[e]:"30px"}}toggleSideMenu(t){console.log("e",t),console.log("e target",t.currentTarget);const s=t.currentTarget;s.classList.contains("collapsed")?(this.mainWrapper.classList.remove("collapsed"),this.mainWrapper.classList.add("expanded"),this.sideMenuWrapper.classList.remove("collapsed"),this.sideMenuWrapper.classList.add("expanded"),s.classList.remove("collapsed"),s.classList.add("expanded")):(this.mainWrapper.classList.remove("expanded"),this.mainWrapper.classList.add("collapsed"),this.sideMenuWrapper.classList.remove("expanded"),this.sideMenuWrapper.classList.add("collapsed"),s.classList.remove("expanded"),s.classList.add("collapsed"))}async initialize(){window.TestFunc=function(){alert(window.PROGNOSIS_WID)};const t=document.createElement("div");t.style.position="fixed",t.style.zIndex="123456789012",Object.keys(this.position).forEach(o=>t.style[o]=this.position[o]),document.body.appendChild(t),this.headerContainer=document.createElement("div"),this.headerContainer.classList.add("prognosis-chat-header");const s=document.createElement("button");s.style.cursor="pointer",s.style.marginRight="20px",s.innerText="<>",s.classList.add("prognosis-chat-maximize-header"),s.classList.add("prognosis-chat-close-header"),s.addEventListener("click",this.maximizeChatbox.bind(this)),this.headerContainer.appendChild(s);const e=document.createElement("button");e.style.cursor="pointer",e.innerText="x",e.classList.add("prognosis-chat-close-header"),e.addEventListener("click",this.toggleOpen.bind(this)),this.headerContainer.appendChild(e),this.buttonContainer=document.createElement("button"),this.buttonContainer.style.backgroundColor=this.theme.primaryColor,this.buttonContainer.classList.add("button__container");const i=document.createElement("button");i.classList.add("submit__container"),i.innerHTML="Submit",i.addEventListener("click",function(){window.TestFunc()});const n=document.createElement("span");n.innerHTML=R,n.classList.add("widget__icon"),this.widgetIcon=n;const r=document.createElement("span");r.innerHTML=D,r.classList.add("widget__icon","widget__hidden"),this.closeIcon=r,this.buttonContainer.appendChild(this.widgetIcon),this.buttonContainer.appendChild(this.closeIcon),this.buttonContainer.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.chatHolder=document.createElement("div"),this.chatHolder.classList.add("prognosis_chat_main"),this.createWidgetContent(),t.appendChild(this.widgetContainer),t.appendChild(this.buttonContainer),setTimeout(()=>{document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module"),document.getElementById("menu_item_new_chat").classList.add("active")},0),this.from==="website"&&(this.createWidgetContent(),this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden"),this.widgetContainer.appendChild(this.headerContainer),this.buttonContainer.classList.add("btn-main-hidden"),this.widgetContainer.appendChild(this.headerContainer),this.headerContainer.style.display="none",document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module"),this.maximizeChatbox())}createWidgetContent(){this.widgetContainer.innerHTML=`
    <div class="prognosis__wrapper expanded">
      <div id="prognosis_side_bar_wrapper" class="prognosis-sidebar-menu-wrapper expanded" style="background-color: ${this.theme.secondaryColor}">
        <div class="aside-wrap" id="prognosis_main_nav_wrapper">
            <a href="https://myprognosis.ai/">${H}</a>
            <div class="prognosis_menu_collapse_btn_holder">
              <button class="prognosis_menu_collapse_btn expanded" id="prognosis_menu_collapse_btn">
                <span class="collapse_arrow_left">${$}</span>
                <span class="collapse_arrow_right">${K}</span>
              </button>
            </div>
            <ul class="prognosis-sidebar-menu-list">
              <li>
                <div class="prognosis-menu-title active" id="prognosis_e_chat">${Q} <span class="prognosis-menu-text">New Chat</span></div>
                <!--<ul class="prognosis-menu-children">
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="newChat" id="menu_item_new_chat"><span class="prognosis-menu-text">New Chat</span></li>
                </ul>-->
              </li>
              <!--<li>
                <div class="prognosis-menu-title">${O} <span class="prognosis-menu-text">Smart Tasks</span></div>
                <ul class="prognosis-menu-children">
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="medicalCoding" id="menu_item_medical_coding"><span class="prognosis-menu-text">Medical Coding</span></li>
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="explain" id="menu_item_explain"><span class="prognosis-menu-text">Explain</span></li>
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="guideline" id="menu_item_guideline"><span class="prognosis-menu-text">Medical Guidelines</span></li>
                </ul>
              </li>-->
            </ul>
          </div>
        </div>
        <div class="prognosis__main-wrap" id="prognosis___main_wrapper">
          <div class="prognosis_main_module hidden_module prognosis__medical_coding_holder" id="prognosis_medical_coding_holder" is="medical-coding"></div>
          <div class="prognosis_main_module hidden_module prognosis__conslutation_holder" id="prognosis_consultation_holder" is="consultation-component" data-id="consultaton_comp_wrap"></div>
          <div class="prognosis_main_module hidden_module prognosis__explain_holder" id="prognosis_explain_holder" is="explain-component"></div>
          <div class="prognosis_main_module hidden_module prognosis__guideline_holder" id="prognosis_guideline_holder" is="guideline-component"></div>
        </div>
    </div>
    `}submitChat(){alert("clicked")}injectStyles(){const t=document.createElement("style");t.innerHTML=V.replace(/^\s+|\n/gm,""),document.head.appendChild(t)}maximizeChatbox(){this.widgetContainer.classList.contains("full-width")?this.widgetContainer.classList.remove("full-width"):this.widgetContainer.classList.add("full-width")}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden"),this.widgetContainer.appendChild(this.headerContainer),this.buttonContainer.classList.add("btn-main-hidden"),this.widgetContainer.appendChild(this.headerContainer),document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module")):(this.createWidgetContent(),this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"),this.buttonContainer.classList.remove("btn-main-hidden"))}}function nt(d){return new it(d)}window.IntPrognosisWidget=nt;
