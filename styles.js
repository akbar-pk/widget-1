export const styles = `
    .widget__container * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    } 
    .prognosis_logo_in_ai {
        display: flex;
        gap: 5px;
    }
    .hidden_module, .hide_page {
        display: none !important;
    }
    .prognosis_chat_home_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 123456789;
        background: #fff;
    }
    .prognosis_chat_home_wrapper .prognosis_chat_home_left {
        width: 50%;
        height: 100%;
        broder-right: 1px solid red;
    }
    .prognosis_chat_inner_left {
        padding: 25px;
        padding-left: 50px;
    }
    .prognosis_chat_heading {
        font-size: 20px;
    }
    .prognosis_chat_inner_left_header {
        margin-top: 50px;
    }
    .prognosis_e_chat {
        cursor: pointer;
    }
    .prognosis_chat_home_wrapper .prognosis_chat_home_right {
        width: 50%;
        height: 100%;
        background: url("https://plus.unsplash.com/premium_photo-1664910180803-04e917ea041e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") top center / cover no-repeat;
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
    .prognosis_chat_home_left_list_holder .prognosis_chat_question_item {
        margin-bottom: 15px;
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

    .prognosis__chat_bubble_out {
        border: 1px solid blue;
        border-radius: 20px;
        padding: 10px;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 1.5;
    }
    .prognosis__chat_bubble_user {
        margin-bottom: 15px;
        display: flex;
        justify-content: end;
        width: 100%;
    }
    .prognosis__chat_bubble_user_inner {
        max-width: 90%;
        border: 1px solid green;
        border-radius: 20px;
        padding: 10px;
    }
    .prognosis__consult_submitBtn {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        border: unset;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .prognosis__consult_wrap {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    .prognosis_text_input_wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 90%;
        max-width: 546px;
    }
    .prognosis__consult_inputbox {
        border-radius: 30px;
        border: 1px solid #ccc;
        padding: 15px;
        height: 50px;
        width: 84%;
        overflow: hidden;
        max-width: 546px;
    }
    .prognosis__consult_inputbox:focus-visible {
        border: 1px solid gray !important;
    }
    .prognosis__consult_submitBtn svg {
        width: 20px;
        hegiht: 20px;
    }
    .prognosis__conslutation_holder {
        height: 100%;
    }
    .prognosis__display_area {
        width: 100%;
        height: calc(100% - 200px);
        padding: 70px 15px 15px 15px;
        box-sizing: border-box;
        overflow: auto;
    }
    .prognosis__wrapper {
        display: flex;
        height: 100%;
        width: 100%;
        gap: 15px;
    }
    .prognosis__main-wrap {
        flex: 1;
        width: calc(100% - 296px)
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
    .prognosis-sidebar-menu-list > li {
        margin-bottom: 25px;
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
`;



