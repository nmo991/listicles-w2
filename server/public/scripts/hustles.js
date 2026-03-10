const renderHustles = async () => {
    
    const response = await fetch('/hustles')
    const data = await response.json()
    
    const mainContent = document.getElementById('container')

    if (data) {
        data.map(hustle => {
            const card = document.createElement('article')
            
            const title = document.createElement('h2')
            title.textContent = hustle.title

            const income = document.createElement('p')
            income.innerHTML = `<strong>Income: </strong>${hustle.incomeRange}`

            const skillLevel= document.createElement('p')
            skillLevel.innerHTML = `<strong>Skill Level: </strong>${hustle.skillLevel}`
            
            const link = document.createElement('a')
            link.textContent = 'View Details >'
            link.setAttribute('role', 'button')
            link.href = `/hustles/${hustle.id}`

            card.appendChild(title)
            card.appendChild(income)
            card.appendChild(skillLevel)
            card.appendChild(link)
            mainContent.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Hustles Available'
        mainContent.appendChild(message)
    }
}

const requestedPath = window.location.pathname.replace(/^\/+/, '')

if (requestedPath && requestedPath !== 'index.html') {
    window.location.href = '/404.html'
} else {
    renderHustles()
}
