function sortTable(columnIndex) {
    let table = document.getElementById("myTable");
    let tbody = table.getElementsByTagName("tbody")[0];
    let rows = Array.prototype.slice.call(tbody.getElementsByTagName("tr"));
    let isNumeric = !isNaN(rows[0].getElementsByTagName("td")[columnIndex].textContent);
  
    rows.sort(function(a, b) {
        let aText = a.getElementsByTagName("td")[columnIndex].textContent;
        let bText = b.getElementsByTagName("td")[columnIndex].textContent;
  
        if (isNumeric) {
            return Number(aText) - Number(bText);
        } else {
            return aText.localeCompare(bText);
        }
    });
  
    // Re-attach sorted rows to the tbody
    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
  }