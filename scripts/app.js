const scriptName = document.currentScript.src.split('/').pop()
console.log(`Executing ${scriptName}`)

function printExecution(name){
    console.clear()
    console.log(`Executing example function: ${name}()`)
}

function exercise1(){
    printExecution(exercise1.name)
    let nums = [3,4,5]
    console.log("Before adding elements: " + nums)
    nums = [0,1,2, ...nums, 6,7,8]
    console.log("After adding elements: " + nums)
}
function exercise2(){
    printExecution(exercise2.name)
    function filterFunction(nums){ 
        return nums.filter(n => n % 2) 
    } 
    let nums = [1,2,3,4,5]   
    console.log("Original array: " + nums)    
    let filteredNums = filterFunction(nums)   
    console.log("Filtered array: " + filteredNums)  
}
function exercise3(){
    printExecution(exercise3.name)
    function mapFunction(obj){ 
        newObj = obj.map(o => o.money * 2); 
        return newObj 
    }
    let objs = [ 
        { 
            name: "Isaac", 
            isCool: true, 
            money: 32 
        }, 
        { 
            name: "Ryan", 
            isCool: false, 
            money: 61, 
        }, 
        { 
            name: "Sully", 
            isCool: true, 
            money: 97 
        }, 
        {     
            name: "Mosh", 
            isCool: true, 
            money: 178321     
        }     
    ]     
    console.log("Pre-map:")    
    console.log(objs)   
    console.log("Post-map:")    
    console.log(mapFunction(objs)) 
}

function exercise4(){
    printExecution(exercise4.name)
    let objs = [ 
        { 
            name: "Alex", 
            isCool: false, 
            money: 78 
        }, 
        { 
            name: "Jordan", 
            isCool: true, 
            money: 45 
        }, 
        { 
            name: "Taylor", 
            isCool: false, 
            money: 112 
        }, 
        {     
            name: "Casey", 
            isCool: true, 
            money: 239     
        }     
    ];
    console.log("Array:")
    console.log(objs)
    let index = objs.find(obj => obj.name == "Taylor")
    console.log("First instance of the name property being \"Taylor\":")
    console.log(index)
}

function exercise5(){
    printExecution(exercise5.name)
    function removeDuplicates(obj){
        const set = new Set(obj)
        const newObj = Array.from(set)
        return newObj
    }
    const nums = [3,7,2,9,3,5,7,8,1,2,9,4,6,3]
    console.log("Original array: " + nums)
    const newNums = removeDuplicates(nums)
    console.log("New array: " + newNums)
}