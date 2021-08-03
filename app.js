
imgData = My_array

function handleClick(){
    console.log('button is working')
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property('value');
    let filteredData = imgData;
    console.log(date)
    
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    else{
        filteredData = []
    };
   
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    printimg(filteredData)
    
}

var selector = d3.select('.product')

function printimg(data){
console.log(data)
    selector.html("")
    data.forEach((row)=> {
        selector
        .append("img")
        .attr('src', row.img)
        .attr('class', 'img-thumbnail')
        .attr('onClick', 'change(this)')
    })
    

}

d3.selectAll("#filter-btn").on("click", handleClick);

function change(img){
    var src = img.getAttribute('src')
    console.log(src)
    selector2 = d3.select('#big')
    selector2.attr('src', src )
    document.getElementById('big').style.height = "400px"
    document.getElementById('big').style.width = "500px"
}


