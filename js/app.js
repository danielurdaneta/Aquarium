
// Import datasets
imgData = aqPhotos
DescData = aqDescription
inhabData = inhabitants

// Function created to filter all the dataset and activate the deployment functions
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
   
    if (imgFilteredData.length === 0) {
        handleError()
    }

    printImg(imgFilteredData)
    printDescription(descFilteredData)
    printInhabitants(inhabFilteredData)
}


// Function that print out all the aquarium images for that month
function printImg(data){

    if(data.length >= 1) {
    d3.select('#error').html('')}

    var imgList = d3.select('.product')
    imgList.html("")
    data.forEach((row)=> {
        imgList
        .append("img")
        .attr('src', row.img)
        .attr('id', 'imagen')
        .attr('class', 'black-border rounded')
        .attr('onClick', 'change(this)')
    })

    document.getElementById('imagen').click()
}

// Function that expand image size when selected 
function change(img){

    var src = img.getAttribute('src')


    bigImg = d3.select('#bigimg')
    bigImg.html('')

    bigImg
        .append('img')
        .attr('id', 'big')

    big = d3.select('#big')
        .attr('src', src )
        .attr('class', 'rounded black-border border-dark')
    document.getElementById('big').style.height = "590px"
    document.getElementById('big').style.width = "470px"
}


//Function that print the description of the selected month
function printDescription(data){
    monthTitle = d3.select('#news') 
    monthTitle.html("")

    monthDesc = d3.select('#description')
    monthDesc.html("")

    data.forEach((row) => {

    monthTitle 
        .append('h2')
        .attr('class', 'title')
        .text(row.title)

    monthDesc
        .append('p')
        .text(row.description)
    })

}

// Function that print out all the inhabitant's pictures and descriptions for that specific month
function printInhabitants(data) {
   
    d3.select('#plantRow').html('')
    d3.select('#animalRow').html('')

    data[0].inhabitants.forEach((row)=>{
        
        if (row.type === 'Plant') {
            tab = d3.select('#plantRow')
        }
        else {
            tab = d3.select('#animalRow')
        }


        tab
        .append('div')
        .attr('class', 'col-md-3 fixed-image')
            .append('img')
            .attr('src', row.img)
            .attr('class', 'black-border rounded')
            
        tab
        .append('div')
            .attr('class', 'col-md-3 words')
            .attr('id', 'inhabDesc')
        .append('p')
            
            .html(row.description)
    })

}

// Function that initialize all functions to have a layout of the first month when the page is loaded
function init(){

    let imgFilteredData = imgData
    let descFilteredData = DescData
    let inhabFilteredData = inhabData

    imgFilteredData = imgFilteredData.filter(row => row.datetime === '12/2020');
    descFilteredData = descFilteredData.filter(row => row.datetime === '12/2020')
    inhabFilteredData = inhabFilteredData.filter(row => row.datetime === '12/2020')

    printImg(imgFilteredData)
    printDescription(descFilteredData)
    printInhabitants(inhabFilteredData)

    document.getElementById('imagen').click()

}

// Function that erase everything and print an error when no photos were found.
function handleError(){

    d3.select('#news').html("")
    d3.select('.product').html('')
    d3.select('#description').html('')
    d3.select('#plantRow').html('')
    d3.select('#animalRow').html('')
    d3.select('#bigimg').html('')

    error = d3.select('#error')
    error.html('')
    error
        .attr('class', 'error')
        .append('p')
        .html('<h1> Sorry, no photos found :(  . Try a different date! </h1>')
}

// Initialize init function
init()

// Event listener
d3.selectAll("#filter-btn").on("click", handleClick);


