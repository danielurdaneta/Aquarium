
imgData = aqPhotos
DescData = aqDescription
inhabData = inhabitants

function handleClick(){
    console.log('button is working')
    let date = d3.select("#datetime").property('value');
    let imgFilteredData = imgData;
    let descFilteredData = DescData
    let inhabFilteredData = inhabData

    if (date) {
        imgFilteredData = imgFilteredData.filter(row => row.datetime === date);
        descFilteredData = descFilteredData.filter(row => row.datetime === date)
        inhabFilteredData = inhabFilteredData.filter(row => row.datetime === date)
    }
    else{
        imgFilteredData = []
        descFilteredData = []
        inhabFilteredData = []
    };
   
    printImg(imgFilteredData)
    printDescription(descFilteredData)
    printInhabitants(inhabFilteredData)
}



function printImg(data){

    var imgList = d3.select('.product')
    imgList.html("")
    data.forEach((row)=> {
        imgList
        .append("img")
        .attr('src', row.img)
        .attr('class', 'black-border rounded')
        .attr('onClick', 'change(this)')
    })

}


function change(img){
    var src = img.getAttribute('src')
    console.log(src)
    selector2 = d3.select('#big')
    selector2
        .attr('src', src )
        .attr('class', 'rounded black-border border-dark')
    document.getElementById('big').style.height = "590px"
    document.getElementById('big').style.width = "470px"
}



function printDescription(data){

    monthDesc = d3.select('#description')

    monthDesc.html("")

    data.forEach((row) => {
        monthDesc
            .append('p')
            .text(row.description)
        })
}

function printInhabitants(data) {
   
    d3.select('#nav-plant').html('')
    d3.select('#nav-animal').html('')

    data[0].inhabitants.forEach((row)=>{
        
        if (row.type === 'Plant') {
            tab = d3.select('#nav-plant')
        }
        else {
            tab = d3.select('#nav-animal')
        }

        var tabContainer = tab.append('div')
                                .attr('class', 'container')

        var tabRow = tabContainer
                        .attr('class', 'row')


        tabRow
        .append('div')
        .attr('class', 'col-md-3 fixed-image')
            .append('img')
            .attr('src', row.img)
            .attr('class', 'black-border rounded')
            
        tabRow
        .append('div')
            .attr('class', 'col-md-6 words')
        .append('p')
            .html(row.description)
    })

}

d3.selectAll("#filter-btn").on("click", handleClick);


