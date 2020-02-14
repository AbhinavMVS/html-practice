
var apiResponse;
fetch('https://reqres.in/api/users')
    .then(res => {
        return res.json()
    }).then(response => {
        console.log(response);
        apiResponse = response.data;
        bindData(apiResponse);
    })


function bindData(data) {
    var tableRows = data.map((value, index) => {
        return `
             <tr>
               <td>${value.id}</td>
               <td>${value.first_name} ${value.last_name}</td>
               <td>${value.email}</td>
               <td><img src=${value.avatar} height="35" width="35" /></td>
             </tr>
           `
    })
    document.getElementById('tableData').innerHTML = tableRows;
}


function search() {
    const inputValue = document.getElementById('input').value;
    const data = apiResponse.filter(value => {
        return value.first_name.toLowerCase().indexOf(inputValue) > -1 ||
            value.id.toString().indexOf(inputValue) > -1 ||
            value.email.toLowerCase().indexOf(inputValue) > -1;
    });
    bindData(data);
}

document.getElementById('input').addEventListener('keyup', () => {
   search();
})





