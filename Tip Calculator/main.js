
const btn = document.getElementById("btn");

btn.addEventListener("click" , TipCalculator )


function TipCalculator() {
    
        let Bill_Amount = document.getElementById("billamount").value
        let Tip_Percentage = document.getElementById("tippercentage").value
    
        console.log(`Bill_Amount`, Bill_Amount)
        console.log(`Tip_Percentage`, Tip_Percentage)
    
    
        const Tip_Amount = document.getElementById("tipamount").value = Bill_Amount /100 * Tip_Percentage;


        // console.log(`Tip_Amount`, Tip_Amount)
    
    
        const Total = document.getElementById("totalamount").value = parseFloat(Bill_Amount) + parseFloat(Tip_Amount)
    
        
        // document.getElementById("totalamount").innerHTML = Total
        
    
        // console.log(`Total_Bill`, Total_Bill)
    }
