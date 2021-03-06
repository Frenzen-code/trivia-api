window.onload = sendApiRequest


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
  console.log(response)
  let data = await response.json()
  console.log(data);
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    document.getElementById('category').innerHTML = `Category: ${data.results[0].category}`
    document.getElementById('difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.getElementById('question').innerHTML = `Question: ${data.results[0].question}`
    document.getElementById('answer1').innerHTML = data.results[0].correct_answer
    document.getElementById('answer2').innerHTML = data.results[0].incorrect_answers[0]
    document.getElementById('answer3').innerHTML = data.results[0].incorrect_answers[1]
    document.getElementById('answer4').innerHTML = data.results[0].incorrect_answers[2]

}

let correctButton = document.getElementById('answer1')

correctButton.addEventListener("click",()=>{
    alert("Correct")
    sendApiRequest()
})
