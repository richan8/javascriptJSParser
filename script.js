function loadSheet(spreadsheetdata) {
    console.log('Spreadsheet Loaded\n');
    tableData=[];
    data=spreadsheetdata['feed']['entry'];
    console.log(data)
    data.forEach(function(x){
        y=x['content']['$t'].split(',');
        newRow=[]
        y.forEach(function(z){
            try{
                z=z.split(':')[1].trim();
                if(z==''){
                    newRow.push(' ');
                }
                else(newRow.push(z));
            }
            catch{
                console.log('There was an error trying to parse the JSON');
            }
        })
        tableData.push(newRow);
    });
    console.log('Table Parsed');
    console.log(tableData);
    createTable(tableData)
}

function createTable(tableData,withHeader=true){
    flag=true;
    tableHtml="";
    tableData.forEach(function(row){
        if(withHeader && flag){
            htmlStr="<tr>";
            row.forEach(function(cell){
                //console.log(cell)
                htmlStr+="<th>"+cell.toString()+"</th>"
            });
            htmlStr+="</tr>";
            tableHtml+=htmlStr;
            flag=false;
        }
        else{
            htmlStr="<tr>";
            row.forEach(function(cell){
                console.log(cell)
                htmlStr+="<td>"+cell.toString()+"</td>"
            });
            htmlStr+="</tr>";
            tableHtml+=htmlStr;
        }
    });
    $('.table').append(tableHtml);
    //console.log(htmlStr)
}