var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["NumeroSerie"] = document.getElementById("NumeroSerie").value;
    formData["Descripcion"] = document.getElementById("Descripcion").value;
    formData["procesador"] = document.getElementById("procesador").value;
    formData["memoria"] = document.getElementById("memoria").value;
    formData["discoduro"] = document.getElementById("discoduro").value;
    formData["sistemaop"] = document.getElementById("sistemaop").value;
    formData["puertos"] = document.getElementById("puertos").value;
    formData["conectividad"] = document.getElementById("conectividad").value;
    formData["camara"] = document.getElementById("camara").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.NumeroSerie;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Descripcion;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.procesador;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.memoria;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.discoduro;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.sistemaop;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.puertos;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.conectividad;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.camara;
    
    cell9 = newRow.insertCell(9);
    cell9.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("NumeroSerie").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("procesador").value = "";
    document.getElementById("memoria").value = "";
    document.getElementById("discoduro").value = "";
    document.getElementById("sistemaop").value = "";
    document.getElementById("puertos").value = "";
    document.getElementById("conectividad").value = "";
    document.getElementById("camara").value = "";  
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("NumeroSerie").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Descripcion").value = selectedRow.cells[1].innerHTML;
    document.getElementById("procesador").value = selectedRow.cells[2].innerHTML;
    document.getElementById("memoria").value = selectedRow.cells[3].innerHTML;
    document.getElementById("discoduro").value = selectedRow.cells[4].innerHTML;
    document.getElementById("sistemaop").value = selectedRow.cells[5].innerHTML;
    document.getElementById("puertos").value = selectedRow.cells[6].innerHTML;
    document.getElementById("conectividad").value = selectedRow.cells[7].innerHTML;
    document.getElementById("camara").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.NumeroSerie;
    selectedRow.cells[1].innerHTML = formData.Descripcion;
    selectedRow.cells[2].innerHTML = formData.procesador;
    selectedRow.cells[3].innerHTML = formData.memoria;
    selectedRow.cells[4].innerHTML = formData.discoduro;
    selectedRow.cells[5].innerHTML = formData.sistemaop;
    selectedRow.cells[6].innerHTML = formData.puertos;
    selectedRow.cells[7].innerHTML = formData.conectividad;
    selectedRow.cells[8].innerHTML = formData.camara;
}

function onDelete(td) {
    if (confirm('Desea eliminar lo insertado?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("NumeroSerie").value == "") {
        isValid = false;
        document.getElementById("NumeroSerieValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NumeroSerieValidationError").classList.contains("hide"))
            document.getElementById("NumeroSerieValidationError").classList.add("hide");
    }
    return isValid;
}