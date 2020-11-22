const submit = async () => {

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const country = document.getElementById("country").value
    const state = document.getElementById("state").value
    const city = document.getElementById("city").value

    const socialProfiles = [...document.getElementById("socialList").children].map(cardRow => {
        return {
            "name": cardRow.firstElementChild.value,
            "value": `[${cardRow.lastElementChild.value}](${cardRow.lastElementChild.value})`
        }
    }).filter(profile => profile.name !== "" && profile.value !== "[]()")

    const departments = document.getElementById("department").value
    const positions = document.getElementById("position").value

    const passionAndSkills = document.getElementById("passion-and-skills").value
    const whyAnorcle = document.getElementById("why-anorcle").value
    const investmentTime = document.getElementById("investment-time").value
    const schedule = document.getElementById("schedule").value

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('https://was5thl3zg.execute-api.ap-south-1.amazonaws.com/default/joining-application', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, country, state, city, socialProfiles, departments, positions, passionAndSkills, whyAnorcle, investmentTime, schedule }),
            })
            const payload = JSON.parse(await response.text())
            if (payload.code === 200) {
                resolve(payload.message)
            } else {
                reject(payload.message)
            }
        } catch (error) {
            reject(error)
        }
    })
}