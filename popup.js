const grabBtn = document.getElementById("parseBtn");
grabBtn.addEventListener("click",() => {    
    const url = "https://b24-me8og5.bitrix24.ru/rest/1/62uwb9j8f8vu4twx/crm.contact.add"
    const data = {
    "FIELDS": {
        "HONORIFIC": "HNR_RU_1",
        "NAME": "Иван",
        "SECOND_NAME": "Иванович",
        "LAST_NAME": "Иванов",
        "PHOTO": {
        "fileData": "**put_photo_data_here**"
        },
        "BIRTHDATE": "11.11.2001",
        "TYPE_ID": "PARTNER",
        "SOURCE_ID": "WEB",
        "SOURCE_DESCRIPTION": "*Дополнительно об источнике*",
        "POST": "Администратор",
        "COMMENTS": "**put_comment_here**",
        "OPENED": "Y",
        "EXPORT": "N",
        "ASSIGNED_BY_ID": 6,
        "COMPANY_ID": 12,
        "COMPANY_IDS": [
        12,
        13,
        15
        ],
        "UTM_SOURCE": "yandex",
        "UTM_MEDIUM": "CPC",
        "UTM_CAMPAIGN": "summer_sale",
        "UTM_CONTENT": "header_banner",
        "UTM_TERM": "discount",
        "PHONE": [
        {
            "VALUE": "+7333333555",
            "VALUE_TYPE": "WORK"
        },
        {
            "VALUE": "+35599888666",
            "VALUE_TYPE": "HOME"
        }
        ],
        "EMAIL": [
        {
            "VALUE": "ivanov@example.mailing",
            "VALUE_TYPE": "MAILING"
        },
        {
            "VALUE": "ivanov@example.work",
            "VALUE_TYPE": "WORK"
        }
        ],
        "UF_CRM_1720697698689": "Пример значения пользовательского поля с типом \"Строка\"",
        "PARENT_ID_1224": 12
    }
    };
    // const headers = {
    //     Authorization: "Bearer " + TOKEN
    // };

    fetch(url, { method: "POST", body: JSON.stringify(data) });
})