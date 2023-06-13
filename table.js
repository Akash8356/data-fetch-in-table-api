

fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then((data) => {
    // console.log(data);
    // console.log("data",data.json());
    return data.json();
}).then((ObjectData) => {
    console.log(typeof(ObjectData))
    console.log("ObjectData", ObjectData);
    // let data=ObjectData.data;
    let tabledata="";
    ObjectData.data.map((values) => {
        // console.log("values", values);
        console.log(values.office)
        
            tabledata+=`<tr>
            <td>${values.name}</td>
            <td>${values.office}</td>
            <td>${values.position}</td>
            <td>${values.salary}</td>
            </tr>`
    })
    document.getElementById('table_body').innerHTML=tabledata;

})