
imgData = My_array

function handleClick(){
    console.log('button is working')
    let date = d3.select("#datetime").property('value');
    let filteredData = imgData;
    console.log(date)

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    else{
        filteredData = []
    };
   
    printimg(filteredData)
    
}

var imgList = d3.select('.product')

function printimg(data){
console.log(data)
    imgList.html("")
    data.forEach((row)=> {
        imgList
        .append("img")
        .attr('src', row.img)
        .attr('class', 'img-thumbnail')
        .attr('onClick', 'change(this)')
    })


   
    

    data.forEach((row)=>{
        
        if (row.type === 'plant') {
            tab = d3.select('#nav-plant')
        }
        else {
            tab = d3.select('#nav-animal')
        }

        var tabContainer = tab.append('div')
                                .attr('class', 'container')

        var tabRow = tabContainer
                        .attr('class', 'row fixed-image')


        tabRow
        .append('div')
        .attr('class', 'col-md-2')
            .append('img')
            .attr('src', row.img)
            
        tabRow
        .append('div')
            .attr('class', 'col-md-10 words')
        .append('p')
            .text(row.txt)
    })
}

d3.selectAll("#filter-btn").on("click", handleClick);

function change(img){
    var src = img.getAttribute('src')
    console.log(src)
    selector2 = d3.select('#big')
    selector2
    .attr('src', src )
    .attr('class', 'rounded')
    document.getElementById('big').style.height = "400px"
    document.getElementById('big').style.width = "500px"
}



