// Code your solution in this file!
function distanceFromHqInBlocks(num1){
    return Math.abs(num1 - 42);
    
}



function distanceFromHqInFeet(num2){
    function distanceFromHqInBlocks(num2){
        return Math.abs(num2 - 42);
    }

    const blocks = distanceFromHqInBlocks(num2)

    return blocks * 264


}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination){
    function distanceTravelledInFeet(start, destination){
        return Math.abs(destination - start) * 264;
    }

    const distanceTravelled = distanceTravelledInFeet(start, destination);
        if (distanceTravelled <= 400){
            return 0;
        } else if (distanceTravelled > 400 && distanceTravelled < 2000){
            return (distanceTravelled - 400) * 0.02;
        } else if (distanceTravelled > 2000 && distanceTravelled < 2500){
            return 25
        } else if (distanceTravelled > 2500){
            return 'cannot travel that far'
        }


        }

        // console.log(distanceTravelled)



