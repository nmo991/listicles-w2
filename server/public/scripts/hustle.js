const renderHustle = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/hustles')
    const data = await response.json()
    
    const hustleContent = document.getElementById('container')
    
    let hustle
    hustle = data.find(hustle => hustle.id == requestedID)

    if (hustle) {
        const root = document.createElement('a')
        root.textContent = '← Back to List'
        root.href = '/'
        document.getElementById('back-button-div').append(root)

        const title = document.getElementById('title')
        title.remove()

        const name = document.createElement('h1')
        name.textContent = hustle.title

        const income = document.createElement('p')
        income.innerHTML = `<strong>Income: </strong>${hustle.incomerange}`

        const skillLevel= document.createElement('p')
        skillLevel.innerHTML = `<strong>Skill Level: </strong>${hustle.skilllevel}`
    
        const timeCommitment= document.createElement('p')
        timeCommitment.innerHTML = `<strong>Time Commitment: </strong>${hustle.timecommitment}`    
    
        const location= document.createElement('p')
        location.innerHTML = `<strong>Location: </strong>${hustle.locationtype}`
        
        const description= document.createElement('p')
        description.innerHTML = `<strong>Description: </strong>${hustle.description}`

        hustleContent.appendChild(name)
        hustleContent.appendChild(income)
        hustleContent.appendChild(skillLevel)
        hustleContent.appendChild(timeCommitment)
        hustleContent.appendChild(description)
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Hustles Available'
        hustleContent.appendChild(message)
    }   
}

renderHustle()
