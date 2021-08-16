
imgData = aqPhotos
DescData = aqDescription
function handleClick(){
    console.log('button is working')
    let date = d3.select("#datetime").property('value');
    let imgFilteredData = imgData;
    let descFilteredData = DescData

    if (date) {
        imgFilteredData = imgFilteredData.filter(row => row.datetime === date);
        descFilteredData = descFilteredData.filter(row => row.datetime === date)
    }
    else{
        imgFilteredData = []
        descFilteredData = []
    };
   
    
    printImg(imgFilteredData)
    printDescription(descFilteredData)
}

var imgList = d3.select('.product')

function printImg(data){
console.log(data)
    imgList.html("")
    data.forEach((row)=> {
        imgList
        .append("img")
        .attr('src', row.img)
        .attr('class', 'black-border rounded')
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
    .attr('class', 'rounded black-border border-dark')
    document.getElementById('big').style.height = "590px"
    document.getElementById('big').style.width = "470px"
}

function printDescription(data){

    data.forEach((row) => {
    desc = d3.select('#description')
            .append('div')
            .attr('class', 'col-md-9 words')
            .append('p')
            .text(row.description)
        })
}



