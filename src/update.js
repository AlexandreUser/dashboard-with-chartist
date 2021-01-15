storageData = {
    totalSales:0,
    allPrice:0

}
function buyFruits(){
    let fruitPrice = [1.5,1.25,2,2.2,3.25,2.5]
    
    let fruitStorage = fruits.map((fruit,index)=>{ return   document.getElementById(fruit).value*fruitPrice[index]})

    let fruitCounter = fruits.map((fruit)=>{ return   document.getElementById(fruit).value})

    storageData.allPrice+= fruitStorage.reduce((a, b) => a + b, 0)
    console.log(storageData.allPrice)
    storageData.totalSales += 1
    document.getElementById("lastSales").innerText = (fruitStorage.reduce((a, b) => a + b, 0)).toFixed(2).toString().split(".").join(",")
    document.getElementById("totalSales").innerText = storageData.totalSales
    document.getElementById("allPrice").innerText = "$"+storageData.allPrice.toFixed(2).toString().split(".").join(",")
    document.getElementById("avgSales").innerText = "$"+(storageData.allPrice/storageData.totalSales).toFixed(2).toString().split(".").join(",")
    data.series[0].data = data.series[0].data.map((serie,index)=>{
        return serie+=fruitStorage[index]
    })


     fruits.map((fruit)=>{ document.getElementById(fruit).value = ""})

    chart.update(data)
}